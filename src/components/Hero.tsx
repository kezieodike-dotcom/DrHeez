import { ArrowRight, ShieldCheck, Activity, BrainCircuit, Play } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onShopClick, onServicesClick, onContactClick }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-brand-light py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100" id="hero-section">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />
      
      {/* Visual background stripe */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-brand-green/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy - Left side */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tag notification */}
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

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onShopClick}
                className="inline-flex items-center justify-center gap-2.5 bg-brand-green text-white hover:bg-brand-green-hover font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:shadow-brand-green/10 transition-all cursor-pointer transform hover:-translate-y-0.5"
                id="hero-shop-cta"
              >
                <span>Shop Wellness Products</span>
                <ArrowRight className="h-4 w-4 text-brand-gold" />
              </button>
              
              <button
                onClick={onServicesClick}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-full border border-gray-200 shadow-sm transition-all cursor-pointer"
                id="hero-services-cta"
              >
                <span>Explore Services</span>
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-black/5 text-gray-700 font-medium py-4 px-6 rounded-full transition-all cursor-pointer"
                id="hero-contact-cta"
              >
                <span>Request Consultation</span>
              </button>
            </div>

            {/* Static Stats / Badges */}
            <div className="pt-6 border-t border-gray-200/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="block font-display font-bold text-2xl sm:text-3xl text-brand-green">10k+</span>
                <span className="block text-xs font-medium text-gray-500 uppercase tracking-wider">Happy Clients</span>
              </div>
              <div>
                <span className="block font-display font-bold text-2xl sm:text-3xl text-brand-green">8+</span>
                <span className="block text-xs font-medium text-gray-500 uppercase tracking-wider">Business Units</span>
              </div>
              <div>
                <span className="block font-display font-bold text-2xl sm:text-3xl text-brand-green">100%</span>
                <span className="block text-xs font-medium text-gray-500 uppercase tracking-wider">Quality Verified</span>
              </div>
            </div>
          </div>

          {/* Graphic / Promotional Render Column - Right side */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backglow panel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green to-brand-gold opacity-10 rounded-3xl blur-2xl transform rotate-3 scale-95" />
              
              {/* Main promotional card */}
              <div className="relative border border-gray-100 bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
                {/* Header inside promo */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-brand-green text-brand-gold rounded-md">
                      <Activity className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">Flagship Supplement</span>
                  </div>
                  <span className="bg-brand-gold/15 text-brand-green text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                    Best Seller
                  </span>
                </div>

                {/* Simulated product photo */}
                <div className="relative overflow-hidden rounded-xl bg-gray-50 h-[220px] mb-6 border border-gray-100/50 group">
                  <img
                    src="/images/mega4-stemcells.png"
                    alt="Mega 4 Stemcells Product"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-white font-display font-bold text-lg leading-tight">Mega 4 Stemcells</h3>
                      <p className="text-brand-gold text-xs font-semibold">Natural cellular regeneration supplement</p>
                    </div>
                  </div>
                </div>

                {/* Wellness points preview */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="text-brand-green h-4 w-4 font-bold flex items-center justify-center">✓</span>
                    <span>Supports natural body detoxification and defense</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="text-brand-green h-4 w-4 font-bold flex items-center justify-center">✓</span>
                    <span>Rich in antioxidants for supreme energy & recovery</span>
                  </div>
                </div>

                {/* Interactive Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-gray-400 text-[10px] block uppercase font-bold tracking-wider">Pricing standard</span>
                    <span className="font-display font-extrabold text-xl text-brand-green">₦45,000 <span className="text-gray-400 text-sm font-normal">/ $60</span></span>
                  </div>
                  <button
                    onClick={onShopClick}
                    className="bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-bold text-xs py-2.5 px-4 rounded-lg cursor-pointer flex items-center gap-1 transition-all"
                  >
                    <span>Instant Order</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Scientific Disclaimer */}
                <p className="text-[10px] text-gray-400 italic block mt-3.5 leading-tight text-center">
                  *This supplement is not intended to diagnose, treat, cure, or prevent any diseases.
                </p>
              </div>

              {/* Float Badge 1 */}
              <div className="absolute -top-4 -left-4 bg-white border border-gray-100 px-4 py-2 rounded-xl shadow-md hidden sm:flex items-center gap-2 animate-bounce">
                <BrainCircuit className="h-5 w-5 text-brand-green" />
                <div>
                  <span className="text-[10px] text-gray-400 block font-semibold">Our consultancy expertise</span>
                  <span className="text-xs font-bold text-brand-dark block">Deep Strategic Planning</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
