//components/content/contact.tsx
'use client';

import React from 'react';

export default function Contact() {
  return (
    <form
  onSubmit={(e) => {
    e.preventDefault();
    // Handle sending logic here (API/email service/etc.)
    alert("Form submitted! (not wired up yet)");
  }}
  className="space-y-4 text-sm max-w-md w-full"
>
<h2 className="text-lg sm:text-xl font-mono mb-4">
  Let's get in touch — I’d love to hear from you! <span className="inline-block animate-wiggle">📮</span>
</h2>

  {/* Name Field */}
  <div>
    <label htmlFor="name" className="block mb-1 font-mono text-xs uppercase text-base-content/60">
      Your Name
    </label>
    <input
      id="name"
      type="text"
      required
      placeholder="Jane Doe"
      className="w-full p-2 rounded-md bg-base-200 border border-base-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
    />
  </div>

  {/* Email Field */}
  <div>
    <label htmlFor="email" className="block mb-1 font-mono text-xs uppercase text-base-content/60">
      Email
    </label>
    <input
      id="email"
      type="email"
      required
      placeholder="you@example.com"
      className="w-full px-3 py-2 bg-base-200 border border-base-300 rounded text-base-content placeholder:text-base-content/40 font-mono focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>

  {/* Message Field */}
  <div>
    <label htmlFor="message" className="block mb-1 font-mono text-xs uppercase text-base-content/60">
      Message
    </label>
    <textarea
      id="message"
      required
      placeholder="What's up?"
      rows={5}
      className="w-full p-2 rounded-md bg-base-200 border border-base-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
    />
  </div>

  {/* Submit Button */}
  <div className="pt-2">
  <button
  className="bg-primary hover:bg-primary/80 text-white text-sm px-4 py-2 rounded font-bold shadow transition-all"
>
  <span className="font-mono">send it 🚀</span>
</button>
  </div>

  <p className="text-xs text-base-content/50 italic mt-4 font-mono">
  I usually reply within a day or two. Thanks for reaching out!
</p>
</form>
  );
}