# 🤖 AI-CHATBOT-DEVELOPMENT
An intelligent AI-powered chatbot built using React.js, Node.js, and Google Gemini API that enables users to upload structured datasets (CSV/Excel), process them through an NLP pipeline, and ask questions in natural language.

The chatbot extracts meaningful information from uploaded files, constructs context-aware prompts, and leverages Google's Gemini models to generate accurate and conversational responses.<br>

[Watch the video of our working AI Chatbot on YouTube](https://youtu.be/USo4q3HjH9w)<br>

## 📚 Table of Contents
-[About](#About)
2. Features
3. Technology Stack
4. Project Structure
5. Frontend Architecture
6. Backend Architecture
7. NLP Processing Pipeline
8. End-to-End AI Workflow
9. API Documentation
10. Google Gemini API Endpoint
11. Conversation History Module
12. Technical Report
15. Installation
16. Environment Variables
17. Running the Project
18. Demo Video
19. Future Improvements
20. Contributing
21. License
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
## 🎨 Frontend Architecture
User<br>
 │<br>
 ▼<br>
React Components<br>
 │<br>
 ├── Upload Component<br>
 ├── Chat Window<br>
 ├── Message List<br>
 ├── Input Box<br>
 └── Response Display<br>
 │<br>
 ▼<br>
Axios Service<br>
 │<br>
 ▼<br>
Backend REST API<br>
## ⚙️ Backend Architecture
Express Server<br>
      │<br>
      ▼<br>
    Routes<br>
      │<br>
      ▼<br>
Services<br>
 │<br>
 ├── Upload Service<br>
 ├── CSV Parser<br>
 ├── Excel Parser<br>
 ├── NLP Pipeline<br>
 ├── Prompt Generator<br>
 └── Gemini API Service<br>
      │<br>
      ▼<br>
Google Gemini API<br>
## 🧠 NLP Processing Pipeline
CSV / Excel Upload<br>
        │<br>
        ▼<br>
File Validation<br>
        │<br>
        ▼<br>
  Extract Data<br>
        │<br>
        ▼<br>
Handle Missing Values<br>
        │<br>
        ▼<br>
  Text Cleaning<br>
        │<br>
        ▼<br>
  Tokenization<br>
        │<br>
        ▼<br>
  Normalization<br>
        │<br>
        ▼<br>
Context Extraction<br>
        │<br>
        ▼<br>
Prompt Engineering<br>
        │<br>
        ▼<br>
  Gemini API<br>
        │<br>
        ▼<br>
Generated Response<br>
## 🤖 End-to-End AI Workflow
User Uploads CSV / Excel<br>
        │<br>
        ▼<br>
Frontend Upload Component<br>
        │<br>
        ▼<br>
POST /upload<br>
        │<br>
        ▼<br>
Backend Receives File<br>
        │<br>
        ▼<br>
CSV / Excel Parsing<br>
        │<br>
        ▼<br>
Dataset Converted into JSON<br>
        │<br>
        ▼<br>
NLP Processing<br>
        │<br>
        ▼<br>
Context Generation<br>
        │<br>
        ▼<br>
Store Parsed Context<br>
        │<br>
        ▼<br>
User Asks Question<br>
        │<br>
        ▼<br>
   POST /chat<br>
        │<br>
        ▼,br>
Retrieve Stored Context<br>
        │<br>
        ▼<br>
Prompt Generation<br>
        │<br>
        ▼<br>
   Gemini API<br>
        │<br>
        ▼<br>
AI Response<br>
        │<br>
        ▼<br>
Store Conversation<br>
        │<br>
        ▼<br>
Display Response<br>
## 🔌 API Documentation

| Method | Endpoint  | Description              |<br>
| ------ | --------- | ------------------------ |<br>
| POST   | `/upload` | Upload CSV or Excel file |<br>

### Request
Multipart Form Data<br>
file : sales.xlsx<br>

### Response
{<br>
  "message": "File uploaded successfully"<br>
}<br>

### Chat API
| Method | Endpoint | Description                       |<br>
| ------ | -------- | --------------------------------- |<br>
| POST   | `/chat`  | Ask questions about uploaded data |<br>

### Request
{<br>
  "question":"What is the highest revenue?"<br>
}<br>

### Response
{<br>
  "answer":"The highest revenue is ₹4,52,000 generated by Product A."<br>
}<br>
## 🌐 Google Gemini API

### Workflow
Parsed Dataset<br>
      │<br>
      ▼<br>
Prompt Engineering<br>
      │<br>
      ▼<br>
Gemini API<br>
      │<br>
      ▼<br>
AI Generated Answer<br>

## 💬 Conversation History Module
The chatbot maintains a conversation history to provide contextual and coherent responses throughout a chat session.<br>

### Features
Stores previous user questions<br>
Stores AI responses<br>
Preserves conversation context<br>
Improves follow-up question accuracy<br>
Can be extended for persistent database storage<br>

### Workflow
User Question<br>
      │<br>
      ▼<br>
Conversation History<br>
      │<br>
      ▼<br>
Append Current Question<br>
      │<br>
      ▼<br>
Generate Prompt<br>
      │<br>
      ▼<br>
Gemini API<br>
      │<br>
      ▼<br>
Store AI Response<br>
      │<br>
      ▼<br>
Return Updated Chat<br>

## 📑 Technical Report
### Objective
Develop an AI-powered chatbot capable of answering natural language queries over structured spreadsheet data.<br>
### System Components
#### Frontend
React.js<br>
Upload interface<br>
Chat interface<br>
API communication<br>
#### Backend
Express Server<br>
File Upload<br>
CSV Parser<br>
Excel Parser<br>
NLP Service<br>
Gemini API Service<br>
#### NLP Processing
Data Cleaning<br>
Tokenization<br>
Context Extraction<br>
Prompt Construction<br>
#### AI Layer
Google Gemini API<br>
#### Output
Natural language responses generated from uploaded datasets.<br>

## ⚙️ Environment Variables
PORT=5000<br>

GEMINI_API_KEY=your_api_key<br>

MODEL_NAME=gemini-2.5-flash<br>

## ▶️ Running the Project
### Backend
cd backend<br>
npm install<br>
npm run dev<br>
### Frontend
cd frontend<br>
npm install<br>
npm run dev<br>

## 🤝 Contributing
1.Fork the repository.<br>

2.Create a feature branch.<br>
git checkout -b feature/your-feature<br>

3.Commit your changes.<br>
git commit -m "Add feature"<br>

4.Push your branch.<br>
git push origin feature/your-feature<br>

5.Create a Pull Request.



                      
