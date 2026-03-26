// src/server.ts
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import prisma from "./lib/prisma.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running...");
});

app.get("/test-db", async (req, res) => {
  try {
    // 1. Test raw connection
    await prisma.$queryRaw`SELECT 1`;
    
    // 2. Fetch users to return expected []
    const users = await prisma.user.findMany();
    
    res.status(200).json({
      status: "success",
      message: "Database connected correctly",
      data: users
    });
  } catch (error) {
    console.error("DB Connection Error:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to connect to the database",
      details: error instanceof Error ? error.message : String(error)
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});