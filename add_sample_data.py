# add_sample_data.py
from google.cloud import firestore

def add_sample_data():
    db = firestore.Client()

    cases = [
        {"summary": "Dispute over property ownership resolved in favor of plaintiff", "outcome_label": "civil"},
        {"summary": "Tenant filed case against landlord for illegal eviction", "outcome_label": "civil"},
        {"summary": "Murder trial against the accused with jury decision", "outcome_label": "criminal"},
        {"summary": "Theft case filed against two suspects", "outcome_label": "criminal"},
        {"summary": "Company sued for breach of contract by supplier", "outcome_label": "civil"},
        {"summary": "Court ruled in favor of employee in workplace harassment case", "outcome_label": "won"},
        {"summary": "Defendant lost the appeal in fraud case", "outcome_label": "lost"},
        {"summary": "Plaintiff won compensation in medical negligence case", "outcome_label": "won"},
        {"summary": "Court dismissed case due to lack of evidence", "outcome_label": "lost"},
        {"summary": "Government filed criminal charges for tax evasion", "outcome_label": "criminal"}
    ]

    for case in cases:
        db.collection("legal-documents").add(case)

    print(" Sample data added successfully to Firestore!")

if __name__ == "__main__":
    add_sample_data()
