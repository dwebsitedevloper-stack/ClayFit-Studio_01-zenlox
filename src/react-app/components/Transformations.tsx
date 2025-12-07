import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Transformations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);

  const transformations = [
    {
      name: 'Sarah M.',
      program: 'Power Builder',
      duration: '12 weeks',
      before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
      after: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600',
      testimonial: 'ClayFit completely transformed not just my body, but my mindset. The trainers are incredible.',
    },
    {
      name: 'Mike T.',
      program: 'Metabolic Burn',
      duration: '6 weeks',
      before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
      after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600',
      testimonial: 'Lost 15 pounds and gained so much strength. This place is different from any other gym.',
    },
    {
      name: 'Emma L.',
      program: 'Foundation Program',
      duration: '8 weeks',
      before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
      after: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600',
      testimonial: 'As a beginner, I was intimidated. The team made me feel comfortable and helped me build confidence.',
    },
  ];

  const current = transformations[activeIndex];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % transformations.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/70 backdrop-blur-xl rounded-full px-6 py-3 mb-6 clay-shadow-sm">
            <span className="text-sm font-semibold text-stone-800">Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-stone-900 to-neutral-700 bg-clip-text text-transparent mb-4">
            Transformations
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Real people, real results, real commitment
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/70 backdrop-blur-xl rounded-[48px] clay-shadow-lg p-8 md:p-12">
            {/* Before/After Slider */}
            <div className="relative mb-8 aspect-[16/10] rounded-[32px] overflow-hidden clay-inset-deep">
              <div className="absolute inset-0">
                <img
                  src={current.before}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
                }}
              >
                <img
                  src={current.after}
                  alt="After"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white clay-shadow-lg cursor-ew-resize"
                style={{ left: `${sliderValue}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 clay-shadow-lg">
                  <div className="flex gap-1">
                    <div className="w-1 h-6 bg-gradient-to-br from-stone-700 to-neutral-800 rounded-full" />
                    <div className="w-1 h-6 bg-gradient-to-br from-stone-700 to-neutral-800 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-6 left-6 bg-stone-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                Before
              </div>
              <div className="absolute top-6 right-6 bg-stone-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                After
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              />
            </div>

            {/* Info */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-stone-900 mb-2">
                {current.name}
              </h3>
              <div className="flex items-center justify-center gap-4 text-stone-600 mb-4">
                <span className="font-semibold">{current.program}</span>
                <span>•</span>
                <span>{current.duration}</span>
              </div>
              <p className="text-lg text-stone-700 italic max-w-2xl mx-auto leading-relaxed">
                "{current.testimonial}"
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-full clay-shadow hover-lift"
              >
                <ChevronLeft className="w-6 h-6 text-stone-800" />
              </button>

              <div className="flex gap-2">
                {transformations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-8 bg-gradient-to-r from-stone-800 to-neutral-900'
                        : 'w-2 bg-stone-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-full clay-shadow hover-lift"
              >
                <ChevronRight className="w-6 h-6 text-stone-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
