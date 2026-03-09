# Jonathan Dobrowolski Portfolio

Personal portfolio website for [jdobro.com](https://jdobro.com).

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Plain CSS (no Tailwind)
- **Animations:** Framer Motion
- **Fonts:** Cormorant Garamond + Jost (Google Fonts)
- **Deployment:** Vercel
- **Domain:** Cloudflare DNS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Adding Images

Place your project screenshots in `/public/images/`:
- `common-app.png` - Common app screenshot
- `aquila-dashboard.png` - Aquila dashboard screenshot
- `fleet-demo.png` - Fleet demo screenshot

## Adding Resume

Place your resume at `/public/resume.pdf`.

## Deployment to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

### 2. Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Click **Deploy** (default settings are fine)

### 3. Add Custom Domain in Vercel

1. Go to your project in Vercel dashboard
2. Click **Settings** → **Domains**
3. Add `jdobro.com`
4. Add `www.jdobro.com`
5. Set `jdobro.com` as the primary (Vercel will handle www redirect)

## Cloudflare DNS Setup

In your Cloudflare dashboard for jdobro.com:

### DNS Records to Add

| Type | Name | Content | Proxy Status |
|------|------|---------|--------------|
| A | @ | 76.76.21.21 | DNS only (grey cloud) |
| CNAME | www | cname.vercel-dns.com | DNS only (grey cloud) |

**Important:** Set both records to **DNS only** (grey cloud), NOT proxied (orange cloud). Vercel handles SSL — if Cloudflare proxying is on, SSL will conflict.

### SSL/TLS Settings in Cloudflare

1. Go to **SSL/TLS** → **Overview**
2. Set mode to **Full** (not Full Strict)

### Wait for Propagation

DNS changes can take up to 48 hours to propagate, but usually complete within minutes.

## Project Structure

```
/app
  layout.tsx      # Global layout, fonts, metadata
  page.tsx        # Home page
  globals.css     # All styles
/components
  Nav.tsx
  Hero.tsx
  ProjectsSection.tsx
  ProjectFeatured.tsx
  ProjectSmallCard.tsx
  About.tsx
  Contact.tsx
  Footer.tsx
  SideRule.tsx
/public
  resume.pdf      # Your resume
  /images         # Project screenshots
```
