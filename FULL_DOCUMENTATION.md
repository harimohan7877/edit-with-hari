# Edit With Hari - Video Editor Portfolio Website

## Complete Documentation

This is a production-ready video editor portfolio website built with modern 2025-2026 web technologies.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Setup Instructions](#setup-instructions)
5. [Pages Guide](#pages-guide)
6. [Components Guide](#components-guide)
7. [API Routes](#api-routes)
8. [Database Schema](#database-schema)
9. [Features](#features)
10. [Customization](#customization)
11. [Deployment](#deployment)

---

## Project Overview

**Project Name:** Edit With Hari
**Type:** Video Editor Portfolio + Client Booking System
**Goal:** Win high-paying clients, showcase work, accept project inquiries automatically

---

## Tech Stack

### Frontend
- **Next.js 15** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Three.js + React Three Fiber** (3D elements)
- **GSAP** (scroll animations)
- **Lucide React** (icons)

### Backend
- **Next.js API Routes**
- **Prisma ORM**
- **PostgreSQL** (via Supabase)
- **NextAuth.js v5** (admin auth)
- **Resend** (transactional email)
- **Cloudinary** (media storage)

---

## Project Structure

```
video-portfolio/
├── app/
│   ├── (public)/              # Public pages
│   │   ├── page.tsx           # Homepage
│   │   ├── work/
│   │   │   ├── page.tsx       # All projects
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Project detail
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   └── layout.tsx
│   ├── (admin)/               # Admin panel
│   │   ├── admin/
│   │   │   ├── page.tsx       # Dashboard
│   │   │   ├── projects/
│   │   │   ├── inquiries/
│   │   │   ├── testimonials/
│   │   │   └── layout.tsx
│   │   └── login/page.tsx
│   ├── api/                   # API routes
│   │   ├── projects/
│   │   ├── contact/
│   │   ├── testimonials/
│   │   ├── upload/
│   │   └── auth/
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles
│   ├── not-found.tsx          # 404 page
│   └── loading.tsx            # Loading state
├── components/
│   ├── ui/                    # Reusable components
│   │   ├── CursorFollower.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── TextReveal.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── NoiseTexture.tsx
│   │   ├── GradientText.tsx
│   │   ├── VideoThumbnail.tsx
│   │   ├── LoadingScreen.tsx
│   │   └── Toast.tsx
│   ├── layout/                # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── PageTransition.tsx
│   ├── home/                  # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── ShowreelModal.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── FeaturedWork.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   ├── work/                  # Work page components
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectFilter.tsx
│   │   ├── ProjectDetail.tsx
│   │   └── VideoPlayer.tsx
│   ├── three/                 # 3D components
│   │   ├── Scene3D.tsx
│   │   └── FloatingText.tsx
│   └── admin/                 # Admin components
│       ├── AdminSidebar.tsx
│       ├── ProjectForm.tsx
│       ├── InquiryTable.tsx
│       ├── StatsCards.tsx
│       └── ImageUpload.tsx
├── lib/                      # Utilities
│   ├── db.ts                  # Prisma client
│   ├── auth.ts                # NextAuth config
│   ├── cloudinary.ts          # Upload helpers
│   ├── email.ts               # Email sending
│   ├── validations.ts         # Zod schemas
│   └── utils.ts               # Helper functions
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts                # Sample data
├── hooks/                    # Custom React hooks
├── types/                    # TypeScript types
├── constants/                # Site configuration
└── public/                   # Static files
```

---

## Setup Instructions

### Prerequisites
- Node.js 18+
- PostgreSQL database (Supabase recommended)
- Cloudinary account
- Resend account (for email)

### Installation Steps

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env.local
```

3. **Edit `.env.local` with your credentials:**
```env
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...
NEXTAUTH_SECRET=your-generated-secret
NEXTAUTH_URL=http://localhost:3000
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=hari@editwithhari.com
ADMIN_EMAIL=hari@editwithhari.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Generate Prisma client and push schema:**
```bash
npx prisma generate
npx prisma db push
```

5. **Seed sample data (optional):**
```bash
npm run db:seed
```

6. **Start development server:**
```bash
npm run dev
```

---

## Pages Guide

### 1. Homepage (`/`)
- Hero section with animated text and 3D background
- Services showcase with expandable cards
- Featured work grid (4 projects)
- Animated stats counter
- Testimonials marquee
- Call-to-action section

### 2. Work Page (`/work`)
- Category filter tabs
- Project grid with hover effects
- Video preview on hover
- Responsive layout (3 → 2 → 1 columns)

### 3. Project Detail (`/work/[slug]`)
- Full-width video player
- Project information (client, year, duration)
- Tools used
- Behind-the-scenes images
- Related projects

### 4. About Page (`/about`)
- Profile photo with experience badge
- About story
- Animated skill bars
- Tools grid
- Process timeline

### 5. Services Page (`/services`)
- Expandable service cards
- "What's Included" checklists
- FAQ accordion
- CTA section

### 6. Contact Page (`/contact`)
- Contact information (email, phone)
- Social media links
- Contact form with validation
- Success/error states

### 7. Admin Panel (`/admin`)
- Dashboard with stats
- Projects management (CRUD)
- Inquiries management
- Testimonials management

### 8. Login Page (`/login`)
- NextAuth protected
- Email/password authentication
- Default: admin@editwithhari.com / admin123

---

## Components Guide

### UI Components

| Component | Description |
|-----------|-------------|
| `CursorFollower` | Custom cursor that follows mouse, expands on hover |
| `MagneticButton` | Button that follows cursor when nearby |
| `TextReveal` | Text animation that reveals words from bottom |
| `ScrollProgress` | Thin progress bar at top of page |
| `NoiseTexture` | Film grain overlay effect |
| `GradientText` | Text with gradient color |
| `VideoThumbnail` | Video preview on hover |
| `LoadingScreen` | Full-screen loading with typing animation |
| `Toast` | Notification toasts |

### Layout Components

| Component | Description |
|-----------|-------------|
| `Navbar` | Transparent → blurred on scroll, mobile menu |
| `Footer` | Minimal footer with links and socials |
| `MobileMenu` | Full-screen mobile navigation |
| `PageTransition` | Animated page transitions |

---

## API Routes

### Projects
- `GET /api/projects` - List all published projects
- `POST /api/projects` - Create new project
- `GET /api/projects/[id]` - Get single project
- `PUT /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project

### Contact
- `POST /api/contact` - Submit contact form (sends emails)

### Testimonials
- `GET /api/testimonials` - List published testimonials
- `POST /api/testimonials` - Create testimonial

### Inquiries
- `GET /api/inquiries` - List all inquiries
- `PATCH /api/inquiries/[id]` - Update inquiry status

### Upload
- `POST /api/upload` - Upload file to Cloudinary

### Auth
- `GET /api/auth/[...nextauth]` - NextAuth handlers

---

## Database Schema

### Project
```prisma
model Project {
  id              String   @id @default(cuid())
  title           String
  slug            String   @unique
  description     String
  shortDescription String
  category        String
  client          String
  year            Int
  duration        String
  videoUrl        String
  thumbnailUrl    String
  images          String[]
  tools           String[]
  featured        Boolean  @default(false)
  published       Boolean  @default(false)
  views           Int      @default(0)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}
```

### Testimonial
```prisma
model Testimonial {
  id           String   @id @default(cuid())
  clientName   String
  clientRole   String
  clientCompany String
  clientAvatar String
  content      String
  rating       Int      @default(5)
  projectId    String?
  published    Boolean  @default(false)
  createdAt    DateTime @default(now())
}
```

### Inquiry
```prisma
model Inquiry {
  id         String   @id @default(cuid())
  name       String
  email      String
  phone      String?
  company    String?
  projectType String
  budget     String
  deadline   String?
  message    String
  status     String   @default("new")
  createdAt  DateTime @default(now())
}
```

### Admin
```prisma
model Admin {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  createdAt DateTime @default(now())
}
```

---

## Features

### Animations
- Page transitions (dark panel slide)
- Text reveal (words from bottom)
- Scroll progress bar
- Image parallax
- Magnetic buttons
- Counter animations
- 3D card hover
- Marquee testimonials

### Design System
- **Colors:**
  - Background: `#080808` (near black)
  - Accent: `#00F5FF` (electric cyan)
  - Secondary: `#7C3AED` (purple)
  
- **Typography:**
  - Display: Clash Display (Fontshare)
  - Body: Satoshi (Fontshare)

### Performance
- Lazy loading images
- Code splitting
- Server-side rendering
- Optimized fonts

---

## Customization

### Changing Brand Name
Edit `constants/index.ts`:
```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  // ...
};
```

### Changing Colors
Edit `app/globals.css`:
```css
@theme {
  --color-accent: #YOUR_COLOR;
  --color-accent-secondary: #YOUR_SECONDARY;
}
```

### Adding Services
Edit `constants/index.ts` in the `services` array:
```typescript
{
  number: "07",
  title: "Your Service",
  description: "Description",
  includes: ["Item 1", "Item 2"],
},
```

### Changing Showreel Video
Update in Admin panel or `constants/index.ts`

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual Deployment
```bash
npm run build
npm start
```

---

## Admin Credentials

- **URL:** http://localhost:3000/login
- **Email:** admin@editwithhari.com
- **Password:** admin123

---

## Troubleshooting

### Error: `children.split is not a function`
This occurs when `TextReveal` receives non-string children. The component has been fixed to handle both string and ReactNode children.

### Error: `tailwindcss not recognized`
Make sure to use `@tailwindcss/postcss` in `postcss.config.mjs`:
```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### Port already in use
Kill existing node processes:
```bash
taskkill /F /IM node.exe
```

---

## License

MIT License - Feel free to use for your own portfolio!

---

Built with passion & modern web technologies.