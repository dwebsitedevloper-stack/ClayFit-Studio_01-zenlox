import { useState } from 'react';
import { Grid3x3, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');

  const images = [
    { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200', alt: 'Modern gym interior', category: 'Interior' },
    { url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200', alt: 'Strength training zone', category: 'Strength Zone' },
    { url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200', alt: 'Barbell and weights', category: 'Equipment' },
    { url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200', alt: 'Cardio machines', category: 'Cardio Zone' },
    { url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1200', alt: 'Functional training area', category: 'Functional' },
    { url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200', alt: 'Yoga and stretch studio', category: 'Stretch Studio' },
    { url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200', alt: 'Dumbbell rack', category: 'Equipment' },
    { url: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1200', alt: 'Spin bikes', category: 'Cardio Zone' },
    { url: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=1200', alt: 'Rowing machines', category: 'Cardio Zone' },
    { url: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1200', alt: 'Weight lifting platform', category: 'Strength Zone' },
    { url: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=1200', alt: 'Kettlebells display', category: 'Equipment' },
    { url: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=1200', alt: 'Modern locker room', category: 'Facilities' },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-gradient-to-b from-stone-50 to-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/70 backdrop-blur-xl rounded-full px-6 py-3 mb-6 clay-shadow-sm">
            <span className="text-sm font-semibold text-stone-800">Visual Tour</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-stone-900 to-neutral-700 bg-clip-text text-transparent mb-4">
            Gallery
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-8">
            Step inside our premium fitness sanctuary
          </p>

          {/* View Toggle */}
          <div className="inline-flex bg-white/70 backdrop-blur-xl rounded-full clay-shadow p-2 gap-2">
            <button
              onClick={() => setViewMode('masonry')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                viewMode === 'masonry'
                  ? 'bg-gradient-to-br from-stone-900 to-neutral-800 text-white clay-shadow'
                  : 'text-stone-700 hover:bg-stone-100/50'
              }`}
            >
              <Maximize2 className="w-4 h-4" />
              Masonry
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-br from-stone-900 to-neutral-800 text-white clay-shadow'
                  : 'text-stone-700 hover:bg-stone-100/50'
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
              Grid
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          className={
            viewMode === 'grid'
              ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6'
          }
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`group bg-white/70 backdrop-blur-xl rounded-[32px] clay-shadow overflow-hidden hover-lift cursor-pointer ${
                viewMode === 'grid' ? '' : 'break-inside-avoid'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <div className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                      {image.category}
                    </div>
                    <div className="text-white font-semibold text-lg">
                      {image.alt}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
