import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Heart, Rocket, Users } from "lucide-react";

const milestones = [
  {
    icon: Code,
    title: "B.Tech CSE",
    description: "AI/ML Specialization",
  },
  {
    icon: Rocket,
    title: "3+ Projects",
    description: "Full-Stack & ML",
  },
  
  {
    icon: Heart,
    title: "Passionate Learner",
    description: "AI/ML & Problem Solving",
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
                  I'm Agasya Butolia, an introverted but passionate Computer Science
                  student from Nagpur. Currently pursuing B.Tech in CSE with an AI/ML
                  specialization, I love solving real-world problems through code and
                  exploring the intersection of AI and software development.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed mb-6"
                  data-testid="text-about-bio-2"
                >
                  I've worked on diverse projects—from IoT embedded systems to
                  deep learning models for medical image classification, and
                  full-stack web applications with interactive data visualization.
                  My journey combines practical hands-on experience with a strong
                  foundation in both academia and real-world problem solving.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  data-testid="text-about-bio-3"
                >
                  I'm actively seeking paid SDE internship opportunities to grow as
                  an engineer. I'm honest about what I know, curious about what I
                  don't, and committed to building meaningful technology that makes
                  a difference. Let's connect if you have an opportunity or want to
                  collaborate!
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
