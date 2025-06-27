#!/bin/bash

# NPM Publishing Script for oneview-react-multiselect

echo "🚀 Publishing oneview-react-multiselect to NPM..."

# Check if user is logged in to npm
if ! npm whoami > /dev/null 2>&1; then
    echo "❌ You must be logged in to npm. Run: npm login"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Dependency installation failed"
        exit 1
    fi
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Run type checking
echo "🔍 Running type checks..."
npm run typecheck
if [ $? -ne 0 ]; then
    echo "❌ Type checking failed"
    exit 1
fi

# Build the package
echo "🔨 Building package..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

# Verify build output
if [ ! -d "dist" ]; then
    echo "❌ Build output directory not found"
    exit 1
fi

echo "✅ Build completed successfully"
echo "📦 Contents of dist/:"
ls -la dist/

# Publish to npm
echo "📤 Publishing to npm..."
npm publish

if [ $? -eq 0 ]; then
    echo "🎉 Successfully published oneview-react-multiselect!"
    echo "📖 View on npm: https://www.npmjs.com/package/oneview-react-multiselect"
else
    echo "❌ Publishing failed"
    exit 1
fi
