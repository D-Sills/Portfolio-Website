'use client';

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import IconButton from '@/components/icon-button';

interface FooterProps {
    className?: string;
}
  
export default function Footer({ className = '' }: FooterProps) {
    return (
      <footer className={`${className} flex flex-col items-center`}>
      
        {/* Row of icons—always one line, even on mobile */}
        <div className="flex space-x-3 mb-2 flex-nowrap">
          <IconButton
            icon={<FaGithub size={20} />}
            ariaLabel="GitHub"
            onClick={() => window.open('https://github.com/D-Sills', '_blank')}
          />
          <IconButton
            icon={<FaLinkedin size={20} />}
            ariaLabel="LinkedIn"
            onClick={() => window.open('https://www.linkedin.com/in/darren-sills/', '_blank')}
          />
        </div>
        
        {/* name and copyright*/}
        <p className="text-sm">&copy; 2025 Darren Sills</p>
      </footer>
    );
}