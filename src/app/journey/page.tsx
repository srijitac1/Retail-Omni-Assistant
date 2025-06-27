'use client';
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef } from "react";

export default function Journey() {
  // Parallax logic
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-16 px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#0071ce] mb-4">Our Journey</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-12">Learn about our story and milestones. (Journey content goes here.)</p>

      {/* Parallax Journey Section */}
      <section className="w-screen max-w-none overflow-x-auto mb-16" ref={containerRef}>
        <div className="flex w-[300vw] h-[80vh] snap-x snap-mandatory">
          {/* Panel 1: Before Shopping */}
          <motion.div
            className="w-screen flex-shrink-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#e3f0fa] to-[#b3d6f6] relative snap-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-[7rem] mb-6"
              initial={{ scale: 0.7, y: 40 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >☀️</motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold text-[#0071ce] mb-4 drop-shadow"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >Before Shopping</motion.h2>
            <motion.p
              className="text-xl sm:text-2xl text-gray-700 max-w-xl mb-8"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >Get ready with predicted needs: <span className="text-[#ffc220] font-bold">weather alerts</span>, <span className="text-[#0071ce] font-bold">local events</span>, and smart reminders.</motion.p>
          </motion.div>
          {/* Panel 2: In-Store */}
          <motion.div
            className="w-screen flex-shrink-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0071ce] to-[#ffc220] relative snap-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-[7rem] mb-6"
              initial={{ scale: 0.7, y: 40 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >🛒</motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >In-Store</motion.h2>
            <motion.p
              className="text-xl sm:text-2xl text-white max-w-xl mb-8"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >Aisle guidance, <span className="text-[#ffc220] font-bold">AR nudges</span>, and real-time help for a seamless shopping journey.</motion.p>
          </motion.div>
          {/* Panel 3: After Delivery */}
          <motion.div
            className="w-screen flex-shrink-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#ffc220] to-[#fff] relative snap-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-[7rem] mb-6"
              initial={{ scale: 0.7, y: 40 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >📦</motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold text-[#0071ce] mb-4 drop-shadow"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >After Delivery</motion.h2>
            <motion.p
              className="text-xl sm:text-2xl text-gray-700 max-w-xl mb-8"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >Automated issue resolution, <span className="text-[#0071ce] font-bold">order tracking</span>, and personalized follow-up.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* In-Store AR Guidance Section */}
      <section className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 border-2 border-[#0071ce] mt-8">
        <h2 className="text-2xl font-bold text-[#0071ce] mb-4">In-Store AR Guidance</h2>
        <div className="flex flex-col items-center">
          {/* Mockup Illustration */}
          <div className="relative w-full max-w-md h-64 bg-gradient-to-b from-[#e3f0fa] to-[#fff] rounded-xl overflow-hidden border border-[#0071ce] mb-4 flex items-end justify-center">
            {/* Aisle shelves */}
            <div className="absolute left-6 top-10 w-12 h-44 bg-[#e0e0e0] rounded-lg shadow-inner"></div>
            <div className="absolute right-6 top-10 w-12 h-44 bg-[#e0e0e0] rounded-lg shadow-inner"></div>
            {/* Floor */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#b3d6f6] to-transparent"></div>
            {/* Floating Arrow */}
            <svg className="absolute left-1/2 -translate-x-1/2 bottom-20 animate-bounce" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 8v28" stroke="#ffc220" strokeWidth="6" strokeLinecap="round"/>
              <path d="M16 28l8 12 8-12" stroke="#ffc220" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {/* Product Label */}
            <div className="absolute left-20 top-20 bg-[#ffc220] text-[#0071ce] font-bold px-3 py-1 rounded-full shadow-lg text-sm rotate-[-8deg]">
              Your usual pasta here
            </div>
          </div>
          <p className="text-gray-700 text-base mt-2">Our assistant uses AR to guide you visually to what you need — no wandering required.</p>
        </div>
      </section>

      {/* AR Guidance in Aisle Section */}
      <section className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 border-2 border-[#0071ce] mt-12">
        <h2 className="text-2xl font-bold text-[#0071ce] mb-4">AR Guidance in Aisle</h2>
        <div className="relative w-full h-64 rounded-xl overflow-hidden border border-[#0071ce] mb-4 flex items-end justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Floating AR Arrow */}
          <svg className="absolute left-1/2 -translate-x-1/2 bottom-16 drop-shadow-lg" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#ffc220"/>
            </filter>
            <path d="M28 10v28" stroke="#ffc220" strokeWidth="8" strokeLinecap="round" filter="url(#glow)"/>
            <path d="M18 32l10 14 10-14" stroke="#ffc220" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)"/>
          </svg>
          {/* Product Label 1 */}
          <div className="absolute left-16 top-16 bg-[#ffc220] text-[#0071ce] font-bold px-4 py-2 rounded-full shadow-lg text-base drop-shadow-lg" style={{ boxShadow: '0 0 16px 4px #ffc22088' }}>
            Pasta
          </div>
          {/* Product Label 2 */}
          <div className="absolute right-16 top-24 bg-[#ffc220] text-[#0071ce] font-bold px-4 py-2 rounded-full shadow-lg text-base drop-shadow-lg" style={{ boxShadow: '0 0 16px 4px #ffc22088' }}>
            Sauce
          </div>
        </div>
        <p className="text-gray-700 text-base mt-2">Omni-Assistant shows you exactly where to go — just like magic.</p>
      </section>
    </div>
  );
} 