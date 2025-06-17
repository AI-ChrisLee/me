'use client';

import React, { useState } from 'react';
import Timer from './components/Timer';

const CoursePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-mono font-black">
      {/* Sticky Warning Banner */}
      <div className="sticky top-0 z-50 bg-red-600 text-white py-4 px-6 border-b-4 border-red-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <Timer />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-4xl font-black mb-10 leading-tight text-left text-black py-8">
            AI VIBE AGENCY BLUEPRINT: <span style={{color: '#1041D6'}}>COMPLETE SYSTEM</span>
          </h1>
          <p className="text-base mb-4 font-black text-black text-left">
            [ by Chris Lee - Vancouver, BC] 
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <p className="text-base mb-6 leading-relaxed font-bold">
          If you're reading this, you're likely somewhat interested in transforming your{' '}
          <span className="text-blue-600 font-black">web/app agency using AI</span>.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          And I am too. In fact, it's what I spend all day, every day obsessing about.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          Because the truth is, every agency needs to understand how to use{' '}
          <span className="text-blue-600 font-black">AI effectively</span> to survive the next 5 years.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          Whether it's building full-stack applications in <span className="text-blue-600 font-black">Cursor</span>, setting up databases in{' '}
          <span className="text-blue-600 font-black">Supabase</span>, deploying on{' '}
          <span className="text-blue-600 font-black">Vercel</span>, creating automation workflows in{' '}
          <span className="text-blue-600 font-black">N8N</span>, or generating video content with{' '}
          <span className="text-blue-600 font-black">Veo</span>, knowing how to get the most out of
          these tools is quickly becoming the difference between{' '}
          <span className="text-blue-600 font-black">thriving agencies and obsolete ones</span>.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          I've been in the trenches building <span className="text-blue-600 font-black">AI-powered agency systems</span>{' '}
          for the last 18 months, working with everyone from solo freelancers to established development shops.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          In fact, I'm writing this from my office in <span className="text-blue-600 font-black">Vancouver, BC</span> where I've just finished implementing a complete AI transformation for a local agency.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          Point is, I have <span className="text-blue-600 font-black">truly seen it all</span>.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          What I've discovered is that there's a <span className="text-blue-600 font-black">huge knowledge gap</span> surrounding how to use AI to deliver{' '}
          <span className="text-blue-600 font-black">premium web/app projects</span> at enterprise speed.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          And the ability to do this is the difference between{' '}
          <span className="text-blue-600 font-black">competing on price forever</span> and commanding{' '}
          <span className="text-blue-600 font-black">premium rates as an AI-first agency</span>.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          Initially, I was just focused on transforming my own{' '}
          <span className="text-blue-600 font-black">$600K agency</span> using these AI workflows.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          But then I started getting questions from my{' '}
          <span className="text-blue-600 font-black">YouTube audience</span>.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-black">
          "How are you doing this?" "What's your secret?" "Can you help transform our agency?"
        </p>
        
        <p className="text-base mb-8 leading-relaxed font-bold">
          So rather than continuing to work with individual agencies at premium consulting rates, I've decided to open up my{' '}
          <span className="text-blue-600 font-black">complete blueprint system</span> to a group of{' '}
          <span className="text-blue-600 font-black">forward-thinking agency owners</span> and designers who want to stay ahead of the curve.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          This isn't another static course or generic info product. This is a{' '}
          <span className="text-blue-600 font-black">live, systematic blueprint experience</span>.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          Each <span className="text-blue-600 font-black">Thursday at 10AM PDT</span>, I will personally guide you through my entire{' '}
          <span className="text-blue-600 font-black">AI Vibe Agency blueprint</span>, step-by-step.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          You'll be building <span className="text-blue-600 font-black">real workflows</span>, implementing{' '}
          <span className="text-blue-600 font-black">actual client projects</span>, and learning alongside a group of{' '}
          <span className="text-blue-600 font-black">like-minded agency builders</span>.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          <span className="text-blue-600 font-black">No coding experience required</span> - the AI handles the complexity while you focus on{' '}
          <span className="text-blue-600 font-black">business strategy</span> and{' '}
          <span className="text-blue-600 font-black">client results</span>.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          To be completely transparent: whether or not you join us, I'll still be building{' '}
          <span className="text-blue-600 font-black">AI-first agencies</span>.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          But I've seen firsthand how transformative these systems can be, and I believe more agencies should have access to them.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          If you want to shortcut months of painful trial and error and become an{' '}
          <span className="text-blue-600 font-black">AI-first agency</span> driving{' '}
          <span className="text-blue-600 font-black">real business results</span>, I'd highly encourage you to join us.
        </p>
        
        <p className="text-base mb-6 leading-relaxed font-bold">
          The agencies who master <span className="text-blue-600 font-black">AI-powered development</span> now will have an{' '}
          <span className="text-blue-600 font-black">unfair advantage</span> for years to come.
        </p>
        
        <p className="text-base mb-8 leading-relaxed font-bold">
          We're building this future either way. The question is whether you want to{' '}
          <span className="text-blue-600 font-black">build it with us</span>.
        </p>
      </div>

      {/* CTA Section */}
      <div className="py-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <button className="text-white font-black py-3 px-4 text-base w-full transition-colors border-4" style={{backgroundColor: '#1041D6', borderColor: '#0A2B94'}} onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0D35B5'} onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1041D6'}>
            ⚡ HURRY AND BOOK YOUR SPOT NOW ⚡
          </button>
        </div>
      </div>

      {/* Preview Section */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="border-2 border-gray-300 p-4">
          <p className="text-sm leading-relaxed">
            If you want a preview, check out{' '}
            <a href="https://www.youtube.com/watch?v=c_6XsMe9eXE" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 font-semibold">
              this YouTube video
            </a>{' '}
            where we riff on all the ways we're using AI in Web / App Agency strategy. If you find it valuable, this course goes{' '}
            <span className="text-blue-600 font-semibold">100x deeper</span>.
          </p>
        </div>
      </div>

      {/* The Brutal Reality Section */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="border-4 border-black">
          <div className="bg-black text-white p-6">
            <h2 className="text-2xl md:text-3xl font-black">
              THE BRUTAL REALITY OF <span style={{color: '#1041D6'}}>AI IN AGENCIES</span>
            </h2>
          </div>
          <div className="bg-white text-black p-6">
            <p className="text-base mb-8 leading-relaxed font-bold">
              Working with agencies across every industry revealed <span className="text-blue-600 font-black">four consistent problems</span>:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <span className="text-blue-600 font-black mr-6 text-lg">1.</span>
                <span className="text-base font-bold">Most agencies lack <span className="text-blue-600 font-black">proper AI implementation training</span> (just fumbling around with basic ChatGPT)</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 font-black mr-6 text-lg">2.</span>
                <span className="text-base font-bold">Agency owners remain unaware of <span className="text-blue-600 font-black">specialized AI development tools</span> that already exist</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 font-black mr-6 text-lg">3.</span>
                <span className="text-base font-bold">Nobody knows how to connect these tools into <span className="text-blue-600 font-black">powerful agency workflows</span></span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 font-black mr-6 text-lg">4.</span>
                <span className="text-base font-bold">The few AI-savvy team members work in silos, creating <span className="text-blue-600 font-black">fragmented systems</span></span>
              </div>
            </div>
            
            <p className="text-base mb-6 leading-relaxed font-bold">
              You could try hiring for this gap – some imaginary unicorn who understands both 
              <span className="text-blue-600 font-black">agency operations AND AI development</span>. <span className="text-blue-600 font-black">Good luck with that search</span>.
            </p>
            <p className="text-base mb-6 leading-relaxed font-bold">
              <span className="font-black">The real solution?</span> Take existing agency talent and give them <span className="text-blue-600 font-black">practical AI workflows</span>.
            </p>
            <p className="text-base mb-6 leading-relaxed font-bold">
              Much easier than teaching developers how to run sustainable businesses.
            </p>
            <p className="text-base leading-relaxed font-bold">That's exactly what this blueprint delivers.</p>
          </div>
        </div>
      </div>

      {/* Worried About AI Section */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="border-4 border-black">
          <div className="bg-white p-6 border-b-4 border-black">
                          <h2 className="text-2xl md:text-3xl font-black">WORRIED YOU DON'T KNOW <span style={{color: '#1041D6'}}>ENOUGH ABOUT AI?</span></h2>
          </div>
          <div className="bg-white p-6">
            <p className="text-base mb-8 leading-relaxed font-bold">
              We get it. AI feels overwhelming when you're starting from scratch. That's exactly why we start with{' '}
              <span className="text-blue-600 font-black">complete foundation building</span>, regardless of your starting point.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Week 1 is your foundation</span> — We bring everyone to the same level</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Dedicated community</span> for questions throughout the transformation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Live support</span> during sessions to ensure nobody gets left behind</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Practical implementation</span> that builds confidence step by step</span>
              </li>
            </ul>
            
            <p className="text-base mb-6 leading-relaxed font-bold">
              We promise: Even if you feel miles behind, this blueprint will work for you. The only requirement?{' '}
              <span className="text-blue-600 font-black">Willingness to build</span>.
            </p>
            
            <p className="text-base leading-relaxed font-bold">
              Most of our most successful agency blueprints started exactly where you are now.
            </p>
          </div>
        </div>
      </div>

      {/* Why Chris Lee Section */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="border-4 border-black">
          <div className="bg-white p-6 border-b-4 border-black">
                          <h2 className="text-2xl md:text-3xl font-black">WHY <span style={{color: '#1041D6'}}>AI CHRIS LEE</span> IS THE RIGHT GUIDE</h2>
          </div>
          <div className="bg-white p-6">
            <p className="text-base mb-8 leading-relaxed font-bold">
              This isn't theoretical knowledge from gurus who've never built real agencies. I'm{' '}
              <span className="text-blue-600 font-black">actively building and implementing</span> these systems every single day.
            </p>
            
            <h3 className="text-xl font-black text-blue-600 mb-6">Chris Lee - AI Agency Pioneer</h3>
            
            <p className="text-base mb-6 leading-relaxed font-bold">
              I'm not your typical guru promising <span className="text-blue-600 font-black">$10K, $30K per month</span>. I hate that style. If you're working 100 hours a week building client apps to earn $50K per month, is it worthy? No, it's not.{' '}
              <span className="text-blue-600 font-black">But I've been there</span>.
            </p>
            
            <p className="text-base mb-6 leading-relaxed font-bold">
              I coached <span className="text-blue-600 font-black">Samsung/LG developers to use AI</span> and served as a{' '}
              <span className="text-blue-600 font-black">Naver AI Rush Ambassador</span>. I built my{' '}
              <span className="text-blue-600 font-black">AI agency into a multi-6-figure business</span> and shared my story on my Korean YouTube channel.
            </p>
            
            <p className="text-base mb-6 leading-relaxed font-bold">
              Then I locked myself away to <span className="text-blue-600 font-black">develop and optimize</span> my agency workflow using AI.
            </p>
            
            <p className="text-base mb-6 leading-relaxed font-bold">
              <span className="font-black">Here's the truth:</span> We're building the future together. There are no gurus or experts in this space -{' '}
              <span className="text-blue-600 font-black">only pioneers leading others</span>.
            </p>
            
            <p className="text-base mb-8 leading-relaxed font-bold">
              You're learning from someone who walked away from traditional success to build something{' '}
              <span className="text-blue-600 font-black">sustainable and systematic</span>, not just profitable.
            </p>
            
            <p className="text-base font-black leading-relaxed">
              I'm building the future of agencies. The question is whether you want to build it with me.
            </p>
          </div>
        </div>
      </div>

      {/* Build 3 Projects Section Header */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="border-4 border-black">
          <div className="bg-white p-6 border-b-4 border-black">
            <h2 className="text-2xl md:text-3xl font-black">BUILD THESE <span className="text-blue-600">3 COMPLETE AGENCY PROJECTS</span></h2>
          </div>
          <div className="bg-white p-6">
            <p className="text-base font-black mb-6">Your 3-Piece "Proof-We-Can-Ship" Portfolio</p>
            <p className="text-base italic font-bold">(all built with Cursor + Supabase + Vercel + Git + Resend + N8N — nothing else)</p>
          </div>
        </div>
      </div>

      {/* Project 1 Card */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="border-4 border-black">
          <div className="bg-white p-6 border-b-4 border-black">
            <h3 className="text-xl md:text-2xl font-black">Project 1: Landing Page — <span className="text-blue-600">Perspective.co-Style Mobile Funnel Site</span></h3>
          </div>
          <div className="bg-white p-6">
            <div className="mb-8">
              <p className="font-black text-base mb-4">Why this is crucial:</p>
              <p className="text-base mb-6 leading-relaxed font-bold">
                Perspective's "mobile-first funnels" branding is everywhere in growth circles—over <span className="text-blue-600 font-black">6,000+ companies</span> use it and reviewers cite double-digit conversion lifts. Re-creating that craft screams <span className="text-blue-600 font-black">"premium CRO skillset."</span>
              </p>
            </div>

            <div className="mb-8">
              <p className="font-black text-base mb-4">What you'll build:</p>
              <ul className="text-base space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold">Pixel-perfect clone of Perspective.co's 2025 homepage with full-height phone mock-ups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold">Vertical snap scrolling with scroll-triggered metrics counters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold">Testimonial carousel with sticky CTA bar integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold">One-step "Start Free Trial" form with advanced lead capture</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <p className="font-black text-blue-600 text-base mb-4">Vibe Coding Activity:</p>
              <ul className="text-base space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold"><span className="text-blue-600 font-black">Cursor</span> – AI-pair code the parallax + IntersectionObserver sections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold"><span className="text-blue-600 font-black">Vercel + Git</span> – instant preview URLs for client sign-offs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold"><span className="text-blue-600 font-black">Supabase</span> – store email + UTMs on form submission</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold"><span className="text-blue-600 font-black">Resend</span> – double-opt-in mail + hand-off to ESP</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold"><span className="text-blue-600 font-black">N8N</span> – push leads ➜ Slack + Google Sheets</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <p className="font-black text-blue-600 text-base mb-4">Outcome:</p>
              <p className="text-base leading-relaxed font-bold">
                <span className="font-black">Typical deal: 4-day build → $7K – $12K fee.</span> You'll have a conversion-optimized landing page that clients believe required weeks of custom development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 Card */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="border-4 border-black">
          <div className="bg-white p-6 border-b-4 border-black">
            <h3 className="text-xl md:text-2xl font-black">Project 2: Dashboard — <span className="text-blue-600">Linear-Quality Issue Tracker UI</span></h3>
          </div>
          <div className="bg-white p-6">
            <div className="mb-8">
              <p className="font-black text-base mb-4">Why this wows clients:</p>
              <p className="text-base mb-6 leading-relaxed font-bold">
                Linear's UX is the benchmark for modern SaaS; founders dream of that polish but can't hire the team that built it. Your clone proves you can deliver <span className="text-blue-600 font-black">enterprise-level interfaces</span>.
              </p>
            </div>

            <div className="mb-8">
              <p className="font-black text-base mb-4">What you'll build:</p>
              <ul className="text-base space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold">Real-time Kanban / List / Cycle views with keyboard shortcuts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold">Instant-save editing functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold">Drag-and-drop interface visually & experientially indistinguishable from Linear</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold">Advanced search and filtering capabilities</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <p className="font-black text-blue-600 text-base mb-4">Vibe Coding Activity:</p>
              <ul className="text-base space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold"><span className="text-blue-600 font-black">Supabase Auth + pgvector</span> for advanced search functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold"><span className="text-blue-600 font-black">Supabase Realtime</span> for board drag-drop sync across multiple users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold"><span className="text-blue-600 font-black">Cursor</span> to wire TanStack Table + dnd-kit for complex interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold"><span className="text-blue-600 font-black">N8N</span> nightly backup + metrics mail via Resend</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <p className="font-black text-blue-600 text-base mb-4">Outcome:</p>
              <p className="text-base leading-relaxed font-bold">
                <span className="font-black">Deal size: 3–4-week sprint → $18K – $30K.</span> You'll deliver sophisticated SaaS dashboards that command premium pricing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 Card */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="border-4 border-black">
          <div className="bg-white p-6 border-b-4 border-black">
            <h3 className="text-xl md:text-2xl font-black">Project 3: AI App — <span className="text-blue-600">Perplexity-Style "Ask AI" Answer Engine</span></h3>
          </div>
          <div className="bg-white p-6">
            <div className="mb-8">
              <p className="font-black text-base mb-4">Why this is game-changing:</p>
              <p className="text-base mb-6 leading-relaxed font-bold">
                Perplexity just hit a multi-billion valuation; boards now ask "can we have our own Perplexity?" Your scaffold lets them <span className="text-blue-600 font-black">buy rather than build</span>.
              </p>
            </div>

            <div className="mb-8">
              <p className="font-black text-base mb-4">What you'll build:</p>
              <ul className="text-base space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold">Branded RAG search with streaming answers & citations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold">Daily email digest functionality with personalized insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold">Token metering and usage tracking for subscription models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold">Advanced AI conversation management</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <p className="font-black text-blue-600 text-base mb-4">Vibe Coding Activity:</p>
              <ul className="text-base space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold"><span className="text-blue-600 font-black">N8N crawler</span> ➜ Supabase documents + embeddings for knowledge base</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold"><span className="text-blue-600 font-black">Vercel Edge</span> → OpenAI 4o stream for real-time AI responses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold"><span className="text-blue-600 font-black">Supabase RLS quotas</span> with optional Stripe webhook integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                  <span className="font-bold"><span className="text-blue-600 font-black">Resend</span> digest & overage alerts for user management</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <p className="font-black text-blue-600 text-base mb-4">Outcome:</p>
              <p className="text-base leading-relaxed font-bold">
                <span className="font-black">Deal size: 2-week build → $25K – $40K + retainer.</span> You'll position yourself as an AI development pioneer commanding premium rates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Have Section */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="border-4 border-black">
          <div className="bg-white p-6 border-b-4 border-black">
            <h2 className="text-2xl md:text-3xl font-black">WHAT YOU'LL HAVE AFTER <span className="text-blue-600">VERSION 1.0</span>:</h2>
          </div>
          <div className="bg-white p-6">
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">3 Portfolio Projects</span> worth $75K+ in combined client value ($7K-$12K + $18K-$30K + $25K-$40K)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Complete Vibe Coding Mastery</span> using the exact 6-tool stack that handles 90% of client projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Systematic Cloning Methodology</span> - See any successful app, clone and customize it for premium clients</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Premium Agency Positioning</span> - Your site will scream <span className="font-black">"we deliver $10K – $50K work—fast"</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Pioneer Market Advantage</span> - First-mover positioning while competitors struggle with basic AI implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Scalable Business Systems</span> - Record 2-minute Looms and systematically close premium deals</span>
              </li>
            </ul>
            <p className="text-base font-black">
              Ship these three, record 2-minute Looms, and your site will scream "we deliver $10K – $50K work—fast."
            </p>
          </div>
        </div>
      </div>

      {/* Version 2.0 Preview Section */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="border-4 border-black">
          <div className="bg-white p-6">
            <p className="text-base mb-6 font-bold">
              <span className="font-black">Version 2.0 Preview:</span> <span className="italic">Coming in 3 months based on member feedback - Advanced AI integrations, automated client acquisition systems, enterprise deployment strategies.</span>
            </p>
            <p className="text-base font-bold">
              Most agencies will still be learning theory. You'll be <span className="font-black">building and shipping premium applications.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Who This Is For Section */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="border-4 border-black">
          <div className="bg-white p-6 border-b-4 border-black">
            <h2 className="text-2xl md:text-3xl font-black">WHO THIS IS <span className="text-blue-600">FOR</span></h2>
          </div>
          <div className="bg-white p-6">
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Agency owners</span> stuck in the old model of slow delivery and price competition</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Web/app developers</span> who see AI transforming the industry and want to stay ahead</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Solo founders</span> who need to build premium applications without hiring expensive developers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Freelancers</span> ready to transform into AI-powered agencies commanding $10K-$50K projects</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-black mb-6">WHO THIS <span className="text-blue-600">ISN'T FOR</span>:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">People looking for the "easy button"</span> (vibe coding requires building real projects)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Agencies unwilling to change workflows</span> (if you love 3-month delivery cycles, keep at it)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Anyone expecting AI to replace business skills</span> (it won't—it amplifies your capabilities)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold"><span className="text-blue-600 font-black">Developers who refuse to adapt</span> (traditional coding alone won't survive the next 5 years)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Kickoff Section */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="border-4 border-black">
          <div className="bg-black text-white p-6">
            <h2 className="text-2xl md:text-3xl font-black">THE KICKOFF: <span style={{color: '#1041D6'}}>JULY 3RD</span></h2>
          </div>
          <div className="bg-white p-6 text-center">
            <p className="text-xl mb-6 font-bold">Every Thursday at <span className="text-blue-600 font-black">10 AM PDT</span></p>
            <p className="text-base mb-10 font-bold">Starting <span className="text-blue-600 font-black">July 3rd, 2025</span></p>
            
            <button className="text-white font-black py-3 px-4 text-base w-full transition-colors border-4" style={{backgroundColor: '#1041D6', borderColor: '#0A2B94'}} onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0D35B5'} onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1041D6'}>
              ⚡ HURRY AND BOOK YOUR SPOT NOW ⚡
            </button>
          </div>
        </div>
      </div>

      {/* AI Vibe Agency Membership Section */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="border-4 border-black">
          <div className="bg-white p-6 border-b-4 border-black">
            <h2 className="text-2xl md:text-3xl font-black">AI VIBE AGENCY <span style={{color: '#1041D6'}}>MEMBERSHIP</span></h2>
          </div>
          <div className="bg-white p-6">
            <p className="text-base mb-8 leading-relaxed font-black">
              Join the pioneer community building agencies with AI blueprints.
            </p>
            
            <p className="text-base mb-8 font-black">What you get:</p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold">Complete 3-project portfolio worth $75K+ in client value</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold">Live weekly sessions (Thursdays at 10 AM PDT)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold">Systematic vibe coding methodology using Cursor + Supabase + Vercel stack</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold">Private community access with like-minded agency builders</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold">Quarterly system updates with new strategies and techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold">Exclusive access to cutting-edge methods before they go mainstream</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-6 text-lg font-black">•</span>
                <span className="text-base font-bold">1 year access to all materials and ongoing updates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Founder Pricing Section */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="border-4 border-black">
          <div className="bg-white p-6 border-b-4 border-black">
            <h2 className="text-2xl md:text-3xl font-black">FOUNDER <span style={{color: '#1041D6'}}>PRICING</span></h2>
          </div>
          <div className="bg-white p-6">
            <div className="bg-red-50 border-l-8 border-red-600 p-8 mb-10">
              <p className="text-base font-black text-red-600 mb-6">🔥 FOUNDER TIER PRICING 🔥</p>
              
              <div className="space-y-4 mb-8">
                <p className="text-base font-bold">
                  <span className="font-black" style={{color: '#1041D6'}}>Founder Members (2025):</span> $799/year <em>(locked forever)</em>
                </p>
                <p className="text-base font-bold">
                  <span className="font-black">October 2025:</span> $1,999/year
                </p>
                <p className="text-base font-bold">
                  <span className="font-black">2026:</span> $3,999/year
                </p>
              </div>
              
              <p className="text-base font-black mb-8">
                Lock in founder pricing before October 2025 - this rate never increases for early members.
              </p>
            </div>
            
            <div className="text-center mb-10">
              <button className="text-white px-4 py-3 text-base font-black transition-colors border-4 w-full" style={{backgroundColor: '#1041D6', borderColor: '#0A2B94'}} onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0D35B5'} onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1041D6'}>
                SECURE FOUNDER PRICING - $799/year
              </button>
            </div>
            
            <p className="text-base text-center font-black leading-relaxed">
              We're building the future of AI-powered agencies. The question is whether you want to build it with us.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8">FREQUENTLY ASKED <span className="text-blue-600">QUESTIONS</span></h2>
        </div>
        <div className="space-y-1">
              {[
                {
                  question: "If I know I am going to miss a few weeks, will there be a recording of each session I can watch later?",
                  answer: "Yes, we record every Q&A session and send it out immediately after completion. You'll have 1 year access to all recordings, course materials, and project resources."
                },
                {
                  question: "How many hours per week will this require?",
                  answer: "The weekly Q&A sessions are 1 hour (Thursdays 10 AM PDT). For the 3 project builds, expect 5-8 hours per week depending on your pace. You're building real applications, not watching tutorials."
                },
                {
                  question: "Do I need to purchase the tools that we will go over in this program?",
                  answer: "Most tools have generous free tiers. Cursor ($20/month), Supabase (free tier), Vercel (free tier), Resend (free tier). Total monthly cost: ~$20-40 depending on usage."
                },
                {
                  question: "What if I don't have coding experience?",
                  answer: "Perfect. Vibe coding is designed for non-technical founders. The AI handles complexity while you focus on business logic and client results."
                },
                {
                  question: "How is this different from other AI courses?",
                  answer: "This isn't just a course - it's a complete system with ongoing support. You get the 3-project course materials PLUS weekly Q&A sessions for real-time guidance on your builds."
                },
                {
                  question: "What happens after Version 1.0?",
                  answer: "Version 2.0 launches in 3 months with new strategies based on member feedback and market evolution. Founder members get all updates included."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-8 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors border-b-2 border-gray-200"
                  >
                    <p className="text-base font-bold pr-6">{faq.question}</p>
                    <span className="text-gray-600 text-2xl flex-shrink-0 font-black">
                      {openFaq === index ? '⌄' : '>'}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="pb-8 px-4">
                      <p className="text-gray-800 leading-relaxed text-base font-bold">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="border-4 border-black">
          <div className="bg-white p-6 border-b-4 border-black">
            <h2 className="text-2xl md:text-3xl font-black text-center">QUESTIONS? <span className="text-blue-600">WE'RE HERE TO HELP</span></h2>
          </div>
          <div className="bg-white p-6 text-center">
            <p className="text-base mb-8 font-bold">I'm happy to answer any questions you have about the AI Vibe Agency blueprint.</p>
            <button className="bg-blue-600 text-white font-black py-3 px-4 hover:bg-blue-700 transition-colors border-4 border-blue-800 text-base w-full">
              CONTACT: me@aichrislee.com
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Description */}
      <div className="bg-black text-white py-12 px-4 text-center">
        <p className="text-base mb-6 leading-relaxed max-w-4xl mx-auto font-bold">
          This program combines <span className="text-blue-400 font-black">self-paced project building with weekly Q&A support</span> designed to blueprint your agency using AI.
        </p>
        <p className="text-base font-black">
          What I've learned building AI-powered agencies at the cutting edge, you get for <span className="text-blue-400">$799</span>.
        </p>
      </div>

      {/* Final CTA Section */}
      <div className="max-w-4xl mx-auto py-8 px-4 text-center">
        <p className="text-xl font-black mb-12 leading-relaxed">
          Stop watching others build the future. Start building it yourself.
        </p>
        
        <button className="text-white px-4 py-3 text-base font-black transition-colors border-4 w-full" style={{backgroundColor: '#1041D6', borderColor: '#0A2B94'}} onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0D35B5'} onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1041D6'}>
          SECURE FOUNDER PRICING - $799/year
        </button>
      </div>
    </div>
  );
};

export default CoursePage; 