import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Briefcase 
} from 'lucide-react';
import { PHONE_WHATSAPP, WHATSAPP_MESSAGE_TEMPLATE } from '../data';


interface ContactSectionProps {
  preFilledSubject?: string;
}

export default function ContactSection({ preFilledSubject = '' }: ContactSectionProps) {
  // Contact Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(preFilledSubject || 'General Sourcing Inquiry');
  const [message, setMessage] = useState('');
  
  // Simulation indicators
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate server POST
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset after success
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1500);
  };

  const handleDirectWhatsAppClick = () => {
    const textQuery = encodeURIComponent(WHATSAPP_MESSAGE_TEMPLATE);
    window.open(`https://wa.me/${PHONE_WHATSAPP}?text=${textQuery}`, '_blank');
  };

  return (
    <div className="bg-white py-16 lg:py-24" id="contact-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-display font-bold text-xs text-brand-gold uppercase tracking-widest block">
            Partner with Us
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-brand-dark">
            Contact Dr.Heez Global Ventures
          </h1>
          <div className="h-1.5 w-24 bg-brand-green mx-auto rounded-full" />
          <p className="font-sans text-base text-gray-500 leading-relaxed">
            Need high-quality wellness items or professional multi-sector support? Reach out to Dr.Heez Global Ventures today. Our strategic consultants respond in record hours.
          </p>
        </div>

        {/* Major Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Sourcing details - Left Side */}
          <div className="lg:col-span-4 bg-brand-green text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Ambient Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-bold text-2xl text-brand-gold mb-2">Corporate Information</h3>
                <p className="text-sm text-gray-300">
                  Multiple business divisions coordinating international healthcare supplements and strategic industry consultancy.
                </p>
              </div>

              {/* Direct Info list from PRD */}
              <div className="space-y-6">
                
                {/* Business Name */}
                <div className="flex items-start gap-4">
                  <img src="/images/logo.jpg" alt="Dr.Heez Logo" className="h-10 w-auto object-contain" />
                  <div>
                    <span className="text-gray-400 text-[10px] block uppercase font-bold tracking-wider">Registered Entity</span>
                    <span className="font-display font-bold text-base text-white">Dr.Heez Global Ventures</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 text-brand-gold rounded-xl">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] block uppercase font-bold tracking-wider">WhatsApp Line</span>
                    <a className="font-sans font-bold text-base text-white hover:text-brand-gold block transition-colors" href={`https://wa.me/${PHONE_WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                      {PHONE_WHATSAPP}
                    </a>
                  </div>
                </div>

                {/* Operating schedule */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 text-brand-gold rounded-xl">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] block uppercase font-bold tracking-wider">Business Hours</span>
                    <span className="font-sans font-medium text-sm text-white block">Monday – Saturday</span>
                    <span className="font-sans font-bold text-xs text-brand-gold">8:00 AM – 6:00 PM (GMT+1)</span>
                  </div>
                </div>

                {/* Main Sourcing Desk */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 text-brand-gold rounded-xl">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] block uppercase font-bold tracking-wider">Authorized Desk</span>
                    <span className="font-sans font-bold text-sm text-white block">info@drheez.com</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct WhatsApp Action bottom */}
            <div className="pt-8 border-t border-white/15 mt-8">
              <button 
                onClick={handleDirectWhatsAppClick}
                className="w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-bold py-3.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-all"
                id="contact-wa-chat"
              >
                <MessageSquare className="h-4.5 w-4.5" />
                <span>Instant Inquiry Chat</span>
              </button>
            </div>
          </div>

          {/* Interactive Form - Right Side */}
          <div className="lg:col-span-8 bg-brand-light border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col justify-center">
            
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="h-16 w-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="h-10 w-10 text-brand-gold animate-bounce" />
                </div>
                <h3 className="font-display font-black text-2xl text-brand-dark">Message Dispatched!</h3>
                <p className="font-sans text-xs text-gray-400 max-w-sm mx-auto">
                  Thank you! Your message has been simulated and successfully routed to Dr.Heez Global Ventures database. We will review and reply within 4 working hours.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-brand-green hover:bg-brand-green-hover text-white font-bold py-2.5 px-5 rounded-lg text-xs cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  <button
                    onClick={handleDirectWhatsAppClick}
                    className="bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-bold py-2.5 px-5 rounded-lg text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Follow-up on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-dark mb-1">Send Us a Direct Message</h3>
                  <p className="text-xs text-gray-400">Complete the form below to register your consultation file.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5" htmlFor="full-name">Full Name</label>
                    <input
                      required
                      type="text"
                      id="full-name"
                      placeholder="e.g. Chukwuemeka Aliyu"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-shadow"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5" htmlFor="email-address">Email Address</label>
                    <input
                      required
                      type="email"
                      id="email-address"
                      placeholder="e.g. chukwu@yahoo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-shadow"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5" htmlFor="phone-number">Phone Number</label>
                    <input
                      required
                      type="tel"
                      id="phone-number"
                      placeholder="e.g. +234 803 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-shadow"
                    />
                  </div>

                  {/* Subject category list */}
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5" htmlFor="msg-subject">Subject</label>
                    <select
                      id="msg-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs font-bold text-brand-green focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none"
                    >
                      <option value="General Sourcing Inquiry">General Sourcing Inquiry</option>
                      <option value="Mega 4 Stemcells Order">Mega 4 Stemcells Order</option>
                      <option value="Consultancy Services Book">Consultancy Services Booking</option>
                      <option value="Financial Engineering Consult">Financial Engineering Counseling</option>
                      <option value="Construction Site Support">Construction Site Support</option>
                      <option value="Oil & Gas Logistics">Oil & Gas Sourcing Logistics</option>
                      <option value="Agro Allied Produce Sourcing">Agro Allied Sourcing</option>
                      <option value="Bulk Smartphone Procurement">Bulk Accessories Sourcing</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5" htmlFor="msg-text">Message Details</label>
                  <textarea
                    required
                    id="msg-text"
                    placeholder="Enter details of your project size, wellness concerns, or specifications..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none resize-none transition-shadow"
                  />
                </div>

                {/* Submit trigger */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-brand-green hover:bg-brand-green-hover disabled:bg-brand-green/60 text-white font-bold py-3.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow shadow-brand-green/10"
                  id="contact-form-submit"
                >
                  {submitting ? (
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <Send className="h-4 w-4 text-brand-gold" />
                      <span>Send Message Securely</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

        {/* Dynamic CTA notice bottom banner */}
        <div className="bg-brand-green text-white rounded-3xl p-8 text-center space-y-4 shadow-lg border border-white/5">
          <Briefcase className="h-8 w-8 text-brand-gold mx-auto animate-pulse" />
          <h2 className="font-display font-bold text-xl sm:text-2xl leading-snug">
            Need Quality Products or Professional Services?
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Reach out to Dr.Heez Global Ventures today! We specialize in transforming industrial challenges into robust commercial victories.
          </p>
          <div className="pt-2">
            <button
              onClick={handleDirectWhatsAppClick}
              className="bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-extrabold text-xs py-3 px-6 rounded-full transition-all shadow cursor-pointer uppercase tracking-wider"
            >
              Contact Dr.Heez Sourcing Desk Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
