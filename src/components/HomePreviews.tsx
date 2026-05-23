import { ArrowRight, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { TestimonialsColumn, TestimonialsColumnItem } from './ui/testimonials-columns-1';

interface HomePreviewsProps {
  onNavTab: (tabId: string) => void;
  onSelectService: (serviceTitle: string) => void;
}

export default function HomePreviews({ onNavTab, onSelectService }: HomePreviewsProps) {
  const testimonialImages = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120',
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=120',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120',
    'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=120',
  ];

  const customerVoices: TestimonialsColumnItem[] = TESTIMONIALS.flatMap((test, index) => {
    const base = {
      text: test.text,
      image: testimonialImages[index % testimonialImages.length],
      name: test.author,
      role: test.role,
    };

    if (index === TESTIMONIALS.length - 1) {
      return [
        base,
        {
          text: 'Their sourcing team handled our wellness and supply requests with clear communication, fast confirmation, and careful product guidance.',
          image: testimonialImages[(index + 1) % testimonialImages.length],
          name: 'Hadiza Bello',
          role: 'Procurement Lead, Mavora Trade House',
        },
        {
          text: 'We came for product availability and stayed for the follow-through. The team kept each step practical, transparent, and easy to track.',
          image: testimonialImages[(index + 2) % testimonialImages.length],
          name: 'Tunde Akinwale',
          role: 'Operations Partner, Ardent Fieldworks',
        },
      ];
    }

    return [base];
  });

  const firstColumn = customerVoices.slice(0, 3);
  const secondColumn = customerVoices.slice(3, 6);
  const thirdColumn = customerVoices.slice(6, 9);

  return (
    <div id="home-additional-previews">
      
      {/* 4. ABOUT PREVIEW SECTION */}
      <section className="py-20 bg-brand-light px-4 sm:px-6 lg:px-8 border-b border-gray-100" id="home-about-preview">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="font-display font-black text-xs text-brand-gold uppercase tracking-widest block">
              Enterprise Mission Preview
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark leading-tight">
              About Dr.Heez Global Ventures
            </h2>
            <div className="h-1.5 w-16 bg-brand-green rounded-full" />
            
            <p className="font-sans text-sm text-gray-600 leading-relaxed">
              Dr.Heez Global Ventures is a diversified multi-service company dedicated to delivering superior health formulations and professional services across several key sectors. We combine elite-level health systems, strategic management consultancy, financial designs, agro supply lines, and general commerce solutions under one premium, certified brand.
            </p>
            
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              Our vision is to become a premier diversified global business enterprise recognized for uncompromising integrity, outstanding technological acceleration, food security pathways, and optimal healthcare supplements.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavTab('about')}
                className="inline-flex items-center gap-2 text-brand-green hover:text-brand-gold font-bold text-sm group cursor-pointer"
                id="about-preview-cta"
              >
                <span>Read Our Full Story & Mission</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 p-6 rounded-2xl space-y-2.5">
              <span className="text-sm font-black text-brand-green uppercase tracking-wider block">Integrity</span>
              <p className="text-xs text-gray-500 leading-relaxed">Absolute transparency in sourcing premium accessories and healthcare raw elements.</p>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-2xl space-y-2.5">
              <span className="text-sm font-black text-brand-green uppercase tracking-wider block">Quality</span>
              <p className="text-xs text-gray-500 leading-relaxed">Every item from Mega 4 Stemcells to fast chargers is heavily audited prior to ship-out.</p>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-2xl space-y-2.5">
              <span className="text-sm font-black text-brand-green uppercase tracking-wider block">Professionalism</span>
              <p className="text-xs text-gray-500 leading-relaxed">All advisory work is headed by registered practitioners and industry veterans.</p>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-2xl space-y-2.5">
              <span className="text-sm font-black text-brand-green uppercase tracking-wider block">Innovation</span>
              <p className="text-xs text-gray-500 leading-relaxed">Continuous strategic counseling updates tailored to local and international markets.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SERVICES OVERVIEW SECTION */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-gray-100" id="home-services-preview">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-4">
              <span className="font-display font-black text-xs text-brand-gold uppercase tracking-widest block font-bold">
                Professional Options
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark">
                Services Overview
              </h2>
              <div className="h-1.5 w-16 bg-brand-green rounded-full" />
            </div>
            <button
              onClick={() => onNavTab('services')}
              className="px-6 py-3.5 bg-brand-green text-white hover:bg-brand-green-hover font-semibold rounded-xl text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>Explore All Services</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-light border border-gray-200/50 p-6 rounded-2xl hover:shadow-md transition-shadow">
              <span className="text-brand-gold font-bold text-sm block mb-1">Division 01</span>
              <h3 className="font-display font-bold text-lg text-brand-dark mb-3">Corporate Consultancy</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">Expert startups guidance, comprehensive organizational diagnostics, and strategic execution framework steering.</p>
              <button onClick={() => onSelectService('Consultancy Services')} className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1">
                <span>Request Advice</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            <div className="bg-brand-light border border-gray-200/50 p-6 rounded-2xl hover:shadow-md transition-shadow">
              <span className="text-brand-gold font-bold text-sm block mb-1">Division 02</span>
              <h3 className="font-display font-bold text-lg text-brand-dark mb-3">Financial Engineering</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">Feasibility planning, capital advisory blueprints, and continuous risk assessment modeling matrices.</p>
              <button onClick={() => onSelectService('Financial Engineering')} className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1">
                <span>Request Advice</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            <div className="bg-brand-light border border-gray-200/50 p-6 rounded-2xl hover:shadow-md transition-shadow">
              <span className="text-brand-gold font-bold text-sm block mb-1">Division 03</span>
              <h3 className="font-display font-bold text-lg text-brand-dark mb-3">Construction Support</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">Premium civil procurement channels, expert onsite support, logistics routing, and municipal filing counsel.</p>
              <button onClick={() => onSelectService('Construction Support')} className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1">
                <span>Request Advice</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="bg-brand-light py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 relative overflow-hidden" id="home-testimonials">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center">
            <div className="flex justify-center">
              <div className="border border-brand-green/10 bg-white py-1 px-4 rounded-lg text-xs font-black text-brand-gold uppercase tracking-widest">
                Testimonials
              </div>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-5 text-brand-dark">
              What users say
            </h2>
            <p className="text-center mt-5 text-sm text-gray-500 leading-relaxed">
              See what our customers have to say about Dr.Heez products, sourcing support, and professional services.
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </section>

      {/* 7. CONTACT CTA BANNER */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-gray-100" id="home-contact-cta">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-brand-green text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden">
          {/* visual background circle */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-green to-brand-green-hover opacity-50" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-2xl" />

          <div className="relative z-10 space-y-4">
            <span className="bg-brand-gold/15 text-brand-gold text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-widest inline-block">
              Rapid Response Desk
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
              Ready to Partner with Dr.Heez Global Ventures?
            </h2>
            <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
              We provide fast turnaround on herbal supplements, phone gear, and industrial consulting. Request quotes inside minutes.
            </p>
            <div className="pt-4 flex justify-center items-center">
              <button
                onClick={() => {
                  window.open(`https://wa.me/+2348140731811`, '_blank');
                }}
                className="bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-extrabold text-xs py-3.5 px-8 rounded-full shadow hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <MessageSquare className="h-4.5 w-4.5" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
