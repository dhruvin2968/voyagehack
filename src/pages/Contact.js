import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };
  useEffect(() => {
    document.title = `Contact - Planorama`;
  });
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}>
      <div className="bg-white bg-opacity-90 p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Get in Touch</h2>
        <p className="text-gray-600 text-center mb-6">Have a question or want to plan your next trip? Contact us now!</p>
        <div className="flex flex-col md:flex-row md:gap-6 mb-6">
          <div className="flex items-center gap-3 text-gray-700">
            <Mail size={20} /> <span>support@planorama.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Phone size={20} /> <span>+91 8291619774</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin size={20} /> <span>Mumbai, India</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="p-3 border rounded-lg w-full" />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="p-3 border rounded-lg w-full" />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required className="p-3 border rounded-lg w-full h-32" />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">Send Message</button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

