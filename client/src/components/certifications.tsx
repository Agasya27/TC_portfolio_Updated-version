import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@shared/schema";

export function Certifications() {
  const { data: certifications, isLoading } = useQuery<Certification[]>({
    queryKey: ["/api/certifications"],
  });

  if (!certifications?.length && !isLoading) {
    return null;
  }

  return (
    <section id="certifications" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-8 w-8 text-primary" data-testid="icon-certifications" />
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-center"
              data-testid="text-certifications-heading"
            >
              Certifications
            </h2>
          </div>
          <p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            data-testid="text-certifications-subtitle"
          >
            Professional certifications and credentials that validate my expertise
            and commitment to continuous learning.
          </p>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[1, 2].map((i) => (
                <Card key={i} className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-1/2 mb-2" />
                  <Skeleton className="h-4 w-1/3" />
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {certifications?.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className="p-6 h-full flex flex-col hover-elevate"
                    data-testid={`card-certification-${cert.id}`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-xl font-semibold mb-2"
                          data-testid={`text-cert-title-${cert.id}`}
                        >
                          {cert.title}
                        </h3>
                        <p
                          className="text-sm text-muted-foreground mb-1"
                          data-testid={`text-cert-issuer-${cert.id}`}
                        >
                          {cert.issuer}
                        </p>
                        <Badge
                          variant="secondary"
                          className="text-xs"
                          data-testid={`badge-cert-date-${cert.id}`}
                        >
                          {cert.date}
                        </Badge>
                      </div>
                    </div>
                    {cert.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-auto"
                        asChild
                        data-testid={`button-cert-verify-${cert.id}`}
                      >
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Verify Certification
                        </a>
                      </Button>
                    )}
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
