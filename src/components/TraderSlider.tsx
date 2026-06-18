"use client";

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const traders = [
  { id: 'LW', name: 'lloyd wilkinson', offset: 'md:translate-y-12 xl:translate-y-24', slug: 'lloydwilkinson-2673' },
  { id: 'MA', name: 'Mohamad ALMUSTAFA', offset: 'md:translate-y-0 xl:translate-y-14', slug: 'uk/london/rgstoneworktops' },
  { id: 'MD', name: 'Mahmood Darr', offset: 'md:translate-y-0 xl:translate-y-0', slug: 'mahmooddarr-4919' },
  { id: 'DE', name: 'Driss El aissati', offset: 'md:translate-y-0 xl:translate-y-14', slug: 'drissel-aissati-2576' },
  { id: 'LD', name: 'Lewis Dawson', offset: 'md:translate-y-12 xl:translate-y-24', slug: 'lewisdawson-2012' },
  { id: 'CK', name: 'Carl Kimpton', offset: 'md:translate-y-12 xl:translate-y-32', slug: 'carlkimpton-8487' },
  { id: 'DM', name: 'Daniel Magill', offset: 'md:translate-y-0 xl:translate-y-0', slug: 'danielmagill-6685' },
  { id: 'NC', name: 'Nicholas Chaplin', offset: 'md:translate-y-0 xl:translate-y-0', slug: 'nicholaschaplin-3857' },
  { id: 'BB', name: 'Barry Barua', offset: 'md:translate-y-0 xl:translate-y-0', slug: 'barrybarua-4756' },
  { id: 'EM', name: 'Eamon Mc loughlin', offset: 'md:translate-y-0 xl:translate-y-0', slug: 'eamonmc-loughlin-4107' },
];

export default function TraderSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-[#F2F6FB] font-montserrat overflow-hidden">
      <div className="py-16 md:py-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-3 text-center">TRUSTED BY HOMEOWNERS</p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 uppercase text-center">Why Choose MAI</h2>
          <p className="text-sm md:text-md text-gray-500 max-w-4xl mx-auto leading-relaxed text-center">
            Every trader on MAI is verified, rated, and ready to work, so you get competitive bids from qualified professionals, not random strangers.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative mb-24">
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar min-h-[450px] lg:min-h-[500px] items-start pt-4"
          >
            {traders.map((trader, index) => (
              <motion.a
                key={trader.slug}
                href={`/profile/${trader.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`snap-center shrink-0 w-[235px] lg:w-[260px] h-[350px] lg:h-[380px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform ${trader.offset} group cursor-pointer bg-white relative`}
              >
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-4xl font-bold text-[#003F6B]/30 group-hover:bg-gray-100 transition-colors uppercase">
                  {trader.id}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#003F6B]/30 to-[#003F6B] opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white z-10">
                  <p className="text-[17px] font-bold capitalize tracking-wide leading-tight">{trader.name}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-8">
          <div className="hidden sm:flex justify-center items-center gap-4">
            <button 
              onClick={() => scroll('left')}
              className="bg-white shadow-md p-3 rounded-full hover:bg-gray-50 transition active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-[#003F6B]" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="bg-white shadow-md p-3 rounded-full hover:bg-gray-50 transition active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-[#003F6B]" />
            </button>
          </div>

          <a 
            target="_blank" 
            rel="noopener noreferrer"
            href="/trader-list" 
            className="px-8 py-2.5 bg-[#1F5CAC] text-white shadow-md font-bold text-[14px] hover:shadow-lg transition-all rounded-full"
          >
            View All Traders
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
