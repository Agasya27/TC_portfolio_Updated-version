import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const strengths = [
  "Problem-solving mindset with attention to detail",
  "Strong collaboration and communication skills",
  "Passion for clean, maintainable code",
  "Quick learner with adaptability to new technologies",
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
            Why Hire Me?
          </h2>
          <p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            data-testid="text-video-subtitle"
          >
            Get to know me better through this quick introduction about my approach
            to development and what I can bring to your team.
          </p>

          <div className="aspect-video rounded-xl overflow-hidden mb-8 bg-muted">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
              <div className="text-center p-8">
                <p className="text-muted-foreground mb-4" data-testid="text-video-placeholder">
                  Video placeholder - Replace this with your 1-2 minute introduction video
                </p>
                <p className="text-sm text-muted-foreground">
                  Recommended: Upload your video to YouTube or Vimeo and embed the URL here
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
                I believe in building software that makes a real impact. Every line
                of code I write is an opportunity to create something better, more
                efficient, and more user-friendly.
              </p>
              <p className="text-base leading-relaxed">
                My approach combines technical excellence with empathy for users and
                teammates. I'm not just writing code – I'm solving problems and
                building solutions that people love to use.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
