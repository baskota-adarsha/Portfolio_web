const AboutMe = () => {
  return (
    <div
      style={{ marginTop: "90px" }}
      className="min-h-screen text-white font-sans p-4 md:p-8 max-w-5xl mx-auto"
    >
      {/* About Section */}
      <div className="mb-12">
        <div className="inline-block bg-green-800 px-4 py-2 mb-6">
          <h2
            style={{ color: "yellow" }}
            className="text-3xl md:text-4xl font-bold text-green-400"
          >
            About
          </h2>
        </div>

        <div className="space-y-6" style={{ marginBottom: "40px" }}>
          <p
            style={{ fontSize: "1.2rem" }}
            className="text-lg md:text-xl lg:text-2xl leading-relaxed"
          >
            Hello, I'm Adarsha Baskota. I'm a full-stack developer and a
            computer science student. I have a passion for crafting seamless
            digital experiences. I thrive in the realms of React with type
            safety (TypeScript)., Node.js, Express. These are some of the
            technologies I have worked with:
          </p>

          <ul className="space-y-4 text-lg md:text-xl">
            <li className="flex items-baseline">
              <span style={{ fontSize: "1.2rem" }}>
                React, Redux, Framer Motion, React Native, TypeScript
              </span>
            </li>
            <li className="flex items-baseline">
              <span style={{ fontSize: "1.2rem" }}>
                Node.js, Express.js, MongoDB, Firebase, PostgreSQL, MySQL
              </span>
            </li>
            <li className="flex items-baseline">
              <span style={{ fontSize: "1.2rem" }}>
                HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, Shadcn,
                Material-UI
              </span>
            </li>
            <li className="flex items-baseline">
              <span style={{ fontSize: "1.2rem" }}>Git, GitHub</span>
            </li>
            <li className="flex items-baseline">
              <span style={{ fontSize: "1.2rem" }}> Netlify, Vercel</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <div className="inline-block bg-green-800 px-4 py-2 mb-6">
          <h2
            style={{ color: "lightgreen" }}
            className="text-3xl md:text-4xl font-bold text-green-400"
          >
            Experience
          </h2>
        </div>

        <p
          style={{ fontSize: "1.2rem" }}
          className="text-lg md:text-xl lg:text-2xl mb-6"
        >
          I have worked with various companies and clients to deliver
          high-quality software solutions. Here are some of the companies I've
          worked with:
        </p>

        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Global IME Bank Limited
          </h3>

          <ul className="space-y-4">
            <li className="flex items-baseline">
              <span
                style={{ fontSize: "1.2rem" }}
                className="text-lg md:text-xl"
              >
                Frontend Engineer
              </span>
            </li>
            <li className="flex items-baseline">
              <span
                style={{ fontSize: "1.2rem" }}
                className="text-lg md:text-xl"
              >
                Duration: ( Oct 2024-Jan 2025 )
              </span>
            </li>
            <li className="flex items-baseline">
              <span
                style={{ fontSize: "1.2rem" }}
                className="text-lg md:text-xl leading-relaxed"
              >
                Designed and built responsive, user-friendly interfaces for
                seamless user experiences while integrating APIs and developing
                user management systems, including authentication and onboarding
                flows. Collaborated on AI agent integrations, creating intuitive
                UIs to showcase their functionality, and improved frontend
                performance, accessibility, and scalability to meet user and
                business needs.
              </span>
            </li>
          </ul>
        </div>

        {/* You can add more experience entries here */}
      </div>
    </div>
  );
};

export default AboutMe;
