# 🏠 NestMatch

<div align="center">

### AI-Powered Rental & Flatmate Finder

Find the right room, not just an available one.

A full-stack web application that helps tenants discover rental properties based on **AI-powered compatibility scoring** instead of simple availability.

Built using **React, Node.js, Express.js, MySQL, and Google Gemini AI**.

---

### 🌐 Live Demo

**Frontend:**  
https://nestmatch-ai-rental.netlify.app

**Backend API:**  
https://nestmatch-gxfn.onrender.com

**GitHub Repository:**  
https://github.com/Vanshikamishra395/NestMatch

</div>

---

# 📖 About the Project

Finding a rental property usually involves browsing hundreds of listings with little guidance on whether a property actually fits a tenant's preferences.

**NestMatch** solves this problem by introducing **AI-powered compatibility analysis**. Instead of only displaying available properties, the platform evaluates how well each property matches the tenant's preferences using **Google Gemini AI**.

The system compares factors such as:

- 📍 Preferred Location
- 💰 Budget
- 🏠 Room Type
- 🛋 Amenities

and generates:

- Compatibility Score
- Match Summary
- Advantages
- Things to Consider

This provides users with a smarter and more personalized room-finding experience.

---

# ✨ Key Features

## 👤 Authentication

- Secure User Registration
- Login Authentication
- JWT-based Authorization
- Protected Routes

---

## 🏠 Property Management

- Create Property Listings
- Edit Listings
- Delete Listings
- View Listing Details
- Upload Property Information

---

## 🔍 Property Discovery

- Browse Available Listings
- View Detailed Property Information
- Search by Location
- Property Cards
- Responsive Layout

---

## 🤖 AI Compatibility

Powered by **Google Gemini AI**

Features include:

- AI Match Score
- Personalized Compatibility Summary
- Pros & Cons Analysis
- Preference-Based Recommendation

---

## ❤️ Tenant Features

- Browse Properties
- View AI Compatibility
- Show Interest
- View Property Details

---

## 👨‍💼 Owner Dashboard

Owners can:

- Add New Listings
- Manage Existing Listings
- View Interested Tenants
- Update Property Information

---

# 📸 Application Screenshots

## 🏠 Home Page

![Home Page](./screenshots/home.png)

---

## 🏘️ Featured Listings

![Featured Listings](./screenshots/featured-listing.png)

---

## 📄 Property Details

![Property Details](./screenshots/listing-details.png)

---

## 🤖 AI Compatibility

![AI Compatibility](./screenshots/ai-match.png)

---

# 🛠 Tech Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | React.js, JavaScript, HTML5, CSS3 |
| Backend | Node.js, Express.js |
| Database | MySQL |
| AI | Google Gemini API |
| Authentication | JWT |
| Version Control | Git & GitHub |
| Frontend Deployment | Netlify |
| Backend Deployment | Render |
| Cloud Database | Aiven MySQL |

---

# 🏗 System Architecture

```text
                 React Frontend
                        │
                        │ REST API
                        ▼
              Node.js + Express Backend
                        │
        ┌───────────────┴───────────────┐
        │                               │
        ▼                               ▼
   MySQL Database              Google Gemini AI
        │                               │
        └───────────────┬───────────────┘
                        ▼
                 Compatibility Score
```

---

# 📂 Project Structure

```text
NestMatch/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── routes/
│   ├── middleware/
│   ├── database/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── screenshots/
│   ├── home.png
│   ├── featured-listing.png
│   ├── listing-details.png
│   └── ai-match.png
│
├── README.md
└── .gitignore
```

---

# 🚀 Getting Started

## Prerequisites

Before running this project, ensure you have installed:

- Node.js
- npm
- MySQL
- Git
- Google Gemini API Key

# ⚙️ Installation Guide

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Vanshikamishra395/NestMatch.git
```

Navigate to the project directory:

```bash
cd NestMatch
```

---

## 2️⃣ Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file using the `.env.example` template.

Start the backend server:

```bash
npm start
```

The backend runs on:

```
http://localhost:5000
```

---

## 3️⃣ Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **backend** directory.

### Example

```env
PORT=5000

DB_HOST=your_host
DB_PORT=your_port
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

> ⚠️ Never commit your `.env` file to GitHub.

---

# 🗄 Database Schema

The project uses **MySQL** as the primary database.

### users

| Field | Type |
|--------|------|
| id | INT |
| name | VARCHAR |
| email | VARCHAR |
| password | VARCHAR |
| role | ENUM (owner, tenant) |
| created_at | TIMESTAMP |

---

### listings

| Field | Type |
|--------|------|
| id | INT |
| owner_id | INT |
| title | VARCHAR |
| description | TEXT |
| location | VARCHAR |
| rent | DECIMAL |
| room_type | VARCHAR |
| furnishing | VARCHAR |
| available_from | DATE |
| preferred_gender | VARCHAR |
| amenities | JSON |
| status | VARCHAR |
| created_at | TIMESTAMP |

---

### interests

| Field | Type |
|--------|------|
| id | INT |
| tenant_id | INT |
| listing_id | INT |
| status | VARCHAR |
| created_at | TIMESTAMP |

---

# 🔗 REST API Documentation

## Authentication

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

---

## Listings

### Get All Listings

```http
GET /api/listings
```

### Get Listing By ID

```http
GET /api/listings/:id
```

### Create Listing

```http
POST /api/listings
```

---

## AI Compatibility

### Generate Compatibility Score

```http
POST /api/ai/compatibility
```

