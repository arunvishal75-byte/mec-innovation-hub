import { Button } from "@/components/ui/button";

const Footer = () => {
  const programs = [
    "Computer Science",
    "Artificial Intelligence",
    "Data Science",
    "Machine Learning",
    "Information Technology",
    "Cyber Security",
    "Business Systems",
  ];

  return (
    <footer className="bg-primary py-16 px-4 text-primary-foreground">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Connect with us</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {programs.map((program) => (
              <span 
                key={program}
                className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                {program}
              </span>
            ))}
          </div>
        </div>
        
        <div className="space-y-6 text-center">
          <h3 className="text-2xl font-bold">
            India's promising new-age engineering college, built to empower the next generation of tech leaders
          </h3>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Apply Now
          </Button>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/70">
          <p>© 2025 Madras Engineering College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
