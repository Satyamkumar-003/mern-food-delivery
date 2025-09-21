# 🍔 MERN Food Ordering App

A full-stack food delivery application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). Users can register, browse food items, add them to the cart, and place orders. Data is managed through MongoDB using Mongoose. This app supports authentication using JWT and secure password storage with Bcrypt.

> ⚠️ This project **does not have an admin panel**. All data (food items, categories, users, orders) must be inserted and managed **directly through the MongoDB database**.

---

## 🧰 Tech Stack

- **Frontend**: React.js, Bootstrap, Material UI Icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + Bcrypt.js
- **Validation**: Express-validator

---

## 📦 Required NPM Packages

```bash
# Frontend
npm install @mui/material @emotion/react @emotion/styled

# Backend
npm install express mongoose bcryptjs jsonwebtoken express-validator cors


📁 Project Setup
🔧 1. MongoDB Setup
Before running the app, create the following collections and insert the required documents in your MongoDB database.

🍽️ Collection: fooditems
json
Copy
Edit
{
  "_id": { "$oid": "685149d1019ac060cdc3310d" },
  "CategoryName": "Starter",
  "name": "Paneer Tikka",
  "img": "https://www.cookforindia.com/wp-content/uploads/2016/08/Paneer-Tikka-_LR-1140x500.jpg",
  "options": [
    { "half": "170", "full": "250" }
  ],
  "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
}
🍛 Collection: foodcategory
json
Copy
Edit
{
  "_id": { "$oid": "68514abbf159d4fe21a19fca" },
  "CategoryName": "Biryani/Rice"
}
👤 Collection: users (created via signup)
json
Copy
Edit
{
  "_id": { "$oid": "6852a6abfa87d16d81a1e164" },
  "name": "luffytaro",
  "location": "landof wano",
  "email": "luffy11@gmai.com",
  "password": "$2b$10$qgque0bOyYm1K1akURblv.3IRLtsSwBdlSCkx0lRt7dp7pU8PFt7W",
  "date": { "$date": { "$numberLong": "1750247083591" } },
  "__v": 0
}
🧾 Collection: orders (created after checkout)
json
Copy
Edit
{
  "_id": { "$oid": "6858037f4f1fcf42e162a822" },
  "email": "luffy11@gmai.com",
  "order_data": [
    [
      { "Order_date": "Sun Jun 22 2025" },
      {
        "id": "685149d1019ac060cdc3310a",
        "name": "Veg Biryani",
        "qty": 1,
        "price": 150,
        "size": "half"
      },
      {
        "id": "685149d1019ac060cdc3310c",
        "name": "Hydrabadi Biryani",
        "qty": 1,
        "price": 200,
        "size": "half"
      }
    ]
  ],
  "__v": 0
}
🚀 Running the App
🖥 Backend
Navigate to the backend directory:


cd backend
Start the backend server:


npx nodemon index.js
Server will run on: http://localhost:5000

🌐 Frontend
Navigate to the frontend directory:


cd frontend
Start the React app:


npm start
Frontend will run on: http://localhost:3000

🔐 Authentication
Signup/Login forms are validated using express-validator

Passwords are securely hashed using bcryptjs

Upon successful login, a JWT token is issued and stored in localStorage

Authenticated user email is also saved to localStorage for order tracking

✨ Features
✅ User Registration & Login (JWT Auth)

✅ Add Items to Cart

✅ Remove Items using 🗑️ DeleteIcon (Material UI)

✅ Checkout & Order History

✅ Responsive UI with Bootstrap

✅ Persistent Order Data saved in MongoDB

📌 Important Notes
❗ Data such as food items and categories must be manually added to the MongoDB database

❗ No admin dashboard currently implemented

Ensure MongoDB is running locally or use MongoDB Atlas
