import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function TechSphere() {
  const mountRef = useRef(null);
  
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);
    
    // Create sphere
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0x22d3ee,
      wireframe: true,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.8
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    // Add floating tech icons
    const icons = ['⚛️', '🐍', '☁️', '🧠', '💎', '🔄', '📊', '🔗'];
    icons.forEach((icon, i) => {
      const angle = (i / icons.length) * Math.PI * 2;
      const x = Math.cos(angle) * 7;
      const y = Math.sin(angle) * 7;
      const z = 0;
      
      const text = document.createElement('div');
      text.className = 'absolute text-2xl';
      text.textContent = icon;
      text.style.transform = `translate(${x * 15 + 150}px, ${y * 15 + 150}px)`;
      mountRef.current.appendChild(text);
    });
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x22d3ee, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    
    // Position camera
    camera.position.z = 15;
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    
    animate();
    
    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);
  
  return <div ref={mountRef} className="w-[300px] h-[300px] relative" />;
}
