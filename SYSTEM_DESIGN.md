# NestMatch System Design

NestMatch is an AI-powered rental and flatmate finder that connects property owners with tenants through compatibility-based recommendations. The system is built using a React frontend, Node.js and Express backend, MySQL database, Google Gemini AI integration, and cloud deployment using Netlify, Render, and Aiven MySQL.

The frontend is responsible for user interaction. It includes authentication pages, owner dashboard, tenant dashboard, listing cards, listing details page, and AI compatibility UI. React Router handles navigation between pages. The frontend communicates with the backend through REST APIs.

The backend is built with Node.js and Express.js. It exposes APIs for authentication, listing management, interest requests, and AI compatibility generation. Role-based access separates owner and tenant functionality. Owners can create and manage listings, while tenants can browse listings, view details, generate compatibility scores, and show interest.

MySQL is used as the primary database. The main tables are users, listings, and interests. The users table stores user details and role information. The listings table stores property details such as location, rent, room type, furnishing, availability date, amenities, and listing status. The interests table stores tenant interest requests against listings.

The AI compatibility engine uses Google Gemini AI. When a tenant requests a match score, the backend sends listing details and tenant preference data to the Gemini API. The AI evaluates budget, location, room type, and amenities, then returns a score, summary, pros, and cons. This helps tenants understand why a listing is suitable or not suitable.

If the AI service is unavailable, a rule-based fallback can be added by comparing rent range, location match, room type match, and amenities overlap. This ensures the application can still generate a basic compatibility score even when the LLM fails.

The current implementation supports interest requests, where tenants can express interest in a property. Future enhancements include owner accept/decline flow, real-time chat using WebSockets, message persistence, email notifications, and an admin dashboard.

For deployment, the frontend is hosted on Netlify, the backend is hosted on Render, and the database is hosted on Aiven MySQL. Environment variables are used to store sensitive configuration such as database credentials, JWT secret, and Gemini API key. These values are not committed to GitHub and are documented through `.env.example`.

Overall, NestMatch follows a modular full-stack architecture with separate frontend, backend, database, and AI layers. This makes the platform scalable, maintainable, and suitable for future enhancements such as real-time chat, notifications, saved listings, and advanced recommendation systems.