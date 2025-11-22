import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Heart, Rocket, Users } from "lucide-react";

const milestones = [
  {
    icon: Code,
    title: "5+ Years",
    description: "Coding Experience",
  },
  {
    icon: Rocket,
    title: "20+ Projects",
    description: "Successfully Delivered",
  },
  {
    icon: Users,
    title: "10+ Clients",
    description: "Happy Customers",
  },
  {
    icon: Heart,
    title: "Always Learning",
    description: "New Technologies",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center"
            data-testid="text-about-heading"
          >
            About Me
          </h2>

          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p
                  className="text-base md:text-lg leading-relaxed mb-6"
                  data-testid="text-about-bio-1"
                >
                  I'm a passionate full-stack developer who loves creating
                  innovative solutions that make a difference. With a strong
                  foundation in modern web technologies and a keen interest in
                  artificial intelligence, I bring ideas to life through clean,
                  efficient code.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed mb-6"
                  data-testid="text-about-bio-2"
                >
                  My journey in tech began with curiosity and has evolved into a
                  career driven by continuous learning and problem-solving. I
                  specialize in building scalable applications using React, Node.js,
                  and cutting-edge AI technologies.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  data-testid="text-about-bio-3"
                >
                  When I'm not coding, you'll find me exploring new frameworks,
                  contributing to open-source projects, or sharing knowledge with
                  the developer community. I believe in writing code that's not
                  just functional, but maintainable and elegant.
                </p>
              </div>

              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className="p-6 hover-elevate"
                      data-testid={`card-milestone-${index}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <milestone.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-1">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
