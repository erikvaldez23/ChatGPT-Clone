# ChatGPT Clone

This project is a ChatGPT clone that provides a chatbot interface using the OpenAI API. It includes a React-based frontend and an Express.js backend.

---

## **Getting Started**

Follow these instructions to set up and run the project locally.

### Prerequisites
Make sure you have the following tools installed on your machine:
- **Node.js** (v16+)
- **npm** (Node Package Manager)

---

## **1. Clone the Repository**

First, clone the repository to your local machine:

```bash
git clone https://github.com/erikvaldez23/ChatGPT-Clone.git
cd ChatGPT-Clone
```

## **2. Backend Setup**
```bash
cd backend
```

Create a .env file to store the OpenAI API Key:
OPENAI_API_KEY=custom_api_key

Install backend dependencies:
```bash
npm install
```

Start the backend server:
```bash
npm start
```

## **3. Frontend Setup**
Start in the projects root directory 

Install frontend dependencies
```bash
npm install
```

Start react dev server:
```bash
npm start
```

ChatGPT-Clone/
│
├── backend/           # Express.js backend
│   ├── server.js      # Backend server
│   ├── .env           # Environment variables (not tracked in Git)
│   └── package.json   # Backend dependencies
│
├── src/               # React frontend
│   ├── components/    # React components
│   ├── App.js         # Main App component
│   └── index.js       # React entry point
│
├── .gitignore         # Ignored files
├── README.md          # Project documentation
└── package.json       # Frontend dependencies
