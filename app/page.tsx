"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Github, 
  Mail, 
  MousePointer, 
  Users,
  ArrowRight
} from "lucide-react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [formStep, setFormStep] = useState(0); // 0: button, 1: email, 2: first name, 3: redirect
  const router = useRouter();
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  const handleCTAClick = () => {
    setFormStep(1);
  };

  const handleDemoVideoClick = () => {
    // Focus on the CTA section
    if (ctaSectionRef.current) {
      ctaSectionRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      
      // If it's still on the initial button state, trigger the CTA
      if (formStep === 0) {
        setTimeout(() => {
          handleCTAClick();
        }, 500); // Small delay for smooth scroll
      }
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setFormStep(2);
    }
  };

  const handleFirstNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim()) {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", { email, firstName });
      
      // Redirect to book page
      router.push("/book");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-lg font-black text-gray-900">AI Chris Lee</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* Demo Video/GIF */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div 
              onClick={handleDemoVideoClick}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 cursor-pointer hover:bg-gray-100 transition-all duration-300"
            >
              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1041D6' }}>
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-900 text-base font-medium">Demo GIF Coming Soon</p>
                  <p className="text-gray-600 text-sm mt-1">Click to get access</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
              Stop Competing on Price - Build Premium Agency Projects 10x Faster
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The complete Vibe Coding system that transforms <span className="font-bold text-gray-900"> traditional agencies into AI-powered operations delivering $10K-$25K projects in days,</span> not months.
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            ref={ctaSectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            {formStep === 0 && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCTAClick}
                className="text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-lg"
                style={{ backgroundColor: '#1041D6' }}
              >
                Get Access Now
              </motion.button>
            )}

            {formStep === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-sm mx-auto"
              >
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:bg-white text-base transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="w-full text-white font-bold py-4 px-6 rounded-lg text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#1041D6' }}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            )}

            {formStep === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-sm mx-auto"
              >
                <form onSubmit={handleFirstNameSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full px-4 py-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:bg-white text-base transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="w-full text-white font-bold py-4 px-6 rounded-lg text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#1041D6' }}
                  >
                    Get Full Access
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            )}
          </motion.div>

          {/* Tool Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
              <MousePointer className="w-4 h-4 text-gray-600" />
              <span className="text-gray-900 text-sm font-medium">Cursor</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
              <Database className="w-4 h-4 text-gray-600" />
              <span className="text-gray-900 text-sm font-medium">Supabase</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
              <Github className="w-4 h-4 text-gray-600" />
              <span className="text-gray-900 text-sm font-medium">Github</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
              <Mail className="w-4 h-4 text-gray-600" />
              <span className="text-gray-900 text-sm font-medium">Resend</span>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            © 2024 AI Chris Lee. All rights reserved. | 
            <a href="mailto:me@aichrislee.com" className="text-gray-900 hover:underline ml-1">me@aichrislee.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}