import React from 'react';
import SkillTag from '@/components/skill-tag';
import ProjectCard from '@/components/project-card';
import GameDevProjects from '@/data/game-dev-projects';
import WebDevProjects from '@/data/web-dev-projects';
import OtherProjects from '@/data/other-projects';

export default function Work() {
  const combined = [...GameDevProjects, ...WebDevProjects, ...OtherProjects];
  
  return (
    <div className="space-y-6 text-sm">
      {/* Call to Action */}
      <div className="bg-base-200 text-base-content p-4 rounded-md shadow-sm border border-base-300">
        <p>
          <strong>Currently open to work inquiries!</strong><br />
          I’m a full-stack developer with a background in game dev, web dev, and a love for clean tools and UIs.
          Feel free to reach out via <a href="mailto:hi@darrensills.dev" className="underline text-accent">email</a>.
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
   
      {/* Project Cards (Web Dev) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {
          combined.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              tags={project.tags}
              images={project.images}
              repoLink={project.repoLink}
            />
          ))
        }
      </div>

      {/* Other */}
      <div>
        <h3 className="text-lg font-mono font-bold uppercase">Other Projects & Highlights</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Helped out at SIT Global Learning Commons in Japan, assisting with language and outreach.</li>
          <li>Contributed to open-source projects on GitHub, such as P3R FemC project and Pokemon Luminescent.</li>
          <li>This site, built with Next.js, Tailwind CSS, and TypeScript :)</li>
        </ul>
      </div>
    </div>
  );
}
