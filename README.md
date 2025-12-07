# start-pro

A modern, production-ready React starter template powered by **TanStack Start**, **Vite**, and **Tailwind CSS v4**.

## Features

- **Framework**: [TanStack Start](https://tanstack.com/start) for SSR and routing.
- **Routing**: [virtual-next-routes](https://github.com/nrjdalal/virtual-next-routes) for Next.js-like file-system routing with TanStack Router.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with `shadcn/ui` components.
- **Database**: [Drizzle ORM](https://orm.drizzle.team) with PostgreSQL.
- **Authentication**: [Better Auth](https://better-auth.com).
- **Tooling**: Biome/ESLint, Prettier, and commit hooks.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd start-pro
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Set up environment variables:

   ```bash
   cp .example.env .env
   ```

   Update `.env` with your database credentials and other secrets.

4. Push the database schema:

   ```bash
   bun run db:push
   ```

5. Start the development server:
   ```bash
   bun run dev
   ```

## Scripts

- `dev`: Start the development server on port 3000.
- `build`: Build the application for production.
- `start`: Preview the production build.
- `db:push`: Push schema changes to the database.
- `db:studio`: Open Drizzle Studio to manage your database.
- `lint`: Run linting checks.

## Virtual Next Routes

This project utilizes `virtual-next-routes` to provide a familiar Next.js-style file-system routing experience while leveraging the power of TanStack Router. This allows for defining routes using the `app` directory structure (e.g., `app/page.tsx`, `app/api/route.ts`).
