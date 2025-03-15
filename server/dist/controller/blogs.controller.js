import { supabase } from "../config/supabaseClient.js";
export const getAllBlogs = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("blogs")
            .select("*")
            .order("created_at", { ascending: false }); // descending order;
        if (error)
            return res.status(500).json({ error: error.message });
        return res.json(data);
    }
    catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};
export const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from("blogs")
            .select("*")
            .eq("id", id);
        if (error)
            return res.status(500).json({ error: error.message });
        if (data.length === 0) {
            return res.status(404).json({ message: "Blog not found" });
        }
        return res.json(data[0]);
    }
    catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};
