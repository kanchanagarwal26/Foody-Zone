import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const userRouter = express.Router();

// Test route (optional)
userRouter.get("/", (req, res) => {
  res.send("User API Working");
});

// Auth routes
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
