import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function PrivacyPage() {
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
              <span className="text-blue-400">PRIVACY POLICY</span>
            </h1>
          </div>
          <div className="bg-white text-black p-6">
            <p className="text-base font-bold text-center">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Information We Collect */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">1. INFORMATION WE COLLECT</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold mb-4 leading-relaxed">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="text-base font-bold space-y-2 mb-4">
                <li>• Sign up for our <span className="text-blue-600 font-black">AI Agency Blueprint</span> program</li>
                <li>• Subscribe to our newsletter or marketing communications</li>
                <li>• Contact us with questions or feedback</li>
                <li>• Participate in surveys or promotions</li>
              </ul>
              <p className="text-base font-bold leading-relaxed">
                This information may include your <span className="text-blue-600 font-black">name, email address, phone number</span>, and any other information you choose to provide.
              </p>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">2. HOW WE USE YOUR INFORMATION</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold mb-4 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="text-base font-bold space-y-2">
                <li>• Provide, maintain, and improve our <span className="text-blue-600 font-black">AI agency services</span></li>
                <li>• Process transactions and send related information</li>
                <li>• Send you technical notices, updates, and support messages</li>
                <li>• Respond to your comments, questions, and requests</li>
                <li>• Communicate with you about <span className="text-blue-600 font-black">AI blueprint programs</span> and events</li>
                <li>• Monitor and analyze trends, usage, and activities</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">3. INFORMATION SHARING</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold mb-4 leading-relaxed">
                We may share your information in the following situations:
              </p>
              <ul className="text-base font-bold space-y-2 mb-4">
                <li>• With your consent or at your direction</li>
                <li>• With service providers who help us operate our business</li>
                <li>• To comply with legal obligations or protect our rights</li>
                <li>• In connection with a business transaction (merger, acquisition, etc.)</li>
              </ul>
              <p className="text-base font-bold leading-relaxed">
                We <span className="text-blue-600 font-black">do not sell, trade, or otherwise transfer</span> your personal information to third parties for their marketing purposes without your consent.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">4. DATA SECURITY</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold leading-relaxed">
                We implement appropriate <span className="text-blue-600 font-black">technical and organizational measures</span> to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">5. DATA RETENTION</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a <span className="text-blue-600 font-black">longer retention period</span> is required or permitted by law.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">6. YOUR RIGHTS</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold mb-4 leading-relaxed">
                Depending on your location, you may have the following <span className="text-blue-600 font-black">rights regarding your personal information</span>:
              </p>
              <ul className="text-base font-bold space-y-2">
                <li>• <span className="text-blue-600 font-black">Access:</span> Request access to your personal information</li>
                <li>• <span className="text-blue-600 font-black">Correction:</span> Request correction of inaccurate information</li>
                <li>• <span className="text-blue-600 font-black">Deletion:</span> Request deletion of your personal information</li>
                <li>• <span className="text-blue-600 font-black">Portability:</span> Request a copy of your information in a structured format</li>
                <li>• <span className="text-blue-600 font-black">Opt-out:</span> Unsubscribe from marketing communications</li>
              </ul>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">7. COOKIES AND TRACKING</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold leading-relaxed">
                We use <span className="text-blue-600 font-black">cookies and similar tracking technologies</span> to collect information about your browsing activities. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our services.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">8. THIRD-PARTY SERVICES</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold leading-relaxed">
                Our services may integrate with third-party services like <span className="text-blue-600 font-black">GoHighLevel, Zapier, Supabase, Vercel, and N8N</span>. These services have their own privacy policies, and we encourage you to review them.
              </p>
            </div>
          </section>

          {/* Changes to This Policy */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">9. CHANGES TO THIS POLICY</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the <span className="text-blue-600 font-black">"Last updated" date</span>.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section className="border-4 border-black">
            <div className="bg-black text-white p-4">
              <h2 className="text-xl font-black">10. CONTACT US</h2>
            </div>
            <div className="bg-white text-black p-6">
              <p className="text-base font-bold leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
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