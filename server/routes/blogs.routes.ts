import express from "express";
import { getAllBlogs, getBlogById } from "../controller/blogs.controller.js"; // Removed the `.ts` extension

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);

export default router;
