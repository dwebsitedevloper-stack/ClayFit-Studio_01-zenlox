import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-neutral-100 to-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/70 backdrop-blur-xl rounded-full px-6 py-3 mb-6 clay-shadow-sm">
            <span className="text-sm font-semibold text-stone-800">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-stone-900 to-neutral-700 bg-clip-text text-transparent mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Ready to start your fitness journey? We're here to help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[40px] clay-shadow-lg p-10">
            <h3 className="text-2xl font-bold text-stone-900 mb-8">
              Send us a message
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-3xl clay-inset-deep bg-stone-50/50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-3xl clay-inset-deep bg-stone-50/50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-6 py-4 rounded-3xl clay-inset-deep bg-stone-50/50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-3">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your fitness goals..."
                  className="w-full px-6 py-4 rounded-3xl clay-inset-deep bg-stone-50/50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-br from-stone-900 to-neutral-800 text-white px-8 py-5 rounded-full clay-shadow-lg font-semibold text-lg hover-lift flex items-center justify-center gap-3"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-white/70 backdrop-blur-xl rounded-[40px] clay-shadow-lg p-10">
              <h3 className="text-2xl font-bold text-stone-900 mb-8">
                Visit our studio
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-stone-800 to-neutral-900 rounded-2xl p-4 clay-shadow-sm">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900 mb-1">Address</div>
                    <div className="text-stone-600 leading-relaxed">
                      123 Fitness Avenue<br />
                      Downtown District<br />
                      San Francisco, CA 94102
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-stone-800 to-neutral-900 rounded-2xl p-4 clay-shadow-sm">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900 mb-1">Phone</div>
                    <div className="text-stone-600">
                      +1 (555) 123-4567
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-stone-800 to-neutral-900 rounded-2xl p-4 clay-shadow-sm">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900 mb-1">Email</div>
                    <div className="text-stone-600">
                      hello@clayfit.studio
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/70 backdrop-blur-xl rounded-[40px] clay-shadow-lg p-10">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">
                Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-stone-700 font-medium">Monday - Friday</span>
                  <span className="text-stone-600">5:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-700 font-medium">Saturday - Sunday</span>
                  <span className="text-stone-600">6:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
