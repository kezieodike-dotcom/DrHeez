import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle2, MessageSquare, CreditCard, Landmark } from 'lucide-react';
import { CartItem } from '../types';
import { PHONE_WHATSAPP } from '../data';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (productId: string, qty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onClearCart }: CartDrawerProps) {
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  
  // Checkout simulation states
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'form' | 'success'>('form');
  
  // Checkout Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentProvider, setPaymentProvider] = useState<'paystack' | 'flutterwave' | 'transfer'>('paystack');

  if (!isOpen) return null;

  // Calculate totals
  const totalNGN = cartItems.reduce((acc, item) => acc + item.product.priceNGN * item.quantity, 0);
  const totalUSD = cartItems.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);

  // Generate WhatsApp formatted checkout copy
  const getWhatsAppMessage = () => {
    let orderLines = cartItems.map((item) => 
      `• ${item.quantity}x ${item.product.name} (₦${item.product.priceNGN.toLocaleString()} / $${item.product.priceUSD} each)`
    ).join('\n');

    let text = `Hello Dr.Heez,\n\nI want to order the following from your online store:\n\n${orderLines}\n\n*Total Order Value:* ₦${totalNGN.toLocaleString()} / $${totalUSD} USD\n\n*My Delivery Details:* \n- Name: ${fullName || '[Input Name]'}\n- Phone: ${phone || '[Input Phone]'}\n- Address: ${address || '[Input Delivery Address]'}\n\nPlease confirm availability and payment modes!`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppCheckout = () => {
    const message = getWhatsAppMessage();
    window.open(`https://wa.me/${PHONE_WHATSAPP}?text=${message}`, '_blank');
  };

  const handleSecureCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !address) {
      alert('Please fill in all details for shipping.');
      return;
    }
    // Advance to Success screen representation
    setCheckoutStep('success');
  };

  const handleCompleteFlow = () => {
    onClearCart();
    setCheckoutStep('form');
    setShowCheckoutModal(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 flex justify-end backdrop-blur-xs">
      <div className="w-full max-w-md bg-white h-full relative flex flex-col justify-between shadow-2xl border-l border-gray-100">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-brand-green" />
            <h2 className="font-display font-bold text-lg text-brand-dark">Your Cart</h2>
            <span className="bg-brand-gold/20 text-brand-green font-bold text-xs px-2.5 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 text-gray-500 rounded-full transition-colors cursor-pointer"
            aria-label="Close cart drawer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Drawer Body - Items Ledger */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="h-16 w-16 bg-gray-50 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <p className="font-display font-bold text-base text-brand-dark mb-1">Your cart is empty</p>
              <p className="font-sans text-xs text-gray-400 max-w-xs mx-auto mb-6">
                Fill your cart with Mega 4 Stemcells and premier communication gadgets from our online catalog today!
              </p>
              <button
                onClick={onClose}
                className="bg-brand-green text-white hover:bg-brand-green-hover font-semibold py-2.5 px-6 rounded-xl text-xs cursor-pointer shadow-md"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Currency Selector Tool */}
              <div className="flex justify-between items-center bg-brand-green/5 p-3 rounded-xl border border-brand-green/10">
                <span className="text-[11px] font-bold text-brand-green uppercase tracking-wider">Show Prices In:</span>
                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-gray-200">
                  <button
                    onClick={() => setCurrency('NGN')}
                    className={`px-3 py-1 rounded text-xs font-bold transition-colors cursor-pointer ${
                      currency === 'NGN' ? 'bg-brand-green text-brand-gold' : 'text-gray-500 hover:text-brand-green'
                    }`}
                  >
                    NGN ₦
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-3 py-1 rounded text-xs font-bold transition-colors cursor-pointer ${
                      currency === 'USD' ? 'bg-brand-green text-brand-gold' : 'text-gray-500 hover:text-brand-green'
                    }`}
                  >
                    USD $
                  </button>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3.5 pr-1">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-4 p-3 bg-white border border-gray-100 rounded-xl hover:shadow-xs transition-shadow">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-16 w-16 rounded-lg object-cover bg-gray-50 border border-gray-50"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="text-xs font-bold text-brand-dark truncate" title={item.product.name}>
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-gray-400 hover:text-red-500 p-0.5 rounded cursor-pointer transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <span className="text-[10px] text-gray-400 block uppercase font-medium">{item.product.categoryLabel}</span>
                      </div>

                      <div className="flex items-center justify-between pt-1.5">
                        <span className="font-display font-medium text-xs text-[#0E5A3C]">
                          {currency === 'NGN' 
                            ? `₦${(item.product.priceNGN * item.quantity).toLocaleString()}` 
                            : `$${(item.product.priceUSD * item.quantity)}`
                          }
                        </span>

                        {/* Quantity Counter */}
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden scale-90">
                          <button
                            onClick={() => onUpdateQty(item.product.id, Math.max(1, item.quantity - 1))}
                            className="px-2 py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold text-xs"
                          >
                            -
                          </button>
                          <span className="px-3 py-0.5 text-xs font-bold text-gray-800 bg-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.product.id, item.quantity + 1)}
                            className="px-2 py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer summary & actions */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-150 space-y-4 bg-gray-50/70">
            {/* Total Block */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 font-medium">Subtotal</span>
                <span className="text-gray-800 font-bold font-mono">
                  {currency === 'NGN' ? `₦${totalNGN.toLocaleString()}` : `$${totalUSD.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm pt-1.5 border-t border-gray-250/50">
                <span className="text-brand-green font-bold text-base">Grand Total</span>
                <div className="text-right">
                  <span className="text-brand-green font-extrabold text-lg block">
                    ₦{totalNGN.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-gray-500 block">
                    ~ ${totalUSD} USD
                  </span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-2.5">
              {/* WhatsApp direct buy with item list generated */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-bold py-3.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                id="drawer-wa-checkout"
              >
                <MessageSquare className="h-4.5 w-4.5" />
                <span>Instant WhatsApp Checkout</span>
              </button>

              {/* Secure simulated payment Gateway checkout */}
              <button
                onClick={() => {
                  setCheckoutStep('form');
                  setShowCheckoutModal(true);
                }}
                className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold py-3.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer"
                id="drawer-gateway-checkout"
              >
                <CreditCard className="h-4.5 w-4.5 text-brand-gold" />
                <span>Simulate Secure Checkout</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Checkout Dialog Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border border-gray-100">
            
            {/* Close modal */}
            {checkoutStep !== 'success' && (
              <button
                onClick={() => setShowCheckoutModal(false)}
                className="absolute top-4 right-4 text-gray-450 hover:text-brand-green transition-colors cursor-pointer"
                aria-label="Dismiss checkout dialog"
              >
                <X className="h-6 w-6" />
              </button>
            )}

            {checkoutStep === 'form' ? (
              <form onSubmit={handleSecureCheckoutSubmit} className="space-y-4">
                <div className="text-center">
                  <ShoppingBag className="h-10 w-10 text-brand-gold mx-auto mb-2" />
                  <h3 className="font-display font-black text-xl text-brand-dark">Secure Secure Checkout</h3>
                  <p className="font-sans text-xs text-gray-500 mt-1">
                    Complete shipping info to simulate an integrated payment gateway.
                  </p>
                </div>

                {/* Form fields */}
                <div className="space-y-3 pt-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Full Shipping Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. johndoe@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Phone Mobile</label>
                      <input
                        required
                        type="tel"
                        placeholder="e.g. +234..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Payment Method</label>
                      <select
                        value={paymentProvider}
                        onChange={(e: any) => setPaymentProvider(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none font-bold text-brand-green"
                      >
                        <option value="paystack">Paystack Gate</option>
                        <option value="flutterwave">Flutterwave Gate</option>
                        <option value="transfer">Direct Bank Transfer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Full Delivery Address</label>
                    <textarea
                      required
                      placeholder="State city, street address coordinates..."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      rows={2}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Submit simulated pay */}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex justify-between items-baseline text-xs">
                    <span className="text-gray-400 font-semibold">Gateway Processing Fee</span>
                    <span className="text-emerald-600 font-bold">₦0.00 / FREE</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs">
                    <span className="text-gray-400 font-semibold">Total Debit</span>
                    <span className="text-brand-green font-extrabold text-base">₦{totalNGN.toLocaleString()}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold py-3 px-4 rounded-xl text-xs cursor-pointer shadow-md"
                  >
                    Pay & Complete Simulator Order
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-brand-gold/20 text-brand-green hover:bg-brand-gold/30 font-bold py-2.5 px-4 rounded-xl text-[10px] flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Prefer Direct WhatsApp Ordering instead</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-6 py-4">
                <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="h-9 w-9 animate-bounce" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display font-black text-2xl text-brand-dark">Transaction Successful!</h3>
                  <p className="font-sans text-xs text-gray-500 max-w-xs mx-auto">
                    Excellent! Your simulated payment through <strong>{paymentProvider === 'paystack' ? 'Paystack' : paymentProvider === 'flutterwave' ? 'Flutterwave' : 'Direct Transfer'}</strong> went through successfully!
                  </p>
                </div>

                {/* Simulated Invoice details */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-left space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400 font-semibold">Customer Name:</span>
                    <span className="text-gray-700 font-bold">{fullName}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400 font-semibold">Authorized Email:</span>
                    <span className="text-gray-700 font-bold">{email}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400 font-semibold">Reference code:</span>
                    <span className="text-brand-green font-mono font-bold">DRH-SIM-{Math.floor(Math.random() * 950000 + 50000)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pt-2 border-t border-gray-200">
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">Settled Sum:</span>
                    <span className="text-brand-green font-extrabold">₦{totalNGN.toLocaleString()} NGN</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-4">
                  {/* WhatsApp confirmation requested to secure instant hand-offs */}
                  <button
                    onClick={() => {
                      const text = `Hello Dr.Heez,\nI have successfully made a simulated payment of ₦${totalNGN.toLocaleString()} via ${paymentProvider.toUpperCase()} for my order.\nPayment Ref: DRH-SIM-CONFIRM\nShip-out to: ${fullName}, ${address}.\nPlease acknowledge my purchase!`;
                      window.open(`https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-green font-bold py-3.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow"
                  >
                    <MessageSquare className="h-4.5 w-4.5" />
                    <span>Send Receipt to Dr.Heez on WhatsApp</span>
                  </button>

                  <button
                    onClick={handleCompleteFlow}
                    className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold py-3 px-4 rounded-xl text-xs cursor-pointer"
                  >
                    Finish & Reset Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
