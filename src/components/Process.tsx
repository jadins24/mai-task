import React from 'react';
import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    { 
      num: '1', 
      title: 'Post Your Project', 
      desc: 'Start by sharing your project details, add photos, budget, location, and timeline. The more information you provide, the easier it is for the right traders to understand your needs and respond accurately.',
      img: 'https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775640870197-Ellipse_17635.png'
    },
    { 
      num: '2', 
      title: 'Receive Local Proposals', 
      desc: "Once your project is live, verified local traders will review it and send you competitive proposals. You'll start receiving multiple options tailored to your requirements.",
      img: 'https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775640902469-Ellipse_17636.png'
    },
    { 
      num: '3', 
      title: 'Compare & Check Credentials', 
      desc: 'Go through each proposal, compare pricing, and review trader profiles. Check their certifications, ratings, past work, and experience to make a confident, informed choice.',
      img: 'https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775640932045-Ellipse_17636_(1).png'
    },
    { 
      num: '4', 
      title: 'Finalise & Start the Work', 
      desc: "Select the trader that fits your project best, finalise the details, and get started. Plan the workflow clearly and move forward with confidence knowing you've chosen the right professional.",
      img: 'https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775640984647-Ellipse_17636_(2).png'
    }
  ];

  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-white font-montserrat">
      <div className="w-full py-20 md:py-24 bg-transparent overflow-hidden">
        <div className="mx-auto w-full text-center flex flex-col items-center">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-3 block">SIMPLE PROCESS</span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 uppercase">How To Find Verified Traders</h2>
            <p className="text-sm md:text-base text-gray-500">Find trusted professionals in 4 simple steps</p>
          </motion.div>

          <div className="relative w-full">
            {/* Connection Lines */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Desktop Horizontal Line */}
              <div className="absolute top-12 left-[12.5%] right-[12.5%] h-[1px] bg-gray-200 hidden md:block"></div>
              <motion.div 
                className="absolute top-12 left-[12.5%] h-[1px] bg-gradient-to-r from-[#0C7A56] to-[#CBECE2] hidden md:block" 
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: '75%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              
              {/* Mobile Vertical Line */}
              <div className="absolute top-12 bottom-[10%] left-1/2 -translate-x-1/2 w-[1px] bg-gray-200 md:hidden z-0" />
              <motion.div 
                className="absolute top-12 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#0C7A56] to-[#CBECE2] md:hidden z-0"
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: '85%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  {/* Step Icon & Number */}
                  <div className="relative w-24 h-24 rounded-full mx-auto mb-6 shrink-0 group">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-md">
                      <img 
                        src={step.img} 
                        alt={step.title} 
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute top-0 -right-1 w-7 h-7 bg-[#0C7A56] text-white rounded-full flex items-center justify-center text-[12px] font-bold shadow-md border-2 border-white">
                      {step.num}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="px-3 bg-[#F2F6FB] md:bg-transparent py-5 md:py-0 rounded-2xl md:rounded-none w-full max-w-[360px]">
                    <h4 className="text-[17px] font-bold text-[#333333] mb-3 leading-snug uppercase">{step.title}</h4>
                    <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16"
          >
            <a 
              href="/post-a-project"
              className="px-8 py-2.5 bg-[#1F5CAC] text-white shadow-md font-bold text-[14px] hover:shadow-lg transition-all rounded-full"
            >
              Post Your Project Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
