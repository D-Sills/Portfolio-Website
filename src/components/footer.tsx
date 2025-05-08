'use client';

import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';
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
            onClick={() => window.open('https://github.com/you', '_blank')}
          />
          <IconButton
            icon={<FaTwitter size={20} />}
            ariaLabel="Twitter"
            onClick={() => window.open('https://twitter.com/you', '_blank')}
          />
          <IconButton
            icon={<FaEnvelope size={20} />}
            ariaLabel="Email"
            onClick={() => (window.location.href = 'mailto:you@example.com')}
          />
        </div>
        
        {/* name and copyright*/}
        <p className="text-sm">&copy; 2025 Darren Sills</p>
      </footer>
    );
}