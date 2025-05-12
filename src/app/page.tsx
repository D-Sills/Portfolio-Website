// app/page.tsx
'use client';

import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AudioToggleButton from '@/components/audio-toggle-button';
import ThemeToggleButton from '@/components/theme-toggle-button';
import FolderButton from '@/components/folder-button';
import MusicPlayer from '@/components/music-player';
import Footer from '../components/footer';
import CVSticker from '../components/sticker';
import { FaUser as User, FaMailBulk as Mail, FaCode as Code } from 'react-icons/fa';
import FloatingPanel from '@/components/floating-panel';
import About from '@/components/content/about';
import Contact from '@/components/content/contact';
import Work from '@/components/content/work';

import { motion } from 'framer-motion';

export default function Home() {
  // State to manage the visibility of each window/modal
  const [activePanel, setActivePanel] = useState<null | 'about' | 'contact' | 'work'>(null);


  
  return (
    <>
    {/* 
      This div fills all space above the footer (flex-1), 
      centers its content, and is itself relative so we can absolutely position inside it.
    */}
     <div
      className="flex-1 flex flex-col items-center justify-start px-4 relative pt-[10vh] sm:pt-[8vh]"
      
    >
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* noise overlay */}
      <div className="absolute inset-0 bg-[url('/images/noise.jpg')] opacity-5 pointer-events-none" />

      {/* Start background music (muted by default) */}
      <MusicPlayer src="/sounds/BGM.mp3" volume={0.3} />
    
      {/* Top–left button group */}
      <div className="absolute top-4 left-4 flex space-x-2">
        <AudioToggleButton/>
        <ThemeToggleButton />
      </div>
      
      {/* Your centered hero/content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
        {/* animated background blob */}
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] 
                     -translate-x-1/2 -translate-y-1/2
                     bg-purple-500 rounded-full opacity-10 blur-[100px] -z-10"
  
        />
      
        
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-base-content">
          darren sills
        </h1>
        <p className="text-base-content/70 font-mono uppercase text-sm sm:text-md tracking-widest">
          <span className="block max-w-xs mx-auto">
            <Typewriter
              words={[
                "Full-stack developer.",
                "Designer's eye.",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </span>
        </p>

        
        {/* grid of big square buttons */}
        <div className="grid grid-cols-3 gap-3 px-4 justify-items-center">
          <FolderButton
            icon={<User size={32} />}
            label="about"
            onClick={() => setActivePanel('about')}
          />
          <FolderButton
            icon={<Code size={32} />}
            label="work"
            onClick={() => setActivePanel('work')}
          />
          <FolderButton
            icon={<Mail size={32} />}
            label="contact"
            onClick={() => setActivePanel('contact')}
          />
          {/* add more as needed */}
        </div>
        
      </div>
      </div>
      
      <CVSticker />
      
       {/* Footer is now _inside_ this same container,
          absolutely pinned to the bottom */}
      <Footer className="absolute bottom-2 left-0 w-full"/>
    </div>
    
    
    <FloatingPanel open={activePanel === 'about'} onClose={() => setActivePanel(null)} title="~/about" >
      <About />
    </FloatingPanel>
    
    <FloatingPanel open={activePanel === 'work'} onClose={() => setActivePanel(null)} title="~/work">
      <Work />
    </FloatingPanel>
    
    <FloatingPanel open={activePanel === 'contact'} onClose={() => setActivePanel(null)} title="~/contact">
      <Contact />
    </FloatingPanel>
    
    </>
  );
}
