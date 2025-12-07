import { Check, Crown } from 'lucide-react';

export default function Membership() {
  const tiers = [
    {
      name: 'Essential',
      price: '49',
      description: 'Perfect for getting started',
      features: [
        '24/7 gym access',
        'Locker & shower facilities',
        'Basic equipment access',
        'Mobile app tracking',
      ],
      highlight: false,
    },
    {
      name: 'Premium',
      price: '89',
      description: 'Most popular choice',
      features: [
        'Everything in Essential',
        'Group classes included',
        '2 personal training sessions/month',
        'Nutrition consultation',
        'Recovery zone access',
      ],
      highlight: false,
    },
    {
      name: 'VIP Elite',
      price: '149',
      description: 'Ultimate fitness experience',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Private training area access',
        'Custom meal planning',
        'Priority class booking',
        'Guest passes (4/month)',
        'Spa & wellness services',
      ],
      highlight: true,
    },
  ];

  return (
    <section id="membership" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/70 backdrop-blur-xl rounded-full px-6 py-3 mb-6 clay-shadow-sm">
            <span className="text-sm font-semibold text-stone-800">Join ClayFit</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-stone-900 to-neutral-700 bg-clip-text text-transparent mb-4">
            Membership Plans
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white/70 backdrop-blur-xl rounded-[40px] clay-shadow-lg p-8 hover-lift ${
                tier.highlight ? 'scale-105 lg:scale-110' : ''
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2 rounded-full clay-shadow flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    <span className="text-sm font-bold">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-stone-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-stone-600 mb-6">
                  {tier.description}
                </p>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-2xl text-stone-700 font-semibold">$</span>
                  <span className="text-6xl font-bold bg-gradient-to-br from-stone-900 to-neutral-700 bg-clip-text text-transparent">
                    {tier.price}
                  </span>
                  <span className="text-xl text-stone-600 font-medium mb-2">/mo</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="bg-gradient-to-br from-stone-800 to-neutral-900 rounded-full p-1 clay-shadow-sm flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-stone-700 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-gradient-to-br from-stone-900 to-neutral-800 text-white clay-shadow-lg hover-lift'
                    : 'bg-white/90 backdrop-blur-sm text-stone-800 clay-shadow hover-lift'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Onboarding Note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/70 backdrop-blur-xl rounded-3xl clay-shadow px-8 py-4">
            <p className="text-sm text-stone-600">
              All memberships include a free personalized onboarding session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
