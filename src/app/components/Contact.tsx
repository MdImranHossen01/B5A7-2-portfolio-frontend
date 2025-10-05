"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(null), 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
          setTimeout(() => setStatus(null), 3000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-6">
        {/* ✨ The extra div with "max-w-6xl" was removed from here */}

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Get In Touch
        </h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out through any of these channels.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Contact Info */}
          <div className="lg:w-1/2 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-700/50 flex flex-col">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Contact Information
            </h3>

            <div className="space-y-6 flex-grow">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  {/* Phone Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-300">WhatsApp/Call</h4>
                  <a
                    href="https://wa.me/8801919011101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    +880 1919 011101
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  {/* Email Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-300">Email</h4>
                  <a
                    href="mailto:imranshuvo101@gmail.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    imranshuvo101@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  {/* Location Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-300">Address</h4>
                  <p className="text-gray-300">
                    Nabokalosh, Matlabgonj (3640)
                    <br />
                    Matlab, Chandpur
                    <br />
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-700/50 flex flex-col">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Send Me a Message
            </h3>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col flex-grow"
            >
              {/* Name Input */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full p-4 bg-gray-700/50 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full p-4 bg-gray-700/50 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-6 flex-grow flex flex-col">
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full flex-grow p-4 bg-gray-700/50 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`relative group w-full md:w-auto mx-auto px-8 py-4 font-bold rounded-lg transition-all duration-300 ${
                    status === "sending"
                      ? "bg-cyan-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/30"
                  }`}
                >
                  {status === "sending" ? (
                    <>
                      <span className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full inline-block mr-2"></span>
                      Sending...
                    </>
                  ) : status === "success" ? (
                    "Sent Successfully! ✓"
                  ) : status === "error" ? (
                    "Failed to Send ✗"
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
