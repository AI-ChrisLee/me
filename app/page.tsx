"use client";

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Timer from './ver1/components/Timer';
import Footer from './components/Footer';
import Head from 'next/head';

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [formStep, setFormStep] = useState(0); // 0: button, 1: email, 2: first name, 3: redirect
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const router = useRouter();
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  const handleCTAClick = () => {
    setFormStep(1);
  };

  const handleVideoClick = () => {
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
    
    if (!agreedToTerms) {
      setSubmitMessage("❌ Please agree to the Terms and Privacy Policy to continue.");
      return;
    }

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
        // Redirect to ver1 page after successful submission
        setTimeout(() => {
          router.push("/ver1");
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
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "AI Vibe Agency Blueprint",
            "description": "Transform your web/app agency from price-competing freelancer to premium AI-powered operation. Build 3 complete portfolio projects worth $75K+ in client value.",
            "provider": {
              "@type": "Person",
              "name": "AI Chris Lee",
              "url": "https://aichrislee.com",
              "sameAs": [
                "https://youtube.com/@AIChrisLee",
                "https://twitter.com/AiChrisLee"
              ]
            },
            "courseMode": "online",
            "educationalLevel": "intermediate",
            "teaches": [
              "AI Development with Cursor",
              "Database Management with Supabase", 
              "Deployment with Vercel",
              "Automation with N8N",
              "Agency Business Strategy",
              "Premium Client Acquisition"
            ],
            "offers": {
              "@type": "Offer",
              "price": "799",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2025-01-01",
              "description": "Founder pricing locked forever at $799/year"
            },
            "startDate": "2025-07-03",
            "duration": "P52W",
            "inLanguage": "en-US",
            "image": "https://aichrislee.com/og-image.jpg",
            "url": "https://aichrislee.com"
          })
        }}
      />
      
      <div className="min-h-screen bg-white font-mono font-black">
        {/* Sticky Timer Banner */}
      <div className="sticky top-0 z-50 bg-red-600 text-white py-4 px-4 border-b-4 border-red-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <Timer />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-8 pb-16" role="main">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          {/* SEO-friendly hidden content */}
          <div className="sr-only">
            <h1>AI Vibe Agency Blueprint - Transform Your Web Development Agency with AI</h1>
            <p>Learn to build premium AI-powered applications using Cursor, Supabase, Vercel, and N8N. Join AI Chris Lee's comprehensive blueprint program starting July 2025.</p>
          </div>
          
          {/* Hero Demo Image Section */}
          <section className="mb-12 -mx-4" aria-label="Website demonstration">
            <div 
              onClick={handleVideoClick}
              className="cursor-pointer hover:opacity-90 transition-all duration-300 relative"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleVideoClick();
                }
              }}
              aria-label="View AI Vibe Agency Blueprint demonstration and get started"
            >
              <div className="bg-gray-100 flex items-center justify-center relative overflow-hidden border-4 border-black max-w-[540px] mx-auto">
                {/* Hero Demo Image */}
                <img
                  src="/Hero demo.webp"
                  alt="AI Vibe Agency Blueprint - Build 3 complete portfolio projects worth $75K+ in client value"
                  className="w-full h-auto object-cover max-w-[540px]"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-content') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                
                {/* Fallback content if image doesn't load */}
                <div className="fallback-content absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white bg-opacity-20 flex items-center justify-center mx-auto mb-4 rounded-lg">
                      <span className="text-3xl font-black">🚀</span>
                    </div>
                    <p className="text-xl font-black mb-2">AI VIBE CODING DEMO</p>
                    <p className="text-blue-200 text-base font-black">Build Premium Apps with AI</p>
                  </div>
                </div>
                
                {/* Overlay to show it's clickable */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 bg-opacity-90 flex items-center justify-center mx-auto mb-3 rounded-full">
                      <span className="text-white text-2xl font-black">▶</span>
                    </div>
                    <p className="text-white text-lg font-black drop-shadow-lg">Click to Get Started</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Headline */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
              Build 3 complete portfolio projects worth <span className="text-blue-600">$75K+ in client value</span>
            </h2>
            
            {/* Subheadline */}
            <p className="text-base md:text-lg text-black leading-relaxed max-w-3xl mx-auto font-bold">
              Transform your web/app agency from price-competing freelancer to <span className="text-blue-600 font-black">premium AI-powered operation</span> delivering <span className="text-blue-600 font-black">$10K-$50K projects</span> in <span className="text-blue-600 font-black">days, not months</span>.
            </p>
          </div>

          {/* CTA Section */}
          <div ref={ctaSectionRef} className="mb-16">
            {formStep === 0 && (
              <div>
                <button 
                  onClick={handleCTAClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-black py-3 px-4 text-base w-full transition-colors border-4 border-blue-800 max-w-md mx-auto block"
                >
                  ⚡ GET COMPLETE ACCESS NOW ⚡
                </button>
                <p className="text-black text-sm mt-4 font-bold">
                  AI VIBE AGENCY BLUEPRINT: COMPLETE SYSTEM
                </p>
              </div>
            )}

            {formStep === 1 && (
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-4 bg-white border-4 border-black text-black placeholder-gray-500 focus:outline-none focus:border-blue-600 text-base transition-all duration-300 font-mono font-bold"
                  />
                  <button
                    type="submit"
                    className="w-full text-white font-black py-3 px-4 text-base transition-all duration-300 bg-blue-600 hover:bg-blue-700 border-4 border-blue-800 flex items-center justify-center gap-2"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

            {formStep === 2 && (
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleFirstNameSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 bg-white border-4 border-black text-black placeholder-gray-500 focus:outline-none focus:border-blue-600 text-base transition-all duration-300 disabled:opacity-50 font-mono font-bold"
                  />
                  
                  {/* Terms and Privacy Checkbox */}
                  <div className="flex items-start gap-3 p-3 bg-white border-4 border-black">
                    <input
                      type="checkbox"
                      id="terms-agreement"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="mt-1 w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="terms-agreement" className="text-sm text-black leading-relaxed font-bold">
                      I agree to the{' '}
                      <a 
                        href="/terms" 
                        target="_blank" 
                        className="text-blue-600 hover:text-blue-800 underline font-black"
                      >
                        Terms of Service
                      </a>
                      {' '}and{' '}
                      <a 
                        href="/privacy" 
                        target="_blank" 
                        className="text-blue-600 hover:text-blue-800 underline font-black"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white font-black py-3 px-4 text-base transition-all duration-300 bg-blue-600 hover:bg-blue-700 border-4 border-blue-800 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Adding to CRM...' : 'Get Full Access'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                  {submitMessage && (
                    <p className="text-center text-sm mt-2 font-bold">
                      {submitMessage}
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default HomePage;