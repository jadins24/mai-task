import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Athikur Rahman',
    location: 'Birmingham',
    text: 'Excellent service from start to finish. The quartz worktop quality is outstanding and the fitting was done perfectly. Very clean and professional work. Highly recommended!',
    borderColor: 'hover:border-blue-600',
    rotation: 'hover:rotate-2',
    delay: 0.1
  },
  {
    name: 'B.S. Uberai',
    location: 'London',
    text: 'Brilliant Stone, polished to perfection. While we had some challenges with the delivery of the stone & cuts, the aftersales service was also fantastic thanks to Mr. Kumar!',
    borderColor: 'hover:border-yellow-500',
    rotation: 'hover:-rotate-2',
    delay: 0.25
  },
  {
    name: 'James',
    location: 'Leeds',
    text: 'Great service from start to finish. Very responsive and helpful. They have a huge range of product and are very good at understanding what you are looking for and helping you find it.',
    borderColor: 'hover:border-rose-500',
    rotation: 'hover:rotate-2',
    delay: 0.4
  },
  {
    name: 'Ricardo Angelo Marcella',
    location: 'Manchester',
    text: 'Excellent service from start to finish. Quick turnaround and my quartz worktops are now fitted and look incredible.',
    borderColor: 'hover:border-cyan-400',
    rotation: 'hover:-rotate-2',
    delay: 0.55
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-white font-montserrat">
      <section 
        className="w-full relative py-20 md:py-24 overflow-hidden border-t border-gray-800 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: 'url("https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775571841973-Rectangle_34624722.png")' }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        
        <div className="relative z-10 mx-auto px-4 sm:px-10 xl:px-[117px]">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
            
            {/* Header Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-4/12 flex flex-col items-start text-white flex-shrink-0"
            >
              <span className="text-md uppercase mb-4 font-bold tracking-widest text-[#BFEFFF]">What People Say</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight uppercase">The Proof Is In The Pudding</h2>
              <p className="text-gray-200 mb-10 max-w-lg text-lg leading-relaxed">
                Tradespeople are winning, homeowners are relieved. Don't take our word for it, here's what real MAI users across the UK have to say.
              </p>
            </motion.div>

            {/* Testimonials Grid/Scroll */}
            <div className="w-full lg:w-8/12">
              <div className="flex sm:grid sm:grid-cols-2 gap-6 overflow-x-auto overflow-y-hidden sm:overflow-visible pb-8 pt-4 px-4 -mx-4 sm:pb-0 sm:pt-0 sm:px-0 sm:mx-0 snap-x snap-mandatory sm:snap-none hide-scrollbar">
                {testimonials.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: item.delay }}
                    className={`w-[85vw] sm:w-auto shrink-0 snap-center group bg-white rounded-[24px] p-6 lg:p-8 flex flex-col shadow-2xl transition-all duration-500 ease-out border-b-4 border-transparent ${item.borderColor} ${item.rotation}`}
                  >
                    <div className="flex-grow">
                      <span className={`text-6xl text-gray-800 font-serif leading-none h-6 block transition-colors duration-700 mb-6`}>“</span>
                      <p className="text-gray-700 text-md mb-8 block font-medium leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-[#003F6B] flex items-center justify-center text-white font-bold text-xs">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-[15px] uppercase">{item.name}</h4>
                        <span className="text-gray-500 text-xs sm:text-sm">{item.location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Indicator */}
              <div className="flex sm:hidden justify-center items-center gap-2 mt-8">
                <button className="h-1.5 w-6 rounded-full bg-[#BFEFFF] transition-all"></button>
                <button className="h-1.5 w-1.5 rounded-full bg-white/30"></button>
                <button className="h-1.5 w-1.5 rounded-full bg-white/30"></button>
                <button className="h-1.5 w-1.5 rounded-full bg-white/30"></button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
