import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { chatWithAI } from "./openai-client";
import { chatWithOpenRouter } from "./openrouter-client";
import {
  insertContactMessageSchema,
  chatRequestSchema,
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/projects", async (_req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  app.get("/api/certifications", async (_req, res) => {
    try {
      const certifications = await storage.getCertifications();
      res.json(certifications);
    } catch (error) {
      console.error("Error fetching certifications:", error);
      res.status(500).json({ error: "Failed to fetch certifications" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);

      console.log("📧 New contact message received:");
      console.log(`From: ${message.name} (${message.email})`);
      console.log(`Message: ${message.message}`);
      console.log(`Timestamp: ${message.createdAt}`);

      res.json({ success: true, message: "Message received successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Validation failed", details: error.errors });
      } else {
        console.error("Error saving contact message:", error);
        res.status(500).json({ error: "Failed to save message" });
      }
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const validatedData = chatRequestSchema.parse(req.body);
      const { messages, mode = "developer", aiProvider = "openai" } = validatedData;

      const projects = await storage.getProjects();
      const projectsData = projects
        .map(
          (p) =>
            `- ${p.title}: ${p.description} (Technologies: ${p.techStack.join(", ")})`
        )
        .join("\n");

      let reply: string;

      if (aiProvider === "openrouter") {
        reply = await chatWithOpenRouter(
          messages,
          mode as "developer" | "aiml_aspirant" | "mentor",
          projectsData
        );
      } else {
        reply = await chatWithAI(
          messages,
          mode as "developer" | "aiml_aspirant" | "mentor",
          projectsData
        );
      }

      res.json({ reply });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid request format", details: error.errors });
      } else {
        console.error("Error in chat endpoint:", error);
        res.status(500).json({ error: "Failed to generate response" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
