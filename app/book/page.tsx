"use client";

import { 
  Play,
  ArrowRight,
  Calendar,
  Lock,
  Zap,
  TrendingUp,
  Target
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function BookPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [spotsLeft, setSpotsLeft] = useState(20);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleScheduleClick = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };

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

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Title */}
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              FOR AGENCY OWNERS WHO ARE TIRED OF THE OLD MODEL:
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              You&apos;re One Step Away From Transforming Your Agency Into a Sustainable, AI-Powered Operation That Delivers Premium Results 10x Faster
            </p>
          </div>

          {/* Step 1 - Blog Style */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 1 of 2: Watch the Transformation</h2>
            
            <div className="mb-8">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center group cursor-pointer mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1041D6' }}>
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-gray-900 font-medium">Demo video showing real agency transformation with vibe coding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - Blog Style */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 2 of 2: Schedule Your Vibe Coding Strategy Call</h2>
            
            <div className="mb-8">
              {/* Calendar Placeholder */}
              <div ref={calendarRef} className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#1041D6' }}>
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">GoHighLevel Calendar</h3>
                <p className="text-gray-600 text-sm">
                  Select your preferred time slot
                </p>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-gray-600" />
                <p className="text-gray-700 font-medium">100% Confidential</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Your answers will remain completely confidential and are used to prepare a custom vibe coding transformation strategy for your specific agency.
              </p>
              
              {/* Simple Timer Text */}
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-2">
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
              </div>
            </div>
          </div>

          {/* What We'll Show You - Card Style */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-8">What We Will Show You On Your Strategy Call:</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#1041D6' }}>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Vibe Coding Implementation</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  How to transform your current agency operations using AI-powered vibe coding that delivers enterprise-quality projects in days, not months... while maintaining premium pricing and client satisfaction.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#1041D6' }}>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Sustainable Vibe Business Model</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  How to build systematic vibe coding processes that scale your agency without hiring more developers, managing bigger teams, or competing on price. Create a business that grows while giving you your life back.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#1041D6' }}>
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Pioneer Vibe Positioning</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  How to position your agency as the cutting-edge vibe coding solution in your market while others are still using outdated methods. Become the obvious choice for clients who want results, not excuses.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div>
            <button 
              onClick={handleScheduleClick}
              className="text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 hover:opacity-90 mb-4"
              style={{ backgroundColor: '#1041D6' }}
            >
              <span className="flex items-center gap-3">
                Schedule My Vibe Coding Strategy Call
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
            
            <p className="text-gray-600 text-sm">
              30-minute session • No sales pitch • Custom strategy for your agency
            </p>
          </div>

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