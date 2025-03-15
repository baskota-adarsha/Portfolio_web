import express from "express";
import { supabase } from "./config/supabaseClient.js";
import dotenv from "dotenv";
import cors from "cors";
import blogRoutes from "./routes/blogs.routes.js";
import messageRoutes from "./routes/messages.routes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);
app.use("/message", messageRoutes);
async function testDBConnection() {
    const { data, error } = await supabase.from("blogs").select("*").limit(1);
    if (error) {
        console.error("❌ Database connection failed:", error.message);
    }
    else {
        console.log("✅ Database connected successfully!");
    }
}
testDBConnection(); // Run test
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
