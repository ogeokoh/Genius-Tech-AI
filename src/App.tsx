import React, { useEffect, useState } from 'react';
import { Bot, Brain, ChevronDown, LineChart, MessageSquare, Calendar, Users, Zap, Database, ArrowRight } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('solutions');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0b1e]/95 backdrop-blur-sm py-4 shadow-lg' : 'py-6'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-[#00ff94] animate-float" />
            <span className="text-xl font-bold tracking-wider">Genius Tech AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="hover:text-[#00ff94] transition-colors duration-300">Solutions</a>
            <a href="#pricing" className="hover:text-[#00ff94] transition-colors duration-300">Pricing</a>
            <a href="#results" className="hover:text-[#00ff94] transition-colors duration-300">Results</a>
            <a href="#contact" className="hover:text-[#00ff94] transition-colors duration-300">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium hover:text-[#00ff94] transition-colors duration-300">
              Log in
            </button>
            <button className="px-6 py-2 bg-[#00ff94] text-black rounded-full font-medium hover:bg-[#00ff94]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,148,0.3)]">
              Apply
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b1e] via-transparent to-[#0a0b1e] opacity-60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,148,0.1)_0%,transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 pt-20 text-center relative z-10">
          {/* Trustpilot */}
          <div className="mb-12 flex justify-center items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="w-5 h-5 bg-[#00ff94] rounded-sm transform hover:scale-110 transition-transform duration-200"></div>
              ))}
            </div>
            <span className="text-sm opacity-80 ml-2">296 Reviews • Excellent</span>
          </div>

          {/* Main Hero Content */}
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent tracking-tight leading-tight">
              Turn Conversations into Customers with AI Automation.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Genius Tech AI helps you streamline customer support, skyrocket lead generation, and set appointments while you sleep.
            </p>

            {/* CTAs */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <button className="px-8 py-4 bg-[#00ff94] text-black rounded-full text-lg font-semibold hover:bg-[#00ff94]/90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,255,148,0.3)] hover:shadow-[0_0_40px_rgba(0,255,148,0.4)] w-full md:w-auto">
                Get My Free AI Growth Plan
              </button>
              <button 
                onClick={scrollToFeatures}
                className="group flex items-center justify-center space-x-2 text-lg font-medium hover:text-[#00ff94] transition-colors duration-300"
              >
                <span>See How It Works</span>
                <ChevronDown className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <section className="py-12 bg-[#0d0e23]/80 backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#00ff94]">500+</p>
              <p className="text-sm text-gray-400">Businesses Automated</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#00ff94]">85%</p>
              <p className="text-sm text-gray-400">Response Time Reduced</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#00ff94]">2.5x</p>
              <p className="text-sm text-gray-400">Lead Conversion Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#00ff94]">24/7</p>
              <p className="text-sm text-gray-400">AI-Powered Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-[#0a0b1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Tired of Missed Leads and Lost Sales?</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                "Slow customer support response times",
                "Manual CRM updates eating up hours",
                "Leads slipping through the cracks",
                "Prospects ghosting you before booking a call"
              ].map((problem, index) => (
                <div key={index} className="p-6 bg-[#12133a]/50 rounded-xl border border-white/5 transform hover:scale-105 transition-all duration-300">
                  <p className="text-lg text-gray-300">{problem}</p>
                </div>
              ))}
            </div>
            <button className="px-8 py-4 bg-[#00ff94] text-black rounded-full text-lg font-semibold hover:bg-[#00ff94]/90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,255,148,0.3)]">
              Fix It Now with AI
            </button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solutions" className="py-24 bg-[#0d0e23]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How Genius Tech AI Works for You</h2>
            <p className="text-xl text-gray-400">We automate your growth — so you can focus on running your business.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <MessageSquare className="w-12 h-12 text-[#00ff94]" />,
                title: "Customer Support Automation",
                description: "24/7 AI agents that close support tickets faster, keeping your customers happy around the clock."
              },
              {
                icon: <Database className="w-12 h-12 text-[#00ff94]" />,
                title: "CRM Integrations",
                description: "Real-time updates across your sales pipeline without lifting a finger, ensuring no lead gets left behind."
              },
              {
                icon: <Users className="w-12 h-12 text-[#00ff94]" />,
                title: "Lead Generation",
                description: "AI prospecting and nurturing for hotter, ready-to-buy leads that convert at 2.5x the rate."
              },
              {
                icon: <Calendar className="w-12 h-12 text-[#00ff94]" />,
                title: "Appointment Setting",
                description: "AI-powered schedulers that fill your calendar automatically with qualified prospects."
              }
            ].map((solution, index) => (
              <div 
                key={index} 
                className="p-8 bg-[#12133a] rounded-2xl hover:bg-[#12133a]/80 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,148,0.1)] border border-white/5"
              >
                <div className="mb-6 animate-float">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-400 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-[#0a0b1e]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What Our Clients Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "We cut response times by 85% and doubled booked calls — Genius Tech AI is a game-changer!",
                author: "Sarah Chen",
                role: "CEO, TechFlow Solutions"
              },
              {
                quote: "Our lead conversion rate jumped 150% in the first month. The ROI is absolutely incredible.",
                author: "Michael Rodriguez",
                role: "Marketing Director, Growth Co"
              },
              {
                quote: "Finally, a solution that actually delivers on the promise of AI automation. Simply outstanding.",
                author: "David Park",
                role: "Founder, InnovateX"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 bg-[#12133a]/50 rounded-2xl border border-white/5 transform hover:scale-105 transition-all duration-300"
              >
                <p className="text-lg mb-6 text-gray-300">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-[#00ff94]">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-[#0d0e23]/80 backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Proof Our Systems Work</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-[#12133a]/50 rounded-2xl border border-white/5">
                <p className="text-sm text-gray-400 mb-2">Before AI</p>
                <p className="text-4xl font-bold text-white mb-4">10%</p>
                <p className="text-gray-400">Lead-to-Appointment Rate</p>
              </div>
              <div className="p-8 bg-[#12133a] rounded-2xl border border-[#00ff94]/20">
                <p className="text-sm text-[#00ff94] mb-2">After AI</p>
                <p className="text-4xl font-bold text-[#00ff94] mb-4">40%</p>
                <p className="text-gray-400">Lead-to-Appointment Rate</p>
              </div>
            </div>
            <button className="px-8 py-4 bg-[#12133a] text-white rounded-full text-lg font-semibold hover:bg-[#12133a]/80 transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-[#00ff94]/20 group">
              <span className="flex items-center justify-center">
                See More Success Stories
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-24 bg-[#0a0b1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free AI Growth Plan</h2>
              <p className="text-xl text-gray-400">
                We'll audit your current system and show you how automation can increase your leads and bookings by 20–30% — absolutely free.
              </p>
            </div>
            <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-[#12133a] rounded-xl border border-white/10 focus:border-[#00ff94]/50 focus:outline-none focus:ring-2 focus:ring-[#00ff94]/20 transition-all duration-300 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-[#12133a] rounded-xl border border-white/10 focus:border-[#00ff94]/50 focus:outline-none focus:ring-2 focus:ring-[#00ff94]/20 transition-all duration-300 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="Business Website (optional)"
                    className="w-full px-6 py-4 bg-[#12133a] rounded-xl border border-white/10 focus:border-[#00ff94]/50 focus:outline-none focus:ring-2 focus:ring-[#00ff94]/20 transition-all duration-300 text-white placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#00ff94] text-black rounded-full text-lg font-semibold hover:bg-[#00ff94]/90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,255,148,0.3)] hover:shadow-[0_0_40px_rgba(0,255,148,0.4)]"
                >
                  Send Me My Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-[#12133a] p-6 rounded-2xl shadow-2xl max-w-sm border border-white/10 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-start space-x-4">
            <Bot className="w-10 h-10 text-[#00ff94] animate-float" />
            <div>
              <p className="text-sm leading-relaxed">Hey there! Got questions about Genius Tech AI? I'm an expert in automation solutions — feel free to reach out!</p>
              <button className="mt-4 px-6 py-2 bg-[#00ff94] text-black rounded-full text-sm font-medium hover:bg-[#00ff94]/90 transition-all duration-300 transform hover:scale-105 w-full">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;