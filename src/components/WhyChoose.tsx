import React from 'react';
import { motion } from 'motion/react';

const reasons = [
  {
    num: '01',
    title: 'AI-Matched Traders',
    desc: "Stop sifting through hundreds of irrelevant trader profiles. MAI's intelligent matching engine notifies your project with every qualified tradespeople whose skills, availability, location and work style align precisely with your project.",
    bgColor: 'text-[#E8F3FF]',
    delay: 0.2
  },
  {
    num: '02',
    title: 'End-to-End Project Transparency',
    desc: "From milestones to payments, every stage of your project lives in one place. MAI's real-time dashboard gives you complete visibility over progress, budgets, and deliverables, eliminating the back-and-forth that slows projects down.",
    bgColor: 'text-[#E8F9EE]',
    delay: 0.35
  },
  {
    num: '03',
    title: 'Milestone-Secured Payments',
    desc: "Your investment is protected at every step. MAI's secured payment system releases funds only when agreed milestones are met and approved, giving both project owners and professionals the security to focus on doing great work.",
    bgColor: 'text-[#FFF0F0]',
    delay: 0.5
  },
  {
    num: '04',
    title: 'A Verified Community You Can Trust',
    desc: "Every professional on MAI is rigorously reviewed, verified, and rated by the community. You're not hiring blindly, you're choosing from a trusted network of proven experts backed by real project history, reviews, and credentials.",
    bgColor: 'text-[#F3EBFF]',
    delay: 0.65
  }
];

export default function WhyChoose() {
  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-white font-montserrat">
      <div className="w-full flex flex-col items-center py-20 md:py-24 overflow-hidden">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 px-4"
        >
          <p className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-3">OUR DIFFERENCE</p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 uppercase tracking-tight">Where Traders & Homeowners Both Win</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From first brief to final delivery. MAI gives you the tools, talent, and transparency to build with confidence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div 
                key={reason.num}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: reason.delay }}
                className={`flex flex-col relative p-8 md:p-10 lg:p-12 
                  ${index % 2 === 0 ? 'md:border-r border-gray-200' : ''} 
                  ${index < 2 ? 'border-b border-gray-200' : ''}
                  ${index === 2 ? 'border-b md:border-b-0 border-gray-200' : ''}
                `}
              >
                <div className="relative mb-6 mt-4 md:mt-2">
                  <span className={`absolute -left-6 md:left-2 -top-12 md:-top-8 text-[120px] font-bold ${reason.bgColor} opacity-60 z-0 select-none leading-none tracking-tighter`}>
                    {reason.num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-gray-800 relative z-10 pt-8 uppercase">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed relative z-10 font-medium">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
