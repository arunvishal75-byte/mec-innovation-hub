const SkillDevelopment = () => {
  const skills = Array(30).fill("Skill Development");

  return (
    <section className="overflow-hidden bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
        Get Certified by the Best While You Study
      </h2>
      
      <div className="space-y-4">
        {[0, 1, 2, 3].map((row) => (
          <div key={row} className="relative flex">
            <div className={`flex animate-scroll-${row % 2 === 0 ? 'left' : 'right'} whitespace-nowrap`}>
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="mx-6 text-lg font-semibold text-foreground/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillDevelopment;
