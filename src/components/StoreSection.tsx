import { useState, useMemo } from 'react';
import { Search, ShoppingCart, MessageSquare, Star, SlidersHorizontal, Info, Check, Eye, X } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, PHONE_WHATSAPP } from '../data';

interface StoreSectionProps {
  onAddToCart: (product: Product, quantity: number) => void;
  onInstantBuyWhatsApp: (product: Product, quantity: number) => void;
  preSelectedCategory?: 'wellness' | 'phones' | 'agro' | 'all';
}

export default function StoreSection({ onAddToCart, onInstantBuyWhatsApp, preSelectedCategory = 'all' }: StoreSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'wellness' | 'phones' | 'agro'>(preSelectedCategory);
  
  // Track currently active visual modal / dialog
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dialogQuantity, setDialogQuantity] = useState(1);

  // Filter products reactively
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((prod) => {
      const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
      const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            prod.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleOpenProductDetails = (product: Product) => {
    setSelectedProduct(product);
    setDialogQuantity(1);
  };

  const handleCloseProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-brand-light py-16 lg:py-24" id="store-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page title and banner */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-xs text-brand-gold uppercase tracking-widest block">
            Dr.Heez Online Mart
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-brand-dark">
            Our Online Store
          </h1>
          <div className="h-1.5 w-24 bg-brand-green mx-auto rounded-full" />
          <p className="font-sans text-base text-gray-500 leading-relaxed">
            Acquire premium organic supplements, genuine phone accessories, and certified agro-allied supply products from a verified supplier.
          </p>
        </div>

        {/* Faceted search & filter ribbon */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          
          {/* Category Quick Filter Selectors */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {(['all', 'wellness', 'phones', 'agro'] as const).map((cat) => {
              const label = cat === 'all' ? 'All Products' : 
                            cat === 'wellness' ? 'Wellness Products' : 
                            cat === 'phones' ? 'Phones & Accessories' : 'Agro Products';
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-brand-green text-brand-gold shadow-md'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100'
                  }`}
                  id={`filter-tab-${cat}`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Search Inputs */}
          <div className="relative w-full md:max-w-sm">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4.5 w-4.5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
              id="store-search-field"
            />
          </div>

        </div>

        {/* Dynamic products list */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <Info className="h-12 w-12 text-brand-gold mx-auto mb-4 animate-bounce" />
            <h3 className="font-display font-bold text-lg text-brand-dark mb-1">No products found</h3>
            <p className="font-sans text-xs text-gray-400 max-w-sm mx-auto">
              We couldn't find items Matching your search query. Try switching your active folder category.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-6 inline-flex text-xs font-bold text-brand-green hover:underline cursor-pointer"
            >
              Reset list filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((prod) => (
              <div 
                key={prod.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all group flex flex-col justify-between"
                id={`product-card-${prod.id}`}
              >
                {/* Photo container holding quick view */}
                <div className="relative aspect-square overflow-hidden bg-gray-50 border-b border-gray-100">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {prod.isFeatured && (
                    <span className="absolute top-3 left-3 bg-brand-gold text-brand-green text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                      Featured
                    </span>
                  )}
                  {/* Category Pill */}
                  <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs border border-gray-100 text-brand-dark text-[9px] font-extrabold px-2.5 py-0.5 rounded-md uppercase">
                    {prod.categoryLabel}
                  </span>
                  
                  {/* Hover Quick View Trigger */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleOpenProductDetails(prod)}
                      className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-brand-gold hover:text-brand-green font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Text and description column */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Star Rating decoration */}
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-amber-400 stroke-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold">(4.9/5)</span>
                    </div>

                    <h3 
                      onClick={() => handleOpenProductDetails(prod)}
                      className="font-display font-bold text-base text-brand-dark hover:text-brand-green cursor-pointer transition-colors leading-snug mb-2 line-clamp-1"
                      title={prod.name}
                    >
                      {prod.name}
                    </h3>
                    <p className="font-sans text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                      {prod.description}
                    </p>
                  </div>

                  {/* Pricing and cart hooks */}
                  <div>
                    <div className="py-2.5 border-t border-gray-50 flex items-baseline justify-between mb-4">
                      <div>
                        <span className="text-xs text-gray-400 block font-medium">Retail Price</span>
                        <span className="font-display font-extrabold text-[#0E5A3C] text-lg">
                          ₦{prod.priceNGN.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-gray-400 font-mono text-xs font-semibold">
                        ${prod.priceUSD} USD
                      </span>
                    </div>

                    {/* Dual Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onAddToCart(prod, 1)}
                        className="bg-brand-green hover:bg-brand-green-hover text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1 transition-all shadow-sm shadow-brand-green/5 cursor-pointer"
                        id={`btn-add-cart-${prod.id}`}
                      >
                        <ShoppingCart className="h-3.5 w-3.5" />
                        <span>Add To Cart</span>
                      </button>
                      
                      <button
                        onClick={() => onInstantBuyWhatsApp(prod, 1)}
                        className="bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1 transition-all shadow-sm cursor-pointer"
                        id={`btn-wa-order-${prod.id}`}
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>Buy Direct</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Dialog Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 flex items-center justify-center p-4 backdrop-blur-xs">
            <div className="relative bg-white max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={handleCloseProductDetails}
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Promo image - Left */}
              <div className="md:w-1/2 relative bg-gray-50 h-[300px] md:h-auto">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-end p-6">
                  <div>
                    <span className="bg-brand-gold text-brand-green text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase mb-2 inline-block">
                      {selectedProduct.categoryLabel}
                    </span>
                    <h2 className="text-white font-display font-bold text-2xl leading-tight">
                      {selectedProduct.name}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Text, Specs & checkout Actions - Right */}
              <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-5">
                  <div>
                    <span className="text-xs text-brand-green font-bold block mb-1">Product Description</span>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Core Benefits points if wellness or organic */}
                  {selectedProduct.benefits && (
                    <div>
                      <span className="text-xs text-brand-green font-bold block mb-2">Wellness & Health Benefits</span>
                      <div className="grid grid-cols-1 gap-1.5 max-h-[120px] overflow-y-auto pr-2">
                        {selectedProduct.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-xs text-gray-600">
                            <Check className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Specifications checklist */}
                  {selectedProduct.specs && (
                    <div>
                      <span className="text-xs text-brand-green font-bold block mb-2">Specifications</span>
                      <div className="bg-gray-50 rounded-xl p-3 space-y-1.5 border border-gray-100">
                        {selectedProduct.specs.map((spec, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs">
                            <span className="text-gray-400 font-medium">{spec.label}</span>
                            <span className="text-gray-700 font-bold">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Scientific notice disclaimer requested by PRD */}
                  {selectedProduct.scientificDisclaimer && (
                    <div className="bg-amber-50/70 border border-amber-200/50 rounded-xl p-3 text-[10px] text-amber-800 italic leading-tight flex gap-2">
                      <span className="text-amber-500 font-bold font-mono">⚠️</span>
                      <span>
                        <strong>Notice:</strong> This product is not intended to diagnose, treat, cure, or prevent any disease. Customers are advised to consult healthcare professionals for medical concerns.
                      </span>
                    </div>
                  )}
                </div>

                {/* Buying section footer */}
                <div className="pt-6 border-t border-gray-100 mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold block">Current Price</span>
                      <span className="font-display font-extrabold text-2xl text-brand-green block">
                        ₦{selectedProduct.priceNGN.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-400">~ ${selectedProduct.priceUSD} USD equivalent</span>
                    </div>

                    {/* Quantity selectors */}
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs">
                      <button
                        onClick={() => setDialogQuantity(Math.max(1, dialogQuantity - 1))}
                        className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 text-lg font-bold transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-4 py-1.5 text-sm font-bold text-gray-800">
                        {dialogQuantity}
                      </span>
                      <button
                        onClick={() => setDialogQuantity(dialogQuantity + 1)}
                        className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 text-lg font-bold transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Operational Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => {
                        onAddToCart(selectedProduct, dialogQuantity);
                        handleCloseProductDetails();
                      }}
                      className="bg-brand-green hover:bg-brand-green-hover text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <ShoppingCart className="h-4 w-4 text-brand-gold" />
                      <span>Add to Cart ({dialogQuantity})</span>
                    </button>

                    <button
                      onClick={() => {
                        onInstantBuyWhatsApp(selectedProduct, dialogQuantity);
                        handleCloseProductDetails();
                      }}
                      className="bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Buy on WhatsApp</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
