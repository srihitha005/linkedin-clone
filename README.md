# 💼 LinkedIn Clone

A full-stack LinkedIn Clone built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** as a part of "AppDost Full Stack Developer Internship Assignment".
It allows users to register, log in, create posts, and interact in a social feed — just like LinkedIn!

---

## 🚀 How to Run the Project

🖥️ 1. Clone the repository

git clone https://github.com/srihitha005/linkedin-clone.git
cd linkedin-clone

⚙️ 2. Setup Backend
cd backend
npm install

Create a .env file inside the backend folder and add:
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
NODE_ENV=development

Then run:
npm run dev
✅ Backend runs at http://localhost:5000

💻 3. Setup Frontend
cd ../frontend/linkedin
npm install

Create a .env file inside frontend/linkedin and add:
VITE_API_URL=http://localhost:5000

Then run:
npm run dev
✅ Frontend runs at http://localhost:5173

🧱 Tech Stack

🪄 Frontend
⚛️ React.js with Vite
🌐 Axios for API communication
🎨 Plain CSS and Bootstrap for styling and layout

⚙️ Backend
🧠 Node.js & Express.js
🗄️ MongoDB with Mongoose
🔐 JWT for authentication
🔑 bcryptjs for password hashing
🌍 CORS, dotenv for configuration and security

☁️ Deployment
🚀 Frontend: Netlify
⚙️ Backend: Render
🧩 Database: MongoDB Atlas


🌟 Features

✨ User registration and login with JWT authentication
📝 Create and view posts
🔒 Secure password encryption
💾 Persistent user sessions
📱 Responsive layout
🌍 Fully deployed (frontend + backend + database)

🔗 Live Links

🌐 Frontend: https://zippy-daifuku-a78868.netlify.app

⚙️ Backend: https://linkedin-clone-kzyl.onrender.com

👩‍💻 Author

Srihitha
💌 Passionate about full-stack development and learning modern web technologies!
📎 GitHub: @srihitha005
