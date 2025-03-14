import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
      <div id="aboutme">
        <div
          style={{ display: "flex", textAlign: "center", marginTop: "139px" }}
        >
          <h1
            style={{
              marginLeft: "490px",
              fontSize: "55px",
              color: "white",
              textAlign: "center",
            }}
          >
            ABOUT
          </h1>
          <h1
            style={{
              marginLeft: "30px",
              fontSize: "55px",
              color: "rgb(7, 136, 255)",
              textAlign: "center",
            }}
          >
            ME
          </h1>
        </div>

        <div
          style={{ maxWidth: "700px", marginLeft: "80px", marginTop: "70px" }}
        >
          <p style={{ fontSize: "24px", color: "white" }}>
            I am Adarsha Baskota. I am currently doing my bachelor's in computer
            science. I am currently improving my skills in React JS and want to
            improve more. After React, I want to explore more. So before moving
            to the next programming language, I want to make sure I am decent at
            React. Some of the skills that I am familiar with are:
          </p>
        </div>

        <div>
          <FaLaptopCode
            style={{
              fontSize: "240px",
              marginLeft: "950px",
              marginTop: "-280px",
              color: "white",
            }}
          />
        </div>

        <div
          style={{
            marginLeft: "130px",
            marginTop: "90px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
            gap: "90px", // Space between grid items
            justifyContent: "center", // Center items horizontally
          }}
        >
          <div className="icon-container">
            <SiMongodb
              className="mongodb-icon"
              style={{ fontSize: "80px", color: "#4DB33D" }} // MongoDB Green
            />
          </div>
          <div className="icon-container">
            <SiExpress
              className="express-icon"
              style={{ fontSize: "80px", color: "#000000" }} // Express Black
            />
          </div>
          <div className="icon-container">
            <FaNodeJs
              className="nodejs-icon"
              style={{ fontSize: "80px", color: "#8CC84B" }} // Node.js Green
            />
          </div>
          <div className="icon-container">
            <FaReact
              className="react-icon"
              style={{ fontSize: "80px", color: "#61DBFB" }}
            />
          </div>
          <div className="icon-container">
            <IoLogoJavascript
              className="js-icon"
              style={{ fontSize: "80px", color: "#F7DF1E" }} // JavaScript Yellow
            />
          </div>
          <div className="icon-container">
            <FaBootstrap
              className="bootstrap-icon"
              style={{ fontSize: "80px", color: "#563D7C" }} // Bootstrap Purple
            />
          </div>
          <div className="icon-container">
            <FaHtml5
              className="html-icon"
              style={{ fontSize: "80px", color: "#E34F26" }}
            />{" "}
          </div>
          <div className="icon-container">
            <FaCss3
              className="css-icon"
              style={{ fontSize: "80px", color: "#1572B6" }}
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
