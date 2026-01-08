# BrickedUp Masonry Website

Professional masonry services website built with Next.js and deployed on Render.

## Tech Stack

- **Framework**: Next.js 15 (Static Export)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui + Radix UI
- **Deployment**: Render (Static Site)

## Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

This project is configured for Render static site deployment via `render.yaml`.

The build outputs to `./out` directory as static HTML/CSS/JS.

## Project Structure

```
app/
├── page.tsx           # Homepage
├── contact/           # Contact page
├── services/          # Services page
└── portfolio/         # Portfolio page

components/
├── header.tsx         # Shared header
├── footer.tsx         # Shared footer
├── page-hero.tsx      # Page hero section
├── contact-form.tsx   # Contact form
├── job-request-form.tsx
├── mobile-menu.tsx
└── ui/                # shadcn/ui components
```
