import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="dark min-h-screen bg-background text-foreground">
    <Header />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
