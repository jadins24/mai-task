import React, { useState } from 'react';
import { User, ChevronDown, Menu, Search, PlusCircle, Send, Briefcase, X, Home, Info, FileText, Newspaper, Award, MessageCircle, LogIn, UserPlus, BookOpen, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 font-sans">
      {/* Top Utility Bar (Navy Gradient) */}
      <div 
        className="h-[88px] px-4 sm:px-10 xl:px-24 flex items-center justify-between border-b border-white/5"
        style={{ background: 'linear-gradient(90deg, rgb(10, 22, 40) 0%, rgb(13, 31, 60) 100%)' }}
      >
        {/* Logo */}
        <a href="/" className="flex flex-col items-start flex-shrink-0 group cursor-pointer">
          <img
            src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1754994240150-Group_5258.png"
            alt="MAI Logo"
            className="h-10 w-auto mb-1"
          />
          <span className="text-[10px] text-gray-400 font-bold tracking-widest leading-none transform -translate-y-1">WE BUILD HOMES</span>
        </a>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex flex-1 max-w-md mx-12 transition-all">
          <div className="flex items-center w-full bg-white rounded-full shadow-lg h-[50px] overflow-hidden">
            <input 
              placeholder="Search Here" 
              className="flex-1 h-full px-6 text-[15px] text-gray-700 bg-transparent outline-none placeholder-gray-400 font-medium"
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

        {/* User Actions */}
        <div className="flex items-center gap-3">
          <div className="relative inline-block text-left">
            <button className="flex items-center gap-2.5 px-3 py-2 rounded-full transition-all bg-white/5 border border-white/10 group cursor-pointer hover:bg-white/10">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgb(30, 138, 201), rgb(0, 63, 107))' }}>
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold text-sm">Sign In</span>
              <ChevronDown className="w-3 h-3 text-white/40 group-hover:text-white transition-colors" />
            </button>
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white flex items-center p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Main Navigation (Desktop) */}
      <nav 
        className="hidden lg:flex items-center justify-between px-4 sm:px-10 xl:px-24 h-11 backdrop-blur-md border-b border-white/10"
        style={{ background: 'linear-gradient(90deg, rgba(5, 12, 28, 0.45) 0%, rgba(10, 22, 40, 0.45) 100%)' }}
      >
        <div className="flex items-center gap-1 h-full">
          <NavItem href="/" label="Home" active />
          
          <div className="relative h-full flex items-center group">
            <button 
              onClick={() => setActiveDropdown(activeDropdown === 'how' ? null : 'how')}
              className={`flex items-center gap-1.5 px-3 h-full text-[11px] xl:text-[14px] tracking-wider transition-all cursor-pointer ${activeDropdown === 'how' ? 'text-white' : 'text-white/80 hover:text-white'}`}
              style={{ textShadow: 'rgba(0, 0, 0, 0.8) 0px 1px 4px' }}
            >
              How It Works <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'how' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'how' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-48 bg-[#0A1628] border border-white/10 rounded-b-xl overflow-hidden shadow-2xl py-2 z-[60]"
                >
                  {['Project Owner', 'Trader', 'Intern'].map((item) => (
                    <a key={item} href="#" className="block px-6 py-3 text-sm hover:bg-white/5 hover:text-accent transition-all text-white/80 hover:text-white border-b border-white/5 last:border-0">{item}</a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem href="/projects" label="Projects" />
          <NavItem href="/blogs" label="Blogs" />

          <div className="relative h-full flex items-center">
            <button 
              onClick={() => setActiveDropdown(activeDropdown === 'awards' ? null : 'awards')}
              className={`flex items-center gap-1.5 px-3 h-full text-[11px] xl:text-[14px] tracking-wider transition-all cursor-pointer ${activeDropdown === 'awards' ? 'text-white' : 'text-white/80 hover:text-white'}`}
              style={{ textShadow: 'rgba(0, 0, 0, 0.8) 0px 1px 4px' }}
            >
              Mai Awards <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'awards' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'awards' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-48 bg-[#0A1628] border border-white/10 rounded-b-xl overflow-hidden shadow-2xl py-2 z-[60]"
                >
                  {['Awards', 'Sponsorship'].map((item) => (
                    <a key={item} href="#" className="block px-6 py-3 text-sm hover:bg-white/5 hover:text-accent transition-all text-white/80 hover:text-white border-b border-white/5 last:border-0">{item}</a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-2 h-full">
          <ActionItem href="/post-a-project" icon={<PlusIcon />} label="Post a Project" />
          <div className="w-px h-4 bg-white/10 mx-0" />
          <ActionItem href="/send-proposals" icon={<ProposalIcon />} label="Send Proposals" />
          <div className="w-px h-4 bg-white/10 mx-0" />
          <ActionItem href="/apply-internship" icon={<InternshipIcon />} label="Apply Internship" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-[88px] bg-[#0A1628] overflow-y-auto z-40"
          >
            <div className="px-6 py-8 space-y-8">
              {/* Logo Section */}
              <div className="flex flex-col items-start">
                <img
                  src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1754994240150-Group_5258.png"
                  alt="MAI Logo"
                  className="h-12 w-auto mb-2"
                />
                <span className="text-xs text-gray-400 font-bold tracking-widest">WE BUILD HOMES</span>
              </div>

              {/* Sign In / Register Section */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgb(30, 138, 201), rgb(0, 63, 107))' }}>
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Sign In / Register</h3>
                    <p className="text-gray-400 text-sm">Access your MAI account</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <MobileActionItem href="/post-a-project" icon={<PlusCircle className="w-5 h-5" />} label="Post Project" />
                  <MobileActionItem href="/apply-internship" icon={<Briefcase className="w-5 h-5" />} label="Apply Internship" />
                  <MobileActionItem href="/send-proposals" icon={<Send className="w-5 h-5" />} label="Send Proposals" />
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">Navigation</h4>
                <div className="space-y-3">
                  <MobileNavItem href="/" icon={<Home className="w-5 h-5" />} label="Home" />
                  <MobileNavItem href="/how-it-works" icon={<Info className="w-5 h-5" />} label="How It Works" />
                  <MobileNavItem href="/projects" icon={<FileText className="w-5 h-5" />} label="Projects" />
                  <MobileNavItem href="/blogs" icon={<Newspaper className="w-5 h-5" />} label="Blogs" />
                  <MobileNavItem href="/mai-awards" icon={<Award className="w-5 h-5" />} label="Mai Awards" />
                </div>
              </div>

              {/* Help Section */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#1E8AC9] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Need help? We're here for you</h4>
                    <div className="flex flex-col gap-2 mt-3">
                      <a href="/book-demo" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                        <BookOpen className="w-4 h-4" />
                        Book Demo
                      </a>
                      <a href="/contact" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Sign In Button */}
              <div className="pt-4 border-t border-white/10">
                <button className="w-full bg-[#1E8AC9] text-white font-bold py-3 px-6 rounded-full hover:bg-[#1E8AC9]/80 transition-colors flex items-center justify-center gap-2">
                  <LogIn className="w-5 h-5" />
                  Sign In
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ href, label, active = false }: { href: string; label: string; active?: boolean }) {
  return (
    <a href={href} className="px-3 py-1.5 rounded-lg cursor-pointer text-[11px] xl:text-[14px] tracking-wider transition-all hover:text-white" style={{ color: active ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.82)', textShadow: 'rgba(0, 0, 0, 0.8) 0px 1px 4px' }}>
      {label}
    </a>
  );
}

function ActionItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} className="flex items-center gap-1.5 px-3 h-full text-white text-[11px] xl:text-[14px] font-medium uppercase tracking-wider cursor-pointer hover:text-white/80 transition-all">
      {icon}
      {label}
    </a>
  );
}

function MobileNavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors py-2">
      {icon}
      <span className="text-sm">{label}</span>
    </a>
  );
}

function MobileActionItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-lg px-4 py-3 text-white/90 hover:text-white">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M17.5405 2.16663H8.46214C4.5188 2.16663 2.16797 4.51746 2.16797 8.46079V17.5283C2.16797 21.4825 4.5188 23.8333 8.46214 23.8333H17.5296C21.473 23.8333 23.8238 21.4825 23.8238 17.5391V8.46079C23.8346 4.51746 21.4838 2.16663 17.5405 2.16663Z" fill="white"></path>
      <path d="M17.3346 12.1875H13.8138V8.66663C13.8138 8.22246 13.4455 7.85413 13.0013 7.85413C12.5571 7.85413 12.1888 8.22246 12.1888 8.66663V12.1875H8.66797C8.2238 12.1875 7.85547 12.5558 7.85547 13C7.85547 13.4441 8.2238 13.8125 8.66797 13.8125H12.1888V17.3333C12.1888 17.7775 12.5571 18.1458 13.0013 18.1458C13.4455 18.1458 13.8138 17.7775 13.8138 17.3333V13.8125H17.3346C17.7788 13.8125 18.1471 13.4441 18.1471 13C18.1471 12.5558 17.7788 12.1875 17.3346 12.1875Z" fill="white"></path>
    </svg>
  );
}

function ProposalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M10.3035 4.58106L19.5769 9.21773C23.7369 11.2977 23.7369 14.6994 19.5769 16.7794L10.3035 21.4161C4.06352 24.5361 1.51768 21.9794 4.63768 15.7502L5.58018 13.8761C5.85102 13.3236 5.85102 12.6844 5.58018 12.1319L4.63768 10.2469C1.51768 4.01772 4.07435 1.46106 10.3035 4.58106Z" fill="white"></path>
      <path d="M16.0766 13.8125H10.2266C9.7824 13.8125 9.41406 13.4442 9.41406 13C9.41406 12.5558 9.7824 12.1875 10.2266 12.1875H16.0766C16.5207 12.1875 16.8891 12.5558 16.8891 13C16.8891 13.4442 16.5207 13.8125 16.0766 13.8125Z" fill="white"></path>
    </svg>
  );
}

function InternshipIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.9" d="M22.8496 7.5603C21.9287 6.54197 20.3904 6.0328 18.1587 6.0328H17.8987V5.98947C17.8987 4.16947 17.8987 1.91614 13.8254 1.91614H12.1787C8.10541 1.91614 8.10541 4.1803 8.10541 5.98947V6.04364H7.84541C5.60291 6.04364 4.07541 6.5528 3.15457 7.57114C2.08207 8.7628 2.11458 10.3661 2.22291 11.4603L2.23374 11.5361L2.34207 12.6736C2.35291 12.6845 2.37457 12.7061 2.39624 12.717C2.75374 12.9553 3.12207 13.1936 3.51207 13.4103C3.66374 13.5078 3.82624 13.5945 3.98874 13.6811C5.84124 14.6995 7.87791 15.382 9.94707 15.7178C10.0446 16.7361 10.4887 17.9278 12.8612 17.9278C15.2337 17.9278 15.6996 16.747 15.7754 15.6961C17.9854 15.3386 20.1196 14.5695 22.0479 13.4428C22.1129 13.4103 22.1562 13.3778 22.2104 13.3453C22.7087 13.0636 23.1746 12.7603 23.6296 12.4245C23.6527 12.4123 23.6715 12.3934 23.6837 12.3703L23.7271 11.9803L23.7812 11.4711C23.7921 11.4061 23.7921 11.352 23.8029 11.2761C23.8896 10.182 23.8679 8.68697 22.8496 7.5603ZM14.1829 14.9811C14.1829 16.1295 14.1829 16.3028 12.8504 16.3028C11.5179 16.3028 11.5179 16.097 11.5179 14.992V13.627H14.1829V14.9811ZM9.65458 6.0328V5.98947C9.65458 4.1478 9.65458 3.4653 12.1787 3.4653H13.8254C16.3496 3.4653 16.3496 4.15864 16.3496 5.98947V6.04364H9.65458V6.0328Z" fill="white"></path>
      <path opacity="0.3" d="M22.2082 13.325L22.0457 13.4225C20.1089 14.548 17.9834 15.3116 15.7732 15.6758C15.6865 16.7158 15.2315 17.9075 12.859 17.9075C10.4865 17.9075 10.0315 16.7266 9.94484 15.6975C7.87568 15.3725 5.83901 14.69 3.98651 13.6608C3.82401 13.5741 3.66151 13.4875 3.50984 13.39C3.11984 13.1733 2.75151 12.935 2.39401 12.6966C2.37234 12.6858 2.35068 12.6641 2.33984 12.6533L3.00068 19.7058C3.22818 21.8616 4.11651 24.0825 8.88318 24.0825H17.1382C21.9048 24.0825 22.7932 21.8616 23.0207 19.695L23.7032 12.35C23.691 12.3731 23.6721 12.3919 23.649 12.4041C23.1832 12.74 22.7065 13.0541 22.2082 13.325Z" fill="white"></path>
    </svg>
  );
}