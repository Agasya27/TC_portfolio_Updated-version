import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (message.length < 10) {
      toast({
        title: "Error",
        description: "Message must be at least 10 characters.",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes("@")) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xqajjylz", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent. I'll get back to you soon!",
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center"
            data-testid="text-contact-heading"
          >
            Get In Touch
          </h2>
          <p
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            data-testid="text-contact-subtitle"
          >
            I'm actively looking for paid SDE internship opportunities. Whether it's
            a project discussion, internship inquiry, or just to connect, feel free
            to reach out. I'll respond as soon as possible.
          </p>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <Card className="p-8">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-testid="form-contact"
                >

                  <div>
                    <label className="text-sm font-semibold mb-2 block">Name</label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project or how I can help..."
                      rows={6}
                      required
                      minLength={10}
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    data-testid="button-submit-contact"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            <div className="md:col-span-2 space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      You can also email me directly:
                    </p>
                    <a
                      href="mailto:agasyabutolia@gmail.com"
                      className="text-sm font-medium text-primary hover:underline transition-colors"
                      data-testid="text-contact-email"
                    >
                      agasyabutolia@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p
                      className="text-sm text-muted-foreground"
                      data-testid="text-contact-location"
                    >
                      Nagpur, India
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p
                      className="text-sm text-muted-foreground"
                      data-testid="text-contact-response-time"
                    >
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
