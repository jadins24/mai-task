import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Offcuts() {
  const [budget, setBudget] = useState(300);

  const steps = [
    { num: '1', title: 'Post Your Project', desc: 'Describe what you need, add dimensions, set your budget.', color: 'bg-[#1A4CFF]/20' },
    { num: '2', title: 'Get Matched Instantly', desc: 'MAI finds sellers with matching offcuts in the UK.', color: 'bg-[#FF4D6D]/20' },
    { num: '3', title: 'Buy Safely & Save', desc: 'Secure payment, verified sellers, up to 70% cheaper.', color: 'bg-[#FF9500]/20' }
  ];

  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-white font-montserrat">
      <div className="w-full py-20 md:py-24 bg-white overflow-hidden">
        <div className="mx-auto w-full flex flex-col lg:flex-row gap-12 xl:gap-24 items-center lg:items-start px-0">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="w-full lg:w-5/12 flex flex-col pt-4"
          >
            <p className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-3">Stone Offcuts Marketplace</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 uppercase leading-tight">
              Submit Your Project. <br className="hidden md:block" /> Let MAI Find Your Perfect Stone.
            </h2>
            <p className="text-sm md:text-md text-[#667588] max-w-xl leading-relaxed mb-10">
              Discover discounted stone offcuts on MAI, connecting you with verified UK sellers for secure, budget-friendly options.
            </p>

            <div className="flex flex-col space-y-8">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-5 group">
                  <div className={`w-[42px] h-[42px] rounded-xl ${step.color} font-bold flex items-center justify-center shrink-0 text-sm transition-transform group-hover:scale-110`}>
                    {step.num}
                  </div>
                  <div className="mt-0.5">
                    <h4 className="text-[17px] font-bold text-gray-600 mb-1">{step.title}</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-[#F8F8F6] border border-[#E5E7EB] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 md:p-10 lg:p-12">
              <h3 className="text-2xl md:text-4xl font-bold text-[#333333] mb-3">Find Your Perfect Stone Offcut</h3>
              <p className="text-gray-500 text-[15px] mb-8">Set your offcut budget and MAI does the rest</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-[#003F6B]/70 uppercase tracking-widest mb-2 ml-1">Project Title</label>
                    <input 
                      placeholder="Enter project name" 
                      className="px-6 py-3 rounded-full border border-gray-200 outline-none focus:border-[#1F5CAC] focus:ring-1 focus:ring-[#1F5CAC]/20 transition-all w-full text-[14px] placeholder:text-gray-400 bg-white" 
                      type="text" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-[#003F6B]/70 uppercase tracking-widest mb-2 ml-1">Stone Type</label>
                    <input 
                      placeholder="Select stone type" 
                      className="px-6 py-3 rounded-full border border-gray-200 outline-none focus:border-[#1F5CAC] focus:ring-1 focus:ring-[#1F5CAC]/20 transition-all w-full text-[14px] placeholder:text-gray-400 bg-white" 
                      type="text" 
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-[#003F6B]/70 uppercase tracking-widest mb-2 ml-1">Project Description</label>
                  <textarea 
                    rows={3} 
                    placeholder="Enter description" 
                    className="px-6 py-4 rounded-2xl border border-gray-200 outline-none focus:border-[#1F5CAC] focus:ring-1 focus:ring-[#1F5CAC]/20 transition-all w-full text-[14px] resize-none placeholder:text-gray-400 bg-white"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <label className="text-[17px] font-bold text-gray-900 mb-6 block">Budget Range</label>
                  <div className="flex justify-between items-center text-xs font-semibold text-gray-400 mb-3 px-1">
                    <span>£300 (minimum)</span>
                    <span>£25,000 (maximum)</span>
                  </div>
                  
                  <div className="relative w-full h-[8px] bg-gray-200 rounded-full mb-10">
                    <div 
                      className="absolute top-0 left-0 h-full rounded-full transition-all duration-200" 
                      style={{ 
                        width: `${((budget - 300) / (25000 - 300)) * 100}%`,
                        backgroundColor: '#083691' 
                      }}
                    ></div>
                    <input 
                      min="300" 
                      max="25000" 
                      step="100" 
                      className="absolute -top-3 left-0 w-full h-8 opacity-0 cursor-pointer appearance-none z-20 touch-none md:touch-auto" 
                      type="range" 
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                    />
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-[22px] h-[22px] border-2 border-white rounded-full shadow-lg z-10 transition-all duration-200 pointer-events-none flex items-center justify-center bg-[#083691]"
                      style={{ left: `calc(${((budget - 300) / (25000 - 300)) * 100}% - 11px)` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-center gap-0 mb-8 font-montserrat">
                    <span className="text-4xl font-extrabold text-[#083691]">£</span>
                    <input 
                      type="text"
                      className="text-4xl font-extrabold text-center bg-transparent outline-none border-b-2 border-[#083691] text-[#083691] w-48 ml-1"
                      value={budget.toLocaleString()}
                      readOnly
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 rounded-full text-[15px] font-bold shadow-md transition-all duration-300 bg-[#1F5CAC] text-white hover:bg-[#1F5CAC]/90 hover:shadow-lg active:scale-[0.98]"
                >
                  Post Your Stones Project Now
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

