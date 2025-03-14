import { supabase } from "../config/supabaseClient.js";
import { Request, Response } from "express";
import { ExpressRequestHandler } from "../types/types.js";

export const sendMessage: ExpressRequestHandler = async (
  req: Request,
  res: Response
) => {
  const { name, email, subject, message } = req.body;

  const { data, error } = await supabase
    .from("messages")
    .insert([{ name, email, subject, message }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ msg: "Successfully sent the message" });
};
