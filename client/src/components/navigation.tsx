import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("hero")}
            className="text-lg font-display font-bold"
            data-testid="button-logo"
          >
            [Your Name]
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium"
              data-testid="link-about"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium"
              data-testid="link-projects"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium"
              data-testid="link-skills"
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium"
              data-testid="link-contact"
            >
              Contact
            </Button>

            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
