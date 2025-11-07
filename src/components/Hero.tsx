import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(14, 45, 100, 0.95), rgba(14, 45, 100, 0.85)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-8 animate-fade-in">
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
            Your Tech Journey Begins
          </h1>
          <p className="text-xl text-white/90 md:text-2xl">
            @ <span className="font-semibold">Madras Engineering College</span>.
          </p>
          <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl">
            India's 1st Engineering College Specialising in IT, Computer Science, Data Science, 
            Artificial Intelligence, Machine Learning, Cybersecurity & Business Systems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
              Paid Internship Opportunities
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
              Modern Lab Facilities
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
              Industry-Ready Curriculum
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
