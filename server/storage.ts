import {
  type Project,
  type InsertProject,
  type Certification,
  type InsertCertification,
  type ContactMessage,
  type InsertContactMessage,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getCertifications(): Promise<Certification[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private certifications: Map<string, Certification>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.projects = new Map();
    this.certifications = new Map();
    this.contactMessages = new Map();

    this.seedProjects();
    this.seedCertifications();
  }

  private seedProjects() {
    const projectsData: Omit<Project, "id">[] = [
      {
        title: "AI-Powered Task Manager",
        description:
          "A smart task management application with AI-driven priority suggestions and natural language input. Built with React, Node.js, and OpenAI API for intelligent task categorization.",
        techStack: ["React", "TypeScript", "Node.js", "OpenAI", "PostgreSQL"],
        link: "https://example.com/task-manager",
        github: "https://github.com/yourusername/ai-task-manager",
      },
      {
        title: "Real-Time Collaboration Platform",
        description:
          "A modern collaboration tool enabling teams to work together seamlessly with real-time updates, video calls, and shared workspaces. Features WebSocket integration for instant synchronization.",
        techStack: ["Next.js", "WebSocket", "MongoDB", "Tailwind CSS", "WebRTC"],
        link: "https://example.com/collab-platform",
        github: "https://github.com/yourusername/collab-platform",
      },
      {
        title: "E-Commerce Analytics Dashboard",
        description:
          "Comprehensive analytics dashboard for e-commerce businesses featuring real-time sales tracking, customer insights, and predictive analytics using machine learning models.",
        techStack: ["Vue.js", "Python", "FastAPI", "TensorFlow", "Redis"],
        link: "https://example.com/analytics",
        github: "https://github.com/yourusername/ecommerce-analytics",
      },
    ];

    projectsData.forEach((project) => {
      const id = randomUUID();
      this.projects.set(id, { ...project, id });
    });
  }

  private seedCertifications() {
    const certificationsData: Omit<Certification, "id">[] = [
      {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2024",
        link: "https://aws.amazon.com/certification/",
      },
      {
        title: "Professional Scrum Master I",
        issuer: "Scrum.org",
        date: "2023",
        link: "https://www.scrum.org/assessments/professional-scrum-master-i-certification",
      },
    ];

    certificationsData.forEach((cert) => {
      const id = randomUUID();
      this.certifications.set(id, { ...cert, id });
    });
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getCertifications(): Promise<Certification[]> {
    return Array.from(this.certifications.values());
  }

  async createContactMessage(
    insertMessage: InsertContactMessage
  ): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
