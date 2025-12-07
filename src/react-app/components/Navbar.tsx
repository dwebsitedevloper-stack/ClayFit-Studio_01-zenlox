import { useState } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = ['Home', 'Gym Areas', 'Equipment', 'Trainers', 'Programs', 'Membership', 'Gallery', 'Contact'];

  const scrollToSection = (item: string) => {
    const id = item.toLowerCase().replace(' ', '-');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div className="bg-white/60 backdrop-blur-xl rounded-[32px] clay-shadow-lg px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-stone-800 to-neutral-900 rounded-2xl p-3 clay-shadow-sm">
                <Dumbbell className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-stone-800 to-neutral-700 bg-clip-text text-transparent">
                ClayFit
              </span>
            </div>

            {/* Menu Items - Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="px-5 py-2.5 rounded-2xl text-sm font-medium text-stone-700 hover:bg-white/80 hover:clay-shadow-sm transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* CTA Button - Desktop Only */}
            <button className="hidden lg:block bg-gradient-to-br from-stone-800 to-neutral-900 text-white px-8 py-3.5 rounded-full clay-shadow font-semibold text-sm hover-lift">
              Join Now
            </button>

            {/* Hamburger Menu - Mobile Only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden bg-white/90 backdrop-blur-sm p-3 rounded-2xl clay-shadow hover-lift"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-stone-800" />
              ) : (
                <Menu className="w-6 h-6 text-stone-800" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-28 right-6 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white/90 backdrop-blur-xl rounded-[32px] clay-shadow-lg p-6 w-64">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="w-full text-left px-6 py-3.5 rounded-2xl text-sm font-medium text-stone-700 hover:bg-white hover:clay-shadow-sm transition-all duration-300"
              >
                {item}
              </button>
            ))}
            <button className="w-full bg-gradient-to-br from-stone-800 to-neutral-900 text-white px-6 py-3.5 rounded-full clay-shadow font-semibold text-sm hover-lift mt-4">
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-stone-900/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
