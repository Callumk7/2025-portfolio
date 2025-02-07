---
name: ReCollect Social Journalling
shortName: recollect
description: Build a habit, remember together
coverImageUrl: http://image.com
projectUrl: https://recollect.dev
githubUrl: https://github.com/Callumk7/frontline-v2-remix
tags:
  - react
  - remix
  - cloudflare
  - supabase
  - typescript
caseStudyUrl: /blog/introducing-playq-a-cuttingedge-videogame-playlist-manager
related:
  - ""
tech:
  - react
  - remix
  - supabase
  - nodejs
  - typescript
  - cloudflare pages
  - SQL
wip: true
slug: recollect
---

## Introduction to playQ

PlayQ is a game management application that allows users to create and track lists of video games, known as playlists. It provides a comprehensive platform for users to keep track of games they've played, want to play, or are currently playing.

Moreover, you can rate the games on a personal scale, adding another layer of information to your lists. This functionality also allows for a comparative analysis between different games based on user ratings.

This app promotes social interaction by allowing users to share their game playlists with friends or publicly. This makes it easier for users to discover new games and understand their friends' gaming preferences. PlayQ aims to facilitate easier decision-making when it comes to choosing the next game to play.

## playQ - A Learning Project

PlayQ is not just a game playlist management app, it's also a comprehensive learning project that incorporates a variety of advanced technologies:

**Supabase** - PlayQ uses Supabase for authentication and database management. Supabase is an open-source Firebase alternative that replicates some of its features like real-time subscriptions and auto-generated APIs, while offering the versatility of PostgreSQL.

**Remix and React** - The user interface (UI), routing, and data loading are built with Remix and React. Remix is a powerful web framework for React that priorities user experience, while React facilitates building reusable UI components efficiently.

**DrizzleORM** - The app's Object-Relational Mapping (ORM) is handled by DrizzleORM. With DrizzleORM, JavaScript objects are mapped to database tables, simplifying data operations like inserting, updating, or querying data.

**Radix-UI and Shad/cn Inspired Components** - To further refine the user interface, the app uses Radix-UI, a library of low-level, accessible and unstyled UI components for building high-quality web interfaces. The UI design is also influenced by ShaD/CN styled-components, favouring a modern and minimalist aesthetic.

By using these technologies, PlayQ showcases how sophisticated tech stacks can be combined for efficient coding practices and superior user experience.

## Database Design

![[Database design.svg]]
Utilised a many to many database design to enable many key features of the collection manager.
