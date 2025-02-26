import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-gray-900 py-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Visit Our Shop</h2>
          <p className="text-gray-400">Experience automotive excellence in person</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-black rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="text-white">123 Performance Drive</p>
                  <p className="text-gray-400">Los Angeles, CA 90001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-500" />
                <p className="text-white">(555) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-500" />
                <p className="text-white">service@arcosmechanic.com</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="text-white">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">Sat: 9:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-black rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}