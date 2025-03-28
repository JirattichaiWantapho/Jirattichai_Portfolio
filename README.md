# Jirattichai Wantapho's Portfolio

A modern, responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, education, and contact information with elegant UI components and smooth animations.

![Portfolio Screenshot](https://placeholder-for-your-screenshot.png)

## Features

- **Modern UI**: Clean and professional design using shadcn/ui components
- **Responsive**: Fully responsive layout that works on all device sizes
- **Animated Components**: Smooth animations and transitions using CSS and React hooks
- **Dark/Light Mode**: Theme toggle with system preference detection
- **SEO Optimized**: Proper metadata for better search engine visibility
- **Static Export**: Optimized for deployment on various hosting platforms
- **Particle Background**: Interactive particle system that responds to theme changes
- **3D Card Effects**: Subtle tilt animations on cards for enhanced interactivity
- **Smooth Scrolling**: Anchor navigation with scroll padding for better UX

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Animations**: CSS animations with React Intersection Observer
- **State Management**: React Hooks (useState, useEffect, useRef)
- **Theming**: next-themes for dark/light mode support
- **Deployment**: Render

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

The portfolio is easily customizable:

- Update the content in the component files under `src/components/`
- Modify styles in `src/app/globals.css`
- Adjust the theme colors in `tailwind.config.ts`

## Deployment

The project is configured for static exports with `next.config.js` set to:

```js
output: 'export',
distDir: 'out',
```

### Deploy on Netlify

You can deploy on Netlify using the provided `netlify.toml` configuration:

1. Push your repository to GitHub
2. Go to [Netlify](https://app.netlify.com/) and sign in
3. Click "New site from Git" and select your repository
4. Netlify will automatically detect the build settings from the netlify.toml file
5. Click "Deploy site"

### Deploy on Render

To deploy this site on Render:

1. Push your repository to GitHub
2. Go to [Render](https://render.com/) and sign in
3. Click "New" and select "Static Site"
4. Connect your GitHub repository
5. Configure with these settings:
   - **Name**: portfolio-jirattichai (or your preferred name)
   - **Build Command**: `npm run build` or `bun run build`
   - **Publish Directory**: `out`
6. Click "Create Static Site"

## License

[MIT](LICENSE)

## Contact

Jirattichai Wantapho - [jirattichai.w@gmail.com](mailto:jirattichai.w@gmail.com)

Project Link: [https://github.com/JirattichaiWantapho/portfolio](https://github.com/JirattichaiWantapho/portfolio)
