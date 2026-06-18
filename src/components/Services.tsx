import { motion } from 'motion/react';

const services = [
  { name: 'Worktop & Tile Removal', img: 'https://d2iyhd3v3rvz2k.cloudfront.net/category/images/1777217769168-WhatsApp_Image_2026-04-26_at_4.33.39_PM.jpeg' },
  { name: 'Tiles Supplier', img: 'https://d2iyhd3v3rvz2k.cloudfront.net/category/images/1774256673768-tiles.jpg' },
  { name: 'Sinks', img: 'https://d2iyhd3v3rvz2k.cloudfront.net/category/images/1773998143717-Sinks.jpg' },
  { name: 'Engineered Stone Installation', img: 'https://d2iyhd3v3rvz2k.cloudfront.net/category/images/1758780894298-Engineered_Stone_Img.png' },
  { name: 'Natural Stone Installation', img: 'https://d2iyhd3v3rvz2k.cloudfront.net/category/images/1758784183403-granite_countertops_1.png' },
  { name: 'Tiling Services', img: 'https://d2iyhd3v3rvz2k.cloudfront.net/category/images/1758018384413-Image-min.png' },
  { name: 'Fire Place Surrounds', img: 'https://d2iyhd3v3rvz2k.cloudfront.net/category/images/1777212707461-WhatsApp_Image_2026-04-26_at_3.11.13_PM.jpeg' },
  { name: 'Cladding', img: 'https://d2iyhd3v3rvz2k.cloudfront.net/category/images/1758018043377-Image-min.png' },
  { name: 'Internal Wall Insulation', img: 'https://d2iyhd3v3rvz2k.cloudfront.net/category/images/1758012126405-Image-min.png' },
  { name: 'Stone / Slate Tiling', img: 'https://d2iyhd3v3rvz2k.cloudfront.net/category/images/1758016932949-Image-min.png' },
  { name: 'Driveways', img: 'https://d2iyhd3v3rvz2k.cloudfront.net/category/images/1758018171712-Image-min.png' },
  { name: 'Stone Slab Supplier', img: 'https://d2iyhd3v3rvz2k.cloudfront.net/category/images/1777131845414-WhatsApp_Image_2026-04-25_at_16.41.31.jpeg' },
  { name: 'Kitchen Installation', img: 'https://d2iyhd3v3rvz2k.cloudfront.net/category/images/1758012442626-Image-min.png' },
];

export default function Services() {
  return (
    <section className="py-24 bg-white overflow-hidden font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 xl:px-24">
        <div className="text-center mb-16">
          <p className="text-[#1F5CAC] font-bold uppercase tracking-widest text-[11px] mb-2">GET ANY HOME REPAIR DONE</p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4 uppercase">Looking For A Service?</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base">
            From a dripping tap to a full loft conversion find the right <span className="text-[#1F5CAC] underline cursor-pointer">verified tradesperson</span> for any job.
          </p>
        </div>

        {/* Marquee Section */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden py-4">
            <motion.div 
              className="flex gap-6 shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...services, ...services].map((service, index) => (
                <div 
                  key={`${service.name}-${index}`}
                  className="w-[160px] lg:w-[180px] shrink-0 group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden rounded-2xl mb-4 border border-gray-100 shadow-sm transition-all group-hover:shadow-md group-hover:scale-[1.02]">
                    <img 
                      src={service.img} 
                      alt={service.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-gray-700 leading-tight text-center px-2 group-hover:text-[#1F5CAC] transition-colors">
                    {service.name}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-2.5 bg-[#1F5CAC] text-white rounded-full font-bold text-sm hover:shadow-lg transition-all shadow-md">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
