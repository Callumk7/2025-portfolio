---
name: Game Master - Tabletop RPG Notes
description: Advanced notes app with deep linking capabilities, focussing on Tabletop RPG players.
coverImageUrl: ../../images/001-screenshot.png
projectUrl: https://gm.callumkloos.dev
githubUrl: https://github.com/Callumk7/game-master
tags:
  - react
  - remix
  - hono
  - typescript
  - monorepo
  - postgres
wip: false
cvDescription: I built a complex note-taking application that encompasses a front-end client built on top of react and remix, as well as a dedicated back-end built with node and hono. These were tied together in a monorepo setup which facilitated a shared contract through an api package that managed all cross-boundary types and data-fetching functions consumed by the client.
slug: game-master
---

I built **playQ**, a complex CRUD application designed to manage video game collections and playlists. The application leverages modern web technologies to provide a seamless user experience for managing and exploring video games.

![Page showing character view in Game Master](/images/001-screenshot.png)

## Features

- **User Authentication**: Secure user login and registration powered by Supabase.
- **Database Search and Filtering**: Efficient search functionality to find games in the database.
- **Personal Collections**: Save and organise games into personal collections.
- **Playlists**: Create, edit, and manage playlists of games.
- **Social Features**: Find and follow other users, track their playlists, and see their game progress.
- **Activity Feed**: Highlights key activities of friends.
- **Comment System**: Comment on games, playlists, and user profiles.
- **Game Discovery**: Explore games based on popularity and user ratings.
- **Media Integration**: Video game artwork and screenshots provided by IGDB.

## Technology Used

### Supabase

Supabase is utilised for authentication and database management. It offers real-time subscriptions and auto-generated APIs, providing the versatility of PostgreSQL while replicating some Firebase features.

### Remix and React

The UI, routing, and data loading are built with Remix and React. Remix enhances user experience with server-side rendering on initial load and efficient data fetching for client-side navigation.

### DrizzleORM

DrizzleORM handles the app's Object-Relational Mapping (ORM). It simplifies data operations like inserting, updating, or querying data, and provides robust tools for managing database schema migrations.

### Radix Components

The app uses Radix-UI for low-level, accessible, and unstyled UI components, offering a developer-friendly declarative API. The UI design is influenced by Shadcn styled-components, promoting a modern and minimalist aesthetic.

### TailwindCSS

Tailwind CSS is used for atomic styling with utility classes. It integrates well with Radix and can be combined with conditional class libraries like clsx and class-variance-authority to rapidly build expressive design systems.

### [Fly.io](http://Fly.io)

The application is deployed on [Fly.io](http://Fly.io), chosen for its easy deployment, scalability, and serverful runtime, which fully utilises Node.js's capabilities.

### Cloudflare Workers

Serverless functions are employed for asynchronous tasks. A custom API accessed via a Cloudflare Worker offloads large writes to the database, ensuring smooth user flow when saving game data.
