# Agasya Butolia - Interactive Portfolio Project

## Overview

This is a full-stack interactive portfolio application customized for **Agasya Butolia**, a Computer Science Engineering student (B.Tech, Direct Second Year, AI/ML specialization) from Nagpur, India. Built with React, Express, and AI chatbot integration, the portfolio showcases modern, responsive design with dynamic content delivery featuring projects, skills, certifications, and an AI-powered chat interface.

The application uses a monorepo structure with a React frontend (Vite), Node.js/Express backend, and shared TypeScript schemas for type safety across the stack.

**Current Status**: ✅ Fully customized and tested (November 22, 2025)
- All portfolio sections complete with Agasya's real projects and information
- AI chatbot with 3 personas (Developer Me, AI/ML Aspirant Me, Mentor Me) integrated
- Projects: Mini Smart Computer with IoT, Pneumonia Detection using AI, Data Visualization Dashboard
- Skills: Frontend, Backend, AI/ML, Tools (as per Agasya's expertise)
- Dark/light theme toggle with localStorage persistence
- Comprehensive data-testid attributes for QA testing
- All pages rendering and API endpoints working correctly

## User Information

**Name**: Agasya Butolia  
**Location**: Nagpur, India  
**Education**: Diploma in Computer Engineering (85.31%) + B.Tech CSE (AI/ML) - Direct Second Year  
**Goal**: Paid SDE/AI Engineer internships  
**Preferred communication style**: Simple, everyday language  
**Personality**: Introverted, curious learner, passionate about real-world problem-solving

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React with TypeScript for component-based UI development
- Vite as the build tool and development server, providing fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing

**UI Component System**
- Shadcn/ui components (New York style variant) for consistent, accessible UI elements
- Radix UI primitives as the foundation for complex interactive components
- Tailwind CSS for utility-first styling with custom design tokens
- Framer Motion for smooth animations and transitions

**Design System**
- Custom color system with CSS variables supporting light/dark themes
- Typography based on Inter/DM Sans for body text and Space Grotesk for display headings
- Consistent spacing scale using Tailwind units (4, 6, 8, 12, 16, 20, 24)
- Custom component variants using class-variance-authority (CVA)

**State Management**
- TanStack Query (React Query) for server state management and API caching
- React Hook Form with Zod resolvers for form validation
- Context API for theme management (ThemeProvider)

**Portfolio Sections**
- Hero: Full viewport background with centered content and call-to-action buttons
- About: Biographical information with milestone cards
- Projects: Dynamic grid of project cards fetched from backend API
- Skills: Categorized technology stack display
- Certifications: Optional section for professional credentials
- Video Section: Placeholder for introductory video
- Contact: Form with email validation and toast notifications
- ChatBot: AI-powered floating chat interface with multiple personas

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and REST API endpoints
- Development and production server configurations separated (index-dev.ts, index-prod.ts)
- Custom middleware for request logging with timestamps and duration tracking

**Development vs Production**
- Development: Vite middleware integration for HMR and on-demand compilation
- Production: Static file serving from built assets in dist/public directory
- Environment-specific server setup using separate entry points

**API Endpoints**
- `GET /api/projects` - Returns array of project objects
- `GET /api/certifications` - Returns array of certification objects
- `POST /api/contact` - Accepts contact form submissions with validation
- `POST /api/chat` - Handles AI chatbot conversations with context-aware responses

**Storage Layer**
- In-memory storage implementation (MemStorage class) for demonstration
- Interface-based design (IStorage) allows easy migration to persistent database
- Pre-seeded sample data for projects and certifications
- Database schema defined using Drizzle ORM with PostgreSQL dialect (ready for production)

**Schema Validation**
- Shared TypeScript schemas between frontend and backend
- Zod for runtime validation of API requests and responses
- Drizzle-zod integration for type-safe database operations
- Type inference from schemas ensures type safety across the stack

### AI Integration

**OpenAI Client**
- GPT-5 model for conversational AI (configurable)
- Three distinct chatbot personas: Developer, Designer, and Mentor
- Context-aware responses using project data from storage
- System prompts tailored for each persona to maintain consistent character
- Streaming or single-response modes for chat interactions

**Persona Behaviors**
- Developer: Technical expertise, first-person perspective, discusses projects with depth
- Designer: UI/UX focus, design thinking and creative processes
- Mentor: Teaching-oriented, career advice and learning guidance

### Database Design

**Schema Structure** (Drizzle ORM with PostgreSQL)
- `projects` table: Stores portfolio projects with tech stack arrays
- `certifications` table: Professional credentials and achievements
- `contact_messages` table: Stores contact form submissions with timestamps
- UUID primary keys generated server-side

**Migration Strategy**
- Schema definitions in shared/schema.ts for cross-stack usage
- Drizzle Kit for schema migrations (configured in drizzle.config.ts)
- Push-based migrations with `db:push` script for development

**Fallback Strategy**
- Application works with in-memory storage without database connection
- Database optional for initial development and demos
- Easy migration path from memory storage to PostgreSQL when ready

### Build & Deployment

**Development Workflow**
- Single command development server: `npm run dev`
- Concurrent Vite dev server and Express backend
- TypeScript checking with `npm run check`
- Hot module replacement for instant frontend updates

**Production Build**
- Frontend: Vite builds to dist/public directory
- Backend: esbuild bundles server code to dist/index.js
- ESM module format throughout the application
- Single production start command: `npm start`

**TypeScript Configuration**
- Strict mode enabled for type safety
- Path aliases for clean imports (@/, @shared/, @assets/)
- Incremental compilation for faster builds
- Shared types between client and server

### Security & Validation

**Input Validation**
- Zod schemas for all API inputs (contact form, chat messages)
- Email validation on contact form
- Error handling with appropriate HTTP status codes
- Type-safe data flow from frontend to backend

**Error Handling**
- Try-catch blocks on all API endpoints
- Descriptive error messages for debugging
- Client-side toast notifications for user feedback
- Console logging for server-side errors

## External Dependencies

**Core Framework Dependencies**
- React 18 with React DOM for UI rendering
- Express for HTTP server
- Vite for frontend build tooling and development server
- TypeScript for type safety across the stack

**UI Component Libraries**
- Radix UI primitives (20+ component packages) for accessible UI components
- Tailwind CSS for utility-first styling
- Framer Motion for animations
- Lucide React for icon library

**Data & State Management**
- TanStack Query (React Query) for server state and caching
- React Hook Form for form state management
- Zod for schema validation
- Drizzle ORM for database operations

**AI Services**
- OpenAI SDK for GPT API integration
- Requires OPENAI_API_KEY environment variable
- Graceful degradation if API key not provided

**Database**
- PostgreSQL as primary database (via Neon serverless driver)
- Drizzle ORM for type-safe database queries
- Connect-pg-simple for potential session storage
- Requires DATABASE_URL environment variable for production

**Development Tools**
- Replit-specific Vite plugins (cartographer, dev-banner, runtime-error-modal)
- ESBuild for backend bundling
- TSX for TypeScript execution in development
- PostCSS with Autoprefixer for CSS processing

**Font Services**
- Google Fonts for typography (Inter, DM Sans, Space Grotesk, Fira Code, Geist Mono, Architects Daughter)
- Self-hosted via CDN links in index.html

**Optional Integrations**
- Video embedding (YouTube/Vimeo) for portfolio video section
- External project links and GitHub repositories
- Social media links (GitHub, LinkedIn, Email) in hero section