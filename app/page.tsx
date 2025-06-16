"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Github, 
  Mail, 
  MousePointer, 
  ArrowRight
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [formStep, setFormStep] = useState(0); // 0: button, 1: email, 2: first name, 3: redirect
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const router = useRouter();
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [spotsLeft, setSpotsLeft] = useState(20);

  useEffect(() => {
    const calculateTimeAndSpots = () => {
      // Get current time in PST
      const now = new Date();
      const pstOffset = -8 * 60; // PST is UTC-8
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const pstTime = new Date(utc + (pstOffset * 60000));
      
      const currentDay = pstTime.getDay(); // 0 = Sunday, 1 = Monday, etc.
      
      // Calculate next Sunday 11:59 PM PST
      const nextSunday = new Date(pstTime);
      if (currentDay === 0) {
        // If it's Sunday
        if (pstTime.getHours() < 23 || (pstTime.getHours() === 23 && pstTime.getMinutes() < 59)) {
          // Before 11:59 PM Sunday, reset happens today
          nextSunday.setDate(pstTime.getDate());
          nextSunday.setHours(23, 59, 59, 999);
        } else {
          // Past 11:59 PM Sunday, go to next Sunday
          nextSunday.setDate(pstTime.getDate() + 7);
          nextSunday.setHours(23, 59, 59, 999);
        }
      } else {
        // Other days - calculate days until Sunday
        const daysUntilSunday = 7 - currentDay;
        nextSunday.setDate(pstTime.getDate() + daysUntilSunday);
        nextSunday.setHours(23, 59, 59, 999);
      }
      
      // Calculate time difference
      const timeDiff = nextSunday.getTime() - pstTime.getTime();
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
      
      // Calculate spots left (resets Sunday 11:59pm, Monday starts with 20)
      // Monday: 20, Tuesday: 17, Wed: 14, Thu: 11, Fri: 8, Sat: 5, Sun: 2
      let spotsRemaining;
      if (currentDay === 1) spotsRemaining = 20; // Monday - Fresh start
      else if (currentDay === 2) spotsRemaining = 17; // Tuesday (-3)
      else if (currentDay === 3) spotsRemaining = 14; // Wednesday (-3)
      else if (currentDay === 4) spotsRemaining = 11; // Thursday (-3)
      else if (currentDay === 5) spotsRemaining = 8;  // Friday (-3)
      else if (currentDay === 6) spotsRemaining = 5;  // Saturday (-3)
      else spotsRemaining = 2; // Sunday (-3)
      setSpotsLeft(spotsRemaining);
    };

    calculateTimeAndSpots();
    const interval = setInterval(calculateTimeAndSpots, 1000);

    return () => clearInterval(interval);
  }, []);

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

  const handleFirstNameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim()) return;

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch('/api/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          firstName: firstName.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage("✅ Successfully added to our system!");
        // Redirect to book page after successful submission
        setTimeout(() => {
          router.push("/book");
        }, 1500);
      } else {
        setSubmitMessage(`❌ ${data.error || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage("❌ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:bg-white text-base transition-all duration-300 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white font-bold py-4 px-6 rounded-lg text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                    style={{ backgroundColor: '#1041D6' }}
                  >
                    {isSubmitting ? 'Adding to CRM...' : 'Get Full Access'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                  {submitMessage && (
                    <p className="text-center text-sm mt-2 font-medium">
                      {submitMessage}
                    </p>
                  )}
                </form>
              </motion.div>
            )}
          </motion.div>

          {/* Simple Timer Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-base font-bold text-gray-900">Limited spots available this week</span>
              <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                {spotsLeft} left
              </span>
            </div>
            <div className="text-sm font-mono text-gray-900">
              <span className="animate-pulse">⏰</span> 
              <span className="font-bold text-red-600 ml-2">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </div>
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