import { useState, useEffect } from 'react';
import { Search, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const words = [
  "Worktop Fitters", "Stone Repairs", "Worktop Fabricator", "Local Wall Tilers", 
  "Stone Offcuts", "Trusted Stonemason", "Kitchen Installers", "Bathroom Designers",
  "Firehearth Fitters", "Remnant Slabs", "Wall Claddings", "Bathroom Tiling", 
  "Wall Insulations", "Interior Decorators"
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full font-sans overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1766055134591-MAI_Landing_Page_Video_(Hero_Section).mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-[#003F6B4D]" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full space-y-6"
        >
          <div className="space-y-4">
            <h1 className="font-bold text-white flex flex-col md:flex-row items-center justify-center gap-x-4 leading-tight text-center">
              <span className="text-3xl md:text-5xl lg:text-7xl">We Find You The</span>
              <div className="h-[1.2em] relative min-w-[300px] flex items-center justify-center md:justify-start">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[wordIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl lg:text-7xl font-black text-white"
                  >
                    {words[wordIndex]}
                    <span className="text-white ml-1 animate-pulse">|</span>
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
            <p className="text-xs sm:text-sm md:text-lg font-light text-white text-center max-w-xl mx-auto">
              Find Local Trusted Tradespeople in Minutes
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-2xl mx-auto px-4">
            <div className="flex items-center w-full bg-white rounded-full shadow-lg overflow-hidden h-[50px]">
              <input 
                placeholder="I Want Kitchen Instal" 
                className="flex-1 h-full px-8 text-[15px] text-gray-700 bg-transparent outline-none placeholder-gray-400 font-medium"
                type="text"
              />
              <button className="flex items-center justify-center w-[40px] h-[40px] mr-[5px] rounded-full transition hover:scale-95">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17" cy="17" r="16.5" fill="white" stroke="#EDEDED"></circle>
                  <path d="M16.5 23.9968C20.366 23.9968 23.5 20.8628 23.5 16.9968C23.5 13.1308 20.366 9.99683 16.5 9.99683C12.634 9.99683 9.5 13.1308 9.5 16.9968C9.5 20.8628 12.634 23.9968 16.5 23.9968Z" stroke="#003F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M16.5 12.9968C17.5609 12.9968 18.5783 13.4183 19.3284 14.1684C20.0786 14.9185 20.5 15.936 20.5 16.9968" stroke="#003F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M21.5 21.9968L24.5 24.9968" stroke="#003F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 sm:gap-4 md:gap-8 text-xs sm:text-sm md:text-base text-gray-200 mt-6 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gray-300" />
              <span>200K+ Trusted Traders</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gray-300" />
              <span>Transparent Bidding System</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gray-300" />
              <span>11K Monthly Active Users</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator for next section */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white opacity-50"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
