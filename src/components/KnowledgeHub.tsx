import React from 'react';
import { motion } from 'motion/react';

const blogPosts = [
  {
    title: 'Window Sill Replacement: Costs, Mistakes & Best Options in the UK',
    img: 'https://dropinblog.net/34255440/files/featured/window-sill-replacement.jpg',
    url: '/blogs/window-sill-replacement',
    height: 'h-[220px]',
    delay: 0.1
  },
  {
    title: 'Stone Sill Care to Keep Window Sills Strong and Stylish',
    img: 'https://dropinblog.net/34255440/files/featured/stone-sill-care.jpg',
    url: '/blogs/stone-sill-care',
    height: 'h-[320px]',
    delay: 0.2
  },
  {
    title: 'How to Detect and Fix Window Sill Installation Errors?',
    img: 'https://dropinblog.net/34255440/files/featured/window-sill-installation-errors.jpg',
    url: '/blogs/window-sill-installation-errors',
    height: 'h-[320px]',
    delay: 0.3
  },
  {
    title: 'Simple & Best Window Sill Decor Ideas for You',
    img: 'https://dropinblog.net/34255440/files/featured/window-sill-decor.jpg',
    url: '/blogs/window-sill-decor',
    height: 'h-[220px]',
    delay: 0.4
  },
  {
    title: 'How to Become a Plumber in the UK? Latest Guide',
    img: 'https://dropinblog.net/34255440/files/featured/how-to-become-a-plumber.jpg',
    url: '/blogs/how-to-become-a-plumber',
    height: 'h-[220px]',
    delay: 0.5
  },
  {
    title: 'Why Do Some Pay a Lower Dishwasher Installation Cost Than Others?',
    img: 'https://dropinblog.net/34255440/files/featured/dishwasher-installation-cost.jpg',
    url: '/blogs/dishwasher-installation-cost',
    height: 'h-[320px]',
    delay: 0.6
  }
];

export default function KnowledgeHub() {
  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-[#F2F6FB] font-montserrat">
      <div className="flex flex-col items-center py-20 md:py-24 overflow-hidden">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <span className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-2 block">KNOWLEDGE HUB</span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 uppercase">Latest Blog</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Our articles cover a range of topics to help you stay informed and make better decisions. Dive into expert advice and stay ahead in the industry with our engaging and informative content.
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:flex w-full gap-5">
          {/* Column 1 */}
          <div className="flex flex-col w-1/3 gap-5">
            <BlogCard post={blogPosts[0]} />
            <BlogCard post={blogPosts[1]} />
          </div>
          {/* Column 2 */}
          <div className="flex flex-col w-1/3 gap-5">
            <BlogCard post={blogPosts[2]} />
            <BlogCard post={blogPosts[3]} />
          </div>
          {/* Column 3 */}
          <div className="flex flex-col w-1/3 gap-5">
            <BlogCard post={blogPosts[4]} />
            <BlogCard post={blogPosts[5]} />
          </div>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="flex md:hidden w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 py-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="w-[80vw] shrink-0 snap-center">
              <BlogCard post={{ ...post, height: 'h-[350px]' }} />
            </div>
          ))}
        </div>

        {/* Mobile Dots */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-8">
          <button className="h-1.5 w-6 rounded-full bg-[#1F5CAC] transition-all"></button>
          {[1, 2, 3, 4, 5].map(i => <button key={i} className="h-1.5 w-1.5 rounded-full bg-gray-300"></button>)}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a 
            href="/blogs"
            className="px-8 py-2.5 bg-[#1F5CAC] text-white shadow-md font-bold text-[14px] hover:shadow-lg transition-all rounded-full inline-block"
          >
            View All Blogs
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

function BlogCard({ post }: { post: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: post.delay }}
      className={`group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all ${post.height} w-full bg-white`}
    >
      <a href={post.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <img 
          src={post.img} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003F6B] via-[#003F6B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <h3 className="text-white font-bold text-lg leading-tight line-clamp-3 mb-2">
            {post.title}
          </h3>
          <div className="flex items-center gap-2 text-white/80 text-[11px] font-bold uppercase tracking-wider">
            <span>Read Article</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
