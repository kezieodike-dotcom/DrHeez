import { Phone, Mail, Clock, MessageSquare, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { PHONE_WHATSAPP } from '../data';


interface FooterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Footer({ activeTab, setActiveTab }: FooterProps) {
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabSelect = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand-green" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Presentation column */}
          <div className="space-y-4">
            <img 
              src="/images/logo.jpg" 
              alt="Dr.Heez Global Ventures Logo" 
              className="h-14 w-auto object-contain bg-white p-1 rounded-lg shadow-sm"
            />
            <p className="font-sans text-xs text-gray-400 leading-relaxed">
              Dr.Heez Global Ventures is a multi-service business brand bringing wellness products, professional consultancy, construction support, agro products, and general commerce solutions under one trusted platform.
            </p>
            {/* Social media icons requested */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-green text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-green text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-green text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-green text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-brand-gold">
              Quick Links
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs text-gray-400">
              <button onClick={() => handleTabSelect('home')} className="hover:text-brand-gold text-left cursor-pointer transition-colors">
                Home Landing
              </button>
              <button onClick={() => handleTabSelect('about')} className="hover:text-brand-gold text-left cursor-pointer transition-colors">
                About Dr.Heez
              </button>
              <button onClick={() => handleTabSelect('store')} className="hover:text-brand-gold text-left cursor-pointer transition-colors">
                Online Store
              </button>
              <button onClick={() => handleTabSelect('services')} className="hover:text-brand-gold text-left cursor-pointer transition-colors">
                Services Portfolio
              </button>
              <button onClick={() => handleTabSelect('contact')} className="hover:text-brand-gold text-left cursor-pointer transition-colors">
                Contact Desk
              </button>
            </div>
          </div>

          {/* Main Services shortcut listing */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-brand-gold">
              Company Divisions
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs text-gray-400">
              <button onClick={() => handleTabSelect('services')} className="hover:text-brand-gold text-left cursor-pointer transition-colors">
                Corporate Consultancy
              </button>
              <button onClick={() => handleTabSelect('services')} className="hover:text-brand-gold text-left cursor-pointer transition-colors">
                Financial Engineering
              </button>
              <button onClick={() => handleTabSelect('services')} className="hover:text-brand-gold text-left cursor-pointer transition-colors">
                Construction Support
              </button>
              <button onClick={() => handleTabSelect('services')} className="hover:text-brand-gold text-left cursor-pointer transition-colors">
                Oil & Gas Solutions
              </button>
              <button onClick={() => handleTabSelect('store')} className="hover:text-brand-gold text-left cursor-pointer transition-colors">
                Agro & Allied Products
              </button>
              <button onClick={() => handleTabSelect('store')} className="hover:text-brand-gold text-left cursor-pointer transition-colors">
                Phones & Accessories
              </button>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-brand-gold">
              Contact Desk
            </h4>
            <div className="space-y-3.5 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <Phone className="h-4.5 w-4.5 text-brand-green flex-shrink-0" />
                <div>
                  <span className="block font-medium">WhatsApp Call / Text:</span>
                  <a href={`https://wa.me/${PHONE_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-gold font-bold font-mono">
                    {PHONE_WHATSAPP}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="h-4.5 w-4.5 text-brand-green flex-shrink-0" />
                <div>
                  <span className="block font-medium">Support Email Address:</span>
                  <span className="text-white font-bold">info@drheez.com</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="h-4.5 w-4.5 text-brand-green flex-shrink-0" />
                <div>
                  <span className="block font-medium">Operations:</span>
                  <span className="text-white font-semibold">Mon – Sat (8AM – 6PM)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright ribbon */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Dr.Heez Global Ventures. All Rights Reserved.</p>
            <p className="text-[10px] text-gray-600">
              Health Disclaimer: Mega 4 Stemcells products are botanical food supplements designed to support healthy general wellbeing, and are not intended to prevent or cure diseases.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Back to top helper */}
            <button
              onClick={handleScrollToTop}
              className="bg-white/5 hover:bg-brand-green p-2 text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              title="Return to the Top"
            >
              <ArrowUp className="h-4.5 w-4.5" />
            </button>
            
            {/* Direct floating link */}
            <a
              href={`https://wa.me/${PHONE_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors shadow"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
