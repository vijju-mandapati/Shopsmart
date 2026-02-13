# 🛒 ShopSmart – Full Stack Grocery Web App

ShopSmart is a **full-stack MERN-style grocery shopping web application** that allows users to browse products, add items to cart, place orders, and manage authentication securely.

---

## 🚀 Features

### 👤 User Features

* User **Register & Login (JWT Authentication)**
* Browse **available grocery products**
* **Add to Cart** and manage quantities
* **Place Orders** and view order history
* **Profile page** with user details
* Secure **logout functionality**

### 🛠️ Admin Features

* Add new **products**
* Manage **inventory & pricing**
* View **orders placed by users**

---

## 🧰 Tech Stack

### Frontend

* React.js
* React Router DOM
* Fetch API
* CSS (custom styling)

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* bcrypt password hashing
* CORS & dotenv

---

## 📂 Project Structure

```
ShopSmart/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/vijju-mandapati/Shopsmart.git
cd Shopsmart
```

### 2️⃣ Backend Setup

```
cd backend
npm install
npm start
```

Create **.env** file:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5100
```

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

Backend runs on:

```
http://localhost:5100
```

---

## 🔐 Authentication Flow

* Passwords are **hashed using bcrypt**
* Login returns **JWT token**
* Token stored in **localStorage**
* Protected routes require **Authorization: Bearer Token**

---

## 📸 Screens Included

* Login Page
* Register Page
* Products Page
* Cart Page
* Orders Page
* Profile Page
* Admin Product Add

---

## 🌍 Future Improvements

* Online **payment gateway integration**
* **Image upload** for products
* **Admin dashboard analytics**
* **Deployment on cloud (Render/Netlify)**

---

## 👩‍💻 Author

**Mandapati Vijaya Lakshmi**
Full Stack Web Development Student Project

GitHub:
https://github.com/vijju-mandapati

---

## 📜 License

This project is created for **educational purposes**.
