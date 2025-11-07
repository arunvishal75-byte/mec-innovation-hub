import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const programs = [
  {
    id: "cse",
    title: "CSE",
    degree: "B.E. in Computer Science & Engineering",
    description: "Design, develop, and lead with powerful computing skills to drive innovation in the digital world.",
  },
  {
    id: "aids",
    title: "AIDS",
    degree: "B.Tech. in Artificial Intelligence & Data Science",
    description: "Master AI, Machine Learning & Big Data to solve real-world problems with intelligent solutions.",
  },
  {
    id: "aiml",
    title: "AIML",
    degree: "B.E. in Computer Science & Engineering (AI & ML)",
    description: "Dive deep into AI & Machine Learning technologies to build smart systems & future-ready applications.",
  },
  {
    id: "it",
    title: "IT",
    degree: "B.Tech. in Information Technology (IT)",
    description: "Ace Computing, Programming & System Design to build innovative software & technology solutions.",
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    degree: "B.E. in Computer Science & Engineering (Cyber Security)",
    description: "Secure the digital world with advanced cyber security techniques and ethical hacking skills.",
  },
  {
    id: "csbs",
    title: "CSBS",
    degree: "B.E. in Computer Science & Business Systems",
    description: "Combine tech and business skills to create tech-driven solutions for modern enterprises.",
  },
];

const Programs = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
          Top Programs to Study at Madras Engineering College
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card 
              key={program.id} 
              className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-border/50"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{program.title}</CardTitle>
                <CardDescription className="text-base font-medium pt-2">
                  {program.degree}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Let's Chat
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
