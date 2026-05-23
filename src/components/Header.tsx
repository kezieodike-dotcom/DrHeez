import { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { PHONE_WHATSAPP } from '../data';


interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'store', label: 'Store' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => { setActiveTab('home'); window.scrollTo(0, 0); }}
            id="brand-logo"
          >
            <img 
              src="/images/logo.jpg" 
              alt="Dr.Heez Global Ventures Logo" 
              className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-display font-black text-xl sm:text-2xl text-brand-green tracking-tight leading-none">
              DrHeez
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo(0, 0);
                }}
                className={`font-sans font-medium text-[15px] transition-all relative py-2 px-1 ${
                  activeTab === item.id
                    ? 'text-brand-green font-bold'
                    : 'text-gray-600 hover:text-brand-green'
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Quick WhatsApp Link header */}
            <a
              href={`https://wa.me/${PHONE_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-brand-green text-white hover:bg-brand-green-hover text-sm font-semibold py-2.5 px-4 rounded-full transition-all shadow-md shadow-brand-green/10"
              id="header-whatsapp-cta"
            >
              <MessageSquare className="h-4 w-4 text-brand-gold" />
              <span>WhatsApp Live</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-brand-green hover:bg-gray-50 rounded-lg md:hidden cursor-pointer"
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-3 shadow-lg absolute w-full left-0 z-40 transition-all duration-200">
          <div className="px-4 pt-1 pb-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`w-full text-left block px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-brand-green/5 text-brand-green border-l-4 border-brand-gold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-brand-green'
                }`}
                id={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={`https://wa.me/${PHONE_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green font-bold py-3 px-4 rounded-lg mt-3 transition-colors shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              <MessageSquare className="h-5 w-5" />
              <span>Direct WhatsApp Order</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
