import React from 'react';
import SkillTag from '@/components/skill-tag';
import ProjectCard from '@/components/project-card';
import GameDevProjects from '@/data/game-dev-projects';
import WebDevProjects from '@/data/web-dev-projects';
import OtherProjects from '@/data/other-projects';
import { Project } from '@/data/project';
import { useState } from 'react';

export default function Work() {
  const combined = [...GameDevProjects, ...WebDevProjects, ...OtherProjects];
  
  function getAllTags(projects: Project[]): string[] {
    const tagSet = new Set<string>();
    projects.forEach((proj) => proj.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const allTags = getAllTags(combined);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const filteredProjects = selectedTags.length === 0
    ? combined
    : combined.filter((project) =>
         selectedTags.every((tag) => project.tags.includes(tag))
    );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };
  
  return (
    <div className="space-y-6 text-sm">
      {/* intro */}
      <div className="bg-base-200 text-base-content p-4 rounded-md shadow-sm border border-base-300">
        <p>
          Check out my <a href="https://github.com/D-Sills" className="underline text-accent" target="_blank" rel="noopener noreferrer">GitHub</a> for more projects and code samples! 
          There&apos;s lots more projects there that I can&apos;t visually showcase here.
        </p>
      </div>

      {/* Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-mono font-bold uppercase">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Unity', 'Unreal Engine', 'Git', 'AWS',
              'JupyterLab', 'MySQL', 'MongoDB', 'Docker', 'Postman',
              'Blender', 'Trello', 'Figma', 'Photoshop', 'Illustrator',
            ].map((tool, i) => (
              <SkillTag key={tool} text={tool} soundIndex={i} onClick={() => toggleTag(tool)} selected={selectedTags.includes(tool)} />
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
              <SkillTag key={lang} text={lang} soundIndex={i} onClick={() => toggleTag(lang)} selected={selectedTags.includes(lang)} />
            ))}
          </div>
        </div>
      </div>
   
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {
          filteredProjects.map((project, i) => (
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
