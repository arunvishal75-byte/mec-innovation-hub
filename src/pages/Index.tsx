import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import StudentShowcase from "@/components/StudentShowcase";
import CompanyMarquee from "@/components/CompanyMarquee";
import AboutMEC from "@/components/AboutMEC";
import SkillDevelopment from "@/components/SkillDevelopment";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Programs />
      <StudentShowcase />
      <CompanyMarquee />
      <AboutMEC />
      <SkillDevelopment />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Index;
