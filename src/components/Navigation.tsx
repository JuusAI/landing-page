
import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
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
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Services', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Work', href: '#features', id: 'features' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'blur-background' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 relative">
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
                    className={`nav-glow px-3 py-2 text-sm font-light tracking-tight transition-colors duration-200 ${
                      activeSection === item.id 
                        ? 'text-gray-900 active' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
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
                  <span className="burger-line w-full h-0.5 bg-gray-700 block"></span>
                  <span className="burger-line w-full h-0.5 bg-gray-700 block"></span>
                  <span className="burger-line w-full h-0.5 bg-gray-700 block"></span>
                </div>
              </button>
            </div>

            {/* Active section glow underline positioned at bottom of header */}
            <div className="absolute bottom-0 left-0 right-0 h-px">
              <div 
                className={`absolute bottom-0 transition-all duration-300 ease-out ${
                  activeSection ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent 0%, #FFD580 20%, #FFB84D 50%, #FFD580 80%, transparent 100%)',
                  borderRadius: '2px',
                  boxShadow: `
                    0 0 12px rgba(255, 213, 128, 0.6),
                    0 0 24px rgba(255, 184, 77, 0.4),
                    0 0 36px rgba(255, 165, 0, 0.2)
                  `,
                }}
              />
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
      <div className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl border-l border-gray-200 z-50 transform transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 pt-20">
          <div className="space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-600 hover:text-gray-900 text-lg font-light tracking-tight transition-colors duration-200"
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
