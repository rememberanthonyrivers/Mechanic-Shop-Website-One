import { ChevronDown, Wrench } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="relative min-h-screen overflow-hidden">
      <div className="parallax-section">
        <div className="parallax-background">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 opacity-50" />
          
          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          
          {/* Car Images Grid */}
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 opacity-20">
            <img src="https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&h=600&fit=crop" alt="Exotic Car" className="w-full h-full object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=600&fit=crop" alt="Everyday Car" className="w-full h-full object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop" alt="Modified Car" className="w-full h-full object-cover rounded-lg hidden md:block" />
            <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop" alt="Classic Car" className="w-full h-full object-cover rounded-lg hidden md:block" />
          </div>
        </div>
        
        <div className="parallax-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-4 mb-8 fade-in">
              <Wrench className="w-12 h-12 text-blue-500" />
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                ARCOS
              </h1>
            </div>
            <p className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
              Expert Care for Every Car Enthusiast
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12">
              From daily drivers to exotic supercars, we deliver precision service 
              and performance optimization for every automotive passion.
            </p>
            <button 
              onClick={scrollToContact}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Schedule Service
            </button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}