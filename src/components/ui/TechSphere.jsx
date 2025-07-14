import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useAnimation } from '../../context/AnimationContext';

const TechSphere = () => {
  const mountRef = useRef(null);
  const { animationsEnabled } = useAnimation();
  
  useEffect(() => {
    if (!animationsEnabled) return;
    
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
    
    // Create sphere
    const geometry = new THREE.IcosahedronGeometry(5, 3);
    const material = new THREE.MeshPhongMaterial({
      color: 0x22d3ee,
      wireframe: true,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.8
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    // Add floating tech icons
    const icons = ['⚛️', '🐍', '☁️', '🧠', '💎', '🔄', '📊', '🔗'];
    const textElements = icons.map((icon, i) => {
      const text = document.createElement('div');
      text.className = 'absolute text-2xl transition-all duration-1000';
      text.textContent = icon;
      text.style.willChange = 'transform';
      mountRef.current.appendChild(text);
      return text;
    });
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x22d3ee, 1.5);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    
    // Position camera
    camera.position.z = 15;
    
    // Animation
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      // Rotate sphere
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;
      
      // Position icons
      textElements.forEach((text, i) => {
        const angle = (i / textElements.length) * Math.PI * 2 + (performance.now() * 0.0005);
        const x = Math.cos(angle) * 7;
        const y = Math.sin(angle) * 7;
        const z = Math.sin(performance.now() * 0.001 + i) * 3;
        
        const vector = new THREE.Vector3(x, y, z);
        vector.project(camera);
        
        const xPos = (vector.x * 0.5 + 0.5) * 300;
        const yPos = (-vector.y * 0.5 + 0.5) * 300;
        
        text.style.transform = `translate(${xPos}px, ${yPos}px) scale(${1 + Math.sin(performance.now() * 0.002 + i) * 0.2})`;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = 1;
      camera.updateProjectionMatrix();
      renderer.setSize(300, 300);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      textElements.forEach(text => text.remove());
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
    };
  }, [animationsEnabled]);
  
  return (
    <div ref={mountRef} className="w-[300px] h-[300px] relative mx-auto">
      {!animationsEnabled && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center animate-pulse">
            <div className="text-4xl">⚡</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechSphere;
