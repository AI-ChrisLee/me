import { Youtube, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t-4 border-black">
      <div className="max-w-4xl mx-auto px-4">
        {/* Top Row - Brand and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
          <div className="text-base font-black">
            AI Chris Lee
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://youtube.com/@AIChrisLee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-blue-600 transition-colors font-bold"
            >
              <Youtube className="w-5 h-5" />
              @AIChrisLee
            </a>
            <a 
              href="https://x.com/AiChrisLee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-blue-600 transition-colors font-bold"
            >
              <Twitter className="w-5 h-5" />
              @AiChrisLee
            </a>
          </div>
        </div>
        
        {/* Bottom Row - Email and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-base font-bold">
            <a href="mailto:me@aichrislee.com" className="text-blue-600 hover:text-blue-800 font-black underline">
              me@aichrislee.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-black hover:text-blue-600 transition-colors font-bold">
              Terms
            </Link>
            <Link href="/privacy" className="text-black hover:text-blue-600 transition-colors font-bold">
              Privacy
            </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-6 pt-4 border-t-2 border-black">
          <p className="text-base font-bold">
            © 2025 AI Chris Lee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 