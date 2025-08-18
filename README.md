# 📄 Legal Guardian AI: A Proactive AI Legal Assistant and Financial Guardian

Legal Guardian AI is a revolutionary hackathon solution designed to **empower individuals and small businesses** by demystifying complex legal documents. The platform leverages **Google's advanced generative AI** to provide clear, actionable insights and proactive protection against legal and financial risks.

Our backend is built with **FastAPI**, serving as a robust and scalable foundation that integrates multiple **Google Cloud services** to deliver an intelligent, secure, and user-friendly experience.

---

## ✨ Key Features

- **Intelligent Document Processing**  
  Uses **Google Document AI** for parsing legal documents and **Gemini AI** for generating simplified summaries and analyses.

- **Predictive "What-If" Simulations**  
  Users can ask hypothetical questions about a contract. The AI provides predictive analysis of potential consequences based on clauses and a personalized user profile.

- **Secure Data Storage**  
  Seamless integration with **Firestore** to securely store document summaries, enabling features like a crowd-sourced legal risk index.

- **Robust API Endpoints**  
  A complete suite of RESTful APIs for frontend integration with the backend.

---

## 🚀 Getting Started (For Developers)

Follow the steps below to set up the development environment.

### 1. Clone the Repository
```bash
git clone https://github.com/pujareddy2/legal-guardian-ai-hackathon.git
cd legal-guardian-ai-hackathon
```

### 2. Create a Development Branch
```bash
git checkout -b <your-feature-name>
```

### 3. Set Up Python Virtual Environment
```bash
python -m venv venv
```
Activate the environment:
- **Windows (PowerShell):**
  ```bash
  .\venv\Scripts\Activate.ps1
  ```
- **Linux/Mac:**
  ```bash
  source venv/bin/activate
  ```

### 4. Install Dependencies
```bash
pip install -r requirements.txt
```

### 5. Configure Your Credentials
Create a `.env` file in the project root directory and add your credentials:
```env
GOOGLE_API_KEY="YOUR_AI_STUDIO_API_KEY"
GOOGLE_APPLICATION_CREDENTIALS="C:\path\to\your\credentials-file.json"
```

### 6. Run the Development Server
```bash
uvicorn main:app --reload --env-file .env
```
The server will be available at:  
👉 `http://127.0.0.1:8000`

Interactive API documentation:  
👉 `http://127.0.0.1:8000/docs`

---

## 📌 API Reference

### **GET /**
- **Description:** Welcome message to confirm the server is running.

### **GET /status**
- **Description:** Checks if the API key and other configurations are correctly set.

### **POST /analyze-document**
- **Description:** Upload a file (`.txt` or `.pdf`) to receive an AI-generated summary.

### **POST /what-if-simulation**
- **Description:** Send a JSON payload with document text and a user's question for predictive analysis.

### **POST /store-document**
- **Description:** Upload a file to get an AI summary and store the data in Firestore.

### **GET /get-all-documents**
- **Description:** Retrieves a list of all stored document summaries from Firestore.

---

## 🛠 Tech Stack
- **Backend:** FastAPI (Python)
- **AI Models:** Google Generative AI (Gemini), Google Document AI
- **Database:** Google Firestore
- **Hosting/Infra:** Google Cloud Platform

---

## 👥 Contribution Guidelines
1. Fork the repo and create a new feature branch.
2. Commit your changes with clear messages.
3. Push the branch and create a Pull Request.

---

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 💡 Acknowledgements
- **Google Cloud AI** for providing advanced AI capabilities.
- **FastAPI** for making backend development fast and efficient.

