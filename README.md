# Edit With Hari — Video Editor Portfolio

A modern, production-ready video editor portfolio website built with Next.js 15, featuring a stunning dark luxury design with cool cyan accents.

## Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion
- **3D Elements**: Three.js + React Three Fiber for immersive visual effects
- **Admin Panel**: Full CMS for managing projects, inquiries, and testimonials
- **Client Booking**: Contact form with automatic email notifications
- **Responsive Design**: Mobile-first approach with elegant animations
- **SEO Optimized**: Meta tags, Open Graph, sitemap, robots.txt
- **Performance**: Lighthouse 90+ score target

## Tech Stack

### Frontend
- Next.js 15 (App Router)
- TypeScript (strict mode)
- Tailwind CSS v4
- Framer Motion (animations)
- Three.js + React Three Fiber
- GSAP (scroll animations)
- Lucide React (icons)

### Backend
- Next.js API Routes
- Prisma ORM
- PostgreSQL (Supabase)
- NextAuth.js v5
- Resend (email)
- Cloudinary (media storage)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (Supabase recommended)
- Cloudinary account
- Resend account (for email)

### Installation

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
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

3. **Set up the database:**
```bash
npx prisma generate
npx prisma db push
npm run db:seed
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Open the site:**
- Frontend: http://localhost:3000
- Admin Panel: http://localhost:3000/login
- Default credentials: `admin@editwithhari.com` / `admin123`

## Project Structure

```
video-portfolio/
├── app/                    # Next.js App Router
│   ├── (public)/          # Public pages
│   ├── (admin)/           # Admin panel
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   ├── home/             # Homepage sections
│   ├── work/             # Work page components
│   ├── admin/            # Admin components
│   └── three/            # 3D components
├── lib/                  # Utilities & configs
├── prisma/               # Database schema
├── hooks/                # Custom React hooks
├── types/                # TypeScript types
└── constants/            # Site configuration
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, featured work, stats |
| `/work` | Portfolio grid with category filters |
| `/work/[slug]` | Project detail page |
| `/about` | About page with skills and process |
| `/services` | Services listing with FAQs |
| `/contact` | Contact form with inquiry system |
| `/admin` | Admin dashboard |
| `/login` | Admin login |

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/projects` | GET, POST | List/create projects |
| `/api/projects/[id]` | GET, PUT, DELETE | Manage single project |
| `/api/contact` | POST | Submit contact inquiry |
| `/api/testimonials` | GET, POST | List/create testimonials |
| `/api/upload` | POST | Upload to Cloudinary |
| `/api/auth/[...nextauth]` | GET, POST | NextAuth handlers |

## Design System

### Colors
- **Background**: `#080808` (near black)
- **Accent**: `#00F5FF` (electric cyan)
- **Secondary**: `#7C3AED` (purple)

### Typography
- **Display**: Clash Display (Fontshare)
- **Body**: Satoshi (Fontshare)

### Animations
- Page transitions with dark panel slide
- Text reveal animations on scroll
- Custom cursor follower
- Magnetic buttons
- Counter animations
- Marquee testimonials

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual

```bash
npm run build
npm start
```

## License

MIT License - feel free to use for your own portfolio!

---

Built with passion & modern web technologies.