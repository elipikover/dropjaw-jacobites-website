# DropJaw Jacobites Website

A fan/band website for The DropJaw Jacobites, migrated from Lovable to Replit.

## Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router DOM v6
- **Data fetching**: TanStack Query v5

## Structure

```
src/
  assets/          # Images and media files
  components/      # Page section components
    HeroSection.tsx          # Full-width hero image (65vh)
    IntroducingSection.tsx   # Band intro heading
    AlbumSection.tsx         # Album artwork + title
    FactsSection.tsx         # Band facts + contact email
    MusicSection.tsx         # Spotify embed + artwork
    BiographySection.tsx     # Bio text + artwork
    ContentSection.tsx       # Poster + video section
    FooterSection.tsx        # Footer with social links
  pages/
    Index.tsx       # Main page assembling all sections
    NotFound.tsx    # 404 page
  App.tsx           # Router setup
  main.tsx          # Entry point
  index.css         # Global styles + CSS variables
```

## Design System

- Dark charcoal background (`hsl(0 0% 16%)`)
- Coral orange accent (`hsl(16 100% 69%)`)
- Special Elite typewriter font
- No border radius (sharp edges)

## Dev Server

Runs on port 5000 via `npm run dev`.

