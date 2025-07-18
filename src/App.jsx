import React, { Suspense } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ParticleSystem from './components/layout/ParticleSystem';
import FloatingShapes from './components/layout/FloatingShapes';
import SkipToContent from './components/layout/SkipToContent';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './seo';
import { AnimationProvider } from './context/AnimationContext';

const Hero = React.lazy(() => import('./components/sections/Hero'));
const Services = React.lazy(() => import('./components/sections/Services'));
const Process = React.lazy(() => import('./components/sections/Process'));
const TechStack = React.lazy(() => import('./components/sections/TechStack'));
const Testimonials = React.lazy(() => import('./components/sections/Testimonials'));
const CTA = React.lazy(() => import('./components/sections/CTA'));

function App() {
  return (
    <ErrorBoundary>
      <AnimationProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
          <SEO />
          <SkipToContent />
          <ParticleSystem />
          <FloatingShapes />
          <Header />
          
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <main id="main-content">
              <section id="home">
                <Hero />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id="process">
                <Process />
              </section>
              <section id="tech-stack">
                <TechStack />
              </section>
              <section id="testimonials">
                <Testimonials />
              </section>
              <section id="contact">
                <CTA />
              </section>
            </main>
          </Suspense>
          
          <Footer />
        </div>
      </AnimationProvider>
    </ErrorBoundary>
  );
}

export default App;
