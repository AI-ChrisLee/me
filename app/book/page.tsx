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

export default function BookPage() {
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
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              FOR AGENCY OWNERS WHO ARE TIRED OF THE OLD MODEL:
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              You're One Step Away From Transforming Your Agency Into a Sustainable, AI-Powered Operation That Delivers Premium Results 10x Faster
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
              <p className="text-gray-600 text-sm text-center">
                30-minute session • No sales pitch • Custom strategy for your agency
              </p>
            </div>
          </div>

          {/* Step 2 - Blog Style */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 2 of 2: Schedule Your Vibe Coding Strategy Call</h2>
            
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-gray-600" />
                <p className="text-gray-700 font-medium">100% Confidential</p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Your answers will remain completely confidential and are used to prepare a custom vibe coding transformation strategy for your specific agency.
              </p>
              
              {/* Calendar Placeholder */}
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1041D6' }}>
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">GoHighLevel Calendar</h3>
                <p className="text-gray-600 text-sm">
                  Select your preferred time slot
                </p>
              </div>
            </div>
          </div>

          {/* What We'll Show You - Card Style */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">What We Will Show You On Your Strategy Call:</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1041D6' }}>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Vibe Coding Implementation</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  How to transform your current agency operations using AI-powered vibe coding that delivers enterprise-quality projects in days, not months... while maintaining premium pricing and client satisfaction.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1041D6' }}>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Sustainable Vibe Business Model</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  How to build systematic vibe coding processes that scale your agency without hiring more developers, managing bigger teams, or competing on price. Create a business that grows while giving you your life back.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1041D6' }}>
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Pioneer Vibe Positioning</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  How to position your agency as the cutting-edge vibe coding solution in your market while others are still using outdated methods. Become the obvious choice for clients who want results, not excuses.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mb-8 inline-block">
              <p className="text-gray-700 font-medium mb-2">
                Limited spots available this week
              </p>
              <p className="text-gray-600 text-sm">
                Due to personalized preparation required
              </p>
            </div>
            
            <button 
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