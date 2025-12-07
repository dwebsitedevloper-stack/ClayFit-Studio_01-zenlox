import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
      {/* Floating Clay Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-stone-300 to-neutral-300 rounded-[40%_60%_60%_40%/40%_60%_40%_60%] opacity-30 blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-neutral-300 to-stone-200 rounded-[60%_40%_40%_60%/60%_40%_60%_40%] opacity-25 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-stone-200 to-neutral-200 rounded-[50%_50%_50%_50%/50%_50%_50%_50%] opacity-20 blur-2xl animate-pulse-glow" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Hero Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-[48px] clay-shadow-lg p-12 md:p-16">
          <div className="inline-block bg-gradient-to-r from-stone-200 to-neutral-200 rounded-full px-6 py-3 mb-8 clay-shadow-sm">
            <span className="text-sm font-semibold text-stone-800">Premium Fitness Experience</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-br from-stone-900 via-neutral-800 to-stone-700 bg-clip-text text-transparent">
              Sculpt Your
            </span>
            <br />
            <span className="bg-gradient-to-br from-stone-800 to-neutral-600 bg-clip-text text-transparent">
              Best Self
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Experience fitness reimagined with our minimal, modern approach to strength, wellness, and transformation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-br from-stone-900 to-neutral-800 text-white px-10 py-5 rounded-full clay-shadow-lg font-semibold text-lg hover-lift flex items-center gap-3">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-white/90 backdrop-blur-sm text-stone-800 px-10 py-5 rounded-full clay-shadow font-semibold text-lg hover-lift flex items-center gap-3">
              <div className="bg-gradient-to-br from-stone-800 to-neutral-900 rounded-full p-2 clay-shadow-sm">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
              Watch Tour
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            { value: '5000+', label: 'Members' },
            { value: '50+', label: 'Expert Trainers' },
            { value: '24/7', label: 'Access' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/60 backdrop-blur-xl rounded-3xl clay-shadow p-6 hover-lift">
              <div className="text-4xl font-bold bg-gradient-to-br from-stone-900 to-neutral-700 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-stone-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
