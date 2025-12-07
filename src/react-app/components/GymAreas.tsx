import { Dumbbell, Heart, Zap, Sparkles } from 'lucide-react';

export default function GymAreas() {
  const areas = [
    {
      icon: Dumbbell,
      name: 'Strength Zone',
      description: 'Premium free weights, power racks, and Olympic platforms for serious lifting.',
      gradient: 'from-stone-800 to-neutral-900',
    },
    {
      icon: Heart,
      name: 'Cardio Loft',
      description: 'State-of-the-art treadmills, bikes, and rowing machines with scenic views.',
      gradient: 'from-neutral-700 to-stone-800',
    },
    {
      icon: Zap,
      name: 'Functional Floor',
      description: 'Open space for agility drills, HIIT, and functional movement training.',
      gradient: 'from-stone-700 to-neutral-800',
    },
    {
      icon: Sparkles,
      name: 'Stretch Studio',
      description: 'Dedicated recovery area with yoga mats, foam rollers, and massage tools.',
      gradient: 'from-neutral-800 to-stone-900',
    },
  ];

  return (
    <section id="gym-areas" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/70 backdrop-blur-xl rounded-full px-6 py-3 mb-6 clay-shadow-sm">
            <span className="text-sm font-semibold text-stone-800">Our Facilities</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-stone-900 to-neutral-700 bg-clip-text text-transparent mb-4">
            Gym Areas
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Thoughtfully designed spaces for every aspect of your fitness journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area) => (
            <div
              key={area.name}
              className="group bg-white/70 backdrop-blur-xl rounded-[40px] clay-shadow-lg p-10 hover-lift cursor-pointer"
            >
              <div className={`inline-block bg-gradient-to-br ${area.gradient} rounded-3xl p-6 clay-shadow mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              
              <h3 className="text-3xl font-bold text-stone-900 mb-4">
                {area.name}
              </h3>
              
              <p className="text-lg text-stone-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
