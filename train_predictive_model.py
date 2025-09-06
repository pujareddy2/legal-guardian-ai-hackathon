# train_predictive_model.py
import pickle
from google.cloud import firestore
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

def train_and_save_model():
    # Initialize Firestore client
    db = firestore.Client()

    # Fetch documents and their outcome labels from Firestore
    docs = db.collection('legal-documents').stream()

    texts = []
    outcomes = []

    for doc in docs:
        data = doc.to_dict()
        summary = data.get("summary")
        outcome_label = data.get("outcome_label")  # Assuming you have labeled data

        if summary and outcome_label is not None:
            texts.append(summary)
            outcomes.append(outcome_label)

    # Simple check for data availability
    if not texts or not outcomes:
        print("No data found for training. Please add labeled data to Firestore.")
        return

    # Vectorize text data
    vectorizer = TfidfVectorizer()
    X = vectorizer.fit_transform(texts)

    # Train logistic regression model
    model = LogisticRegression(max_iter=1000)
    model.fit(X, outcomes)

    # Save vectorizer and model to disk
    with open("legal_outcome_vectorizer.pkl", "wb") as f_vec:
        pickle.dump(vectorizer, f_vec)
    with open("legal_outcome_model.pkl", "wb") as f_mod:
        pickle.dump(model, f_mod)

    print("Training complete. Model and vectorizer saved.")

if __name__ == "__main__":
    train_and_save_model()
