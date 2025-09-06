<<<<<<< HEAD
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

=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 4dacfc5 (Initial commit)
---

# 🤖 AI/ML Ops Features & Implementation

This section provides a detailed overview of the **AI/ML operations and backend setup** for Legal Guardian AI, including environment setup, model training, Firestore integration, predictive endpoints, and human-in-the-loop feedback.

---

## 1. Environment Setup
- Created a **Python virtual environment** (`venv`) and installed dependencies from `requirements.txt`.
- Configured `.env` with Google Cloud credentials:
```env
GOOGLE_APPLICATION_CREDENTIALS="path/to/credentials.json"
GCP_PROJECT="your-gcp-project-id"

---

## 2. Firestore Setup
- Connected the application to **Google Firestore**.
- Added sample documents to the `legal-documents` collection (case summaries, outcomes).
- Verified documents and their IDs using:
```bash
python list_firestore_docs.py

---

## 3. Predictive Legal Outcome Model
- Trained and saved ML models:
  - `legal_outcome_model.pkl`
  - `legal_outcome_vectorizer.pkl`
- Integrated models with FastAPI (`main.py`) to enable endpoint predictions.
- Tested `/predict-outcome` endpoint → returned predictions such as:
  - `"civil"`
  - `"criminal"`
  - `"won"`
  - `"lost"`

---

## 4. Risk Index Analysis
- Implemented `/risk-index` endpoint in `legal_risk_index.py`.
- Verified via **Swagger UI**:
  - Returned total document count.
  - `risk_index` currently empty (sample data lacked risky contract clauses).
- **Next step:** Add contract-like text to Firestore to see actual risk percentages.

---

## 5. Human-in-the-Loop Feedback
- Implemented `/feedback` endpoint in `human_in_loop.py`.
- Successfully posted feedback using PowerShell:
```powershell
Invoke-RestMethod -Uri http://127.0.0.1:8000/feedback -Method POST -Body '{"doc_id": "123", "feedback": "Useful summary"}'

---

## 6. API Testing
- Ran the server:
```bash
uvicorn main:app --reload --env-file .env
- Verified Firestore for stored documents and feedback.

---

## 7. Working Files in Repository

| File | Purpose |
|------|---------|
| `add_sample_data.py` | Inserts initial Firestore documents |
| `train_predictive_model.py` | Trains and saves ML models |
| `predictive_legal_outcome_model.py` | Prediction logic for outcomes |
| `legal_risk_index.py` | Computes clause-based risk index |
| `human_in_loop.py` | Handles human feedback |
| `check_feedback.py` | Verifies feedback entries in Firestore |
| `list_firestore_docs.py` | Lists all Firestore documents |
| `verify_firestore_data.py` | Checks inserted data correctness |
| `main.py` | FastAPI entry point with all routes |
| `contract.txt` | Sample contract for testing risk clauses |

---

## 8. Key Implementations
- **ML model integration:** Trained, saved, and integrated with FastAPI.
- **Outcome prediction:** Fully functional endpoint.
- **Risk Index:** Endpoint live; needs realistic contract data.
- **Human feedback loop:** Tested and stored in Firestore.
- **Scripts for Firestore:** Insert, verify, and fetch documents and feedback.

