import { Dumbbell, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-50 to-neutral-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-stone-800 to-neutral-900 rounded-2xl p-3 clay-shadow-sm">
                <Dumbbell className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-stone-800 to-neutral-700 bg-clip-text text-transparent">
                ClayFit
              </span>
            </div>
            <p className="text-stone-600 leading-relaxed mb-6">
              Premium minimal gym experience with soft 3D aesthetic. Transform your body, elevate your mind.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="bg-white/70 backdrop-blur-xl rounded-full p-3 clay-shadow hover-lift"
                >
                  <Icon className="w-5 h-5 text-stone-700" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-stone-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Story', 'Careers', 'Press'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-stone-900 mb-6">Services</h4>
            <ul className="space-y-3">
              {['Personal Training', 'Group Classes', 'Nutrition Plans', 'Corporate Wellness'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-stone-900 mb-6">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 text-center">
          <p className="text-stone-600">
            © 2024 ClayFit Studio. All rights reserved. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
