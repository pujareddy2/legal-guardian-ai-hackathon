from google.cloud import firestore

def fetch_feedback():
    # Initialize Firestore client
    db = firestore.Client()

    # Fetch all feedback documents
    feedbacks = db.collection("feedback").stream()

    print("Feedback entries in Firestore:\n")
    for fb in feedbacks:
        print(f"ID: {fb.id}, Data: {fb.to_dict()}")

if __name__ == "__main__":
    fetch_feedback()
