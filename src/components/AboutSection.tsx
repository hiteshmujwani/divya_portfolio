import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Code } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "BCA - Bachelor of Computer Applications",
    place: "Kanodia Girls College, Jaipur",
    description: "Built strong foundation in computer science and programming.",
    period: "Completed",
  },
  {
    icon: GraduationCap,
    title: "MCA - Master of Computer Applications",
    place: "Vivekanand Global University, Jaipur",
    description: "Currently pursuing advanced studies in computer applications.",
    period: "In Progress",
  },
  {
    icon: Briefcase,
    title: "Full Stack Developer Intern",
    place: "Regex Solutions Pvt Ltd, Jaipur",
    description: "9 months of hands-on experience on live projects, building real-world applications.",
    period: "9 Months",
  },
  {
    icon: Code,
    title: "Junior Associate Full Stack Developer",
    place: "Kaniskep Solutions Pvt Ltd, Jaipur",
    description: "Currently working on diverse projects, from web portals to full-stack applications.",
    period: "Current",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-body text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6">
              Get to Know <span className="text-gradient">Divya</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Hi! I'm Divya Rochani, a passionate Full Stack Developer based in 
                <span className="text-foreground"> Jaipur, India</span>. I specialize 
                in the MERN stack and love turning complex problems into elegant, 
                user-friendly solutions.
              </p>
              <p>
                My journey started with a BCA from Kanodia Girls College, and I'm 
                currently pursuing my MCA at Vivekanand Global University. Along the 
                way, I've gained valuable industry experience through my internship 
                at Regex Solutions and my current role at Kaniskep Solutions.
              </p>
              <p>
                I'm deeply passionate about freelancing and have successfully 
                completed projects ranging from landing pages and static websites 
                to complex hotel booking platforms. I believe in writing clean, 
                maintainable code and delivering projects that exceed expectations.
              </p>
            </div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mt-8 px-4 py-2 rounded-full bg-card/50 border border-border"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-muted-foreground">
                Jaipur, Rajasthan, India
              </span>
            </motion.div>
          </motion.div>

          {/* Right Content - Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16"
                >
                  {/* Icon */}
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="p-5 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-colors">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-heading font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="px-2 py-0.5 text-xs font-body rounded-full bg-primary/20 text-primary">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-primary font-body mb-2">
                      {item.place}
                    </p>
                    <p className="text-sm text-muted-foreground font-body">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
