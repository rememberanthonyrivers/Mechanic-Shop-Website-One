import { Car, Settings, PenTool as Tool, Cpu, Battery, Gauge } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: "Luxury Vehicle Specialists",
    description: "Expert care for high-end automotive brands with manufacturer-certified technicians"
  },
  {
    icon: Settings,
    title: "Performance Tuning",
    description: "Precision tuning and optimization for maximum vehicle performance"
  },
  {
    icon: Tool,
    title: "Advanced Diagnostics",
    description: "State-of-the-art diagnostic equipment for accurate problem identification"
  },
  {
    icon: Cpu,
    title: "Electronic Systems",
    description: "Comprehensive electronic system repairs and updates"
  },
  {
    icon: Battery,
    title: "Hybrid & Electric",
    description: "Specialized service for hybrid and electric luxury vehicles"
  },
  {
    icon: Gauge,
    title: "Preventive Maintenance",
    description: "Scheduled maintenance to keep your vehicle in peak condition"
  }
];

export default function Services() {
  return (
    <div id="services" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 parallax" data-speed="0.2">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive automotive solutions delivered with precision and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 parallax"
              data-speed={0.1 + (index * 0.05)}
            >
              <service.icon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}