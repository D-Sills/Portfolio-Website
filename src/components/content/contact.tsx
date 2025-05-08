'use client';

import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
      
      {/* Left – Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted! (not wired up yet)");
        }}
        className="flex-1 space-y-6 text-sm font-mono"
      >

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block mb-1 text-xs uppercase text-base-content/60">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="w-full p-2 rounded-md bg-base-200 border border-base-300 placeholder:text-base-content/40 focus:outline-none focus:ring-2 focus:ring-accent transition"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-1 text-xs uppercase text-base-content/60">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full p-2 rounded-md bg-base-200 border border-base-300 placeholder:text-base-content/40 focus:outline-none focus:ring-2 focus:ring-accent transition"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block mb-1 text-xs uppercase text-base-content/60">
            Message
          </label>
          <textarea
            id="message"
            required
            placeholder="What’s up?"
            rows={5}
            className="w-full p-2 rounded-md bg-base-200 border border-base-300 placeholder:text-base-content/40 focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="bg-accent hover:bg-accent/80 text-white text-sm px-4 py-2 rounded font-bold shadow transition-all"
          >
            <span className="font-mono">send it 🚀</span>
          </button>
        </div>

        <p className="text-xs text-base-content/50 italic mt-2">
          I usually reply within a day or two — thanks for reaching out!
        </p>
      </form>

      {/* Divider (desktop only) */}
      <div className="hidden md:block w-px bg-base-300" />

      {/* Right – Contact Info */}
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-content text-xl" />
          <a href="mailto:DarrSills@gmail.com" className="text-base text-base-content hover:text-primary transition underline">
            DarrSills@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-content text-xl" />
          <a href="tel:+353894222561" className="text-base text-base-content hover:text-primary transition underline">
            +353 89 422 2561
          </a>
        </div>

        <div className="flex items-center gap-4">
          <FaGithub className="text-content text-xl" />
          <a href="https://github.com/D-Sills" target="_blank" className="text-base text-base-content hover:text-primary transition underline">
            github.com/D-Sills
          </a>
        </div>
      </div>
    </div>
  );
}
