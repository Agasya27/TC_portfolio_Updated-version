import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
import { VideoSection } from "@/components/video-section";
import { Contact } from "@/components/contact";
import { ChatBot } from "@/components/chatbot";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <VideoSection />
      <Contact />
      <ChatBot />
    </div>
  );
}
