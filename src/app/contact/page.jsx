"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your message has been received. We will contact you soon.`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      
      {/* Call to Action (CTA) Section 🔔 */}
      <section className="py-2 bg-green-400 text-white text-center rounded-lg mx-4 md:mx-0 font-[sans-serif]">
        <h2 className="lg:text-2xl sm:text-xl font-bold mb-2">
          Ready to start your wellness journey? 🌿
        </h2>
        <button className="bg-white hover:cursor-pointer text-green-700 px-4 py-1 rounded-2xl font-semibold hover:bg-green-100 transition">
          Shop Now
        </button>
      </section>

      {/* Contact Us Form */}
      <section className="py-12 bg-gradient-to-r from-green-200 via-green-50 to-green-300 font-[sans-serif]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-start">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
              📩 Contact Us
            </h2>
            <p className="text-gray-700 mb-6">
              Have any questions or want to know more about our herbal products
              and Ayurvedic remedies? Reach out to us and our expert team will
              respond promptly. We are committed to providing you safe,
              ayurvedic, natural, and effective solutions for your health and
              wellness.
            </p>
            <p className="text-gray-700">
              You can also call us at{" "}
              <span className="font-semibold">+91-1234567890</span>
              <br />
              or email at{" "}
              <span className="font-semibold">info@herbalcure.com</span>
            </p>
          </div>

          {/* Right Form */}
          <div className="md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-green-50 p-8 rounded-2xl shadow-md space-y-4"
            >
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-2 font-[sans-serif] bg-green-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <a href="/" className="flex justify-center items-center gap-2">
              <img
                className="w-16 h-16"
                src="https://png.pngtree.com/png-vector/20230320/ourmid/pngtree-herbal-logo-vector-png-image_6658053.png"
                alt="Herbal Cure"
              />
              <span className="text-2xl font-bold">Herbal Cure</span>
            </a>

            <ul className="text-lg flex flex-col md:flex-row items-center justify-center gap-7 md:gap-12 py-4 border-b border-gray-200 font-semibold">
              <li>
                <a href="/" className="text-gray-800 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-800 hover:text-gray-900"
                >
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-800 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-800 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-900">
                  Support
                </a>
              </li>
            </ul>

            <div className="flex justify-center items-center space-x-10 font-semibold mb-6">
              {/* Social Icons (You can keep your SVGs here) */}
            </div>

            <span className="text-lg font-bold text-gray-800 block">
              © Herbal Cure 2025, All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
