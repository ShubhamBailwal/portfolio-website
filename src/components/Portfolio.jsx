import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import { useForm, ValidationError } from "@formspree/react";

const Portfolio = () => {
  const name = "Shubham Bailwal";
  const skills = ["HTML", "CSS", "JavaScript", "WordPress", "React"];
  const [theme, setTheme] = useState("dark");
  const [state, handleSubmit] = useForm("xrbkdnge");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo">Portfolio</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      <main className="container main-content">
        <section className="intro">
          <p>
            Hi, I'm <span className="highlight">{name}</span>, a passionate Web Developer.
          </p>
        </section>

        <section id="skills" className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>About Me</h2>
          <p>
            I'm a Frontend Web Developer with a focus on building clean, responsive, and accessible websites. I love turning ideas into real web experiences.
          </p>
        </section>

        <section id="services" className="services-section">
          <h2>What I Do</h2>
          <ul className="services-list">
            <li>Responsive Website Design</li>
            <li>Frontend Development with React</li>
            <li>WordPress Development & Customization</li>
            <li>Website Maintenance</li>
          </ul>
        </section>

        <section id="certifications" className="cert-section">
          <h2>Certifications</h2>
          <ul className="cert-list">
            <li>Responsive Web Design – freeCodeCamp</li>
            <li>JavaScript Essentials – Coursera</li>
            <li>WordPress Theme Development – Udemy</li>
          </ul>
        </section>

        <section className="testimonials-section">
          <h2>Testimonials</h2>
          <blockquote>
            "Shubham is an excellent developer—delivers clean code on time!"<br />
            <cite>— Client or Peer</cite>
          </blockquote>
        </section>

        <section className="contact-section" id="contact">
          <h2>Contact Me</h2>
          {state.succeeded ? (
            <p className="success-message">✅ Message sent! I'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Write your message here..."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
