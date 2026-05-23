import { ArrowRight, ThumbsUp, Star, Users, MessageSquare, Briefcase, Sparkle } from 'lucide-react';
import { TESTIMONIALS } from '../data';

interface HomePreviewsProps {
  onNavTab: (tabId: string) => void;
  onSelectService: (serviceTitle: string) => void;
}

export default function HomePreviews({ onNavTab, onSelectService }: HomePreviewsProps) {
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
      <section className="py-20 bg-brand-light px-4 sm:px-6 lg:px-8 border-b border-gray-100" id="home-testimonials">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-display font-black text-xs text-brand-gold uppercase tracking-widest block font-bold">
              User Endorsements
            </span>
            <h2 className="font-display font-bold text-3xl text-brand-dark">
              What Our Clients Say
            </h2>
            <div className="h-1.5 w-16 bg-brand-green mx-auto rounded-full" />
            <p className="text-xs text-gray-500">
              Verified outcomes from individual healthcare supplement consumers and heavy corporate clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
              <div 
                key={test.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
                id={`testimonial-card-${test.id}`}
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex text-amber-400 gap-0.5 mb-4">
                    {[...Array(test.rating)].map((_, idx) => (
                      <Star key={idx} className="h-4.5 w-4.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  {/* Testimonial Message */}
                  <p className="font-sans text-xs text-gray-600 leading-relaxed italic mb-6">
                    "{test.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-50 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-display font-bold text-brand-dark block">
                      {test.author}
                    </span>
                    <span className="text-[10px] text-gray-400 block font-medium">
                      {test.role}
                    </span>
                  </div>
                  <span className="text-[10px] text-brand-green font-mono font-bold">
                    {test.date}
                  </span>
                </div>
              </div>
            ))}
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
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onNavTab('contact')}
                className="bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-extrabold text-xs py-3.5 px-8 rounded-full shadow hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider block w-full sm:w-auto"
              >
                Book Consultation Now
              </button>
              <button
                onClick={() => {
                  window.open(`https://wa.me/+2348140731811`, '_blank');
                }}
                className="bg-white/10 hover:bg-white/15 text-white font-bold text-xs py-3.5 px-6 rounded-full inline-flex items-center justify-center gap-1.5 transition-all text-center border border-white/10 block w-full sm:w-auto"
              >
                <MessageSquare className="h-4.5 w-4.5 text-brand-gold" />
                <span>Text Sourcing Manager</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
