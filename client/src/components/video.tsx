import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import videoFile from "@assets/my video _1763914936496.mp4";

export function Video() {
  return (
    <section id="video" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center"
            data-testid="text-video-heading"
          >
            Introduction
          </h2>
          <p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            data-testid="text-video-subtitle"
          >
            Get to know me better through this introductory video.
          </p>

          <div className="flex justify-center">
            <Card className="overflow-hidden" data-testid="card-video-container">
              <video
                className="max-w-sm md:max-w-lg h-auto"
                controls
                data-testid="video-player"
              >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
