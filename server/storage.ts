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
        title: "Mini Smart Computer with IoT",
        description:
          "Designed and implemented a mini embedded system with IoT connectivity for basic monitoring and control tasks. This project involved working with microcontrollers and sensors to create a functional IoT prototype.",
        techStack: ["IoT", "Embedded Systems", "Microcontrollers", "Sensors"],
        link: "",
        github: "",
      },
      {
        title: "Pneumonia Detection using AI",
        description:
          "Built a machine learning / deep learning model to classify pneumonia from medical images, exploring data preprocessing, model training, and evaluation. This project combined my passion for AI and healthcare applications.",
        techStack: ["Python", "Machine Learning", "Deep Learning"],
        link: "",
        github: "",
      },
      {
        title: "Data Visualization Dashboard",
        description:
          "A full-stack web application for uploading, analyzing, and visualizing CSV/Excel data with interactive tables and charts. Features include JWT-based authentication, role-based access control, file upload with progress tracking, server-side pagination, and export functionality.",
        techStack: ["React", "Node.js", "Express", "JWT", "Recharts"],
        link: "",
        github: "",
      },
    ];

    projectsData.forEach((project) => {
      const id = randomUUID();
      this.projects.set(id, { ...project, id });
    });
  }

  private seedCertifications() {
    // TODO: Agasya - Update these with your actual certifications.
    // You can add certifications from platforms like Coursera, edX, LinkedIn Learning, etc.
    // Format: { title, issuer, date (YYYY-MM-DD), link (optional) }
    const certificationsData: Omit<Certification, "id">[] = [
      {
        title: "Placeholder Certification 1",
        issuer: "To be updated",
        date: "2024",
        link: "",
      },
      {
        title: "Placeholder Certification 2",
        issuer: "To be updated",
        date: "2024",
        link: "",
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
