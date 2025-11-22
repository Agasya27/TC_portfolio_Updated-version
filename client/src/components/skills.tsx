import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cpu,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Vue.js",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "AI/ML",
    icon: Cpu,
    skills: [
      "OpenAI API",
      "LangChain",
      "Python",
      "TensorFlow",
      "Machine Learning",
      "NLP",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Figma"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center"
            data-testid="text-skills-heading"
          >
            Skills & Technologies
          </h2>
          <p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            data-testid="text-skills-subtitle"
          >
            A comprehensive toolkit of modern technologies and frameworks I use to
            build exceptional digital experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="p-8" data-testid={`card-skill-category-${category.title.toLowerCase()}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="justify-center py-2 text-sm font-medium hover-elevate"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-')}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
