#!/bin/bash

# Angular MultiSelect GitHub Setup Script
echo "🚀 Setting up Angular MultiSelect for GitHub..."

# Initialize git repository
git init

# Add .gitignore
echo "📝 Adding .gitignore..."

# Add all files
echo "📁 Adding all files to git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Angular MultiSelect component

- Complete Angular 17+ implementation with standalone components
- MultiSelect component with search, create, and custom templates
- Tag component with variants and removal functionality
- Dropdown component with keyboard navigation
- Full TypeScript support and reactive forms integration
- Comprehensive documentation and examples
- Bootstrap 5 styling with Poppins font
- OneView V2 design system compliance"

echo "✅ Git repository initialized successfully!"
echo ""
echo "🔗 Next steps:"
echo "1. Go to https://github.com/new"
echo "2. Create a new repository named 'angular-multiselect'"
echo "3. Don't initialize with README (we already have one)"
echo "4. Copy the repository URL"
echo "5. Run these commands:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/angular-multiselect.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "🎉 Your Angular MultiSelect will be live on GitHub!"
