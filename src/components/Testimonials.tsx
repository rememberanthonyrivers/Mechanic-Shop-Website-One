const testimonials = [
  {
    name: "James Mitchell",
    role: "Lamborghini Huracán Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    content: "Finding a shop that truly understands exotic cars is rare. Arcos not only maintains my Huracán perfectly but enhances its performance beyond expectations."
  },
  {
    name: "Sarah Chen",
    role: "Honda Civic Type R Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    content: "As a performance enthusiast, I love how Arcos treats my Type R with the same dedication as any exotic car. Their tuning expertise is outstanding."
  },
  {
    name: "Michael Rodriguez",
    role: "Toyota Camry & McLaren Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    content: "Whether I bring in my daily Camry or my McLaren, Arcos provides exceptional service. They truly understand both worlds of automotive care."
  },
  {
    name: "Emma Thompson",
    role: "Subaru WRX STI Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    content: "The performance upgrades and maintenance Arcos has done on my STI have transformed it. They know exactly what enthusiasts want from their cars."
  }
];

export default function Testimonials() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Trusted by Car Enthusiasts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500"
                />
              </div>
              
              <div className="pt-8">
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div className="text-center">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-blue-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}