#!/bin/bash
# Echocraft Landing Page Deployment Script

echo "🚀 Starting Echocraft Landing Page Deployment"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Check if build is successful
echo "🔨 Building the application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist directory not found after build."
    exit 1
fi

echo "📁 Build artifacts created in 'dist' directory"

# Display build information
echo ""
echo "📊 Build Summary:"
echo "   - Build directory: dist/"
echo "   - Entry point: index.html"
echo "   - Assets: $(ls -la dist/ | wc -l) files"
echo ""

# Check if Netlify CLI is available
if command -v netlify &> /dev/null; then
    echo "🌐 Netlify CLI detected. You can deploy with:"
    echo "   netlify deploy --dir=dist --prod"
else
    echo "📋 Manual deployment instructions:"
    echo "   1. Go to https://app.netlify.com/drop"
    echo "   2. Drag and drop the 'dist' folder"
    echo "   3. Or install Netlify CLI: npm install -g netlify-cli"
fi

echo ""
echo "✅ Deployment preparation complete!"
echo "🎉 Your Echocraft Landing Page is ready for deployment!"
