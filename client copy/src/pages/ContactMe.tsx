import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import the CSS
import { postMessages } from "../types/types";
const ContactMe = () => {
  const postMessage = async (formData: postMessages) => {
    try {
      const response = await axios.post(
        "http://192.168.1.8:5000/message", //"http://192.168.1.8:5000/blogs" http://localhost:5000/message
        formData
      );
      if (response.status === 200) {
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,

          theme: "colored",
        });
      }
    } catch (error: any) {
      toast.error(`Failed to send message: ${error.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

        theme: "colored",
      });
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postMessage(formData);
    try {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: "",
        });
      }, 5000);
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Oops! Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div
      style={{ marginTop: "190px" }}
      className="container py-3 py-md-5 mt-3 mt-md-5"
    >
      <div
        style={{ marginTop: "50px" }}
        className="row justify-content-center mb-3 mb-md-5"
      >
        <div className="col-12 col-lg-8 text-center">
          <h2
            className="text-uppercase mb-3 mb-md-4"
            style={{
              color: "rgb(0, 255, 0)",
              fontFamily: "monospace",

              letterSpacing: "3px",
              fontWeight: "bold",
              fontSize: "calc(1.5rem + 0.5vw)",
            }}
          >
            CONTACT ME
          </h2>
          <p
            className="lead text-white mb-4 mb-md-5"
            style={{
              fontFamily: "monospace",
              fontSize: "calc(1rem + 0.2vw)",
            }}
          >
            Have a project in mind or want to say hello? Feel free to reach out!
          </p>
        </div>
      </div>

      <div className="row">
        {/* Contact Information */}
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <div
            className="card text-white border-0 h-100"
            style={{
              boxShadow: "0 0 15px rgba(0, 255, 0, 0.1)",
              background: "linear-gradient(to right, #0a1633, #192a4f)",
            }}
          >
            <div className="card-body p-3 p-md-4">
              <h3
                className="card-title mb-4"
                style={{
                  color: "rgb(0, 255, 0)",
                  fontFamily: "monospace",
                  borderBottom: "1px solid rgba(0, 255, 0, 0.3)",
                  paddingBottom: "10px",
                  fontSize: "calc(1.2rem + 0.3vw)",
                }}
              >
                Let's Connect
              </h3>

              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                    backgroundColor: "rgba(0, 255, 0, 0.1)",
                    borderRadius: "50%",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="rgb(0, 255, 0)"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </div>
                <div className="text-break">
                  <h5
                    style={{
                      fontFamily: "monospace",
                      color: "rgb(0, 255, 0)",
                      fontSize: "calc(0.9rem + 0.2vw)",
                    }}
                  >
                    Location
                  </h5>
                  <p className="mb-0" style={{ fontFamily: "monospace" }}>
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                    backgroundColor: "rgba(0, 255, 0, 0.1)",
                    borderRadius: "50%",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="rgb(0, 255, 0)"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                </div>
                <div className="text-break">
                  <h5
                    style={{
                      fontFamily: "monospace",
                      color: "rgb(0, 255, 0)",
                      fontSize: "calc(0.9rem + 0.2vw)",
                    }}
                  >
                    Email
                  </h5>
                  <p
                    className="mb-0"
                    style={{
                      fontFamily: "monospace",
                      wordBreak: "break-word",
                    }}
                  >
                    privateadarsha@gmail.com
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                    backgroundColor: "rgba(0, 255, 0, 0.1)",
                    borderRadius: "50%",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="rgb(0, 255, 0)"
                    className="bi bi-phone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </div>
                <div className="text-break">
                  <h5
                    style={{
                      fontFamily: "monospace",
                      color: "rgb(0, 255, 0)",
                      fontSize: "calc(0.9rem + 0.2vw)",
                    }}
                  >
                    Phone
                  </h5>
                  <p className="mb-0" style={{ fontFamily: "monospace" }}>
                    +977 9810142673
                  </p>
                </div>
              </div>

              <h4
                className="mt-4 mt-md-5 mb-3"
                style={{
                  color: "rgb(0, 255, 0)",
                  fontFamily: "monospace",
                  borderBottom: "1px solid rgba(0, 255, 0, 0.3)",
                  paddingBottom: "10px",
                  fontSize: "calc(1.1rem + 0.2vw)",
                }}
              >
                Follow Me
              </h4>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href="https://github.com/baskota-adarsha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(0, 255, 0, 0.1)",
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "rgba(0, 255, 0, 0.3)")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "rgba(0, 255, 0, 0.1)")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="rgb(0, 255, 0)"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/adarsha-baskota-9000a2346/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(0, 255, 0, 0.1)",
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "rgba(0, 255, 0, 0.3)")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "rgba(0, 255, 0, 0.1)")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="rgb(0, 255, 0)"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=100088493269622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(0, 255, 0, 0.1)",
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "rgba(0, 255, 0, 0.3)")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "rgba(0, 255, 0, 0.1)")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="rgb(0, 255, 0)"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 1.5c-3.866 0-7 3.134-7 7 0 3.446 2.49 6.29 5.75 6.932V10.5H5.5V8.5h1.75V7.125c0-1.732 1.07-2.625 2.5-2.625.725 0 1.348.054 1.5.078v1.797h-1.028C9.8 6.375 9.5 6.625 9.5 7.125V8.5h2.125l-.5 2h-1.625v4.932C13.01 14.79 15.5 11.946 15.5 8.5c0-3.866-3.134-7-7-7z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/__0adarsha0__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(0, 255, 0, 0.1)",
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "rgba(0, 255, 0, 0.3)")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "rgba(0, 255, 0, 0.1)")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="rgb(0, 255, 0)"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-12 col-md-7">
          <div
            className="card text-white border-0"
            style={{
              boxShadow: "0 0 15px rgba(0, 255, 0, 0.1)",
              background: "linear-gradient(to right, #0a1633, #192a4f)",
            }}
          >
            <div className="card-body p-3 p-md-4">
              <h3
                className="card-title mb-4"
                style={{
                  color: "rgb(0, 255, 0)",
                  fontFamily: "monospace",
                  borderBottom: "1px solid rgba(0, 255, 0, 0.3)",
                  paddingBottom: "10px",
                  fontSize: "calc(1.2rem + 0.3vw)",
                }}
              >
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control text-white"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        style={{
                          border: "1px solid #00aaff",
                          boxShadow:
                            "0 0 10px rgba(0, 170, 255, 0.7), 0 0 20px rgba(0, 170, 255, 0.3)",
                          fontFamily: "monospace",
                          background:
                            "linear-gradient(to right, #0a1633, #192a4f)",
                          borderRadius: "6px",
                          outline: "none",
                        }}
                      />
                      <label htmlFor="name" style={{ fontFamily: "monospace" }}>
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control text-white border-0"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        style={{
                          border: "1px solid #00aaff",
                          boxShadow:
                            "0 0 10px rgba(0, 170, 255, 0.7), 0 0 20px rgba(0, 170, 255, 0.3)",
                          fontFamily: "monospace",
                          background:
                            "linear-gradient(to right, #0a1633, #192a4f)",
                          borderRadius: "6px",
                          outline: "none",
                        }}
                      />
                      <label
                        htmlFor="email"
                        style={{ fontFamily: "monospace" }}
                      >
                        Your Email
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control text-white border-0"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                        style={{
                          border: "1px solid #00aaff",
                          boxShadow:
                            "0 0 10px rgba(0, 170, 255, 0.7), 0 0 20px rgba(0, 170, 255, 0.3)",
                          fontFamily: "monospace",
                          background:
                            "linear-gradient(to right, #0a1633, #192a4f)",
                          borderRadius: "6px",
                          outline: "none",
                        }}
                      />
                      <label
                        htmlFor="subject"
                        style={{ fontFamily: "monospace" }}
                      >
                        Subject
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <textarea
                        className="form-control text-white"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        style={{
                          height: "120px",
                          minHeight: "120px",
                          border: "1px solid #00aaff",
                          boxShadow:
                            "0 0 10px rgba(0, 170, 255, 0.7), 0 0 20px rgba(0, 170, 255, 0.3)",
                          fontFamily: "monospace",
                          background:
                            "linear-gradient(to right, #0a1633, #192a4f)",
                          borderRadius: "6px",
                          outline: "none",
                        }}
                        required
                      ></textarea>
                      <label
                        htmlFor="message"
                        style={{ fontFamily: "monospace" }}
                      >
                        Your Message
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-outline-success w-100 w-md-auto px-4 py-2"
                      style={{
                        borderColor: "rgb(0, 255, 0)",
                        color: "rgb(0, 255, 0)",
                        fontFamily: "monospace",
                        transition: "all 0.3s ease",
                        maxWidth: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      onMouseOver={(e) => {
                        (e.target as HTMLElement).style.backgroundColor =
                          "rgba(0, 255, 0, 0.1)";
                      }}
                      onMouseOut={(e) => {
                        (e.target as HTMLElement).style.backgroundColor =
                          "transparent";
                      }}
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="row mt-4 mt-md-5">
        <div className="col-12">
          <div
            className="card bg-dark text-white border-0"
            style={{ boxShadow: "0 0 15px rgba(0, 255, 0, 0.1)" }}
          >
            <div className="card-body p-0">
              <div
                className="ratio ratio-16x9"
                style={{ minHeight: "200px", maxHeight: "350px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625953805!2d85.29111341259794!3d27.708955944427607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1709909477257!5m2!1sen!2sus"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="My Location"
                  className="w-100 h-100"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
