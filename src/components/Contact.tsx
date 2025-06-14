
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully",
        description: "Thank you for your inquiry. I'll respond within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-light text-black mb-12 tracking-tight">
              Contact
            </h2>
            
            <div className="space-y-8">
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Let's discuss your vision and create something extraordinary together.
              </p>

              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest mb-2">Email</div>
                  <div className="text-lg text-black font-light">your.email@example.com</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest mb-2">Phone</div>
                  <div className="text-lg text-black font-light">+1 (555) 123-4567</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest mb-2">Location</div>
                  <div className="text-lg text-black font-light">Your City, State</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-black transition-colors duration-200 pb-3 text-black placeholder-gray-400 focus:outline-none text-lg font-light"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-black transition-colors duration-200 pb-3 text-black placeholder-gray-400 focus:outline-none text-lg font-light"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-black transition-colors duration-200 pb-3 text-black placeholder-gray-400 focus:outline-none text-lg font-light"
                  placeholder="Subject"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-black transition-colors duration-200 pb-3 text-black placeholder-gray-400 focus:outline-none text-lg font-light resize-none"
                  placeholder="Message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="text-black hover:text-gray-600 transition-colors duration-200 text-sm uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed pt-4"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
