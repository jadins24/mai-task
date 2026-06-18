import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Toolkit() {
  return (
    <section 
      className="relative px-3 sm:px-10 xl:px-24 w-full font-montserrat bg-cover bg-center"
      style={{ backgroundImage: 'url("https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775645420451-Frame_2147233451.png")' }}
    >
      <div className="w-full py-16 md:py-24">
        <div className="mx-auto">
          {/* Header */}
          <div className="text-center mb-16 px-4">
            <span className="text-xs font-bold text-[#1F5CAC] uppercase tracking-wide mb-3 block">YOUR MAI TOOLKIT</span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 uppercase">Unlock Powerful Tools After Sign Up</h2>
            <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
              Everything You Need to <a href="/trader-list" className="text-[#1F5CAC] hover:underline" target="_blank">Hire the Right Tradesperson</a>
            </p>
          </div>

          {/* Cards Grid/Scroll */}
          <div className="grid grid-flow-col auto-cols-[85vw] md:auto-cols-[55vw] lg:auto-cols-[420px] xl:auto-cols-[400px] 2xl:grid-flow-row 2xl:grid-cols-3 gap-5 md:gap-6 overflow-x-auto overflow-y-hidden 2xl:overflow-visible snap-x 2xl:snap-none snap-mandatory pb-8 hide-scrollbar">
            
            {/* Card 1: Dashboard */}
            <div className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center cursor-pointer snap-center">
              <h3 className="text-2xl font-bold text-center text-[#003F6B] mb-3">Dashboard</h3>
              <span className="text-[#003F6B]/70 text-center text-sm mb-8 min-h-[40px]">
                Keep track of every job in one clean dashboard, from your first quote request to the final sign-off.
              </span>
              <div className="w-full max-w-[370px] flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] pb-2">
                <div className="w-full flex-1 mt-auto rounded-2xl bg-white border border-gray-100 shadow-[0_2px_25px_rgba(0,0,0,0.04)] p-4 flex flex-col pointer-events-none select-none relative h-56 xl:h-64">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] font-bold text-gray-500">Project Overview</span>
                    <div className="text-[9px] text-gray-500 font-medium px-2 py-1 bg-gray-50 rounded-full border border-gray-100 flex items-center gap-1">
                      This Year - 2026
                      <svg width="6" height="4" viewBox="0 0 6 4" fill="none">
                        <path d="M3 4L0 0H6L3 4Z" fill="#A0AEC0"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 w-full flex-wrap">
                    <LegendItem color="#003F6B" label="Posted Project" />
                    <LegendItem color="#1E8AC9" label="Active Project" />
                    <LegendItem color="#6BB5DB" label="Pending Project" />
                    <LegendItem color="#0BA560" label="Completed Project" />
                  </div>
                  <div className="flex-1 flex items-end justify-center gap-3 md:gap-4 border-l border-b border-gray-100 relative mb-1 px-4">
                    <div className="absolute -left-2.5 top-0 text-[7px] text-gray-400 h-full flex flex-col justify-between pb-1 text-right">
                      <span>50</span><span>40</span><span>30</span><span>20</span><span>10</span><span>0</span>
                    </div>
                    <BarGroup values={[84, 59, 40, 14]} />
                    <BarGroup values={[65, 48, 34, 33]} />
                    <BarGroup values={[62, 21, 53, 24]} />
                    <BarGroup values={[80, 29, 42, 15]} />
                  </div>
                  <div className="flex justify-evenly w-full text-[8px] text-gray-400 absolute bottom-1 left-0 right-0">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
                  </div>
                </div>
                <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] rounded-lg p-2.5 w-full max-w-72 z-10 border border-gray-50 transition-all duration-500">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[11px] font-bold text-gray-700">Ratings</span>
                    <span className="text-[8px] text-gray-400 bg-gray-50 px-1 py-0.5 rounded">All Time</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#FDBA31] text-[10px]">⭐</span>
                    <span className="text-xs font-bold text-gray-800 transition-all duration-500">4.8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Search With Postcode */}
            <a href="/projects" className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center snap-center">
              <h3 className="text-2xl font-bold text-center text-[#003F6B] mb-3">Search With Postcode</h3>
              <span className="text-[#003F6B]/70 text-center text-sm mb-8 min-h-[40px]">
                Find tradespeople near you, just enter your county and browse verified, rated tradespeople in your area.
              </span>
              <div className="w-full flex-1 mt-auto overflow-hidden flex select-none h-56 xl:h-64 relative rounded-2xl bg-gray-50 border border-gray-100">
                <div className="hidden md:flex w-[45%] flex-col justify-center gap-2.5 p-3 z-10 bg-white relative">
                  {[
                    { id: '44052-User1.png', y: 58 },
                    { id: '69346-User2.png', y: -58 },
                    { id: '90752-User3.png', y: 58 },
                    { id: '40902-User4.png', y: -58 }
                  ].map((user, i) => (
                    <motion.div 
                      key={i} 
                      animate={{ y: [user.y, -user.y, user.y] }}
                      transition={{ 
                        duration: 7, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: i * 0.5 
                      }}
                      className="flex items-center gap-2.5 w-full px-2 py-1.5 rounded-xl border border-gray-100 bg-white shadow-[0_1px_5px_rgba(0,0,0,0.02)] relative z-10"
                    >
                      <img 
                        src={`https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/17755663${user.id}`} 
                        className="w-full h-full rounded-lg object-cover" 
                        alt="User" 
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="relative w-[55%] flex-1 flex items-center justify-center overflow-hidden bg-[#EAF5F0]">
                  <motion.img 
                    src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775828227781-image.png" 
                    className="w-full h-full object-cover" 
                    animate={{ scale: [2.4, 2.6, 2.4] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    alt="Map" 
                  />
                  <motion.div 
                    className="absolute w-6 h-6"
                    animate={{ 
                      left: ["46%", "60%", "30%", "46%"], 
                      bottom: ["52%", "40%", "65%", "52%"] 
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <img 
                      src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775567468424-Frame_2147233423.png" 
                      className="w-full h-full object-contain drop-shadow-md" 
                      alt="Pin" 
                    />
                  </motion.div>
                </div>
              </div>
            </a>

            {/* Card 3: Brief Writing Tool */}
            <a href="/projects?userId=null" className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center group transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
              <h3 className="text-2xl font-bold text-center text-[#003F6B] mb-3 font-montserrat">Create Your Project Brief</h3>
              <span className="text-[#003F6B]/70 text-center text-sm mb-8 min-h-[40px]">
                Not sure how to describe your project? This tool helps you write a clear, detailed brief in seconds. Just answer a few questions, and we do the rest.
              </span>
              <div className="flex-1 mt-auto rounded-2xl p-5 flex flex-col justify-center pointer-events-none select-none relative overflow-hidden h-56 xl:h-64">
                <div className="w-full bg-[#FAFCFF] border border-gray-200 rounded-xl py-3 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-4 text-[11px] text-gray-600 font-medium tracking-wide">
                  Modern Kitchen Renovation
                </div>
                <div className="w-full h-[100px] bg-[#FAFCFF] border border-gray-200 rounded-xl py-3 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-[10px] sm:text-[11px] text-gray-500 leading-relaxed overflow-hidden">
                  This project involves renovating an existing kitchen to enhance functionality, layout efficiency, and overall aesthetics. The space measures roughly 12x15 feet...
                </div>
                <div className="flex justify-end items-center mt-2">
                  <div className="bg-[#EBF7FF] border border-[#CAE6FA] text-[#0077C8] px-4 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 transition-all duration-150 shadow-[0_4px_15px_rgba(0,119,200,0.12)]">
                    <span className="text-[#0077C8] text-[13px] animate-pulse">
                      <Sparkles size={14} />
                    </span>
                    Write with MAI AI
                  </div>
                </div>
                <motion.div 
                  className="absolute z-20 pointer-events-none w-10 h-10"
                  animate={{ 
                    x: [0, 150, 100, 200, 0], 
                    y: [0, -60, -30, -100, 0],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{ left: '12px', bottom: '12px' }}
                >
                  <img 
                    src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775715990989-image_2808_(1).png" 
                    className="w-full h-full object-contain drop-shadow-md" 
                    alt="cursor" 
                  />
                </motion.div>
              </div>
            </a>

          </div>
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

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }}></span>
      <span className="text-[8px] font-medium text-gray-500">{label}</span>
    </div>
  );
}

function BarGroup({ values }: { values: number[] }) {
  const colors = ["#003F6B", "#1E8AC9", "#6BB5DB", "#0BA560"];
  return (
    <div className="flex items-end gap-[2px] h-[100px] justify-around relative w-[36px] md:w-[56px] flex-shrink-0">
      {values.map((v, i) => (
        <div key={i} className="w-2.5 bg-current rounded-t-[3px] transition-all duration-500" style={{ height: `${v}%`, color: colors[i], backgroundColor: 'currentColor' }}></div>
      ))}
    </div>
  );
}

