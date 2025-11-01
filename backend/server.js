import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";

dotenv.config();
const app = express();

// --- Middlewares ---
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // for local dev
  credentials: true,
}));


// --- API routes ---
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// --- Health check ---
app.get("/api", (req, res) => {
  res.json({ message: "LinkedIn Clone Backend is running ✅" });
});

// --- Serve frontend in production ---
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// --- Connect to MongoDB and start server ---
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
