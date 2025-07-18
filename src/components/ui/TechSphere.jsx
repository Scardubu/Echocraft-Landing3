import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useAnimation } from '../../context/AnimationContext';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

export default function TechSphere() {
  const mountRef = useRef(null);
  const { animationsEnabled } = useAnimation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const animationFrameRef = useRef(null);
  const icons = ['⚛️', '🐍', '☁️', '🧠', '💎', '🔄', '📊', '🔗'];

  useEffect(() => {
    if (!animationsEnabled || prefersReducedMotion) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(300, 300);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    
    // Create sphere with optimized geometry
    const geometry = new THREE.IcosahedronGeometry(5, 2); // Reduced detail
    const material = new THREE.MeshPhongMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    // Add text elements
    const textElements = icons.map(icon => {
      const text = document.createElement('div');
      text.className = 'absolute text-2xl transition-all duration-1000 will-change-transform';
      text.textContent = icon;
      mountRef.current.appendChild(text);
      return text;
    });
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x22d3ee, 1.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    // Position camera
    camera.position.z = 15;
    
    // Animation
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      
      // Optimized rotation
      sphere.rotation.x += 0.004;
      sphere.rotation.y += 0.004;
      
      // Position icons with throttling
      textElements.forEach((text, i) => {
        const angle = (i / textElements.length) * Math.PI * 2 + (performance.now() * 0.0005);
        const x = Math.cos(angle) * 7;
        const y = Math.sin(angle) * 7;
        
        const vector = new THREE.Vector3(x, y, 0);
        vector.project(camera);
        
        const xPos = (vector.x * 0.5 + 0.5) * 300;
        const yPos = (-vector.y * 0.5 + 0.5) * 300;
        
        text.style.transform = `translate(${xPos}px, ${yPos}px)`;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      textElements.forEach(text => text.remove());
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Explicit disposal of Three.js objects
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [animationsEnabled, prefersReducedMotion]);

  return (
    <div ref={mountRef} className="w-[300px] h-[300px] relative mx-auto">
      {(!animationsEnabled || prefersReducedMotion) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
            <div className="text-4xl">⚡</div>
          </div>
        </div>
      )}
    </div>
  );
}