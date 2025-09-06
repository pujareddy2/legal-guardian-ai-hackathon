# legal_risk_index.py
from fastapi import APIRouter
from google.cloud import firestore
from collections import Counter
import re

router = APIRouter()

@router.get("/risk-index")
def get_legal_risk_index():
    db = firestore.Client()  # use your credentials logic if needed
    docs = db.collection('legal-documents').stream()
    clause_counter = Counter()
    total_docs = 0

    for doc in docs:
        summary = doc.to_dict().get("summary", "")
        clauses = re.findall(r"(clause\s\d+[\s\S]+?\.)(?:\s|\n|$)", summary, re.IGNORECASE)
        clause_counter.update(clauses)
        total_docs += 1

    risk_index = [{"clause": clause, "count": cnt, "percentage": cnt/total_docs*100} 
                   for clause, cnt in clause_counter.items()]

    return {"status": "SUCCESS", "total_docs": total_docs, "risk_index": risk_index}
