# 🏠 NestMatch

<div align="center">

# 🏠 NestMatch

### AI-Powered Rental & Flatmate Finder

Find the right room, not just an available one.

A full-stack rental platform that uses **Google Gemini AI** to evaluate property compatibility based on user preferences.

**Built with React • Node.js • Express.js • MySQL • Google Gemini AI**

### 🌐 Live Demo

- 🚀 **Frontend:** <[https://nestmatch-ai-rental.netlify.app](https://agent-6a4d42b9d70567b70f435--nestmatch-ai-rental.netlify.app/)>
- ⚙️ **Backend API:** <https://nestmatch-gxfn.onrender.com>
- 💻 **GitHub:** <https://github.com/Vanshikamishra395/NestMatch>

</div>


# # 📖 About NestMatch

NestMatch is an AI-powered rental and flatmate finder that helps users
discover properties based on compatibility rather than availability
alone. Using Google Gemini AI, the platform analyzes user preferences
and listing details to generate an intelligent compatibility score along
with a summary, advantages, and considerations.

---

# ✨ Features

## 👤 Authentication

-   User Registration & Login
-   JWT Authentication
-   Protected Routes

## 🏠 Property Management

-   Create Listings
-   Edit Listings
-   Delete Listings
-   View Listing Details

## 🔍 Property Discovery

-   Browse Listings
-   Search by Location
-   Responsive UI
-   Detailed Property Pages

## 🤖 AI Compatibility

-   Google Gemini AI Integration
-   Compatibility Score
-   Match Summary
-   Pros & Cons
-   Personalized Recommendation

## ❤️ Tenant Features

-   Browse Properties
-   View AI Compatibility
-   Show Interest

## 👨‍💼 Owner Features

-   Manage Listings
-   View Interested Tenants
-   Update Listings

---

# 📸 Application Screenshots

## 🏠 Home Page


<img width="948" height="435" alt="Screenshot 2026-07-03 221113" src="https://github.com/user-attachments/assets/c113dc7c-d9e4-48c6-83e9-7868a6763a4f" />



## 🏘 Featured Listings


<img width="948" height="430" alt="Screenshot 2026-07-03 221304" src="https://github.com/user-attachments/assets/6815d3be-63f3-4bf9-acd8-8d7965a741be" />



## 📄 Property Details


<img width="959" height="436" alt="Screenshot 2026-07-03 221213" src="https://github.com/user-attachments/assets/342069c6-a0f0-4de5-a837-35d72be46648" />



## 🤖 AI Compatibility


<img width="946" height="431" alt="Screenshot 2026-07-03 221247" src="https://github.com/user-attachments/assets/d46513bb-52a4-4b62-aada-8dcc27267e3f" />



---

# 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React, JavaScript, HTML5, CSS3 |
| Backend | Node.js, Express.js |
| Database | MySQL (Aiven Cloud) |
| AI | Google Gemini AI |
| Authentication | JWT |
| Deployment | Netlify & Render |
| Version Control | Git & GitHub |

---

# 🏗 Architecture

```text
React Frontend
      │
 REST API
      │
Node.js + Express
   │         │
MySQL     Gemini AI
   │         │
   └────► Compatibility Result
```

------------------------------------------------------------------------

# 📂 Project Structure

``` text
NestMatch/
├── frontend/
├── backend/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   ├── db.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
├── screenshots/
├── README.md
└── .gitignore
```

---

# 🚀 Installation

```bash
git clone https://github.com/Vanshikamishra395/NestMatch.git
cd NestMatch
```

## Backend

```bash
cd backend
npm install
npm start
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

------------------------------------------------------------------------

# 🔐 Environment Variables

Create `backend/.env`

```env
PORT=5000
DB_HOST=your_db_host
DB_PORT=your_db_port
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

> Never commit `.env` to GitHub.

---

# 🗄 Database

Tables:

-   users
-   listings
-   interests

---

# 🔗 REST API

 | Endpoint | Description |
|----------|-------------|
| POST /api/auth/register | Register User |
| POST /api/auth/login | Login |
| GET /api/listings | Fetch All Listings |
| GET /api/listings/:id | Fetch Listing Details |
| POST /api/listings | Create Listing |
| POST /api/ai/compatibility | Generate AI Match |
| POST /api/interests | Show Interest |

---

# 🤖 AI Compatibility Workflow

The AI compares:

-   Preferred Location
-   Budget
-   Room Type
-   Amenities

Returns:

-   Compatibility Score
-   Summary
-   Pros
-   Cons

Example response:

```json
{
  "score":92,
  "summary":"Excellent Match",
  "pros":["Budget matches","Location matches"],
  "cons":["Move-in date is slightly later"]
}
```

---

# ☁️ Deployment

 | Service | Platform |
|---------|----------|
| Frontend | Netlify |
| Backend | Render |
| Database | Aiven MySQL |

---

# 📦 Main Dependencies

### Frontend

-   React
-   React Router DOM
-   Lucide React
-   React Hot Toast

### Backend

-   Express
-   mysql2
-   bcrypt
-   jsonwebtoken
-   cors
-   dotenv
-   @google/generative-ai

---

# 🚀 Future Enhancements

-   Real-time Chat
-   Wishlist
-   Ratings & Reviews
-   Google Maps
-   Notifications
-   AI Roommate Matching
-   Online Payments

---

# 📋 Assignment Coverage

-   ✅ Authentication
-   ✅ Property Management
-   ✅ AI Compatibility
-   ✅ MySQL Database
-   ✅ Cloud Database
-   ✅ Render Deployment
-   ✅ Netlify Deployment
-   ✅ Responsive UI
-   ✅ README Documentation

---

# 👩‍💻 Developer

**Vanshika Mishra**

B.Tech -- Computer Science & Engineering (IoT)

Pranveer Singh Institute of Technology, Kanpur

### Connect

 - GitHub: <https://github.com/Vanshikamishra395>
 - LinkedIn: <https://www.linkedin.com/in/vanshika-mishra03/>

---

# Acknowledgements

Built using React, Node.js, Express.js, MySQL, Google Gemini AI, Aiven,
Render and Netlify.

---

# 📜 License

This project is intended for educational, learning, and placement
purposes.


---

<div align="center">

## ⭐ If you found this project useful, consider giving it a Star!

### Built by Vanshika Mishra

</div>
