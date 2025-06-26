
const FeaturedSection = () => {
  const publications = [
    { name: 'TechCrunch', logo: 'TC' },
    { name: 'Forbes', logo: 'F' },
    { name: 'Wired', logo: 'W' },
    { name: 'Bloomberg', logo: 'B' },
    { name: 'The Verge', logo: 'TV' },
    { name: 'MIT Review', logo: 'MIT' },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto scroll-fade">
        <div className="text-center mb-16">
          <h2 className="text-sm font-light text-white/40 tracking-wider uppercase mb-8">
            Featured In
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {publications.map((pub, index) => (
            <div
              key={pub.name}
              className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl font-bold text-white/60 group-hover:text-white/80 transition-colors duration-300 mb-2">
                {pub.logo}
              </div>
              <div className="text-xs font-light text-white/40 tracking-tight">
                {pub.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
