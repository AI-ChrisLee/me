'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";

export default function WaitPage() {
  return (
    <div className="min-h-screen bg-white font-mono font-black">
      {/* Header */}
      <header className="bg-white py-4 px-4 border-b-4 border-black">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-black hover:opacity-70 transition-opacity font-black"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-black">
            YOU'RE ON THE <span style={{color: '#1041D6'}}>WAITLIST</span>
          </h1>
          <p className="text-xl font-bold text-black mb-4">
            Thank you for your interest in the AI Vibe Agency Blueprint.
          </p>
        </div>

        {/* Main Message */}
        <div className="border-4 border-black mb-12">
          <div className="bg-black text-white p-6">
            <h2 className="text-2xl md:text-3xl font-black text-center">
              WHAT HAPPENS <span style={{color: '#1041D6'}}>NEXT?</span>
            </h2>
          </div>
          <div className="bg-white text-black p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <span style={{color: '#1041D6'}} className="font-black mr-6 text-xl">1.</span>
                <div>
                  <p className="text-base font-bold leading-relaxed">
                    <span className="font-black">You'll receive a personal email</span> from me when the program officially launches
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span style={{color: '#1041D6'}} className="font-black mr-6 text-xl">2.</span>
                <div>
                  <p className="text-base font-bold leading-relaxed">
                    <span className="font-black">Founder pricing will be honored</span> for everyone on this waitlist
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span style={{color: '#1041D6'}} className="font-black mr-6 text-xl">3.</span>
                <div>
                  <p className="text-base font-bold leading-relaxed">
                    <span className="font-black">You'll get first access</span> to secure your spot before public launch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="border-4 border-black mb-12">
          <div className="bg-white p-6 border-b-4 border-black">
            <h2 className="text-2xl md:text-3xl font-black text-center">
              EXPECTED <span style={{color: '#1041D6'}}>TIMELINE</span>
            </h2>
          </div>
          <div className="bg-white text-black p-8 text-center">
            <p className="text-lg font-bold mb-6 leading-relaxed">
              The AI Vibe Agency Blueprint program will launch in <span style={{color: '#1041D6'}} className="font-black">early 2025</span>.
            </p>
            <p className="text-base font-bold leading-relaxed">
              I'm currently finalizing the complete system and want to ensure every detail is perfect for the founding members.
            </p>
          </div>
        </div>

        {/* What You're Getting Section */}
        <div className="border-4 border-black mb-12">
          <div className="bg-white p-6 border-b-4 border-black">
            <h2 className="text-2xl md:text-3xl font-black text-center">
              WHAT YOU'RE <span style={{color: '#1041D6'}}>GETTING</span>
            </h2>
          </div>
          <div className="bg-white text-black p-8">
            <p className="text-base font-bold mb-8 text-center">
              As a founding member, you'll receive:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span style={{color: '#1041D6'}} className="mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold">Complete 3-project portfolio worth <span style={{color: '#1041D6'}} className="font-black">$75K+ in client value</span></span>
              </li>
              <li className="flex items-start">
                <span style={{color: '#1041D6'}} className="mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold">Live weekly sessions with <span style={{color: '#1041D6'}} className="font-black">AI Chris Lee</span></span>
              </li>
              <li className="flex items-start">
                <span style={{color: '#1041D6'}} className="mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold">Systematic <span style={{color: '#1041D6'}} className="font-black">vibe coding methodology</span></span>
              </li>
              <li className="flex items-start">
                <span style={{color: '#1041D6'}} className="mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold">Private community access with <span style={{color: '#1041D6'}} className="font-black">like-minded agency builders</span></span>
              </li>
              <li className="flex items-start">
                <span style={{color: '#1041D6'}} className="mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span style={{color: '#1041D6'}} className="font-black">Founder pricing locked forever</span> at $799/year</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-4 border-black mb-12">
          <div className="bg-white p-6 border-b-4 border-black">
            <h2 className="text-2xl md:text-3xl font-black text-center">
              QUESTIONS? <span style={{color: '#1041D6'}}>I'M HERE</span>
            </h2>
          </div>
          <div className="bg-white text-black p-8 text-center">
            <p className="text-base font-bold mb-6 leading-relaxed">
              If you have any questions about the program or timeline, feel free to reach out.
            </p>
                         <a 
               href="mailto:me@aichrislee.com"
               className="inline-block text-white font-black py-3 px-6 text-base transition-colors border-4"
               style={{backgroundColor: '#1041D6', borderColor: '#0A2B94'}}
               onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#0D35B5'}
               onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#1041D6'}
             >
               CONTACT: me@aichrislee.com
             </a>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center">
          <p className="text-lg font-black mb-6 leading-relaxed">
            Thank you for being part of the future of <span style={{color: '#1041D6'}}>AI-powered agencies</span>.
          </p>
          <p className="text-base font-bold leading-relaxed">
            I'll be in touch soon with launch details.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
} 