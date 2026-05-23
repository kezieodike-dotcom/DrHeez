import { useState, useTransition } from 'react';
import { Product } from './types';
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
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [pending, startTransition] = useTransition();

  // Navigation state overlays
  const [storeCategoryFilter, setStoreCategoryFilter] = useState<'wellness' | 'phones' | 'agro' | 'all'>('all');
  const [contactSubjectPreset, setContactSubjectPreset] = useState<string>('');

  // WhatsApp direct item order flow
  const handleInstantBuyWhatsApp = (product: Product, quantity: number) => {
    const textStr = `Hello Dr.Heez,\n\nI want to make an instant order for:\n• ${quantity}x ${product.name}\n\nPlease confirm product availability and shipment timelines!`;
    const encoded = encodeURIComponent(textStr);
    window.open(`https://wa.me/${PHONE_WHATSAPP}?text=${encoded}`, '_blank');
  };

  // Multi-direction link triggers
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

      {/* Global Brand Footer widget */}
      <Footer
        activeTab={activeTab}
        setActiveTab={(tab) => {
          startTransition(() => {
            setActiveTab(tab);
          });
        }}
      />

      {/* Persistent floating WhatsApp contact button */}
      <FloatingWhatsApp />
    </div>
  );
}
