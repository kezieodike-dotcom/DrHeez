import { useState, useTransition } from 'react';
import { Product, CartItem } from './types';
import { PHONE_WHATSAPP } from './data';

// Component imports
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProduct from './components/FeaturedProduct';
import HomePreviews from './components/HomePreviews';
import AboutSection from './components/AboutSection';
import StoreSection from './components/StoreSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  // Navigation state overlays
  const [storeCategoryFilter, setStoreCategoryFilter] = useState<'wellness' | 'phones' | 'agro' | 'all'>('all');
  const [contactSubjectPreset, setContactSubjectPreset] = useState<string>('');

  // 1. ADD TO CART FLOW
  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.product.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { product, quantity }];
    });
    // Open cart drawer immediately to provide clear feedback
    setIsCartOpen(true);
  };

  // 2. WHATSAPP DIRECT ITEM ORDER FLOW
  const handleInstantBuyWhatsApp = (product: Product, quantity: number) => {
    const textStr = `Hello Dr.Heez,\n\nI want to make an instant order for:\n• ${quantity}x ${product.name} (₦${product.priceNGN.toLocaleString()} / $${product.priceUSD} each)\n\nPlease confirm product availability and shipment timelines!`;
    const encoded = encodeURIComponent(textStr);
    window.open(`https://wa.me/${PHONE_WHATSAPP}?text=${encoded}`, '_blank');
  };

  // 3. CART UPDATE OPERATIONS
  const handleUpdateQty = (productId: string, qty: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // 4. MULTI-DIRECTION LINK TRIGGERS
  const handleSelectStoreCategory = (cat: 'wellness' | 'phones' | 'agro') => {
    startTransition(() => {
      setStoreCategoryFilter(cat);
      setActiveTab('store');
    });
    window.scrollTo(0, 0);
  };

  const handleSelectService = (serviceId: string) => {
    // Map human readable IDs to scroll focus points
    startTransition(() => {
      setActiveTab('services');
    });
    setTimeout(() => {
      const el = document.getElementById(`service-block-${serviceId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  const handleServiceSelectContact = (serviceTitle: string) => {
    startTransition(() => {
      setContactSubjectPreset(`Consultancy Services Book - for "${serviceTitle}"`);
      setActiveTab('contact');
    });
    window.scrollTo(0, 0);
  };

  // Compute standard dynamic cart count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-brand-dark antialiased select-none font-sans">
      
      {/* Universal header navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          startTransition(() => {
            setActiveTab(tab);
            // General filter reset when manually selecting header
            if (tab === 'store') setStoreCategoryFilter('all');
            if (tab === 'contact') setContactSubjectPreset('');
          });
        }}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Primary Dynamic Main Body Router */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="animate-fade-in">
            {/* 1. Hero Module */}
            <Hero
              onShopClick={() => handleSelectStoreCategory('wellness')}
              onServicesClick={() => handleSelectService('consultancy')}
              onContactClick={() => {
                startTransition(() => {
                  setContactSubjectPreset('General Sourcing Inquiry');
                  setActiveTab('contact');
                });
                window.scrollTo(0, 0);
              }}
            />

            {/* 2. Business Categories */}
            <Categories
              onSelectStoreCategory={handleSelectStoreCategory}
              onSelectService={handleSelectService}
            />

            {/* 3. Featured Products */}
            <FeaturedProduct
              onAddToCart={handleAddToCart}
              onInstantBuyWhatsApp={handleInstantBuyWhatsApp}
            />

            {/* 4, 5, 6, 7. Previews & Endorsements */}
            <HomePreviews
              onNavTab={(tabId) => {
                startTransition(() => {
                  setActiveTab(tabId);
                });
                window.scrollTo(0, 0);
              }}
              onSelectService={handleServiceSelectContact}
            />
          </div>
        )}

        {/* About tab screen */}
        {activeTab === 'about' && (
          <div className="animate-fade-in">
            <AboutSection />
          </div>
        )}

        {/* Store tab screen */}
        {activeTab === 'store' && (
          <div className="animate-fade-in">
            <StoreSection
              onAddToCart={handleAddToCart}
              onInstantBuyWhatsApp={handleInstantBuyWhatsApp}
              preSelectedCategory={storeCategoryFilter}
            />
          </div>
        )}

        {/* Services tab screen */}
        {activeTab === 'services' && (
          <div className="animate-fade-in">
            <ServicesSection
              onServiceSelectContact={handleServiceSelectContact}
            />
          </div>
        )}

        {/* Contact tab screen */}
        {activeTab === 'contact' && (
          <div className="animate-fade-in">
            <ContactSection
              preFilledSubject={contactSubjectPreset}
            />
          </div>
        )}
      </main>

      {/* Slide-out cart system overlay */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Global Brand Footer widget */}
      <Footer
        activeTab={activeTab}
        setActiveTab={(tab) => {
          startTransition(() => {
            setActiveTab(tab);
          });
        }}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Persistent floating WhatsApp contact button */}
      <FloatingWhatsApp />
    </div>
  );
}