---

## Interest Requests

### Send Interest

```http
POST /api/interests
```

---

# ☁️ Deployment

| Service | Platform |
|----------|----------|
| Frontend | Netlify |
| Backend | Render |
| Database | Aiven MySQL |

### Live Links

Frontend

```
https://nestmatch-ai-rental.netlify.app
```

Backend

```
https://nestmatch-gxfn.onrender.com
```

---

# 📁 Important Files

```
backend/
│
├── server.js
├── db.js
├── package.json
├── .env.example
└── routes/

frontend/
│
├── src/
├── public/
├── package.json
└── vite.config.js
```

---

# 📦 Dependencies

### Frontend

- React
- React Router DOM
- Lucide React
- React Hot Toast

### Backend

- Express
- MySQL2
- JWT
- bcrypt
- dotenv
- CORS
- Google Generative AI SDK

  # 🤖 AI Compatibility Engine

One of the key highlights of **NestMatch** is its AI-powered compatibility system.

Instead of simply displaying available rooms, the application evaluates how well a property aligns with a tenant's preferences.

The compatibility score is generated using **Google Gemini AI**, providing users with a more personalized room discovery experience.

### Parameters Considered

- 📍 Preferred Location
- 💰 Budget Range
- 🏠 Room Type
- 🛋 Available Amenities

The AI returns:

- Compatibility Score (0–100)
- Match Summary
- Advantages (Pros)
- Things to Consider (Cons)

---

# 🧠 LLM Prompt

The application uses the following prompt format for compatibility scoring.

```text
Given the following room listing:

Location:
Budget:
Room Type:
Amenities:

and the following tenant profile:

Preferred Location:
Budget Range:
Preferred Room Type:
Required Amenities:

Generate:

1. Compatibility Score (0-100)
2. Short Summary
3. Advantages
4. Things to Consider

Return the response in JSON format.
```

Example Response

```json
{
  "score": 92,
  "summary": "Excellent Match",
  "pros": [
    "Budget fits perfectly",
    "Location matches preferences",
    "Desired amenities available"
  ],
  "cons": [
    "Move-in date is slightly later"
  ]
}
```

---

# 🔄 Application Workflow

```text
Owner Registers
        │
        ▼
Creates Property Listing
        │
        ▼
Listing Stored in Database
        │
        ▼
Tenant Registers
        │
        ▼
Browse Available Listings
        │
        ▼
Open Property Details
        │
        ▼
Generate AI Compatibility Score
        │
        ▼
View AI Recommendation
        │
        ▼
Show Interest
        │
        ▼
Owner Receives Interest
```

---

# 📋 Assignment Coverage

| Requirement | Status |
|-------------|--------|
| User Authentication | ✅ |
| Owner Dashboard | ✅ |
| Tenant Dashboard | ✅ |
| Property Listings | ✅ |
| Listing Details | ✅ |
| AI Compatibility Scoring | ✅ |
| Google Gemini Integration | ✅ |
| Interest Request | ✅ |
| MySQL Database | ✅ |
| Cloud Database (Aiven) | ✅ |
| Backend Deployment (Render) | ✅ |
| Frontend Deployment (Netlify) | ✅ |
| Responsive Design | ✅ |

---

# 🚀 Future Enhancements

The following features are planned for future versions of the application:

- 💬 Real-Time Chat using WebSockets
- 📧 Email Notifications
- 👨‍💼 Admin Dashboard
- ❤️ Wishlist & Saved Listings
- ⭐ Property Reviews & Ratings
- 🤝 AI Roommate Matching
- 🗺 Google Maps Integration
- 🔔 Push Notifications
- 💳 Online Rent Payment
- 📊 Advanced Recommendation Engine

---

# ⚠️ Current Limitations

The current version focuses on the core rental workflow.

The following advanced features are planned for future releases:

- Real-time chat
- Email notification service
- Admin portal
- Persistent AI compatibility history
- Recommendation engine based on user activity

---

# 📚 Learning Outcomes

This project provided hands-on experience in:

- Full Stack Web Development
- React Component Architecture
- REST API Development
- Express.js Backend
- MySQL Database Design
- JWT Authentication
- Google Gemini AI Integration
- Cloud Database Management
- Backend Deployment (Render)
- Frontend Deployment (Netlify)
- Git & GitHub Workflow

---

# 💡 Why NestMatch?

Traditional rental platforms only display available properties.

NestMatch goes one step further by combining modern web technologies with **Google Gemini AI** to help tenants discover properties that best match their preferences.

The platform emphasizes **compatibility over availability**, making the rental search process more efficient and personalized.

---

# 👩‍💻 Developer

**Vanshika Mishra**

B.Tech – Computer Science & Engineering (IoT)

Pranveer Singh Institute of Technology (PSIT), Kanpur

### Connect with Me

- GitHub: https://github.com/Vanshikamishra395
- LinkedIn: https://www.linkedin.com/in/vanshika-mishra/

---

# 🙏 Acknowledgements

This project was built using the following technologies and services:

- React.js
- Node.js
- Express.js
- MySQL
- Google Gemini AI
- Aiven Cloud
- Render
- Netlify

Special thanks to the open-source community for providing the tools and libraries used in this project.

---

# 📜 License

This project has been developed for educational, learning, and placement purposes.

Feel free to explore the repository and use it as a reference for learning.

---

<div align="center">

## ⭐ If you found this project useful, consider giving it a Star!

### Built with ❤️ by **Vanshika Mishra**

</div>
