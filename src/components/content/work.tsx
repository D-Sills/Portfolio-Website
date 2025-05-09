'use client';

import React from 'react';
import SkillTag from '@/components/skill-tag';
import ProjectCard from '@/components/project-card';
import GameDevProjects from '@/data/game-dev-projects';
import WebDevProjects from '@/data/web-dev-projects';

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
            ].map((tool, i) => (
              <SkillTag key={tool} text={tool} soundIndex={i} />
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
            ].map((lang, i) => (
              <SkillTag key={lang} text={lang} soundIndex={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Game Dev Projects */}
      <div>
        <h3 className="text-lg font-mono font-bold uppercase">Game Development</h3>
        <p className="text-sm text-base-content/70">
          I&apos;ve worked on a variety of game projects, focusing on custom tools and modular components.
          Here are some highlights:
        </p>
      </div>
      
      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {GameDevProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            images={project.images}
            repoLink={project.repoLink}
          />
        ))}
      </div>

      {/* Web Dev Projects */}
      <div>
        <h3 className="text-lg font-mono font-bold uppercase">Web Development</h3>
        <p className="text-sm text-base-content/70">
          I have experience in building web applications with a focus on user experience and performance.
          Here are some of my projects:
        </p>
      </div>
      
      {/* Project Cards (Web Dev) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {WebDevProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            images={project.images}
            repoLink={project.repoLink}
          />
        ))}
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
