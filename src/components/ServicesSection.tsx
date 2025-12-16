import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Database, Bug, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building responsive, high-performance websites and web applications using modern technologies like React, Node.js, and MongoDB.",
  },
  {
    icon: Code2,
    title: "Full Stack Solutions",
    description:
      "End-to-end development from frontend to backend, creating seamless user experiences with robust server-side architecture.",
  },
  {
    icon: Database,
    title: "Portal Development",
    description:
      "Custom portal solutions for businesses including admin dashboards, user management systems, and data-driven applications.",
  },
  {
    icon: Smartphone,
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and showcase your brand with stunning visuals and animations.",
  },
  {
    icon: Bug,
    title: "Bug Fixing & Optimization",
    description:
      "Debugging and optimizing existing MERN stack applications to improve performance, security, and user experience.",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Transforming designs into pixel-perfect, interactive interfaces with smooth animations and intuitive user flows.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />

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
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            From concept to deployment, I provide comprehensive web development
            services tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group p-6 md:p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
