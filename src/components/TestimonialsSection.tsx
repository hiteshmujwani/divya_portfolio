import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Startup Founder",
    content:
      "Divya delivered our hotel booking platform ahead of schedule. Her attention to detail and communication throughout the project was exceptional. Highly recommend!",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Business Owner",
    content:
      "Working with Divya on our e-commerce site was a great experience. She understood our requirements perfectly and built exactly what we needed.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Amit Verma",
    role: "Project Manager",
    content:
      "Excellent debugging skills! Divya fixed critical issues in our existing MERN application and improved its performance significantly.",
    rating: 5,
    avatar: "AV",
  },
  {
    name: "Sneha Gupta",
    role: "Marketing Director",
    content:
      "The landing page Divya created for our campaign was stunning. The animations and design exceeded our expectations. Great work!",
    rating: 5,
    avatar: "SG",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Decorative Quote */}
      <Quote className="absolute top-20 left-10 w-32 h-32 text-primary/5" />
      <Quote className="absolute bottom-20 right-10 w-40 h-40 text-primary/5 rotate-180" />

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
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Don't just take my word for it — hear from the clients I've had the
            pleasure of working with.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground font-body leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-heading font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground font-body">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
