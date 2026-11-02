import React, { useState, useEffect } from 'react';
import { ThreeBackground } from './three/ThreeBackground';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { ScrollHUD } from './components/ScrollHUD';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';
import { IntelligenceCoreSection } from './components/IntelligenceCoreSection';
import { IndustriesSection } from './components/IndustriesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ProcessSection } from './components/ProcessSection';
import { TechEcosystemSection } from './components/TechEcosystemSection';
import { WhyABCSection } from './components/WhyABCSection';
import { LeadershipTeamSection } from './components/LeadershipTeamSection';
import { TrustSection } from './components/TrustSection';
import { InsightsSection } from './components/InsightsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<
    'software' | 'ai' | 'cloud' | 'security' | null
  >(null);
  const [performanceMode, setPerformanceMode] = useState<'ultra' | 'efficient'>('ultra');

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setPerformanceMode('efficient');
    }
  }, []);

  const handleTogglePerformance = () => {
    setPerformanceMode((prev) => (prev === 'ultra' ? 'efficient' : 'ultra'));
  };

  return (
    <div className="relative min-h-screen bg-[#08090C] text-slate-100 selection:bg-cyan-400 selection:text-black overflow-x-hidden scanline-bg">
      {/* Interactive Custom Precision Cursor */}
      <CustomCursor />

      {/* Persistent Living 3D WebGL Scene in background */}
      <ThreeBackground
        activeComponent={activeComponent}
        performanceMode={performanceMode}
      />

      {/* Global Header & Nav */}
      <Header
        performanceMode={performanceMode}
        onTogglePerformance={handleTogglePerformance}
      />

      {/* Lateral Chapter Telemetry HUD */}
      <ScrollHUD />

      {/* Sequential Narrative Content Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Section 01: Hero / Enter The System */}
        <HeroSection />

        {/* Section 02: Philosophy */}
        <PhilosophySection />

        {/* Section 03: What We Build */}
        <ServicesSection />

        {/* Section 04: The Intelligence Core (Interactive 3D Subsystems) */}
        <IntelligenceCoreSection
          activeComponent={activeComponent}
          onSelectComponent={setActiveComponent}
        />

        {/* Section 05: Industries We Serve */}
        <IndustriesSection />

        {/* Section 06: Selected Work / Case Studies */}
        <CaseStudiesSection />

        {/* Section 07: Engineering Process */}
        <ProcessSection />

        {/* Section 08: Technology Ecosystem */}
        <TechEcosystemSection />

        {/* Section 09: Why ABC */}
        <WhyABCSection />

        {/* Section 09B: Engineering Leadership & Founders (Amrutkiran & Pratik) */}
        <LeadershipTeamSection />

        {/* Section 10: Trust & Proof */}
        <TrustSection />

        {/* Section 11: Insights & Engineering Journals */}
        <InsightsSection />

        {/* Section 12: Final Conversion Experience */}
        <ContactSection />
      </main>

      {/* Section 13: Professional Footer */}
      <Footer />
    </div>
  );
};

export default App;
