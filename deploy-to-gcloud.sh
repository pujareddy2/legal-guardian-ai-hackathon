#!/bin/bash

# Set Google Cloud project ID
PROJECT_ID="your-project-id"

# Authenticate with Google Cloud
gcloud auth login

# Set the active project
gcloud config set project $PROJECT_ID

# Deploy your application (modify below command as per your specific use case)
gcloud app deploy --quiet

# Optional: print deployment status
echo "Deployment to Google Cloud completed."