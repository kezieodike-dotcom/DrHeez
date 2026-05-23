import { useState, useEffect } from 'react';
import { ArrowRight, Activity, BrainCircuit, Factory, Smartphone, TrendingUp, HardHat, Wheat, ShoppingBag } from 'lucide-react';

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
      image: "/images/mega4.jpg",
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
      icon: ShoppingBag,
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

  const activeSlide = slides[currentSlide];
  const ActiveIcon = activeSlide.icon;

  return (
    <div className="relative overflow-hidden bg-brand-dark border-b border-gray-100" id="hero-section">
      <div className="relative min-h-[620px] lg:min-h-[720px]">
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="relative w-full flex-shrink-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f18]/95 via-[#0b1f18]/70 to-[#0b1f18]/20" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-brand-dark/55 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto min-h-[620px] lg:min-h-[720px] px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl pt-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-gold text-xs font-bold tracking-wider uppercase border border-white/10">
              <ActiveIcon className="h-4 w-4" />
              <span>{activeSlide.tagline}</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mt-6">
              {activeSlide.title}
            </h1>

            <p className="font-sans text-base sm:text-lg text-gray-100 leading-relaxed max-w-xl mt-5">
              {activeSlide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={activeSlide.action}
                className="inline-flex items-center justify-center gap-2.5 bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-extrabold py-4 px-8 rounded-full shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>{activeSlide.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-4 px-8 rounded-full border border-white/15 transition-all cursor-pointer"
              >
                <span>Contact Dr.Heez</span>
              </button>
            </div>

            <div className="flex items-center gap-2 pt-10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentSlide === idx ? 'w-10 bg-brand-gold' : 'w-2 bg-white/45 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
