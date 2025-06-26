
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#how-it-works' },
    { name: 'Work', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'blur-background border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-semibold text-gradient tracking-tight">
                Juus AI
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white/80 hover:text-white px-3 py-2 text-sm font-light tracking-tight transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`burger-line-container p-2 ${isMobileMenuOpen ? 'burger-active' : ''}`}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className="burger-line w-full h-0.5 bg-white block"></span>
                  <span className="burger-line w-full h-0.5 bg-white block"></span>
                  <span className="burger-line w-full h-0.5 bg-white block"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Tray */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-xl border-l border-white/10 z-50 transform transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 pt-20">
          <div className="space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white/80 hover:text-white text-lg font-light tracking-tight transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
