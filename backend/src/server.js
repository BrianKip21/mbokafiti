
import "dotenv/config";
import express from "express";
import prisma from "./config/prisma.js";

const app = express();

app.use(express.json());

// Check whether the API is running
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Mbokafiti API!",
  });
});

// Check whether PostgreSQL is reachable through Prisma
app.get("/api/health/db", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      success: true,
      message: "Database connection successful!",
    });
  } catch (error) {
    console.error("Database health check failed:", error);

    res.status(500).json({
      success: false,
      message: "Database connection failed.",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Mbokafiti API running on port ${PORT}`);
});
