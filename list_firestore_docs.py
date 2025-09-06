from google.cloud import firestore

# Initialize Firestore client
db = firestore.Client()

# Fetch all documents in "legal-documents"
docs = db.collection("legal-documents").stream()

print("Document IDs in legal-documents:")
for doc in docs:
    print(f"ID: {doc.id}, Data: {doc.to_dict()}")
