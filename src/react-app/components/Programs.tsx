import { Zap, Dumbbell, Heart, Sparkles } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Sparkles,
      category: 'Beginner',
      name: 'Foundation Program',
      duration: '8 weeks',
      description: 'Perfect introduction to fitness with guided sessions and form coaching.',
      features: ['3 sessions/week', 'Form focus', 'Progress tracking'],
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Dumbbell,
      category: 'Strength',
      name: 'Power Builder',
      duration: '12 weeks',
      description: 'Progressive overload program designed for maximum strength gains.',
      features: ['4 sessions/week', 'Compound lifts', 'Periodization'],
      color: 'from-stone-800 to-neutral-900',
    },
    {
      icon: Zap,
      category: 'HIIT',
      name: 'Metabolic Burn',
      duration: '6 weeks',
      description: 'High-intensity intervals to boost metabolism and endurance.',
      features: ['5 sessions/week', 'Cardio + Strength', 'Fat loss focus'],
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Heart,
      category: 'Recovery',
      name: 'Restore & Renew',
      duration: '4 weeks',
      description: 'Active recovery with yoga, mobility, and low-impact movement.',
      features: ['Daily practice', 'Flexibility', 'Stress relief'],
      color: 'from-blue-500 to-indigo-600',
    },
  ];

  return (
    <section id="programs" className="py-24 px-6 bg-gradient-to-b from-neutral-100 to-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/70 backdrop-blur-xl rounded-full px-6 py-3 mb-6 clay-shadow-sm">
            <span className="text-sm font-semibold text-stone-800">Training Plans</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-stone-900 to-neutral-700 bg-clip-text text-transparent mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Structured pathways designed to help you achieve your goals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div
              key={program.name}
              className="group bg-white/70 backdrop-blur-xl rounded-[36px] clay-shadow p-8 hover-lift cursor-pointer"
            >
              <div className={`inline-flex bg-gradient-to-br ${program.color} rounded-2xl p-4 clay-shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>

              <div className="inline-block bg-stone-100/80 rounded-full px-4 py-2 mb-4">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                  {program.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-stone-900 mb-2">
                {program.name}
              </h3>

              <div className="text-sm text-stone-500 font-semibold mb-4">
                {program.duration}
              </div>

              <p className="text-stone-600 leading-relaxed mb-6">
                {program.description}
              </p>

              <div className="space-y-2">
                {program.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-stone-700 to-neutral-800" />
                    <span className="text-sm text-stone-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
