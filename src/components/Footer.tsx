import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="font-heading font-semibold">
              <span className="text-gradient">Divya</span>
              <span className="text-foreground"> Rochani</span>
            </span>
            <span className="text-muted-foreground text-sm font-body">
              © {currentYear} All rights reserved.
            </span>
          </div>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 text-sm text-muted-foreground font-body"
          >
            Made by divya in Jaipur
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: Github,
                href: "https://github.com/divyarochani",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/divya-rochani/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:divyarochani01@gmail.com",
                label: "Email",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
