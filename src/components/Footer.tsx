
import { Heart, Code, Shield, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center space-y-4">
            <div className="text-2xl font-bold gradient-text">
              Aishwarya Iyer
            </div>
            <p className="text-foreground/60 max-w-md">
              Cybersecurity Enthusiast & Software Developer building secure, innovative solutions.
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center justify-center space-x-2 text-foreground/50">
            <span>Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>using</span>
            <Code size={16} className="text-blue-400" />
            <span>React,</span>
            <Shield size={16} className="text-green-400" />
            <span>TypeScript & lots of</span>
            <Coffee size={16} className="text-yellow-600" />
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-white/5">
            <p className="text-foreground/40 text-sm">
              © {new Date().getFullYear()} Aishwarya Iyer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
