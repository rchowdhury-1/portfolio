# Razwanul Chowdhury — Developer Portfolio

A premium developer portfolio with integrated blog CMS. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and MDX.

## Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS with Instrument Serif + Geist fonts
- **Animations**: Framer Motion (scroll-triggered entrance animations)
- **Blog**: MDX with file-based content in `/content/blog/`
- **Syntax highlighting**: rehype-highlight
- **CMS**: Simple admin dashboard behind NextAuth.js credentials auth
- **Analytics**: Vercel Analytics

## Getting Started

```bash
# Install dependencies
npm install

# Copy env file and fill in values
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

```env
NEXTAUTH_SECRET=your-secret    # generate: openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your-password
```

## CMS Usage

1. Visit `/admin/login` and sign in with your `ADMIN_EMAIL` / `ADMIN_PASSWORD`
2. Create, edit, and delete blog posts from the dashboard at `/admin`
3. Posts are saved to `/content/blog/` as `.mdx` files
4. **For production**: commit the MDX files to Git — they deploy with the site via Vercel

> **Note on Vercel**: File writes are ephemeral on Vercel's serverless functions. The CMS works perfectly in local development. For a fully managed production CMS, swap the file-based storage for Vercel Blob or Supabase.

## Blog Post Format

```mdx
---
title: "Your Post Title"
date: "2025-08-15"
excerpt: "A one-line summary shown in listings"
tags: ["React", "TypeScript"]
published: true
---

Your markdown content here...
```

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── blog/               # Blog listing + [slug] post pages
│   ├── projects/           # Projects grid with filters
│   ├── about/              # Career journey page
│   ├── admin/              # CMS dashboard + editor
│   └── api/                # NextAuth + posts CRUD API routes
├── components/
│   ├── layout/             # Header, Footer, MobileMenu
│   ├── home/               # Hero, About, ProjectsShowcase, SkillsGrid, etc.
│   ├── projects/           # ProjectCard, ProjectFilter
│   ├── blog/               # BlogCard, BlogList, MDXContent, TableOfContents
│   ├── admin/              # AdminGuard, PostList, PostEditor
│   └── shared/             # Badge, Button, Section, AnimatedSection, GradientText
├── content/blog/           # MDX blog posts (source of truth)
├── lib/
│   ├── posts.ts            # Read/write MDX files
│   ├── mdx.ts              # rehype plugins + heading extraction
│   ├── projects.ts         # Project + skills data
│   └── auth.ts             # NextAuth config
└── types/index.ts          # Shared TypeScript types
```

## Deployment

1. Push to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings:
   - `NEXTAUTH_SECRET` (generate: `openssl rand -base64 32`)
   - `NEXTAUTH_URL` (your production URL)
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
4. Deploy — all blog posts in `/content/blog/` deploy with the site
