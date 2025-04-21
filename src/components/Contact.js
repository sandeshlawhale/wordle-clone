import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0hf5m06",
        "template_8hzn70m",
        form.current,
        "Don4v2LJU1wSMXIyk"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          toast.success("Your kind message reached us! 😊");
          e.target.reset();
        },
        (error) => {
          console.error("Error sending message:", error.text);
          toast.error("Oops! Something went wrong. Please try again.");
        }
      );
    setLoading(false);
  };

  return (
    <div className="contact-container">
      <div className="contact-options">
        <article className="contact-option">
          <a
            href="https://github.com/sandeshlawhale"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="git-icon" />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/lawhalesandesh/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="git-icon" />
            LinkedIn
          </a>
        </article>
        <div className="privacy">
          <h5>Privacy Note:</h5>
          <p>
            We respect your privacy. Any information shared with us will be kept
            confidential and used solely for the purpose of responding to your
            inquiry
          </p>
        </div>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input
            type="email"
            name="email"
            placeholder="xyz@gamil.com"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message..!"
            rows="7"
            required
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
