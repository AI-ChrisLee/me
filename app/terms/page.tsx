import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white font-mono font-black">
      {/* Header */}
      <header className="bg-white py-4 px-4 border-b-4 border-black">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-black hover:text-blue-600 transition-colors font-black"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="border-4 border-black mb-8">
          <div className="bg-black text-white p-6">
            <h1 className="text-2xl md:text-3xl font-black text-center">
              <span className="text-blue-400">TERMS OF SERVICE</span>
            </h1>
          </div>
          <div className="bg-white text-black p-6">
            <p className="text-base font-bold text-center">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">1. ACCEPTANCE OF TERMS</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold leading-relaxed">
                By accessing and using <span className="text-blue-600 font-black">AI Vibe Agency Transformation</span> services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>
          </section>

          {/* Service Description */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">2. SERVICE DESCRIPTION</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold mb-4 leading-relaxed">
                <span className="text-blue-600 font-black">AI Vibe Agency Blueprint</span> provides educational content, training materials, and consulting services designed to help individuals build and scale <span className="text-blue-600 font-black">AI-powered development agencies</span>. Our services include:
              </p>
              <ul className="text-base font-bold space-y-2">
                <li>• Live weekly <span className="text-blue-600 font-black">AI blueprint sessions</span> every Thursday at 10AM PDT</li>
                <li>• Access to complete <span className="text-blue-600 font-black">AI agency workflows</span> and frameworks</li>
                <li>• Training on <span className="text-blue-600 font-black">Cursor, Supabase, Vercel, N8N, and Veo</span></li>
                <li>• Strategy consultation and implementation guidance</li>
                <li>• Private community access and peer support</li>
                <li>• <span className="text-blue-600 font-black">Real client project</span> building experience</li>
              </ul>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">3. PAYMENT TERMS</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold leading-relaxed mb-4">
                Payment for services is due at the time of purchase unless otherwise specified. All fees are <span className="text-blue-600 font-black">non-refundable</span> except as required by law or as specifically stated in our refund policy.
              </p>
              <p className="text-base font-bold leading-relaxed">
                Special <span className="text-blue-600 font-black">founder pricing</span> and payment plans may be available for a limited time. All pricing is subject to change with notice.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">4. INTELLECTUAL PROPERTY</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold leading-relaxed mb-4">
                The content, organization, graphics, design, compilation, and other matters related to our <span className="text-blue-600 font-black">AI transformation system</span> are protected under applicable copyrights, trademarks and other proprietary rights.
              </p>
              <p className="text-base font-bold leading-relaxed">
                All <span className="text-blue-600 font-black">AI workflows, frameworks, and proprietary methodologies</span> remain the intellectual property of AI Chris Lee and may not be redistributed without explicit written permission.
              </p>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">5. USER RESPONSIBILITIES</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold mb-4 leading-relaxed">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="text-base font-bold space-y-2">
                <li>• Violate any applicable laws or regulations</li>
                <li>• Infringe on the rights of others</li>
                <li>• Share or distribute <span className="text-blue-600 font-black">proprietary AI workflows</span> without permission</li>
                <li>• Engage in any activity that could harm our services or other users</li>
                <li>• Use our <span className="text-blue-600 font-black">AI methodologies</span> to compete directly with our services</li>
                <li>• Record or redistribute live session content without explicit permission</li>
              </ul>
            </div>
          </section>

          {/* Program Participation */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">6. PROGRAM PARTICIPATION</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold leading-relaxed mb-4">
                Participation in the <span className="text-blue-600 font-black">AI Vibe Agency Blueprint</span> program requires:
              </p>
              <ul className="text-base font-bold space-y-2">
                <li>• Active participation in <span className="text-blue-600 font-black">weekly live sessions</span></li>
                <li>• Commitment to implementing learned <span className="text-blue-600 font-black">AI workflows</span></li>
                <li>• Respectful engagement with community members</li>
                <li>• <span className="text-blue-600 font-black">No coding experience required</span> - we provide full guidance</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">7. LIMITATION OF LIABILITY</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold leading-relaxed">
                In no event shall <span className="text-blue-600 font-black">AI Vibe Agency Blueprint</span> or AI Chris Lee be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </div>
          </section>

          {/* Results Disclaimer */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">8. RESULTS DISCLAIMER</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold leading-relaxed">
                While we provide proven <span className="text-blue-600 font-black">AI agency blueprint methodologies</span>, individual results may vary. Success depends on your commitment, market conditions, and implementation of the strategies taught. We make no guarantees regarding specific business outcomes or revenue generation.
              </p>
            </div>
          </section>

          {/* Modifications to Terms */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">9. MODIFICATIONS TO TERMS</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service after changes are posted constitutes your acceptance of the <span className="text-blue-600 font-black">modified terms</span>.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">10. CONTACT INFORMATION</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:me@aichrislee.com" className="text-blue-600 hover:text-blue-800 font-black underline">
                  me@aichrislee.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
} 