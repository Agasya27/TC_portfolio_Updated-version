import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/hero_section_coding_background.png";
import { AnimatedName } from "./animated-name";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedName />
          <p
            className="text-xl md:text-2xl text-white/90 mb-4"
            data-testid="text-hero-role"
          >
            CSE Student | AI/ML & Full-Stack Developer | Internship Seeker
          </p>
          <p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12"
            data-testid="text-hero-tagline"
          >
            Passionate about solving real-world problems through AI, IoT, and full-stack
            development. Looking for  SDE internships to grow and contribute.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="backdrop-blur-md bg-primary border border-primary-border text-primary-foreground hover-elevate active-elevate-2"
              onClick={() => scrollToSection("projects")}
              data-testid="button-see-work"
            >
              See My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-md bg-white/10 border-white/20 text-white hover-elevate active-elevate-2"
              onClick={() => scrollToSection("contact")}
              data-testid="button-lets-connect"
            >
              Let's Connect
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6" data-testid="container-social-links">
            <a
              href="https://github.com/Agasya27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              data-testid="link-github"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/agasya-butolia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              data-testid="link-linkedin"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:agasyabutolia@gmail.com"
              className="text-white/70 hover:text-white transition-colors"
              data-testid="link-email"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-white/70 hover:text-white transition-colors animate-bounce"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
