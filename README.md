# 📝 Task Manager

A **MERN stack** (MongoDB, Express, React, Node.js) based Task Manager application that allows users to **register**, **login**, and perform full **CRUD operations** on their tasks. The backend is secured with **JWT authentication**, and the frontend is styled using **Tailwind CSS**.

---

## 🔗 Live Links

- 🔥 **Frontend**: [View Website](https://tasktodourgently.netlify.app/)
- 🌐 **Backend API**: [Backend Live](https://taskmanager-8nh7.onrender.com)

> 🚨 If the backend (Render) is inactive, the first request may take up to 30 seconds to wake up.

---

## 🚀 Features

- 🔐 User Registration & Login (JWT-based authentication)
- 📋 Create, Read, Update, Delete (CRUD) tasks
- 📂 Tasks linked to the authenticated user
- 🎨 Clean UI built with React and Tailwind CSS
- 🌐 Backend API with Express and MongoDB
- 🛡️ Secure routes using middleware

---

## ⚙️ Technologies Used

- **Frontend:** React, Tailwind CSS, Axios, React Router DOM
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JWT
- **Deployment:** Netlify (frontend) + Render (backend) + MongoDB Atlas (database)

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Sumit123chandra/TaskManager.git
cd TaskManager
```

### 2. Setup Backend

```bash
cd server
npm install
```
# Create a .env file in the server directory:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
# Run the Backend
```bash
npm start
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm start
```

