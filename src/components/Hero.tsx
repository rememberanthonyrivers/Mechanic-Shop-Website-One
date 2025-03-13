import { Wrench } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="hero" className="relative min-h-screen overflow-hidden">
      <div className="parallax-section">
        <div className="parallax-background">
          {/* Dynamic background with animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 opacity-70" />

          {/* Single hero image with overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&q=80"
              alt="Luxury Car"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          </div>

          {/* Animated light streaks */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="light-streak light-streak-1"></div>
            <div className="light-streak light-streak-2"></div>
            <div className="light-streak light-streak-3"></div>
          </div>

          {/* Noise texture overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30" />
        </div>

        <div className="parallax-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-4 mb-8 fade-in">
              <Wrench className="w-12 h-12 text-blue-500" />
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Mechanics Shop
              </h1>
            </div>
            <p className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
              Expert Care for Every Car Enthusiast
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12">
              From daily drivers to exotic supercars, we deliver precision
              service and performance optimization for every automotive passion.
            </p>
            <button
              onClick={scrollToContact}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Schedule Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
