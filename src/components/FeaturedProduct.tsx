import { MessageSquare, Activity } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface FeaturedProductProps {
  onInstantBuyWhatsApp: (product: Product, quantity: number) => void;
}

export default function FeaturedProduct({ onInstantBuyWhatsApp }: FeaturedProductProps) {
  const megaProduct = PRODUCTS.find(p => p.id === 'mega-4-stemcells') || PRODUCTS[0];

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-gray-100" id="featured-product-highlights">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-black text-xs text-brand-gold uppercase tracking-widest block">
            Exclusive Standard Supplement
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark">
            Our Featured Product
          </h2>
          <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
          <p className="font-sans text-base text-gray-500 max-w-xl mx-auto">
            Experience cellular optimization and structural vitality through Dr.Heez scientific formulations.
          </p>
        </div>

        <div className="bg-brand-light border border-gray-200/50 rounded-3xl p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden border border-gray-150 p-4 shadow-md group">
              <img
                src={megaProduct.image}
                alt={megaProduct.name}
                className="w-full h-full object-cover rounded-xl group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 left-8 bg-brand-green text-brand-gold text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
                Flagship Wellness
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-brand-green font-bold text-sm bg-brand-green/5 py-1.5 px-4 rounded-lg">
              <Activity className="h-4.5 w-4.5 text-brand-gold animate-bounce" />
              <span>Mega 4 Stemcells Supplement</span>
            </div>

            <h3 className="font-display font-bold text-3xl text-brand-dark leading-snug">
              Maximize Cellular Rejuvenation & Daily Energy
            </h3>

            <p className="font-sans text-sm text-gray-600 leading-relaxed">
              <strong>Mega 4 Stemcells</strong> is a cutting-edge, natural botanical food supplement formulated to assist healthy cellular renewal, remove system toxicity, strengthen your defense pathways, and provide essential vitamins to sustain active lifestyles.
            </p>

            <div>
              <span className="text-xs font-black text-brand-green uppercase tracking-widest block mb-3.5">
                Key Wellness Support Benefits:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {megaProduct.benefits?.map((benefit, b_idx) => (
                  <div key={b_idx} className="flex items-start gap-2.5 text-xs text-gray-650 leading-snug">
                    <span className="text-brand-green font-extrabold h-4.5 w-4.5 flex-shrink-0 text-left">-</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Authorized Vendor Product</span>
                <span className="font-display font-extrabold text-2xl text-[#0E5A3C]">Mega 4 Stemcells</span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => onInstantBuyWhatsApp(megaProduct, 1)}
                  className="bg-brand-green hover:bg-brand-green-hover text-white font-extrabold text-xs py-3.5 px-6 rounded-xl flex items-center gap-2 shadow cursor-pointer transition-all"
                  id="featured-buy-now"
                >
                  <MessageSquare className="h-4.5 w-4.5 text-brand-gold" />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
