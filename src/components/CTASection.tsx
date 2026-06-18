import React from 'react';
import { motion } from 'motion/react';

export default function CTASection() {
  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-[#F2F6FB] font-montserrat">
      <div className="w-full py-16 md:py-20 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-72 md:h-96 md:rounded-[40px] rounded-3xl overflow-hidden relative shadow-2xl"
        >
          {/* Background Image */}
          <img 
            src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775571051447-construction-site-with-cranes-european-business-quarter-daylight-wide-angle-nikon-z9-30mm-lens_1.png" 
            alt="Ready to get started" 
            className="w-full h-full object-cover transition-transform duration-10000 linear hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center w-full md:max-w-3xl mx-auto px-6">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-3xl md:text-5xl font-extrabold uppercase tracking-tight"
            >
              Ready To Get Started?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/90 text-sm md:text-lg max-w-xl font-medium leading-relaxed"
            >
              Have 10 minutes? Check out our case studies. We've been in the industry for more than a decade. So there's lots of exciting stuff in here.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 mt-4 rounded-xl text-sm md:text-base bg-white text-[#003F6B] font-bold shadow-xl hover:bg-gray-50 transition-all cursor-pointer uppercase tracking-widest"
            >
              Sign Up Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
