'use client';

import { FaLinkedin, FaPhoneAlt, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="space-y-6 relative">
      {/* Info Box */}
      <div className="bg-base-300 rounded-lg p-4 text-sm text-base-content">
        <p className="font-bold mb-1">Currently open to work inquiries!</p>
        <p>
          I’m a full-stack developer with a background in game dev, web dev, and a love for clean
          tools and UIs. Feel free to reach out via{' '}
          <a href="mailto:darrsills@gmail.com" className="text-accent underline">
            email
          </a>
          .
        </p>
      </div>
    
      {/* Header with social icons */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-sm uppercase text-base-content/70">Work Email</h3>
          <a
            href="mailto:darrsills@gmail.com"
            className="text-accent hover:underline text-sm font-mono"
          >
            darrsills@gmail.com
          </a>
        </div>
        <div className="flex gap-4 text-base-content/70">
          <a href="https://www.linkedin.com/in/darren-sills/" target="_blank" className="hover:text-accent">
            <FaLinkedin size={18} />
          </a>
          <a href="tel:+353894222561" className="hover:text-accent">
            <FaPhoneAlt size={18} />
          </a>
          <a href="https://github.com/D-Sills" target="_blank" className="hover:text-accent">
            <FaGithub size={18} />
          </a>
        </div>
      </div>

      {/* Contact Form Grid */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Form submitted!');
          handleSubmit(e);
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono"
      >
        {/* Left – Inputs */}
        <div className="space-y-3">
          {[
            { id: 'name', label: 'Your name', placeholder: 'Your name' },
            { id: 'email', label: 'Email', placeholder: 'you@example.com' },
            { id: 'subject', label: 'Subject', placeholder: 'Subject' },
          ].map(({ id, label, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-xs uppercase text-base-content/60 mb-1">
                {label}
              </label>
              <input
                id={id}
                type={id === 'email' ? 'email' : 'text'}
                required
                placeholder={placeholder}
                className="w-full bg-base-300 px-3 py-2 rounded border border-base-100 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          ))}
        </div>

        {/* Right – Message + Submit */}
        <div className="flex flex-col h-full">
          <label htmlFor="message" className="block text-xs uppercase text-base-content/60 mb-1">
            Message
          </label>
          <textarea
            id="message"
            required
            placeholder="What’s up?"
            rows={8} // matches approx 3 stacked inputs
            className="flex-grow bg-base-300 px-3 py-2 rounded border border-base-100 resize-none focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <div className="mt-4 self-end">
            <button
              type="submit"
              className="bg-accent hover:bg-accent/80 text-white font-bold px-5 py-2 rounded shadow transition-all"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

// function to handle form submission
async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());
  console.log('Form submitted:', data);
  
  // Here you can send the data to your server or API
  
  
}
