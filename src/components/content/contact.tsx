'use client';

import { useRef, useState } from 'react';
import Image from 'next/image'
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaPhoneAlt, FaGithub } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { useAudio } from '@/hooks/audio-provider';
import { playSound } from '@/data/sounds';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [showCat, setShowCat] = useState(false);
  const { enabled: audioEnabled } = useAudio();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_h1hicqe',    // e.g. 'service_xxx'
        'template_oad0o0s',   // e.g. 'template_xxx'
        formRef.current,
        'fPCNTZvbLzCTWLEv0'     // e.g. 'user_xxx'
      );
      setStatus('sent');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };
  
  return (
    <div className="space-y-6 relative">
      {/* Contact Form */}
       <form
        ref={formRef}
        onSubmit={handleSubmit}
        
      >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
        {/* Left – Inputs */}
        <div className="space-y-4">
          {[
            { id: 'from_name', label: 'Your Name', placeholder: 'John Doe', type: 'text' },
            { id: 'reply_to', label: 'Your Email', placeholder: 'you@example.com', type: 'email' },
            { id: 'subject', label: 'Subject', placeholder: 'Hello!', type: 'text' },
          ].map(({ id, label, placeholder, type }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-xs uppercase text-base-content/60 mb-1">
                {label}
              </label>
              <input
                id={id}
                name={id}
                type={type}
                required
                placeholder={placeholder}
                className="w-full bg-base-300 px-3 py-2 rounded border border-base-100 focus:outline-none focus:ring-2 focus:ring-accent text-base-content"
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
            name="message"
            required
            placeholder="Hi Darren, you're so handsome and talented!"
            rows={8}
            className="flex-grow bg-base-300 px-3 py-2 rounded border border-base-100 resize-none focus:outline-none focus:ring-2 focus:ring-accent text-base-content"
          />
        </div>
        </div>

        {/* Footer row: icons on the left, submit on the right */}
        <div className="flex justify-between items-center mt-4">
          {/* Social icons */}
          <div className="flex gap-4 text-base-content/70">
            <a
              href="https://www.linkedin.com/in/darren-sills/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              <FaLinkedin size={18} />
            </a>
            <a href="tel:+353894222561" className="hover:text-accent">
              <FaPhoneAlt size={18} />
            </a>
            <a
              href="https://github.com/D-Sills"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              <FaGithub size={18} />
            </a>
          </div>
      
          {/* Submit button, right aligned */}
          <button
            type="submit"
            onMouseEnter={() => playSound('hover', audioEnabled)}
            onClick={() => playSound('click', audioEnabled)}
            disabled={status === 'sending'}
            className="bg-accent hover:bg-accent/80 text-white font-bold px-6 py-2 rounded shadow transition-all disabled:opacity-50"
          >
            {status === 'sending'
              ? 'Sending…'
              : status === 'sent'
              ? 'Sent! 🎉'
              : 'Submit'}
          </button>
        </div>
      
        {status === 'error' && (
          <p className="mt-2 text-xs text-red-500 text-center">
            Oops, something went wrong. Try again?
          </p>
        )}
      </form>
      
       <hr className="my-6" />

      {/* Cute Cat Reveal */}
      <div className="text-center">
        <motion.button
          onClick={() => {
            if (showCat) {
              playSound('angymeow', audioEnabled);
            }
            else {
              playSound('meow', audioEnabled);
            }
            setShowCat((prev) => !prev);
          }}
          onMouseEnter={() => playSound('hover', audioEnabled)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary hover:bg-primary/80 text-white font-semibold px-5 py-2 rounded-2xl shadow-lg transition-all flex items-center gap-2 mx-auto"
        >
          {showCat ? '🙈 Hide Cat' : '🐾 Show Cat!'}
        </motion.button>

        <AnimatePresence>
          {showCat && (
            <motion.figure
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="relative inline-block rounded-lg overflow-hidden mt-6"
            >
              <Image
                src="/images/cat.webp"
                alt="A cute cat"
                width={1920}
                height={1080}
                className="block w-full h-auto"
                priority
              />

              <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-xs italic p-2">
              Here’s Bobby XIV, isn&apos;t he cute?
              </figcaption>
            </motion.figure>
          )}
        </AnimatePresence>
      </div>
      
    </div>
  );
}
