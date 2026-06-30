import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { AboutSection, GuideSection, ContactSection, Footer } from "./OtherSections";

interface LandingPageProps {
  onLaunchChat: () => void;
}

export function LandingPage({ onLaunchChat }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar onLaunchChat={onLaunchChat} />

      {/* Page Sections */}
      <main>
        <HeroSection onLaunchChat={onLaunchChat} />
        <FeaturesSection />
        <AboutSection />
        <GuideSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onLaunchChat={onLaunchChat} />
    </div>
  );
}
