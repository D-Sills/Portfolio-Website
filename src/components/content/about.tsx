import React from 'react';
import Image from 'next/image'

export default function About() {
  return (
    <div className="space-y-6">
      {/* Profile */}
      <div className="flex items-center space-x-4 ">
        <Image
          src="/images/avi.webp"
          alt="me :)"
          width={200}
          height={200}
          className="w-35 h-35 rounded-full border border-base-300"
          priority
          placeholder="blur"
        />
        <div>
          <h3 className="text-lg font-mono font-bold uppercase">
            Darren Sills <span className="text-primary/70 text-lg">ダレン・シルズ</span>
          </h3>
          <p className="text-sm">
            Full-Stack Developer
          </p>
          <p className="text-sm text-base-content/70">Wexford, Ireland</p>
        </div>
      </div>
      
      <hr />
    
      {/* What I Do */}
      <p className="text-sm">
        I’m a full-stack developer with a love for expressive UIs, efficient systems, and tools that feel good to use.
      </p>
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>Build responsive, accessible frontends using <span className="text-accent">React, Tailwind, and TypeScript</span></li>
        <li>Architect scalable backends with <span className="text-accent">Node.js, Firebase, .NET Core, and SQL/NoSQL databases</span></li>
        <li>Explore a wide tech stack: from <span className="text-accent">Kotlin & Rust</span> to <span className="text-accent">Unity, Unreal, and cloud infrastructure</span></li>
        <li>Blend polish with practicality—clean code, fast load times, and cozy presentation</li>
      </ul>
    
      {/* Education */}
      <div>
        <h3 className="text-lg font-mono font-bold uppercase">Education</h3>
        <div className="mt-1 border-l-2 border-base-300 pl-3 text-sm">
          Bachelor of Science in Computer Science, South East Technological University
          <br />
          <span className="text-xs text-base-content/50">2020-2024 (Graduated with First Class Honours)</span>
        </div>
        <div className="mt-1 border-l-2 border-base-300 pl-3 text-sm">
          Study Abroad Program, Shibaura Institute of Technology, Japan
          <br />
          <span className="text-xs text-base-content/50">2023</span>
        </div>
      </div>
      
      {/* Interests */}
      <div>
        <h3 className="text-lg font-mono font-bold uppercase">Interests</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Gunpla</li>
            <li>Cooking/baking (though I just picked up baking!)</li>
            <li>Game development and modding</li>
            <li>Competitive gaming & E-sports (top ranking player across multiple games & genres)</li>
            <li>Football</li>
        </ul>
      </div>
      
      {/*Languages */}
      <div>
        <h3 className="text-lg font-mono font-bold uppercase">Language Proficiency</h3>
        <div className="mt-1 border-l-2 border-base-300 pl-3 text-sm">I have native fluency in English, and can speak in conversational Japansese.</div>
      </div>
    </div>
  );
}