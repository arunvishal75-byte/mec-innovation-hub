const CompanyMarquee = () => {
  const companies = [
    "Google", "Microsoft", "Amazon", "Meta", "Apple", 
    "Netflix", "Tesla", "Adobe", "Oracle", "IBM",
    "Intel", "NVIDIA", "SAP", "Salesforce", "Cisco"
  ];

  return (
    <section className="overflow-hidden bg-primary py-12">
      <div className="relative flex">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...companies, ...companies].map((company, index) => (
            <span 
              key={index}
              className="mx-8 text-2xl font-bold text-primary-foreground/80 md:text-3xl"
            >
              {company}
            </span>
          ))}
        </div>
        <div className="flex animate-scroll whitespace-nowrap" aria-hidden="true">
          {[...companies, ...companies].map((company, index) => (
            <span 
              key={index}
              className="mx-8 text-2xl font-bold text-primary-foreground/80 md:text-3xl"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyMarquee;
