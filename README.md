# 🚀 Task Manager Web App with AI Integration

A full-stack web application that allows users to manage daily tasks efficiently with a clean and modern UI. The project also includes an AI-based Resume Analyzer that compares resume content with job descriptions using Natural Language Processing (NLP).

---

## 📌 Project Overview

This project demonstrates end-to-end development using frontend, backend, and AI technologies. Users can add, view, and delete tasks in real-time, while the AI module provides intelligent resume-job matching functionality.

---

## 🔥 Features

* ✅ Add and manage tasks
* ❌ Delete tasks instantly
* 🔄 Real-time UI updates
* 🎨 Clean and modern user interface
* 🤖 AI Resume Analyzer (TF-IDF based similarity)
* 🌐 REST API integration
* 📦 Full-stack architecture

---

## 🧠 Tech Stack

### 💻 Frontend

* HTML
* CSS
* JavaScript

### ⚙️ Backend

* Node.js
* Express.js

### 🤖 AI Module

* Python
* Scikit-learn

### ☁️ Deployment

* Netlify (Frontend)
* Render (Backend)

---

## ⚙️ How It Works

### 🔹 Task Manager Flow

1. User enters a task in the input field
2. Frontend sends data to backend using API request
3. Backend stores the task
4. Frontend fetches updated tasks
5. UI updates automatically

### 🔹 AI Resume Analyzer Flow

1. User enters resume and job description
2. Text is processed using TF-IDF
3. Similarity score is calculated
4. Match result is displayed

---

## 📁 Project Structure

```
todo-app/
 ├── backend/
 │    ├── server.js
 │    ├── package.json
 │    └── .gitignore
 ├── frontend/
 │    └── index.html
 ├── ai/
 │    ├── app.py
 │    └── requirements.txt
 ├── screenshots/
 └── README.md
```

---

## 📸 Project Screenshots

### 🏠 Home Page

![Home](./screenshots/home.png)

### ➕ Add Task

![Add Task](./screenshots/add-task.png)

### 📋 Task List

![Tasks](./screenshots/tasks.png)

### 🤖 AI Resume Analyzer

![AI](./screenshots/ai.png)

---

## 📦 Installation & Setup

### 🔹 Clone Repository

```
git clone https://github.com/SRISHREYANSH/todo-app.git
cd todo-app
```

---

### 🔹 Backend Setup

```
cd backend
npm install
node server.js
```

---

### 🔹 Frontend

Open:

```
frontend/index.html
```

---

### 🔹 AI Module

```
cd ai
pip install -r requirements.txt
python app.py
```

---

## 🌐 Live Demo

Frontend: https://your-app.netlify.app
Backend: https://your-backend.onrender.com

---

## ⚠️ Limitations

* Data is not stored permanently (no database yet)
* No user authentication
* Basic AI model (can be improved)

---

## 🚀 Future Improvements

* 🔐 User Authentication (Login/Signup)
* 🗄️ Database Integration (MongoDB)
* ✅ Task completion feature
* 📅 Deadlines & reminders
* 🎨 Advanced UI (React / Tailwind)

---

## 🙋‍♂️ Author

**Shreyansh**
MCA Student | Web Developer | AI Enthusiast

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

