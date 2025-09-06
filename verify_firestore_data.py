# verify_firestore_data.py
from google.cloud import firestore

def verify_data():
    db = firestore.Client()

    docs = db.collection("legal-documents").stream()

    print(" Documents in 'legal-documents':")
    count = 0
    for doc in docs:
        print(f"ID: {doc.id} → {doc.to_dict()}")
        count += 1

    if count == 0:
        print(" No documents found. Did you run add_sample_data.py?")
    else:
        print(f"\n Total documents found: {count}")

if __name__ == "__main__":
    verify_data()
