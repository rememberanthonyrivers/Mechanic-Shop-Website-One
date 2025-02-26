import { Wrench } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-8 md:mb-0">
            <Wrench className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold">ARCOS</span>
          </div>
          
          <div className="flex space-x-8">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Arcos Mechanic Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}