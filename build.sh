#!/bin/bash

# Build script for go54.com deployment
# This script builds the production version of your application

echo "╔════════════════════════════════════════════════════════════╗"
echo "║         Ruwa Technology Limited - Build Script             ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18.0.0 or higher."
    exit 1
fi

echo "✓ Node.js version: $(node -v)"
echo "✓ NPM version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo "✓ Dependencies installed"
echo ""

# Build production version
echo "🔨 Building production version..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✓ Build completed successfully"
echo ""

# Check dist folder
if [ -d "dist" ]; then
    DIST_SIZE=$(du -sh dist | cut -f1)
    echo "✓ Build output: dist/ ($DIST_SIZE)"
else
    echo "❌ Build output folder (dist/) not found"
    exit 1
fi
echo ""

echo "╔════════════════════════════════════════════════════════════╗"
echo "║              Build Complete - Ready for Deployment         ║"
echo "╠════════════════════════════════════════════════════════════╣"
echo "║ Next steps:                                                ║"
echo "║ 1. Verify environment variables in .env.production         ║"
echo "║ 2. Upload all files to go54.com (excluding node_modules)   ║"
echo "║ 3. Set environment variables in go54.com dashboard         ║"
echo "║ 4. Start the server with: node server.js                   ║"
echo "║ 5. Verify health: https://yourdomain.go54.com/health       ║"
echo "╚════════════════════════════════════════════════════════════╝"
