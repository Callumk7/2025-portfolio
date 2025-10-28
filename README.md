# Personal Portfolio

A modern, performant portfolio website built with Astro, featuring interactive components, content management, and serverless deployment.

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5 with MDX support
- **Interactive UI**: [Solid.js](https://www.solidjs.com) for client-side interactivity
- **Styling**: Sass with custom design system
- **State Management**: [Nanostores](https://github.com/nanostores/nanostores) for global state
- **UI Components**: [Kobalte](https://kobalte.dev) accessible component primitives
- **Search**: [Fuse.js](https://fusejs.io) for fuzzy search
- **Deployment**: Cloudflare Worker, serving pre-rendered content and a single API endpoint for form submission
- **Database**: Cloudflare D1 for contact form submissions
- **Code Quality**: Biome for linting and formatting

## Features

- **Content Collections**: Type-safe blog posts and project showcases using Astro's content collections
- **Dynamic Pages**: About, Experience, Contact, Blog, and Projects sections
- **Interactive Components**: Client-side interactivity with Solid.js components
- **Search Functionality**: Fast, client-side search powered by Fuse.js
- **Animation System**: Configurable background animations with localStorage persistence
- **RSS Feed**: Auto-generated RSS feed for blog posts
- **Sitemap**: Automatic sitemap generation
- **Custom Fonts**: Google Fonts integration (Zalando Sans family)
- **Contact Form**: Serverless API with D1 database integration

## Project Structure

```
src/
├── components/         # Astro & Solid.js components
│   ├── about/         # About page components
│   ├── animations/    # Background animation components
│   ├── blog/          # Blog-related components
│   ├── contact/       # Contact form components
│   ├── experience/    # Experience page components
│   ├── home/          # Homepage components
│   ├── icons/         # SVG icon components
│   ├── interactive/   # Interactive Solid.js components
│   ├── layout/        # Layout utilities
│   ├── navigation/    # Navigation components
│   └── ui/            # Reusable UI components
├── content/           # Markdown content
│   ├── blog/          # Blog posts
│   └── projects/      # Project showcases
├── layouts/           # Page layouts
├── pages/             # File-based routing
│   ├── api/           # API endpoints
│   ├── blog/          # Blog pages
│   └── projects/      # Project pages
├── stores/            # Nanostores state management
└── styles/            # Global styles and Sass modules
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Opens development server at `http://localhost:4321`

### Build

```bash
pnpm build
```

Generates production build in `dist/` directory

### Preview

```bash
pnpm preview
```

Previews the production build locally

## Deployment

The project is configured for deployment to Cloudflare with:

- Prerendering on all routes enabled by default
- Images pre-processed at build time with sharp
- D1 database binding for contact form
- Node.js compatibility flags

### Wrangler Configuration

The `wrangler.jsonc` file includes:

- D1 database binding for contact form submissions
- Asset serving configuration
- Observability enabled

## Configuration

### Site Configuration

Update `astro.config.mjs` to customize:

- Site URL
- Font configuration
- Integrations
- Adapter settings

### Content Schema

Content collections are defined in `src/content.config.ts` with Zod schemas for type safety.

### Site Metadata

Global site information can be modified in `src/consts.ts`:

- `SITE_TITLE`
- `SITE_DESCRIPTION`

## License

The code in this repository is licensed under the MIT License.

The content (text, images, personal information, and portfolio projects)
is © Callum Kloos 2025. All rights reserved.
