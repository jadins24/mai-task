import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowOpacity = useSpring(0, { stiffness: 200, damping: 20 });
  const bgOpacity = useSpring(0.1, { stiffness: 100, damping: 30 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    glowOpacity.set(1);
  };

  const handleMouseLeave = () => {
    glowOpacity.set(0);
    bgOpacity.set(0.1);
  };

  const handleInteractiveHover = (isHovering: boolean) => {
    bgOpacity.set(isHovering ? 0.3 : 0.1);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const x = mouseX.get();
      const y = mouseY.get();
      const opacity = glowOpacity.get();

      if (opacity > 0.01) {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 300);
        gradient.addColorStop(0, `rgba(77, 184, 255, ${0.15 * opacity})`);
        gradient.addColorStop(0.5, `rgba(77, 184, 255, ${0.05 * opacity})`);
        gradient.addColorStop(1, 'rgba(77, 184, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(canvas);
    handleResize();
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <footer 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-[#020D18] text-white font-montserrat"
    >
      <canvas 
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 w-full h-full"
        style={{ zIndex: 3 }}
      />

      {/* Base Grid Background */}
      <motion.svg 
        className="pointer-events-none absolute inset-0 w-full h-full" 
        style={{ zIndex: 1, opacity: bgOpacity }} 
        aria-hidden="true"
      >
        <defs>
          <pattern id="ft-grid-lg" width="240" height="240" patternUnits="userSpaceOnUse">
            <path d="M 240 0 L 0 0 0 240" fill="none" stroke="white" strokeWidth="0.75" />
          </pattern>
          <pattern id="ft-grid-sm" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ft-grid-sm)" />
        <rect width="100%" height="100%" fill="url(#ft-grid-lg)" />
      </motion.svg>

      {/* Decorative Lines */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-10" style={{ zIndex: 1 }} aria-hidden="true">
        <line x1="42%" y1="5%" x2="58%" y2="5%" stroke="#4DB8FF" strokeWidth="1" />
        <line x1="35%" y1="95%" x2="55%" y2="95%" stroke="#4DB8FF" strokeWidth="1" />
        <line x1="0" y1="88%" x2="38%" y2="0%" stroke="#4DB8FF" strokeWidth="0.75" />
        <line x1="62%" y1="100%" x2="100%" y2="28%" stroke="#4DB8FF" strokeWidth="0.75" />
      </svg>

      {/* Mouse Follow Glow Effect */}
      <motion.svg 
        className="pointer-events-none absolute inset-0 w-full h-full" 
        style={{ zIndex: 2, opacity: glowOpacity }} 
        aria-hidden="true"
      >
        <defs>
          <pattern id="ft-glow-sm" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,212,255,0.3)" strokeWidth="0.5" />
          </pattern>
          <pattern id="ft-glow-lg" width="240" height="240" patternUnits="userSpaceOnUse">
            <path d="M 240 0 L 0 0 0 240" fill="none" stroke="rgba(77,184,255,0.6)" strokeWidth="1.1" />
          </pattern>
          <motion.radialGradient id="ft-cursor-fade" gradientUnits="userSpaceOnUse" r="180" cx={mouseX} cy={mouseY}>
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </motion.radialGradient>
          <mask id="ft-cursor-mask">
            <rect width="100%" height="100%" fill="url(#ft-cursor-fade)" />
          </mask>
        </defs>
        <g mask="url(#ft-cursor-mask)">
          <rect width="100%" height="100%" fill="url(#ft-glow-sm)" />
          <rect width="100%" height="100%" fill="url(#ft-glow-lg)" />
        </g>
      </motion.svg>

      {/* Hero Section of Footer */}
      <div className="relative z-10 border-b border-white/10 px-4 sm:px-10 xl:px-24 py-20 md:py-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <p className="text-[#4DB8FF] text-xs font-bold uppercase tracking-[0.4em] mb-6">Start Today — It's Free</p>
            <h2 className="text-4xl md:text-6xl xl:text-8xl font-black leading-none tracking-tighter mb-8 italic">
              <span className="text-white">LET'S </span>
              <span className="bg-gradient-to-r from-[#4DB8FF] via-[#00D4FF] to-[#0077B6] bg-clip-text text-transparent">BUILD</span>
              <br />
              <span className="text-white/80 text-3xl md:text-5xl xl:text-7xl font-light not-italic">OUR NATION GREAT.</span>
            </h2>
            <p className="mt-8 text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
              Connect with verified UK tradespeople or find your next project. MAI brings the right people together.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
          >
            <a 
              href="/post-a-project" 
              onMouseEnter={() => handleInteractiveHover(true)}
              onMouseLeave={() => handleInteractiveHover(false)}
              className="group inline-flex items-center justify-center gap-3 bg-[#1F5CAC] hover:bg-[#1F5CAC]/90 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 text-[14px] shadow-[0_0_40px_rgba(31,92,172,0.3)] hover:shadow-[0_0_60px_rgba(31,92,172,0.5)]"
            >
              Post a Project
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a 
              href="/aboutus" 
              onMouseEnter={() => handleInteractiveHover(true)}
              onMouseLeave={() => handleInteractiveHover(false)}
              className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 text-[14px]"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="relative z-10 px-4 sm:px-10 xl:px-24 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-8">
            <img 
              src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1754994240150-Group_5258.png" 
              alt="MAI Logo" 
              className="w-24 brightness-0 invert" 
            />
            <p className="text-white/60 text-[15px] leading-relaxed max-w-xs">
              A premier platform connecting homeowners with certified, skilled Traders across the UK.
            </p>
            <div className="flex gap-3 flex-wrap">
              <SocialIcon icon={<Facebook size={18} />} color="#1877F2" href="#" onHover={handleInteractiveHover} />
              <SocialIcon icon={<Twitter size={18} />} color="#000000" href="#" onHover={handleInteractiveHover} />
              <SocialIcon icon={<Youtube size={18} />} color="#FF0000" href="#" onHover={handleInteractiveHover} />
              <SocialIcon icon={<Instagram size={18} />} color="linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" href="#" onHover={handleInteractiveHover} />
              <SocialIcon icon={<Linkedin size={18} />} color="#0A66C2" href="#" onHover={handleInteractiveHover} />
            </div>
          </div>

          {/* Links Columns */}
          <FooterColumn 
            title="Company"
            onHover={handleInteractiveHover}
            links={[
              { label: 'About Us', href: '/aboutus' },
              { label: 'Careers', href: '/careers' },
              { label: 'CSR', href: '/csr' },
              { label: 'FAQ', href: '/faq' }
            ]}
          />
          <FooterColumn 
            title="Platform"
            onHover={handleInteractiveHover}
            links={[
              { label: 'Contact Us', href: '/contact-us' },
              { label: 'Terms & Conditions', href: '/terms-and-conditions' },
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'NDA', href: '/nda' }
            ]}
          />

          {/* Contact Column */}
          <div className="space-y-8">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40">Contact</p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-[15px] text-white/80 group">
                <span className="mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <MapPin size={14} className="text-[#4DB8FF]" />
                </span>
                <span className="leading-relaxed">1 De La Warr Way, Cambourne, Cambridge CB23 6DX</span>
              </li>
              <li className="flex items-start gap-4 text-[15px] text-white/80 group">
                <a 
                  href="tel:+442080043345" 
                  onMouseEnter={() => handleInteractiveHover(true)}
                  onMouseLeave={() => handleInteractiveHover(false)}
                  className="flex items-start gap-4"
                >
                  <span className="mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Phone size={14} className="text-[#4DB8FF]" />
                  </span>
                  <span className="leading-relaxed">+44 208 004 3345</span>
                </a>
              </li>
              <li className="flex items-start gap-4 text-[15px] text-white/80 group">
                <a 
                  href="mailto:info@myproject.ai" 
                  onMouseEnter={() => handleInteractiveHover(true)}
                  onMouseLeave={() => handleInteractiveHover(false)}
                  className="flex items-start gap-4"
                >
                  <span className="mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Mail size={14} className="text-[#4DB8FF]" />
                  </span>
                  <span className="leading-relaxed">info@myproject.ai</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Compliance Image */}
      <div className="relative z-10 px-4 sm:px-10 xl:px-24 mb-8">
        <img 
          src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/EUGDPRComplaint.png" 
          alt="GDPR Complaint" 
          className="w-16 h-16 md:w-20 md:h-20"
        />
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-white/5 px-4 sm:px-10 xl:px-24 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[12px] text-white/30 text-center sm:text-left max-w-4xl leading-relaxed">
            © 2023 - 2026 MAI Corporation Ltd. MAI Corporation Ltd is a UK-based holding company overseeing subsidiaries and affiliated operations across the UK, EU, Asia and Africa. Incorporated in England & Wales under Company No. 15469340. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, color, href, onHover }: { icon: React.ReactNode, color: string, href: string, onHover: (state: boolean) => void }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 shadow-md hover:scale-110 hover:shadow-lg active:scale-95"
      style={{ background: color }}
    >
      {icon}
    </a>
  );
}

function FooterColumn({ title, links, onHover }: { title: string, links: { label: string, href: string }[], onHover: (state: boolean) => void }) {
  return (
    <div className="space-y-8">
      <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40">{title}</p>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <a 
              href={link.href}
              onMouseEnter={() => onHover(true)}
              onMouseLeave={() => onHover(false)}
              className="group flex items-center gap-3 text-[15px] font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              <span className="h-[1px] w-0 bg-[#4DB8FF] group-hover:w-4 transition-all duration-300 ease-out" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
