import express from "express";
import cors from "cors";

const app = express();

// --- Global Middlewares ---
app.use(cors()); // Allows your frontend to talk to your backend
app.use(express.json()); // Allows Express to read JSON data from requests

// --- Basic Health Check Route ---
app.get("/health", (req, res) => {
  res.status(200).json({ status: "success", message: "Server is running!" });
});

// --- Mount Routes Here (We will add auth next) ---
// import authRoutes from "./routes/auth.routes";
// app.use("/api/auth", authRoutes);

export default app;