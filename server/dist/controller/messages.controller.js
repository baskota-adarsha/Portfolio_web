import { supabase } from "../config/supabaseClient.js";
export const sendMessage = async (req, res) => {
    const { name, email, subject, message } = req.body;
    const { data, error } = await supabase
        .from("messages")
        .insert([{ name, email, subject, message }]);
    if (error)
        return res.status(500).json({ error: error.message });
    res.status(200).json({ msg: "Successfully sent the message" });
};
