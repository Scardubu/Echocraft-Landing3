# 🔧 Echocraft Landing Page - Quick References

## 📋 Essential Commands

### Development
```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Testing
```bash
node test-components.cjs     # Test component structure
node integration-test.cjs    # Full integration test
npm run a11y                 # Accessibility testing
```

### Deployment
```bash
npm run build && npx netlify deploy --dir=dist --prod
```

---

## 🎯 Component Quick Reference

### Layout Components
| Component | Path | Purpose |
|-----------|------|---------|
| Header | `src/components/layout/Header.jsx` | Navigation with smooth scrolling |
| Footer | `src/components/layout/Footer.jsx` | Company info and social links |
| ParticleSystem | `src/components/layout/ParticleSystem.jsx` | Animated background |
| FloatingShapes | `src/components/layout/FloatingShapes.jsx` | Dynamic background elements |
| BackgroundGrid | `src/components/layout/BackgroundGrid.jsx` | Animated grid overlay |
| SkipToContent | `src/components/layout/SkipToContent.jsx` | Accessibility navigation |

### Section Components
| Component | Path | Purpose |
|-----------|------|---------|
| Hero | `src/components/sections/Hero.jsx` | Landing section with typing animation |
| Services | `src/components/sections/Services.jsx` | Interactive service showcase |
| Process | `src/components/sections/Process.jsx` | 5-step workflow visualization |
| TechStack | `src/components/sections/TechStack.jsx` | Technology grid with animations |
| Testimonials | `src/components/sections/Testimonials.jsx` | Client success stories |
| CTA | `src/components/sections/CTA.jsx` | Call-to-action with metrics |

### UI Components
| Component | Path | Purpose |
|-----------|------|---------|
| TypingEffect | `src/components/ui/TypingEffect.jsx` | Customizable typing animation |
| GradientBorder | `src/components/ui/GradientBorder.jsx` | Animated gradient wrapper |
| ServiceCard | `src/components/ui/ServiceCard.jsx` | Interactive service display |
| AnimatedCounter | `src/components/ui/AnimatedCounter.jsx` | Number animation |
| LazyImage | `src/components/ui/LazyImage.jsx` | Performance-optimized images |
| TechSphere | `src/components/ui/TechSphere.jsx` | 3D technology visualization |

---

## 📊 Data Files Reference

### Services (`src/data/services.js`)
```javascript
{
  id: 1,
  title: "AI & Machine Learning",
  description: "Advanced AI solutions...",
  icon: Bot,
  color: "from-cyan-500 to-blue-500",
  features: ["ML models", "NLP", "Computer vision"],
  technologies: ["TensorFlow", "PyTorch", "OpenAI"],
  caseStudy: { title: "...", result: "127% increase" }
}
```

### Tech Stack (`src/data/techStack.js`)
```javascript
{
  id: 1,
  name: "React",
  description: "Frontend framework",
  icon: "⚛️",
  color: "from-blue-500 to-cyan-500",
  category: "frontend"
}
```

### Testimonials (`src/data/testimonials.js`)
```javascript
{
  id: 1,
  name: "Alex Rivera",
  title: "CTO",
  company: "DataDriven Inc",
  image: "/testimonials/alex.jpg",
  rating: 5,
  testimonial: "Echocraft transformed our data pipeline...",
  results: {
    metric1: { value: "92%", label: "Faster Processing" },
    metric2: { value: "40%", label: "Higher Accuracy" }
  }
}
```

### Process Steps (`src/data/processSteps.js`)
```javascript
{
  id: 1,
  title: "Discovery & Analysis",
  description: "Deep dive into your tech stack...",
  icon: "🔍",
  duration: "1-2 weeks",
  deliverables: ["Technical audit", "AI readiness assessment"],
  color: "cyan"
}
```

---

## 🎨 CSS Classes Reference

### Button Classes
```css
.btn-primary     /* Primary gradient button */
.btn-secondary   /* Secondary border button */
```

### Layout Classes
```css
.section-padding /* py-20 px-4 sm:px-6 lg:px-8 */
.container       /* max-w-7xl mx-auto */
.card            /* Glass card with backdrop blur */
.gradient-text   /* Gradient text effect */
```

### Animation Classes
```css
.animate-float   /* Floating animation */
.animate-pulse   /* Pulse animation */
.animate-spin    /* Spin animation */
.animate-bounce  /* Bounce animation */
```

### Utility Classes
```css
.text-glow       /* Text shadow glow */
.border-glow     /* Border glow effect */
.bg-mesh         /* Mesh gradient background */
```

---

## ⚡ Performance Optimization

### Code Splitting
```javascript
// Lazy load sections
const Hero = React.lazy(() => import('./components/sections/Hero'));
const Services = React.lazy(() => import('./components/sections/Services'));
```

### Bundle Optimization
```javascript
// vite.config.js
rollupOptions: {
  output: {
    manualChunks: {
      react: ['react', 'react-dom'],
      framer: ['framer-motion'],
      icons: ['lucide-react']
    }
  }
}
```

### Image Optimization
```javascript
// Use LazyImage component
<LazyImage
  src="/images/hero-bg.webp"
  alt="Hero background"
  className="w-full h-full object-cover"
  placeholder="/images/hero-bg-placeholder.jpg"
/>
```

---

## 🔧 Environment Variables

### Development (.env)
```env
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_API_BASE_URL=http://localhost:3001
VITE_CONTACT_EMAIL=hello@localhost.com
VITE_ENABLE_ANALYTICS=false
```

### Production (.env.production)
```env
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_API_BASE_URL=https://api.echocraft.io
VITE_CONTACT_EMAIL=hello@echocraft.io
VITE_ENABLE_ANALYTICS=true
```

---

## 🚀 Deployment Configurations

### Netlify (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

### Vercel (`vercel.json`)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

---

## 🎯 Customization Guide

### Change Colors
1. Update `tailwind.config.js` color palette
2. Update CSS custom properties in `src/index.css`
3. Update gradient classes throughout components

### Add New Section
1. Create component in `src/components/sections/`
2. Add to `src/App.jsx` imports and JSX
3. Add navigation link in `src/components/layout/Header.jsx`
4. Add data file in `src/data/` if needed

### Modify Content
1. **Services**: Edit `src/data/services.js`
2. **Testimonials**: Edit `src/data/testimonials.js`
3. **Tech Stack**: Edit `src/data/techStack.js`
4. **Process**: Edit `src/data/processSteps.js`
5. **SEO**: Edit `src/seo.jsx`

### Add Analytics
1. Add Google Analytics ID to environment variables
2. Update `src/seo.jsx` with tracking code
3. Add event tracking to buttons and forms

---

## 🐛 Common Issues & Solutions

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for missing dependencies
npm audit --audit-level moderate
```

### Styling Issues
```bash
# Rebuild Tailwind CSS
npm run build:css

# Check for conflicting styles
npm run lint:css
```

### Performance Issues
```bash
# Analyze bundle size
npm run build --analyze

# Check for unused code
npm run build --report
```

---

## 📞 Support & Resources

### Documentation
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://framer.com/motion)
- [Vite Documentation](https://vitejs.dev/guide)

### Community
- [React Community](https://reactjs.org/community/support.html)
- [Tailwind CSS Discord](https://discord.com/invite/7NF8GNe)
- [Framer Discord](https://discord.com/invite/framer)

### Issues
- Create an issue in the repository
- Email: hello@echocraft.io
- Documentation: Check README.md

---

**Last Updated:** 2025-01-18
**Version:** 1.0.0
