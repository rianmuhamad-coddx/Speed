#!/bin/bash

# 🚀 SpeedWrench - Quick Deploy Script

echo "🔧 SpeedWrench - Vercel Deploy Script"
echo "======================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build project
echo "🏗️  Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors first."
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📥 Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy
echo "🚀 Deploying to Vercel..."
echo ""
vercel --prod

echo ""
echo "✅ Deploy complete!"
echo "🎉 Your website is live!"
