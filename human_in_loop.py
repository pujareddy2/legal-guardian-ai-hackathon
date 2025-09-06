from fastapi import APIRouter
from google.cloud import firestore

router = APIRouter()

@router.post("/feedback")
def submit_feedback(request: dict):
    doc_id = request.get("document_id")
    feedback = request.get("feedback")
    db = firestore.Client()
    fb_ref = db.collection("feedback").document()
    fb_ref.set({"document_id": doc_id, "feedback": feedback})
    return {"status": "SUCCESS", "message": "Feedback submitted!"}
