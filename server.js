import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { PORT, URI } from "./v1/config/index.js";
import Route from "./v1/routes/index.js";

// === 1 - CREATE SERVER ===
const server = express();

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:3000', // Allow local development
    'https://3wkesavaassignment.netlify.app', // Allow Netlify deployed frontend
  ],
  credentials: true, // Allow credentials (cookies, auth headers)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
};

server.use(cors(corsOptions)); // Apply CORS configuration
server.disable("x-powered-by"); // Reduce fingerprinting
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// === 2 - CREATE DATABASE ===
// Set up mongoose's promise to global promise
mongoose.promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

// === 4 - CONFIGURE ROUTES ===
// Configure Route
Route(server);

// === 5 - START UP SERVER ===
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
