import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Lightbulb, Award, Heart, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Industry-Ready Curriculum",
    description: "Learn what the industry needs - cutting-edge curriculum for tomorrow's tech.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Well-qualified mentors from both academic & real-world experience.",
  },
  {
    icon: Lightbulb,
    title: "Learn by Doing",
    description: "Hands-on learning through paid internships & pre-placement opportunities.",
  },
  {
    icon: Award,
    title: "Placement Support",
    description: "100% Placement assistance through tie-ups with Fortune 500 Companies.",
  },
  {
    icon: Heart,
    title: "Vibrant Community",
    description: "Enjoy a fun, inclusive campus with clubs, events, sports, and student-led initiatives.",
  },
  {
    icon: Smartphone,
    title: "Gen Z Campus",
    description: "AC Classrooms, Smart Labs, and a Tech-Integrated Learning Environment.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
          Top Reasons to Study at MEC
        </h2>
        <p className="mb-16 text-center text-xl text-muted-foreground">
          Why Madras Engineering College?
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-border/50"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
