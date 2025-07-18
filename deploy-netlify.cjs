#!/usr/bin/env node
// Netlify deployment script for Echocraft Landing Page

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Echocraft Landing Page - Netlify Deployment');
console.log('================================================');

// Check if dist directory exists
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.log('❌ dist directory not found. Building the project...');
  
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Check if Netlify CLI is installed
try {
  execSync('netlify --version', { stdio: 'ignore' });
  console.log('✅ Netlify CLI found');
} catch (error) {
  console.log('❌ Netlify CLI not found. Installing...');
  try {
    execSync('npm install -g netlify-cli', { stdio: 'inherit' });
    console.log('✅ Netlify CLI installed');
  } catch (installError) {
    console.error('❌ Failed to install Netlify CLI:', installError.message);
    console.log('📋 Manual installation: npm install -g netlify-cli');
    process.exit(1);
  }
}

// Check if user is logged in
try {
  execSync('netlify status', { stdio: 'ignore' });
  console.log('✅ Netlify authentication verified');
} catch (error) {
  console.log('🔐 Please login to Netlify...');
  try {
    execSync('netlify login', { stdio: 'inherit' });
    console.log('✅ Netlify login successful');
  } catch (loginError) {
    console.error('❌ Netlify login failed:', loginError.message);
    process.exit(1);
  }
}

// Deploy to Netlify
console.log('🌐 Deploying to Netlify...');
try {
  execSync('netlify deploy --dir=dist --prod', { stdio: 'inherit' });
  console.log('🎉 Deployment successful!');
  
  // Get site info
  try {
    const siteInfo = execSync('netlify status --json', { encoding: 'utf8' });
    const site = JSON.parse(siteInfo);
    
    console.log('');
    console.log('🌍 Your site is live at:');
    console.log(`   ${site.site_url}`);
    console.log('');
    console.log('📊 Next steps:');
    console.log('   1. Test your site functionality');
    console.log('   2. Setup custom domain (optional)');
    console.log('   3. Configure environment variables');
    console.log('   4. Monitor performance metrics');
    console.log('');
    console.log('✨ Echocraft Landing Page is now live!');
    
  } catch (statusError) {
    console.log('✅ Deployment completed, but couldn\'t fetch site info');
  }
  
} catch (deployError) {
  console.error('❌ Deployment failed:', deployError.message);
  console.log('');
  console.log('🔧 Troubleshooting:');
  console.log('   1. Check your internet connection');
  console.log('   2. Verify Netlify authentication');
  console.log('   3. Try manual deployment at https://app.netlify.com/drop');
  process.exit(1);
}
