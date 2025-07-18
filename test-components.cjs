// Simple test to verify component imports
const path = require('path');
const fs = require('fs');

// List of components to test
const components = [
  'src/App.jsx',
  'src/components/layout/Header.jsx',
  'src/components/layout/Footer.jsx',
  'src/components/layout/FloatingShapes.jsx',
  'src/components/layout/ParticleSystem.jsx',
  'src/components/sections/Hero.jsx',
  'src/components/sections/Services.jsx',
  'src/components/sections/Process.jsx',
  'src/components/sections/TechStack.jsx',
  'src/components/sections/Testimonials.jsx',
  'src/components/sections/CTA.jsx',
  'src/components/ui/TypingEffect.jsx',
  'src/components/ui/GradientBorder.jsx',
  'src/components/ui/ServiceCard.jsx',
  'src/components/ui/AnimatedCounter.jsx',
  'src/components/ui/LazyImage.jsx',
  'src/components/ui/TechSphere.jsx'
];

// Data files to test
const dataFiles = [
  'src/data/processSteps.js',
  'src/data/services.js',
  'src/data/testimonials.js',
  'src/data/techStack.js'
];

console.log('🔍 Testing component files...\n');

let allTestsPassed = true;

// Test components
components.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for export statements
    const hasExport = content.includes('export default') || content.includes('export {');
    
    if (hasExport) {
      console.log(`✅ ${file} - EXISTS and has export`);
    } else {
      console.log(`❌ ${file} - Missing export statement`);
      allTestsPassed = false;
    }
  } else {
    console.log(`❌ ${file} - FILE NOT FOUND`);
    allTestsPassed = false;
  }
});

console.log('\n🗂️  Testing data files...\n');

// Test data files
dataFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for export statements
    const hasExport = content.includes('export');
    
    if (hasExport) {
      console.log(`✅ ${file} - EXISTS and has export`);
    } else {
      console.log(`❌ ${file} - Missing export statement`);
      allTestsPassed = false;
    }
  } else {
    console.log(`❌ ${file} - FILE NOT FOUND`);
    allTestsPassed = false;
  }
});

console.log('\n📋 Summary:');
if (allTestsPassed) {
  console.log('✅ All component and data files are properly structured!');
} else {
  console.log('❌ Some files have issues that need to be fixed.');
}
