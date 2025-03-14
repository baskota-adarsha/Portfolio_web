import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="header_box">
          <h1
            style={{
              marginLeft: "290px",
              fontSize: "50px",
              marginTop: "170px",
              color: "lightgreen",
            }}
          >
            <span className="glow-underline"> HEY! I’M ADARSHA BASKOTA</span>
          </h1>
          <p
            className="para hhh"
            style={{
              marginLeft: "120px",
              fontSize: "38px",
              marginTop: "50px",
              color: "rgb(201, 255, 7)",
            }}
          >
            <span style={{ color: "rgb(247, 255, 7)" }} className="ran para">
              I'M A Full Stack Developer and a Computer Science Student
            </span>{" "}
            {""}
          </p>
        </div>
        <div
          style={{ maxWidth: "700px", marginLeft: "80px", marginTop: "70px" }}
        ></div>
        <div className="button_box">
          {" "}
          <Link
            to="/aboutme"
            style={{
              marginLeft: "450px",
              marginTop: "-70px",
              color: "white",
              fontWeight: "bolder",
              fontSize: "1.2em",
              borderRadius: "20px",
              backgroundColor: "#007bff",
              transition: "background-color 0.3s ease",
              border: "none",
              padding: "10px 20px",
            }}
            className="btn btn-info about_me"
            onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.backgroundColor = "#0a1633";
            }}
            onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.backgroundColor = "#007bff";
            }}
          >
            About Me
          </Link>
          <a
            href="/resume.pdf" // Correct path to the PDF
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
            style={{
              marginLeft: "30px",
              marginTop: "-70px",
              color: "white",
              fontWeight: "bolder",
              fontSize: "1.2em",
              borderRadius: "20px",
              backgroundColor: "#007bff",
              transition: "background-color 0.3s ease",
              border: "none",
              padding: "10px 20px",
              textDecoration: "none",
            }}
            className="btn btn-info resume"
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#0a1633";
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#007bff";
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
