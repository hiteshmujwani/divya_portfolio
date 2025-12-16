import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 75 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "REST APIs", level: 90 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 88 },
      { name: "Figma", level: 70 },
      { name: "Vercel/Netlify", level: 80 },
    ],
  },
];

const techLogos = [
  "React", "Node.js", "MongoDB", "Express", "JavaScript", "TypeScript",
  "Tailwind", "Git", "Redux", "HTML5", "CSS3", "PostgreSQL"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            A comprehensive toolkit built through education and real-world project experience.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm"
            >
              <h3 className="text-xl font-heading font-semibold mb-6 text-foreground">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-body text-sm text-foreground">
                        {skill.name}
                      </span>
                      <span className="font-body text-sm text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden py-8"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex gap-8 animate-[scroll_20s_linear_infinite]">
            {[...techLogos, ...techLogos].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="flex-shrink-0 px-6 py-3 rounded-full border border-border bg-card/30 text-muted-foreground font-body text-sm whitespace-nowrap"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
