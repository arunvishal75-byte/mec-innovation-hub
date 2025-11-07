import studentsImg from "@/assets/students.png";

const StudentShowcase = () => {
  const questions = [
    "Will I get placed?",
    "Am I eligible?",
    "Career focused?",
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row">
          <div className="relative lg:w-1/2">
            <img 
              src={studentsImg} 
              alt="MEC Students" 
              className="w-full max-w-2xl mx-auto rounded-2xl"
            />
          </div>
          
          <div className="space-y-8 lg:w-1/2">
            {questions.map((question, index) => (
              <div 
                key={index}
                className="group cursor-pointer rounded-xl bg-card p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-border/50"
              >
                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {question}
                </h3>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Step into a world of opportunities with world-class companies
          </h3>
        </div>
      </div>
    </section>
  );
};

export default StudentShowcase;
