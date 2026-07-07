# 🤖 AI-CHATBOT-DEVELOPMENT
An intelligent AI-powered chatbot built using React.js, Node.js, and Google Gemini API that enables users to upload structured datasets (CSV/Excel), process them through an NLP pipeline, and ask questions in natural language.

The chatbot extracts meaningful information from uploaded files, constructs context-aware prompts, and leverages Google's Gemini models to generate accurate and conversational responses.
## 📚 Table of Contents
1. About
2. Features
3. Technology Stack
4. Project Structure
5. System Architecture
6. Frontend Architecture
7. Backend Architecture
8. NLP Processing Pipeline
9. End-to-End AI Workflow
10. API Documentation
11. Google Gemini API Endpoint
12. Conversation History Module
13. Technical Report
14. Installation
15. Environment Variables
16. Running the Project
17. Demo Video
18. Future Improvements
19. Contributing
20. License
## 🚀 About
This project is designed to simplify interaction with structured datasets.

Instead of manually searching through spreadsheets, users simply upload a CSV or Excel file and ask questions like

What is the highest salary?
Which product generated maximum revenue?
Show all customers from Mumbai.
Calculate average sales.

The chatbot processes uploaded files using an NLP pipeline before sending relevant context to Google's Gemini API for intelligent response generation.
## ✨ Features
Upload CSV datasets
Upload Excel (.xlsx/.xls) datasets
AI-powered conversational chatbot
NLP preprocessing pipeline
Automatic context extraction
Google Gemini integration
Conversation history
File upload validation
Responsive React interface
RESTful backend APIs
Modular project architecture
## 💻 Technology Stack
<b>Frontend</b><br>
React.js<br>
Vite<br>
Axios<br>
CSS / Tailwind<br>
<b>Backend</b><br>
Node.js<br>
Express.js<br>
Multer<br>
dotenv<br>
cors<br>
<b>File Processing</b><br>
csv-parser<br>
xlsx<br>
<b>NLP Pipeline</b><br>
Text Cleaning<br>
Tokenization<br>
Normalization<br>
Context Extraction<br>
Prompt Engineering<br>
<b>AI Model<b><br>
Google Gemini API<br>
## 📁 Project Structure
AI-Chatbot/<br>
│<br>
├── backend/<br>
│   │<br>
│   ├── node_modules/<br>
│   ├── routes/<br>
│   ├── services/<br>
│   ├── uploads/<br>
│   │<br>
│   ├── .env<br>
│   ├── .env.example<br>
│   ├── .gitignore<br>
│   ├── package.json<br>
│   ├── package-lock.json<br>
│   └── server.js<br>
│<br>
├── frontend/<br>
│   │<br>
│   ├── public/<br>
│   ├── src/<br>
│   │<br>
│   ├── .gitignore<br>
│   ├── eslint.config.js<br>
│   ├── index.html<br>
│   ├── package.json<br>
│   └── vite.config.js<br>
│<br>
└── README.md<br>
## 🏗️ Overall System Architecture
                             +----------------------+<br>
                             |        User          |<br>
                             +----------+-----------+<br>
                                        |<br>
                         Upload CSV / Excel & Ask Query<br>
                                        |<br>
                                        ▼<br>
                       +-------------------------------+<br>
                       |       React Frontend          |<br>
                       | Upload + Chat Interface       |<br>
                       +---------------+---------------+<br>
                                       |<br>
                                  REST API<br>
                                       |<br>
                                       ▼<br>
                     +-----------------------------------+<br>
                     |      Node.js Express Backend      |<br>
                     +---------------+-------------------+<br>
                                     |<br>
         +---------------------------+---------------------------+<br>
         |                           |                           |<br>
         ▼                           ▼                           ▼<br>
 File Upload Service        NLP Processing Service       Conversation History<br>
 (CSV/Excel Parser)        Cleaning & Context            Chat Session Storage<br>
         |                           |<br>
         +-------------+-------------+<br>
                       |<br>
                       ▼<br>
             Prompt Construction Engine<br>
                       |<br>
                       ▼<br>
             Google Gemini API Endpoint<br>
                       |<br>
                       ▼<br>
              AI Generated Response<br>
                       |<br>
                       ▼<br>
              React Chat Interface<br>


