//components/content/work.tsx
'use client';

import React from 'react';

export default function Work() {
  return (
    <div className="space-y-8 text-sm">
    {/* Call to Action */}
    <div className="bg-yellow-100 text-yellow-900 p-4 rounded-md shadow-sm border border-yellow-300">
      <p>
        <strong>Accepting work offers via my </strong>
        <a href="mailto:hi@youremail.com" className="underline text-orange-500">work email</a>!
        <br />
        I do illustration, animation, web design, and web/app development. :)
      </p>
    </div>
  
    {/* Tools and Dev Stacks */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Tools */}
      <div>
        <h3 className="text-lg font-mono font-bold uppercase mb-2">Tools</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Adobe Photoshop', 'Adobe Animate', 'Clip Studio Paint', 'Unity 2D/3D',
            'Adobe Illustrator', 'Adobe Premiere', 'After Effects',
            'Blender', 'OpenToonz', 'InDesign', 'Figma',
          ].map(tool => (
            <span key={tool} className="bg-base-200 px-3 py-1 rounded shadow-sm text-sm">
              {tool}
            </span>
          ))}
        </div>
      </div>
  
      {/* Development */}
      <div>
        <h3 className="text-lg font-mono font-bold uppercase mb-2">Development</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'HTML/CSS', 'JavaScript', 'Python', 'C', 'C++', 'C#',
            'React', 'Next.js', 'Gatsby',
          ].map(dev => (
            <span key={dev} className="bg-base-200 px-3 py-1 rounded shadow-sm text-sm">
              {dev}
            </span>
          ))}
        </div>
      </div>
    </div>
  
    {/* Animation Projects */}
    <div>
      <h3 className="text-lg font-mono font-bold uppercase mb-4">Animation</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Example embed */}
        <iframe
          className="w-full aspect-video rounded shadow-md"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
          title="Candy: a Zelink fan animation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <iframe
          className="w-full aspect-video rounded shadow-md"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
          title="Of the Wild"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
  );
}