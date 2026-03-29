# Connect & Reflect AI: Social Media & Wellbeing

A modern web application focused on promoting healthy social media habits and digital wellbeing through interactive features and AI-powered support.

## Features

- Interactive Reflection Quiz
- Curated Resource Hub
- Research Insights
- AI-Powered Chat Support
- Responsive Design
- Dark Mode Interface

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Git (required to push code to GitHub from your machine)
- Google AI Studio API key

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd connect-main
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root and add your Google AI Studio API key:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

If you also use the legacy chat context service in this codebase, add:
```
VITE_GOOGLE_AI_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Run `index.html` On Localhost

Use these exact steps to serve this project on `http://localhost:5173/`:

1. Open terminal in project root:
```bash
cd connect-main
```

2. Install dependencies (first time only):
```bash
npm install
```

3. Start localhost server:
```bash
npm start
```

4. Open this URL in your browser:
```
http://localhost:5173/
```

Note: do not open `index.html` directly by double-clicking. It must be served by Vite.

## Available Scripts

- `npm start` - Runs the app on `http://localhost:5173/`
- `npm run dev` - Runs the app in development mode (Vite)
- `npm run build` - Type-checks and builds for production
- `npm run preview` - Serves the production build locally
- `npm run lint` - Runs ESLint
- `npm run deploy` - Deploys `dist` to GitHub Pages

## Host On GitHub Pages

This project includes an automatic GitHub Pages workflow in `.github/workflows/deploy-pages.yml`.

1. Create a new repository on GitHub.
2. Push this project to the `main` branch of that repository.
3. In GitHub, open **Settings > Pages**.
4. Set **Source** to **GitHub Actions**.
5. Push any new commit to `main`.
6. Wait for the workflow named **Deploy To GitHub Pages** to finish.
7. Your site URL will be:
  - `https://<your-github-username>.github.io/<your-repo-name>/`

Notes:
- The workflow sets the correct Vite base path automatically for your repository name.
- For local development, continue using `npm start` or `npm run dev`.

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── contexts/       # React context providers
  ├── data/          # Static data and content
  ├── pages/         # Page components
  ├── services/      # API and service functions
  ├── types/         # TypeScript type definitions
  └── App.tsx        # Main application component
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Google AI Studio (Gemini Pro)
- React Router

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
