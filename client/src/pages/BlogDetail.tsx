import { useEffect, useState } from "react";
import { blogDetails } from "../types/types";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>(); // Ensure id is a string
  const [blog, setBlog] = useState<blogDetails | null>(null);
  const getBlogDetails = async () => {
    if (!id) return; // Prevent request if id is undefined

    try {
      const response = await axios.get<blogDetails>(
        `https://portfolio-backend-8n4x.onrender.com/blogs/${id}` //"http://192.168.1.8:5000/blogs"/ http://localhost:5000/blogs/${id}/
      );
      setBlog(response.data);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };
  useEffect(() => {
    getBlogDetails();
  }, [id]);

  if (!blog) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "50vh", // Use viewport height instead of fixed pixels
          width: "100%", // Take full width of container
        }}
      >
        <div
          className="spinner-border text-info loader"
          style={{
            fontSize: "calc(2rem + 2vw)", // Responsive font size based on viewport width
          }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div
      className="text-white min-h-screen p-4 md:p-8 lg:px-16 xl:px-32"
      style={{ fontFamily: "monospace", marginTop: "150px" }}
    >
      {/* Title */}
      <h1
        className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6 blogDetailHeading"
        style={{
          color: "rgb(0, 255, 0)",
          textShadow: "0 0 10px rgba(0, 255, 0, 0.7)",
        }}
      >
        {blog?.title}
      </h1>

      {/* Header Image - REDUCED SIZE */}
      <div className="image-container mb-8 flex justify-center blogImage">
        <div
          className="blogImage"
          style={{
            width: "1000px",
            height: "1200px",
            marginTop: "-309px",
            marginLeft: "100px",
          }}
        >
          <img
            alt="Blog Image"
            src={blog?.image_url}
            loading="lazy"
            decoding="async"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Introductory Paragraph */}
      <div
        style={{
          marginTop: "-220px",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
        className="mb-8 text-base md:text-lg lg:text-xl leading-relaxed blogDetailPara"
      >
        {blog.content.split("\n\n").map((paragraph, index) => (
          <p style={{ fontSize: "1.2rem" }} key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
