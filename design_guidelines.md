# Interactive Portfolio Design Guidelines

## Design Approach

**Reference-Based Strategy**: Drawing inspiration from modern portfolio leaders (Brittany Chiang, Bruno Simon) combined with Linear's clean professionalism and Stripe's sophisticated restraint. The design balances technical credibility with creative personality.

**Core Principles**:
- Bold, confident typography that commands attention
- Generous whitespace creating breathing room between sections
- Asymmetric layouts that break monotony while maintaining professional polish
- Purposeful use of cards and containers to organize information hierarchies

---

## Typography System

**Font Stack**:
- **Primary**: Inter or DM Sans (Google Fonts CDN) - clean, modern sans-serif for UI
- **Accent/Display**: Space Grotesk or Clash Display - bold personality for hero headlines

**Hierarchy**:
- **Hero Headline**: text-6xl md:text-7xl lg:text-8xl, font-bold, tracking-tight
- **Section Headings**: text-4xl md:text-5xl, font-bold, tracking-tight
- **Subsection Headings**: text-2xl md:text-3xl, font-semibold
- **Body Text**: text-base md:text-lg, leading-relaxed
- **UI Labels/Captions**: text-sm, font-medium, tracking-wide uppercase

---

## Layout System

**Spacing Units**: Consistently use Tailwind units of **4, 6, 8, 12, 16, 20, 24** (p-4, gap-6, mb-8, py-12, etc.)

**Section Padding**:
- Desktop: py-24 to py-32
- Mobile: py-16 to py-20

**Container Constraints**:
- Max-width: max-w-7xl mx-auto px-6 md:px-8
- Prose content: max-w-4xl for readability

---

## Component Specifications

### Hero Section
**Layout**: Full viewport height (min-h-screen) with centered content over large background image
- **Image**: High-quality abstract gradient, code visualization, or professional workspace scene filling entire viewport with subtle overlay (bg-black/30 or bg-gradient-to-br)
- **Content Structure**: Centered vertical stack with z-10 positioning
  - Name: Hero headline size, centered
  - Role subtitle: text-xl md:text-2xl, subtle opacity (opacity-90)
  - Tagline: text-lg md:text-xl, max-w-2xl mx-auto, mb-12
  - CTA buttons: Two-button group (primary + secondary), gap-4, blurred background (backdrop-blur-md bg-white/10) with border (border border-white/20)
- **Navigation**: Sticky nav at top (sticky top-0 z-50) with backdrop-blur-md, minimal height (h-16)

### About Section
**Layout**: Two-column on desktop (grid md:grid-cols-2 gap-12), single column mobile
- **Left Column**: Text content in prose format with generous line-height
- **Right Column**: Stats cards or timeline milestones in vertical stack (space-y-6)
- **Container**: Contained card with subtle border (border rounded-2xl p-8 md:p-12)

### Projects Section
**Grid Layout**: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- **Project Cards**:
  - Structure: Vertical card (flex flex-col h-full)
  - Header: Project thumbnail/preview image (aspect-video rounded-t-xl)
  - Content padding: p-6
  - Title: text-2xl font-bold mb-3
  - Description: text-base leading-relaxed mb-4 flex-grow
  - Tech Stack: Horizontal pills (flex flex-wrap gap-2) with small badges (px-3 py-1 rounded-full text-xs font-medium)
  - Actions: Button group at bottom (flex gap-3 mt-6) - "View Project" + "GitHub" icon button

### Skills Section
**Layout**: Category-based grid system
- **Categories**: 2x2 grid on desktop (grid md:grid-cols-2 gap-8)
- **Category Card**:
  - Heading: text-xl font-semibold mb-4
  - Skills grid: grid grid-cols-2 sm:grid-cols-3 gap-3
  - Skill pill: px-4 py-2 rounded-lg text-sm font-medium text-center with icon (Heroicons)

### Video Section
**Layout**: Centered spotlight approach
- **Container**: max-w-5xl mx-auto
- **Video Player**: aspect-video with rounded-xl overflow-hidden, mb-8
- **Supporting Text**: Two-column grid below video (grid md:grid-cols-2 gap-8)
  - Left: "Why Me?" headline + key strengths list
  - Right: Mindset/values paragraph

### Contact Section
**Layout**: Split layout
- **Desktop**: grid md:grid-cols-5 gap-12
  - Left (3 columns): Contact form
  - Right (2 columns): Contact info, social links, response time indicator
- **Form Fields**:
  - Input styling: w-full px-4 py-3 rounded-lg border mb-4
  - Label: text-sm font-medium mb-2
  - Submit button: Full-width primary button with loading state

### AI Chatbot Interface
**Bubble**: Fixed positioning (fixed bottom-6 left-6 z-50)
- Size: w-16 h-16 rounded-full
- Icon: Chat/bot icon centered
- Pulse effect: Subtle ring animation

**Chat Window**: Fixed panel (fixed bottom-24 left-6 z-50)
- Dimensions: w-96 h-[600px] rounded-2xl
- Structure:
  - Header: px-6 py-4 border-b with title + close button
  - Mode selector: Tabs or dropdown (flex gap-2 px-4 py-2)
  - Messages area: flex-1 overflow-y-auto px-6 py-4 space-y-4
  - Input area: px-6 py-4 border-t with textarea + send button
- **Message Bubbles**:
  - User: ml-auto max-w-[80%] rounded-2xl px-4 py-3
  - Bot: mr-auto max-w-[80%] rounded-2xl px-4 py-3
  - Avatar: Small icon (w-8 h-8 rounded-full) beside bubbles

---

## Interactions & Animations

**Minimal, Purposeful Motion**:
- Smooth scroll behavior: scroll-smooth on html
- Hover states: Scale-105 transform on cards, opacity transitions
- Buttons: Subtle scale and shadow on hover
- Avoid: Complex scroll-triggered animations, parallax effects

---

## Images

**Hero Section**: 
- Large hero image required - abstract coding visualization, geometric gradient, or professional workspace aesthetic
- Full viewport coverage with overlay treatment
- Position: object-cover object-center

**Project Cards**:
- Thumbnail images for each project (aspect-video ratio)
- Screenshots, mockups, or representative graphics

**About Section** (Optional):
- Professional headshot or workspace photo as accent element

**Quality**: All images should be high-resolution, optimized for web, served via CDN or optimized build process