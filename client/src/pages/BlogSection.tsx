import { useEffect, useState } from "react";
import { blogDetails } from "../types/types";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [blogs, setBlogs] = useState<blogDetails[]>([]);
  const getBlogs = async () => {
    try {
      const blogs = await axios.get<blogDetails[]>(
        "http://192.168.1.8:5000/blogs"
      ); //"http://localhost:5000/blogs" "http://192.168.1.8:5000/blogs"
      if (blogs) setBlogs(blogs.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  if (!blogs || blogs.length === 0 || !blogs[0].image_url) {
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
    <div style={{ marginTop: "70px" }} className="container-fluid px-4 py-5">
      <div className="row">
        <div className="col-12 mb-4">
          <h2
            className="text-center text-uppercase group"
            style={{
              color: "rgb(0, 255, 0)",
              fontFamily: "monospace",
              letterSpacing: "2px",
              fontWeight: "bold",
              cursor: "pointer",
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
          >
            Blogs
          </h2>
        </div>
        {blogs.map((post, index) => (
          <div key={index} className="col-12 mb-5">
            <div className="row g-0 align-items-center">
              <div
                className="col-md-3 position-relative"
                style={{
                  height: "150px",
                  overflow: "hidden",
                  borderRadius: "8px",
                  marginRight: "30px",
                }}
              >
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-100 h-100 object-cover"
                  style={{
                    opacity: 0.8,
                    filter: "grayscale(30%) brightness(80%)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
              <div className="col-md-8 d-flex flex-column justify-content-center">
                <Link
                  to={`/blogDetail/${post.id}`}
                  className="mb-4"
                  style={{
                    fontSize: "1.2rem",
                    fontFamily: "monospace",
                    color: "rgb(0, 255, 0)",
                    borderBottom: "2px solid rgba(0, 255, 0, 0.3)",
                    paddingBottom: "10px",
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.textDecoration =
                      "underline";
                    (e.target as HTMLElement).style.textDecorationColor =
                      "rgb(0, 255, 0)";
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLElement).style.textDecoration = "none";
                  }}
                >
                  {post.title}
                </Link>
                <p
                  className="text-white mb-3"
                  style={{
                    fontFamily: "monospace",
                    fontSize: "1.2rem",
                    lineHeight: "1.6",
                  }}
                >
                  {post.content.slice(0, 300)}......
                </p>
                <Link
                  to={`/blogDetail/${post.id}`}
                  className="align-self-start group"
                  style={{
                    fontFamily: "monospace",
                    color: "rgb(0, 255, 0)",
                    textDecoration: "none",
                    border: "1px solid rgba(0, 255, 0, 0.5)",
                    padding: "8px 15px",
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.backgroundColor =
                      "rgba(0, 255, 0, 0.1)";
                    (e.target as HTMLElement).style.textDecoration =
                      "underline";
                    (e.target as HTMLElement).style.textDecorationColor =
                      "rgb(0, 255, 0)";
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLElement).style.backgroundColor =
                      "transparent";
                    (e.target as HTMLElement).style.textDecoration = "none";
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
