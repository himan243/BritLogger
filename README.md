# BritLogger

A personal and team logging website built with Next.js, TypeScript, and Firebase.

## Project Structure

The project is structured using the Next.js App Router. Each major feature has its own route and placeholder:

- `src/app/login/`: Authentication & Firebase setup
- `src/app/dashboard/`: Central Dashboard & Activity feed
- `src/app/logs/`: Manual logging with timestamps
- `src/app/search/`: Search & Filtering (Department, Issue type, etc.)
- `src/app/export/`: PDF Generation & Analytics
- `src/app/profile/`: User Profile management

## How to Contribute

1. **Pick a Task**: Choose a feature from the TODO list.
2. **Branching**: Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Implement**: Replace the placeholders in the corresponding directory.
4. **Push & PR**: Push your branch and create a Pull Request for review.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
