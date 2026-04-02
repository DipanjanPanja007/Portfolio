
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRoutes from "./routes/mail.route.js";

dotenv.config();

console.log("Backend server setup complete.");

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(express.json());

app.use("/api/mail", mailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});