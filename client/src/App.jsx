import "./App.css";
import Home from "./components/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import BlogSection from "./pages/BlogSection.tsx";
import BlogDetail from "./pages/BlogDetail.tsx";
import ContactMe from "./pages/ContactMe.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import the CSS

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar should be placed here, outside <Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/blogs" element={<BlogSection />} />
        <Route path="/blogDetail/:id" element={<BlogDetail />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
