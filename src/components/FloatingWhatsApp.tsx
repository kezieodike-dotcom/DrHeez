import { MessageSquare } from 'lucide-react';
import { PHONE_WHATSAPP, WHATSAPP_MESSAGE_TEMPLATE } from '../data';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const text = encodeURIComponent(WHATSAPP_MESSAGE_TEMPLATE);
    window.open(`https://wa.me/${PHONE_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer whatsapp-pulse group"
      aria-label="Chat on WhatsApp"
      id="floating-whatsapp-btn"
      title="Chat with Dr.Heez on WhatsApp"
    >
      <MessageSquare className="h-6 w-6 group-hover:scale-110 transition-transform" />
      
      {/* Tooltip label */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-brand-dark text-white text-[11px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Chat with us
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-brand-dark" />
      </span>
    </button>
  );
}
