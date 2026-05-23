import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Activity, BrainCircuit, Factory, Smartphone, TrendingUp, HardHat, Wheat, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onShopClick, onServicesClick, onContactClick }: HeroProps) {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Health Care Products",
      description: "Premium natural wellness support supplements designed to support healthy living and cellular rejuvenation.",
      tagline: "Flagship Supplements",
      image: "/images/mega4-stemcells.png",
      icon: Activity,
      cta: "Shop Wellness",
      action: onShopClick
    },
    {
      title: "Oil & Gas Solutions",
      description: "Reliable support, logistics, and supply chain management for the oil and gas industry, ensuring operational efficiency.",
      tagline: "Industry Support",
      image: "/images/oil-gas.jpg",
      icon: Factory,
      cta: "Explore Solutions",
      action: onServicesClick
    },
    {
      title: "Phones & Accessories",
      description: "High-quality communication gadgets and premium mobile accessories for individuals and businesses.",
      tagline: "Tech Gadgets",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=605",
      icon: Smartphone,
      cta: "View Catalog",
      action: onShopClick
    },
    {
      title: "Financial Engineering",
      description: "Strategic financial advisory, structuring, and engineering solutions to maximize your business potential.",
      tagline: "Corporate Finance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=605",
      icon: TrendingUp,
      cta: "Get Advisory",
      action: onServicesClick
    },
    {
      title: "Construction Support",
      description: "Robust logistics, material supply, and strategic support for major construction and infrastructure projects.",
      tagline: "Infrastructure",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=605",
      icon: HardHat,
      cta: "Build With Us",
      action: onServicesClick
    },
    {
      title: "Agro & Allied Products",
      description: "Sustainable agricultural products and allied commerce solutions to support food security and local industries.",
      tagline: "Agriculture",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=605",
      icon: Wheat,
      cta: "Explore Agro",
      action: onShopClick
    },
    {
      title: "Consultancy Services",
      description: "Expert business planning, management consultancy, and strategic growth guidance for enterprises.",
      tagline: "Expert Advice",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=605",
      icon: BrainCircuit,
      cta: "Book Session",
      action: onContactClick
    },
    {
      title: "General Commerce",
      description: "End-to-end general trading, procurement, and supply chain solutions for diverse consumer needs.",
      tagline: "Trade & Supply",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=605",
      icon: ShoppingCart,
      cta: "View Store",
      action: onShopClick
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative overflow-hidden bg-brand-light py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100" id="hero-section">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-brand-green/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy - Left side */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-semibold tracking-wider uppercase mx-auto lg:mx-0">
              <ShieldCheck className="h-4 w-4 text-brand-gold" />
              <span>Certified Multi-Sector Enterprise</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-dark leading-tight tracking-tight">
              Trusted Solutions for <span className="text-brand-green underline decoration-brand-gold decoration-4 underline-offset-8">Wellness</span>, Commerce, Technology & Industry
            </h1>

            <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Dr.Heez Global Ventures provides quality wellness products, professional consultancy, construction support, agro-allied solutions, financial engineering, oil & gas support, and high-quality phone accessories for individuals and businesses worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onShopClick}
                className="inline-flex items-center justify-center gap-2.5 bg-brand-green text-white hover:bg-brand-green-hover font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:shadow-brand-green/10 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Shop Wellness Products</span>
                <ArrowRight className="h-4 w-4 text-brand-gold" />
              </button>
              
              <button
                onClick={onServicesClick}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-full border border-gray-200 shadow-sm transition-all cursor-pointer"
              >
                <span>Explore Services</span>
              </button>


            </div>
            
            {/* Slider Dots Indicator */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-4">
              {slides.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentSlide === idx ? 'w-8 bg-brand-green' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Dynamic Slider - Right side */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-xl">
              
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green to-brand-gold opacity-10 rounded-3xl blur-2xl transform rotate-3 scale-95" />
              
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100 p-2">
                <div 
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, idx) => {
                    const IconComponent = slide.icon;
                    return (
                      <div key={idx} className="w-full flex-shrink-0 p-4 sm:p-6">
                        <div className="flex justify-between items-start mb-6">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-brand-green text-brand-gold rounded-md">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">{slide.tagline}</span>
                          </div>
                        </div>

                        <div className="relative overflow-hidden rounded-xl bg-gray-50 h-[260px] mb-6 border border-gray-100/50 group">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                            <div>
                              <h3 className="text-white font-display font-bold text-xl leading-tight mb-1">{slide.title}</h3>
                              <p className="text-gray-200 text-sm">{slide.description}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <button
                            onClick={slide.action}
                            className="w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-bold text-sm py-3.5 px-4 rounded-xl cursor-pointer flex items-center justify-center gap-2 transition-all shadow-md"
                          >
                            <span>{slide.cta}</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Navigation Controls */}
                <button 
                  onClick={prevSlide}
                  className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-white/90 hover:bg-white text-brand-dark rounded-full shadow-lg border border-gray-100 cursor-pointer transition-all z-10"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white/90 hover:bg-white text-brand-dark rounded-full shadow-lg border border-gray-100 cursor-pointer transition-all z-10"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
