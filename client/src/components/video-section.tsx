import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const strengths = [
  "Strong foundation in AI/ML with practical project experience",
  "Full-stack web development skills (React, Node.js, Express)",
  "IoT and embedded systems knowledge with hardware integration",
  "Honest, curious, and hardworking – eager to learn and grow",
];

export function VideoSection() {
  return (
    <section id="video" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center"
            data-testid="text-video-heading"
          >
            My Journey & Approach
          </h2>
          <p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            data-testid="text-video-subtitle"
          >
            Soon I'll add a short introduction video here where I talk about my
            journey from Diploma to B.Tech, my projects, and why I'm excited about
            AI and software development. For now, here are the key things about me.
          </p>

          <div className="aspect-video rounded-xl overflow-hidden mb-8 bg-muted">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
              <div className="text-center p-8">
                <p className="text-muted-foreground mb-4" data-testid="text-video-placeholder">
                  Introduction video coming soon - will share my journey, projects, and passion for AI & development
                </p>
                <p className="text-sm text-muted-foreground">
                  In the meantime, connect with me through the chat or contact form below!
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3
                className="text-2xl font-semibold mb-6"
                data-testid="text-strengths-heading"
              >
                Key Strengths
              </h3>
              <ul className="space-y-4">
                {strengths.map((strength, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                    data-testid={`text-strength-${index}`}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base">{strength}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <h3
                className="text-2xl font-semibold mb-6"
                data-testid="text-mindset-heading"
              >
                My Mindset
              </h3>
              <p
                className="text-base leading-relaxed mb-4"
                data-testid="text-mindset-content"
              >
                I'm passionate about solving real-world problems with technology. Whether
                it's building ML models for healthcare, designing IoT systems, or creating
                interactive web applications, I believe every project should create
                genuine value.
              </p>
              <p className="text-base leading-relaxed">
                As an introvert, I bring focused, thoughtful problem-solving to every
                challenge. I'm not afraid to ask questions, learn from mistakes, and
                collaborate to build the best solutions possible.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
