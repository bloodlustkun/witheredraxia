import { motion } from 'motion/react';
import { Mail, MapPin, Send, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-gray-600">05.</span>{' '}
          <span className="bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
            CONTACT
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6">Get In Touch</h3>
            
            <p className="text-gray-400 mb-8">
              I'm <span className="text-white">Aksh Thakur</span>, a BCA first-year student and full-stack developer.
              Currently working with DevBhoomi Wings and open to collaborations, freelance projects, and learning opportunities.
              Feel free to reach out through any of these channels!
            </p>

            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-red-950/30 rounded-lg group-hover:bg-red-900/40 transition-colors">
                  <Mail className="text-red-500" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a href="mailto:akshbishtbruh@gmail.com" className="text-gray-300 hover:text-red-400 transition-colors">
                    akshbishtbruh@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-red-950/30 rounded-lg group-hover:bg-red-900/40 transition-colors">
                  <MessageCircle className="text-red-500" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Discord</div>
                  <div className="text-gray-300">aksh.exe</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-red-950/30 rounded-lg group-hover:bg-red-900/40 transition-colors">
                  <Phone className="text-red-500" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <a href="tel:+919311338083" className="text-gray-300 hover:text-red-400 transition-colors">
                    +91 9311338083
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-red-950/30 rounded-lg group-hover:bg-red-900/40 transition-colors">
                  <MapPin className="text-red-500" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-gray-300">India</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Element */}
            <motion.div
              className="mt-12 p-6 border border-red-900/30 rounded-lg bg-gradient-to-r from-red-950/20 to-black/40"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-3">
                <h4 className="text-red-400">Quick Info</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• BCA First Year Student</p>
                  <p>• Based in India</p>
                  <p>• Languages: Hindi & English</p>
                  <p>• Coding since 2021</p>
                </div>
                <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-white/5">
                  Social: <a href="https://github.com/bloodlustkun" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">GitHub</a> • <a href="https://youtube.com/@akshexe" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">YouTube</a> • <a href="https://instagram.com/lmaooaksh" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">Instagram</a>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg focus:border-red-600 focus:outline-none transition-colors text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg focus:border-red-600 focus:outline-none transition-colors text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-lg focus:border-red-600 focus:outline-none transition-colors text-white resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-red-600 to-red-900 rounded-lg flex items-center justify-center gap-2 hover:from-red-700 hover:to-red-950 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <Send className="relative z-10" size={18} />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-700 to-black"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500"
        >
          <p>© 2025 Aksh Thakur. Crafted with precision and strategic intent.</p>
        </motion.div>
      </div>
    </section>
  );
}
