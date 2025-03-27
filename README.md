# WebFE

A modern web frontend project built with React and Vite, optimized for performance and stability.

## Prerequisites

- Node.js v18 LTS or higher (v18.17.0+ recommended)
- npm v9+ or yarn v1.22+

## Getting Started

1. Clone the repository

2. Install dependencies with the following command to ensure compatibility:
   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install --legacy-peer-deps
   ```

## Development

- Start development server:
  ```bash
  npm run dev
  # or
  yarn dev
  ```
  The development server will start at http://localhost:3000

- Build for production:
  ```bash
  npm run build
  # or
  yarn build
  ```

- Preview production build:
  ```bash
  npm run preview
  # or
  yarn preview
  ```

- Lint code:
  ```bash
  npm run lint
  # or
  yarn lint
  ```

## Performance Optimization

- Enable React Fast Refresh for quick development iterations
- Use production builds for optimal performance
- Implement code splitting for better load times
- Utilize Tailwind's purge feature to minimize CSS bundle size

## Troubleshooting

- If you encounter dependency conflicts, try clearing npm cache:
  ```bash
  npm cache clean --force
  npm install --legacy-peer-deps
  ```

- For Vite-related issues, ensure your Node.js version is compatible
- Check console for detailed error messages

## Project Structure

```
├── src/              # Source files
├── public/           # Static assets
├── index.html        # Entry HTML
└── vite.config.js    # Vite configuration
```