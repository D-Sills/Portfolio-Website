//components/content/about.tsx
'use client';

import React from 'react';
import Image from 'next/image'

export default function About() {
  return (
    <div className="space-y-6">
      {/* Profile */}
      <div className="flex items-center space-x-4">
        <Image
          src="/images/avi.jpg"
          alt="Your avatar"
          width={200}
          height={200}
          className="w-35 h-35 rounded-full border border-base-300"
        />
        <div>
          <h3 className="text-lg font-mono font-bold uppercase">
            Darren Sills <span className="text-primary/70 text-lg">ダレン・シルズ</span>
          </h3>
          <p className="text-sm text-base-content/70">Freelance UI developer & illustrator</p>
          <p className="text-sm">
            Former frontend dev at{" "}
            <a href="https://example.com" target="_blank" className="textprimary underline">
              SoftGrove
            </a>
          </p>
        </div>
      </div>
      
      <hr />
    
      {/* What I Do */}
      <p className="text-sm">hi! i'm darren, a developer with a keen interest in game dev, web dev and all things ui. i...</p>
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>
          create <span className="text-accent">illustrated interfaces</span> and pixel art
        </li>
        <li>
          work with <span className="text-accent">React & Tailwind</span> for fast frontends
        </li>
        <li>
          write <span className="text-accent">tiny tools</span> for artists and friends
        </li>
        <li>enjoy clean code and cozy layouts</li>
      </ul>
    
      {/* Contact */}
      <p className="text-sm">
        want to work together? drop me a message at{" "}
        <a href="mailto:you@example.com" className="text-accent underline">
          hi@darrensills.dev
        </a>{" "}
        :)
      </p>
    
      <hr />
    
      {/* Education */}
      <div>
        <h3 className="text-lg font-mono font-bold uppercase">Education</h3>
        <div className="mt-1 border-l-2 border-base-300 pl-3 text-sm">
          Bachelor of Science in Computer Science, South East Technological University
          <br />
          <span className="text-xs text-base-content/50">(Graduated Cum Laude 2024)</span>
        </div>
        <div className="mt-1 border-l-2 border-base-300 pl-3 text-sm">
          Study Abroad Program, Shibaura Institute of Technology, Japan
          <br />
          <span className="text-xs text-base-content/50">(2023)</span>
        </div>
      </div>
      
      <hr />
      
      {/* Interests */}
      <div>
        <h3 className="text-lg font-mono font-bold uppercase">Interests</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
            <li>2D/3D animation</li>
            <li>pixel art</li>
            <li>game design</li>
            <li>web development</li>
            <li>UI/UX design</li>
        </ul>
      </div>
      
      <hr />
      
      {/*Languages */}
      <div>
        <h3 className="text-lg font-mono font-bold uppercase">Language Proficiency</h3>
        <div className="mt-1 border-l-2 border-base-300 pl-3 text-sm">i have native fluency in English, and can speak in conversational Japansese.</div>
      </div>
    </div>
  );
}