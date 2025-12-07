import { useState } from 'react';
import { Award, Star } from 'lucide-react';

export default function Trainers() {
  const [expandedTrainer, setExpandedTrainer] = useState<number | null>(null);

  const trainers = [
    {
      name: 'Alex Chen',
      title: 'Strength & Conditioning',
      specialty: 'Olympic Weightlifting',
      bio: '10+ years of experience in elite athlete training. Certified in strength and conditioning with a focus on functional movement.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
    },
    {
      name: 'Maria Santos',
      title: 'Yoga & Recovery',
      specialty: 'Mindful Movement',
      bio: 'RYT-500 certified yoga instructor specializing in recovery, mobility, and mind-body connection for athletes.',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400',
    },
    {
      name: 'Jordan Blake',
      title: 'HIIT & Performance',
      specialty: 'Metabolic Conditioning',
      bio: 'Former competitive athlete turned trainer. Expert in high-intensity training and metabolic optimization.',
      image: 'https://images.unsplash.com/photo-1567598508481-65985588e295?w=400',
    },
    {
      name: 'Sophie Laurent',
      title: 'Nutrition & Wellness',
      specialty: 'Performance Nutrition',
      bio: 'Registered dietitian with expertise in sports nutrition, body composition, and sustainable lifestyle changes.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    },
  ];

  return (
    <section id="trainers" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/70 backdrop-blur-xl rounded-full px-6 py-3 mb-6 clay-shadow-sm">
            <span className="text-sm font-semibold text-stone-800">Expert Guidance</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-stone-900 to-neutral-700 bg-clip-text text-transparent mb-4">
            Meet Your Trainers
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            World-class professionals dedicated to your success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.name}
              className="bg-white/70 backdrop-blur-xl rounded-[36px] clay-shadow overflow-hidden hover-lift cursor-pointer"
              onClick={() => setExpandedTrainer(expandedTrainer === index ? null : index)}
            >
              {/* Portrait with Inset Shadow */}
              <div className="p-6">
                <div className="relative aspect-square rounded-full overflow-hidden clay-inset-deep mb-6">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-stone-700" />
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    {trainer.specialty}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-stone-900 text-center mb-2">
                  {trainer.name}
                </h3>
                
                <p className="text-sm text-stone-600 text-center font-medium mb-4">
                  {trainer.title}
                </p>

                {/* Expandable Bio */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedTrainer === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-stone-50/50 rounded-2xl clay-inset p-4 mt-4">
                    <p className="text-sm text-stone-700 leading-relaxed">
                      {trainer.bio}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
