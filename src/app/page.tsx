'use client';


import { Typewriter } from 'react-simple-typewriter';
import ThemeToggleButton from '@/components/theme-toggle-button';
import FolderButton from '@/components/folder-button';
import MusicPlayer from '@/components/music-player';
import { FaFilePdf } from 'react-icons/fa';
import { FaUser as User, FaMailBulk as Mail, FaCode as Code } from 'react-icons/fa';
import FloatingPanel from '@/components/floating-panel';
import About from '@/components/content/about';
import Contact from '@/components/content/contact';
import Work from '@/components/content/work';
import Taskbar from '../components/taskbar';
import Clock from '@/components/clock';
import MediaPlayer from '@/components/media-player';
import { WindowManager } from '@/hooks/window-manager';
import FileIconButton from '@/components/file-icon-button';

export default function Home() {
  // State to manage the visibility of each window/modal
  const {
      windows, openWindow, closeWindow, minimizeWindow, selectWindow,
      toggleMaximize, bringToFront, setPosition, setSize, recenter,
    } = WindowManager(['about', 'work', 'contact']);

  return (
    <>
    {/* 
      centers content
    */}
     <div
      className="flex-1 flex flex-col items-center justify-start px-4 relative pt-[10vh] sm:pt-[8vh]"
    >
    
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Background grid, fading toward the center/content */}
      <div
        className="absolute inset-0 -z-10 text-base-content"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in srgb, currentColor 8%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, currentColor 8%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 0%, transparent 70%)',
        }}
      />
    
      {/* Top–left button group */}
      <div className="absolute top-4 left-4 flex space-x-3">
        <MediaPlayer />
        <MusicPlayer />
      </div>
      
      {/* Top–right button group */}
      {/* <div className="absolute top-4 right-4 flex space-x-3">
        <ThemeToggleButton />
      </div> */}
      
      {/* content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4">   
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-base-content">
          darren sills
        </h1>
        <p className="text-base-content/70 font-mono uppercase text-sm sm:text-md tracking-widest">
          <span className="block max-w-xs mx-auto">
            <Typewriter
              words={[
                "Full-stack developer",
                "Designer's eye",
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
            onClick={() => openWindow('about')}
          />
          <FolderButton
            icon={<Code size={32} />}
            label="work"
            onClick={() => openWindow('work')}
          />
          <FolderButton
            icon={<Mail size={32} />}
            label="contact"
            onClick={() => openWindow('contact')}
          />
         
        </div>
        
      </div>
      </div>
      
      {/* <CatSticker  /> */}
      <div className="fixed bottom-16 right-6 z-30">
        <FileIconButton
          icon={<FaFilePdf size={22} />}
          label="cv.pdf"
          href="/Darren_Sills_CV.pdf"
        />
      </div>
      
       {/* Footer */}
      <Taskbar
        windows={windows}
        onSelect={selectWindow}
        className="fixed bottom-0 left-0 w-full z-[100]"
      />
    </div>
    
    
    <FloatingPanel
      open={windows.about.open}
      minimized={windows.about.minimized}
      maximized={windows.about.maximized}
      position={windows.about.position}
      size={windows.about.size}
      zIndex={windows.about.zIndex}
      onClose={() => closeWindow('about')}
      onFocus={() => bringToFront('about')}
      onMove={(pos) => setPosition('about', pos)}
      onRecenter={() => recenter('about')}
      onMinimize={() => minimizeWindow('about')}
      onToggleMaximize={() => toggleMaximize('about')}
      onResize={(size) => setSize('about', size)}
      title="~/about"
    >
      <About />
    </FloatingPanel>
    
      <FloatingPanel
      open={windows.work.open}
      minimized={windows.work.minimized}
      maximized={windows.work.maximized}
      position={windows.work.position}
      size={windows.work.size}
      zIndex={windows.work.zIndex}
      onClose={() => closeWindow('work')}
      onFocus={() => bringToFront('work')}
      onMove={(pos) => setPosition('work', pos)}
      onRecenter={() => recenter('work')}
      onMinimize={() => minimizeWindow('work')}
      onToggleMaximize={() => toggleMaximize('work')}
      onResize={(size) => setSize('work', size)}
      title="~/work"
    >
      <Work />
    </FloatingPanel>
    
     <FloatingPanel
      open={windows.contact.open}
      minimized={windows.contact.minimized}
      maximized={windows.contact.maximized}
      position={windows.contact.position}
      size={windows.contact.size}
      zIndex={windows.contact.zIndex}
      onClose={() => closeWindow('contact')}
      onFocus={() => bringToFront('contact')}
      onMove={(pos) => setPosition('contact', pos)}
      onRecenter={() => recenter('contact')}
      onMinimize={() => minimizeWindow('contact')}
      onToggleMaximize={() => toggleMaximize('contact')}
      onResize={(size) => setSize('contact', size)}
      title="~/contact"
      height="340px"
    >
      <Contact  onSuccess={() => closeWindow('contact')} />
    </FloatingPanel>
    
    </>
  );
}
