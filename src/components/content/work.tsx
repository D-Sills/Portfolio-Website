'use client';

import React from 'react';

export default function Work() {
  return (
    <div className="space-y-8 text-sm">
      {/* Call to Action */}
      <div className="bg-base-200 text-base-content p-4 rounded-md shadow-sm border border-base-300">
        <p>
          <strong>Currently open to work inquiries!</strong><br />
          I&aposm a full-stack developer with a background in game dev, web dev, and a love for clean tools and UIs.
          Feel free to reach out via <a href="mailto:hi@darrensills.dev" className="underline text-primary">email</a>.
        </p>
      </div>

      {/* Tools and Stacks */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-mono font-bold uppercase">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Unity', 'Unreal Engine', 'Git', 'AWS', 'Azure',
              'JupyterLab', 'MySQL', 'MongoDB', 'Docker', 'Postman',
              'Maya', 'Trello', 'Figma', 'Photoshop', 'Illustrator',
            ].map(tool => (
              <span key={tool} className="bg-base-300 px-3 py-1 rounded text-sm shadow-sm text-base-content/70">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-mono font-bold uppercase">Languages & Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'C#', 'C++', 'JavaScript', 'TypeScript', 'Kotlin',
              'Python', 'Rust', 'React', 'Next.js', '.NET Core',
              'Node.js', 'Express', 'Java', 'Ruby', 'Haskell',
              'PHP'
            ].map(lang => (
              <span key={lang} className="bg-base-300 px-3 py-1 rounded text-sm shadow-sm text-base-content/70">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Game Dev Projects */}
      <div>
        <h3 className="text-lg font-mono font-bold uppercase">Game Development</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Retro Dungeon Crawler (Unity):</strong> A fully custom first-person RPG with reusable systems, a companion website, poster, and full documentation.
          </li>
          <li>
            <strong>Modding Contributions:</strong> Worked on <em>P3R FeMC Project</em> and <em>Pokémon Luminescent Platinum</em> (sprite/UI contributions and scripting tweaks).
          </li>
          <li>
            <strong>Game Jams:</strong> Regular solo participant in small scope jam projects with a focus on polish and UX.
          </li>
        </ul>
      </div>

      {/* Web Dev Projects */}
      <div>
        <h3 className="text-lg font-mono font-bold uppercase">Web Development</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Film Discovery App (React + Firebase):</strong> Browse/search TMDb films, leave reviews, and sign in via Firebase Auth. Includes personalized feeds and secure login.
          </li>
          <li>
            <strong>This Portfolio Site:</strong> Designed and coded from scratch using Next.js, TailwindCSS, DaisyUI, Framer Motion, and subtle audio+UI polish.
          </li>
        </ul>
      </div>

      {/* Other */}
      <div>
        <h3 className="text-lg font-mono font-bold uppercase">Other Projects & Highlights</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Passionate about clean UI, animations, and developer tooling.</li>
          <li>Top-ranking player across several competitive online games; regular tournament participant.</li>
          <li>Helped out at SIT&aposs Global Learning Commons in Japan, assisting with language and outreach.</li>
        </ul>
      </div>
    </div>
  );
}
