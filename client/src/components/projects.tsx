import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@shared/schema";

export function Projects() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center"
            data-testid="text-projects-heading"
          >
            Featured Projects
          </h2>
          <p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            data-testid="text-projects-subtitle"
          >
            A selection of my recent work showcasing my skills in full-stack
            development, AI integration, and modern web technologies.
          </p>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="flex flex-col h-full">
                  <Skeleton className="aspect-video rounded-t-xl" />
                  <div className="p-6 flex flex-col flex-grow">
                    <Skeleton className="h-8 w-3/4 mb-3" />
                    <Skeleton className="h-20 w-full mb-4" />
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-16" />
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <Skeleton className="h-10 flex-1" />
                      <Skeleton className="h-10 w-10" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className="flex flex-col h-full hover-elevate"
                    data-testid={`card-project-${project.id}`}
                  >
                    <div className="aspect-video bg-muted rounded-t-xl overflow-hidden">
                      <img
                        src={`/project-${(index % 3) + 1}.png`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3
                        className="text-2xl font-bold mb-3"
                        data-testid={`text-project-title-${project.id}`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-base leading-relaxed mb-4 flex-grow text-muted-foreground"
                        data-testid={`text-project-description-${project.id}`}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                            data-testid={`badge-tech-${tech}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-auto">
                        {project.link && (
                          <Button
                            asChild
                            className="flex-1"
                            data-testid={`button-view-project-${project.id}`}
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Project
                            </a>
                          </Button>
                        )}
                        {project.github && (
                          <Button
                            size="icon"
                            variant="outline"
                            asChild
                            data-testid={`button-github-${project.id}`}
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
