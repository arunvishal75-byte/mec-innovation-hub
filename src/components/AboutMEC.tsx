import { Button } from "@/components/ui/button";

const AboutMEC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h2 className="text-4xl font-bold md:text-5xl">
          Madras Engineering College
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          At MEC, your passion finds its purpose. Whether you're inspired by innovation, 
          discovery, or creativity, we offer programs that ignite your potential. Experience 
          a transformative education driven by cutting-edge technology and research.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          Speak to an Expert
        </Button>
      </div>
    </section>
  );
};

export default AboutMEC;
