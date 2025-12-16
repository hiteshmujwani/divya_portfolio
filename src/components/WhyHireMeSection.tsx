import { motion } from "framer-motion";
import { CheckCircle2, Clock, Shield, Zap, MessageSquare, Award } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "I understand the importance of deadlines and deliver quality work on time, every time.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Clean, maintainable code with thorough testing to ensure your project runs flawlessly.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Regular updates and transparent communication throughout the development process.",
  },
  {
    icon: Clock,
    title: "Flexible Availability",
    description: "Available for different time zones and project schedules to meet your needs.",
  },
  {
    icon: Award,
    title: "Proven Experience",
    description: "9+ months of hands-on experience working on live projects with real-world challenges.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Support",
    description: "From initial concept to deployment and maintenance, I've got you covered.",
  },
];

const WhyHireMeSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-body text-sm uppercase tracking-wider">
              Why Choose Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6">
              Why <span className="text-gradient">Hire Me</span> for Your Project?
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              With hands-on experience in full-stack development and a passion for 
              creating impactful solutions, I bring dedication, expertise, and a 
              client-first approach to every project.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "20+", label: "Projects" },
                { value: "15+", label: "Happy Clients" },
                { value: "9+", label: "Months Exp" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-card/50 border border-border"
                >
                  <div className="text-2xl md:text-3xl font-heading font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-body mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
              >
                <reason.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMeSection;
