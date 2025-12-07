import { useState } from 'react';

export default function Equipment() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Strength', 'Cardio', 'Functional'];

  const equipment = [
    { name: 'Power Racks', category: 'Strength', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800' },
    { name: 'Dumbbells', category: 'Strength', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800' },
    { name: 'Barbells', category: 'Strength', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800' },
    { name: 'Treadmills', category: 'Cardio', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800' },
    { name: 'Rowing Machines', category: 'Cardio', image: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=800' },
    { name: 'Spin Bikes', category: 'Cardio', image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800' },
    { name: 'Battle Ropes', category: 'Functional', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800' },
    { name: 'Kettlebells', category: 'Functional', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800' },
  ];

  const filteredEquipment = activeFilter === 'All' 
    ? equipment 
    : equipment.filter(item => item.category === activeFilter);

  return (
    <section id="equipment" className="py-24 px-6 bg-gradient-to-b from-stone-50 to-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/70 backdrop-blur-xl rounded-full px-6 py-3 mb-6 clay-shadow-sm">
            <span className="text-sm font-semibold text-stone-800">Premium Gear</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-stone-900 to-neutral-700 bg-clip-text text-transparent mb-4">
            Equipment Gallery
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-10">
            Top-tier equipment from industry-leading brands
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-br from-stone-900 to-neutral-800 text-white clay-shadow-lg scale-105'
                    : 'bg-white/70 backdrop-blur-xl text-stone-700 clay-shadow hover-lift'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEquipment.map((item) => (
            <div
              key={item.name}
              className="group bg-white/70 backdrop-blur-xl rounded-[32px] clay-shadow overflow-hidden hover-lift cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-stone-500 mb-2 uppercase tracking-wider">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-stone-900">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
