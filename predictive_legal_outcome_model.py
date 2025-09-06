# predictive_legal_outcome_model.py
import pandas as pd
from google.cloud import firestore
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
import pickle

def train_predictive_model():
    db = firestore.Client()
    docs = db.collection('legal-documents').stream()

    texts, outcomes = [], []
    for doc in docs:
        data = doc.to_dict()
        texts.append(data.get("summary"))
        outcomes.append(data.get("outcome_label", 0))  # Binary or multiclass

    vectorizer = TfidfVectorizer()
    X = vectorizer.fit_transform(texts)
    model = LogisticRegression()
    model.fit(X, outcomes)

    with open("legal_outcome_vectorizer.pkl", "wb") as fv, open("legal_outcome_model.pkl", "wb") as fm:
        pickle.dump(vectorizer, fv)
        pickle.dump(model, fm)

    print("Model trained and saved!")
from fastapi import APIRouter
import pickle

router = APIRouter()

with open("legal_outcome_vectorizer.pkl", "rb") as fv, open("legal_outcome_model.pkl", "rb") as fm:
    vectorizer = pickle.load(fv)
    model = pickle.load(fm)

@router.post("/predict-legal-outcome")
def predict_legal_outcome(request: dict):
    summary = request.get("summary")
    X = vectorizer.transform([summary])
    pred = model.predict(X)[0]
    return {"status": "SUCCESS", "predicted_outcome": str(pred)}
