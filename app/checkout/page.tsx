'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { OrderSummary } from '@/components/OrderSummary';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const router = useRouter();
  const { state } = useCart();
  const [step, setStep] = useState(1);
  
  const [contactInfo, setContactInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    state: '',
    zipCode: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    securityCode: '',
    cardholderName: '',
    billingSameAsShipping: true,
  });

  if (state.items.length === 0) {
    router.push('/cart');
    return null;
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally process the payment
    alert('Order submitted successfully!');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <button 
            onClick={() => step === 1 ? router.back() : setStep(1)}
            className="flex items-center hover:opacity-60 transition-opacity"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {step === 1 ? (
              <form onSubmit={handleContactSubmit} className="space-y-8">
                <h1 className="font-mono text-xl uppercase tracking-wider mb-8">CONTACT INFORMATION</h1>
                
                <div>
                  <label className="block font-mono text-sm uppercase tracking-wider mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full border border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-0"
                  />
                </div>

                <h2 className="font-mono text-xl uppercase tracking-wider pt-8">SHIPPING ADDRESS</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-sm uppercase tracking-wider mb-2">
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo.firstName}
                      onChange={(e) => setContactInfo(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full border border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-0"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-sm uppercase tracking-wider mb-2">
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo.lastName}
                      onChange={(e) => setContactInfo(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full border border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-sm uppercase tracking-wider mb-2">
                    ADDRESS
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="START TYPING YOUR ADDRESS..."
                    value={contactInfo.address}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, address: e.target.value }))}
                    className="w-full border border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-0 placeholder:text-gray-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-sm uppercase tracking-wider mb-2">
                      CITY
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo.city}
                      onChange={(e) => setContactInfo(prev => ({ ...prev, city: e.target.value }))}
                      className="w-full border border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-0"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-sm uppercase tracking-wider mb-2">
                      COUNTRY
                    </label>
                    <select
                      required
                      value={contactInfo.country}
                      onChange={(e) => setContactInfo(prev => ({ ...prev, country: e.target.value }))}
                      className="w-full border border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-0"
                    >
                      <option value="">SELECT COUNTRY</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-sm uppercase tracking-wider mb-2">
                      STATE / PROVINCE
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo.state}
                      onChange={(e) => setContactInfo(prev => ({ ...prev, state: e.target.value }))}
                      className="w-full border border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-0"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-sm uppercase tracking-wider mb-2">
                      ZIP / POSTAL CODE
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo.zipCode}
                      onChange={(e) => setContactInfo(prev => ({ ...prev, zipCode: e.target.value }))}
                      className="w-full border border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-600 text-white py-4 font-mono text-sm uppercase tracking-wider hover:bg-black transition-colors flex items-center justify-center space-x-2"
                >
                  <span>CONTINUE TO PAYMENT</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            ) : (
              <form onSubmit={handlePaymentSubmit} className="space-y-8">
                {/* YZY Crypto Option */}
                <div className="border border-black p-4 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 border border-black rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-mono text-sm font-medium">YZY (CRYPTO)</span>
                      <p className="font-mono text-xs text-gray-600 uppercase">COMING SOON</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-sm uppercase tracking-wider mb-2">
                    CARD NUMBER
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="1234 5678 9012 3456"
                    value={paymentInfo.cardNumber}
                    onChange={(e) => setPaymentInfo(prev => ({ ...prev, cardNumber: e.target.value }))}
                    className="w-full border border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-0 placeholder:text-gray-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-sm uppercase tracking-wider mb-2">
                      MONTH
                    </label>
                    <select
                      required
                      value={paymentInfo.expiryMonth}
                      onChange={(e) => setPaymentInfo(prev => ({ ...prev, expiryMonth: e.target.value }))}
                      className="w-full border border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-0"
                    >
                      <option value="">MM</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                          {String(i + 1).padStart(2, '0')}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-sm uppercase tracking-wider mb-2">
                      YEAR
                    </label>
                    <select
                      required
                      value={paymentInfo.expiryYear}
                      onChange={(e) => setPaymentInfo(prev => ({ ...prev, expiryYear: e.target.value }))}
                      className="w-full border border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-0"
                    >
                      <option value="">YYYY</option>
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={2025 + i} value={String(2025 + i)}>
                          {2025 + i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-sm uppercase tracking-wider mb-2">
                    SECURITY CODE
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="123"
                    value={paymentInfo.securityCode}
                    onChange={(e) => setPaymentInfo(prev => ({ ...prev, securityCode: e.target.value }))}
                    className="w-full border border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-0 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block font-mono text-sm uppercase tracking-wider mb-2">
                    CARDHOLDER NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="JOHN DOE"
                    value={paymentInfo.cardholderName}
                    onChange={(e) => setPaymentInfo(prev => ({ ...prev, cardholderName: e.target.value }))}
                    className="w-full border border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-0 placeholder:text-gray-400"
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="billing-same"
                    checked={paymentInfo.billingSameAsShipping}
                    onChange={(e) => setPaymentInfo(prev => ({ ...prev, billingSameAsShipping: e.target.checked }))}
                    className="w-4 h-4 border border-black focus:ring-0"
                  />
                  <label htmlFor="billing-same" className="font-mono text-sm uppercase tracking-wider">
                    BILLING ADDRESS SAME AS SHIPPING
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-600 text-white py-4 font-mono text-sm uppercase tracking-wider hover:bg-black transition-colors"
                >
                  SUBMIT ORDER
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right Column - Order Summary */}
          <div className="lg:sticky lg:top-20 lg:h-fit">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}