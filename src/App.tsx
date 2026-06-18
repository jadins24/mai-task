"use client";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Toolkit from './components/Toolkit';
import Process from './components/Process';
import ProjectsPreview from './components/ProjectsPreview';
import Offcuts from './components/Offcuts';
import TraderSlider from './components/TraderSlider';
import WhyChoose from './components/WhyChoose';
import KnowledgeHub from './components/KnowledgeHub';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingAI from './components/FloatingAI';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#1F5CAC]/10 selection:text-[#1F5CAC]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Toolkit />
        <Process />
        <ProjectsPreview />
        <Offcuts />
        <TraderSlider />
        <WhyChoose />
        <KnowledgeHub />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <FloatingAI />
    </div>
  );
}
