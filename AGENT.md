# AGENT.md - Echocraft Landing Page

## Build/Development Commands
- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build (port 4173)
- `npm run lint` - Run ESLint (if configured)

## Architecture
- **Frontend**: React 19 + Vite landing page for Echocraft AI/blockchain company
- **Styling**: Tailwind CSS with custom color palette (cyan/purple gradients)
- **Animation**: Framer Motion for complex animations, custom keyframes
- **3D Graphics**: Three.js with React Three Fiber for interactive elements
- **Particles**: TSParticles for background effects
- **PWA**: Service worker with caching strategies via VitePWA

## Code Style
- **Components**: Lazy-loaded sections, functional components with hooks
- **Imports**: Absolute paths from src/, group by type (React, components, utils)
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Styling**: Tailwind classes with custom animations, gradient-heavy design
- **Performance**: Code splitting with React.lazy(), manual chunk optimization
- **Error Handling**: ErrorBoundary component for graceful failures

## Structure
- `/src/components/` - UI components (layout/, sections/, ui/)
- `/src/context/` - React contexts (AnimationContext)
- `/src/hooks/` - Custom hooks (useScrollEffects)
- `/src/data/` - Static data and configurations
- `/src/styles/` - Global styles and theme definitions
