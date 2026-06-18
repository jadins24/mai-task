import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const projects = [
  {
    title: 'Blue Roma Quartzite',
    category: 'Worktops, Table Tops & Wall Cladding',
    location: 'East Riding of Yorkshire -England',
    status: 'Flexible',
    img: 'https://d2iyhd3v3rvz2k.cloudfront.net/projects/projectImages/1781714714678-WhatsApp_Image_2026-06-17_at_5.19.22_PM.jpeg',
    hoverBorder: 'hover:border-b-indigo-500',
    hoverShadow: 'hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.3)]'
  },
  {
    title: '2no bedside cabinet tops. Dark emperador remnants needed',
    category: 'Worktops, Table Tops & Wall Cladding',
    location: 'Greater London -England',
    status: 'Flexible',
    img: 'https://d2iyhd3v3rvz2k.cloudfront.net/projects/projectImages/1781694575346-bedside_table_rosaline.jpg',
    hoverBorder: 'hover:border-b-rose-500',
    hoverShadow: 'hover:shadow-[0_20px_40px_-10px_rgba(244,63,94,0.3)]'
  },
  {
    title: 'Emerald pearl granite utility top & upstand – template, supply & installation',
    category: 'Natural Stone Installation',
    location: 'Greater London -England',
    status: 'Flexible',
    img: 'https://d2iyhd3v3rvz2k.cloudfront.net/projects/projectImages/1781281642529-Screenshot_2026-06-12_172223.png',
    hoverBorder: 'hover:border-b-orange-500',
    hoverShadow: 'hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.3)]'
  },
  {
    title: 'River White worktop',
    category: 'Worktops, Table Tops & Wall Cladding',
    location: 'Cornwall -England',
    status: 'Flexible',
    img: 'https://d2iyhd3v3rvz2k.cloudfront.net/projects/projectImages/1781180852966-WhatsApp_Image_2026-06-08_at_1.21.05_PM_(1).jpeg',
    hoverBorder: 'hover:border-b-teal-500',
    hoverShadow: 'hover:shadow-[0_20px_40px_-10px_rgba(20,184,166,0.3)]'
  }
];

export default function ProjectsPreview() {
  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-[#F2F6FB] font-montserrat">
      <div className="w-full py-20 md:py-24 bg-transparent overflow-hidden">
        <div className="mx-auto w-full flex flex-col px-0">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <span className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-3">Real Work, Real Results</span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 uppercase">Explore Real UK Projects</h2>
              <p className="text-sm md:text-base text-gray-500">From loft conversions in Leeds to boiler installs in Bristol.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <a 
                href="/projects" 
                className="px-8 py-2.5 bg-[#1F5CAC] text-white shadow-md font-bold text-[14px] hover:shadow-lg transition-all rounded-full inline-block"
              >
                Explore Projects
              </a>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-flow-col md:grid-flow-row auto-cols-[85vw] sm:auto-cols-[45vw] md:auto-cols-auto md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 xl:gap-8 overflow-x-auto overflow-y-hidden md:overflow-visible snap-x md:snap-none snap-mandatory pt-2 pb-4 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 scroll-smooth hide-scrollbar">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`snap-center bg-white rounded-3xl shadow-[0_4px_24px_rgb(0,0,0,0.04)] cursor-pointer flex flex-col transition-all duration-500 ease-out will-change-transform ${project.hoverShadow} border-b-[4px] border-b-transparent ${project.hoverBorder}`}
              >
                <div className="flex flex-col flex-grow">
                  {/* Image Container */}
                  <div className="relative w-full h-[220px] rounded-t-3xl overflow-hidden shrink-0 bg-gray-100 group">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-[#064e3b]/85 backdrop-blur-sm px-3.5 py-1 rounded-full flex items-center gap-2 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] shadow-[0_0_8px_rgba(255,255,255,0.4)]"></span>
                      <span className="text-white text-[11px] font-semibold tracking-wide">Active</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[#0F7BA2] text-[10px] font-bold uppercase tracking-wider mb-2">{project.category}</span>
                    <h3 className="text-[17px] font-bold text-gray-800 line-clamp-2 mb-4 leading-tight">{project.title}</h3>
                    
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1 text-[#6788AA] min-w-0">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span className="text-[12px] font-medium truncate">{project.location}</span>
                      </div>
                      <div className="font-bold text-[#008000] text-[13px] shrink-0">{project.status}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-8">
            <button className="h-1.5 w-6 rounded-full bg-[#1F5CAC] transition-all"></button>
            <button className="h-1.5 w-1.5 rounded-full bg-gray-300"></button>
            <button className="h-1.5 w-1.5 rounded-full bg-gray-300"></button>
            <button className="h-1.5 w-1.5 rounded-full bg-gray-300"></button>
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
