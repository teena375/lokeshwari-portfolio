import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-[#0f172a] text-white font-sans scroll-smooth min-h-screen overflow-x-hidden">

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-blue-500 z-50 animate-pulse"></div>

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-40 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Lokeshwari
          </h1>

          <ul className="hidden md:flex gap-6">
            {[
              "Home",
              "About",
              "Education",
              "Projects",
              "Research",
              "Certifications",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="hover:text-purple-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Home Section (No Photo) */}
      <section
        id="Home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          GUJJALA LOKESHWARI
        </motion.h1>

        <p className="mt-4 text-lg text-gray-300">
          Aspiring Software Engineer | AI/ML Enthusiast | Python Developer
        </p>

        <p className="mt-4 max-w-xl text-gray-400">
          Final-year Computer Science student passionate about building intelligent systems, modern web applications, and solving real-world problems through AI.
        </p>

        <div className="flex gap-4 mt-6 flex-wrap justify-center">
          <a
            href="#Projects"
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition shadow-lg"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download="Gujjala_Lokeshwari_Resume.pdf"
            className="px-6 py-2 rounded-xl border border-purple-400 hover:bg-purple-600 hover:scale-105 transition shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="About" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>

          <p className="text-gray-300">
            I am a passionate Computer Science student with strong skills in Python, FastAPI, React.js, Machine Learning, Deep Learning, and problem solving. I enjoy creating AI products and scalable web applications.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Python",
              "FastAPI",
              "React.js",
              "Machine Learning",
              "Deep Learning",
              "TensorFlow",
              "Keras",
              "PyTorch",
              "Pandas",
              "NumPy",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education */}
      <section id="Education" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Education</h2>

        <div className="space-y-6">
          {[
            {
              title: "BTech Computer Science Engineering",
              place: "Bhilai Institute of Technology, Raipur",
              year: "2022 - 2026",
              extra: "CGPA: 8.0/10",
            },
            {
              title: "12th Standard (CBSE)",
              place: "Bharat Mata Senior Secondary School",
              year: "2021 - 2022",
              extra: "Score: 62%",
            },
            {
              title: "10th Standard (CBSE)",
              place: "Bharat Mata Senior Secondary School",
              year: "2019 - 2020",
              extra: "Score: 70%",
            },
          ].map((edu, i) => (
            <div
              key={i}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/20"
            >
              <h3 className="text-xl font-semibold">{edu.title}</h3>
              <p className="text-gray-400">{edu.place}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
              {edu.extra && <p className="text-purple-400">{edu.extra}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="Projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI-Based Fake Job Posting Detection",
              desc: "Built using LSTM + BERT with real-time predictions and PDF/Image upload support.",
            },
            {
              title: "Skin Disease Prediction using CNN",
              desc: "Multi-class classification with preprocessing and real-time prediction.",
            },
            {
              title: "Used Car Price Prediction",
              desc: "XGBoost model with 15% MAE improvement and feature engineering.",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/20 hover:border-purple-500 transition"
            >
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-gray-400 mt-2">{proj.desc}</p>

              <a
                href="https://github.com/teena375"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-purple-400 hover:text-blue-400 transition"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section id="Research" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Research Papers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Skin Disease Prediction Model Using CNN",
              link: "https://ijrpr.com/uploads/V6ISSUE12/IJRPR57012.pdf",
            },
            {
              title: "AI Fake Job Posting Detector",
              link: "https://ijrpr.com/uploads/V7ISSUE4/IJRPR61548.pdf",
            },
          ].map((paper, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold mb-4">{paper.title}</h3>
              <div className="flex gap-4 flex-wrap">
                <a href={paper.link} target="_blank" rel="noreferrer" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                  View Paper
                </a>
                <a href={paper.link} download className="px-4 py-2 border border-purple-400 rounded-lg">
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="Certifications" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold">Python Programming</h3>
          </div>
          <div className="bg-white/10 p-6 rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold">MERN Stack Development</h3>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="Contact" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <form
          action="https://formsubmit.co/gujjalalokeshwari@gmail.com"
          method="POST"
          className="bg-white/10 backdrop-blur-lg p-8 rounded-xl"
        >
          <input type="text" name="name" placeholder="Name" required className="w-full p-3 mb-4 rounded bg-black/30" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-3 mb-4 rounded bg-black/30" />
          <textarea name="message" placeholder="Message" required className="w-full p-3 mb-4 rounded bg-black/30"></textarea>

          <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg w-full">
            Send Message
          </button>

          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-400 flex-wrap">
            <a href="https://github.com/teena375" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/gujjala-lokeshwari-5977222a7/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:gujjalalokeshwari@gmail.com">Email</a>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-white/10">
        © 2026 Gujjala Lokeshwari. All rights reserved.
      </footer>
    </div>
  );
}