#!/bin/bash

echo "🚀 Committing NPM Library for MultiSelect Component..."

# Add all library files
git add lib/

# Add any other changes
git add .

# Create comprehensive commit message
git commit -m "feat: Add NPM library for MultiSelect component

- Complete NPM package setup for oneview-react-multiselect
- Updated MultiSelect component with latest functionality
- Added Tag component with variants and remove functionality  
- Added MultiSelectDropdown with search and create capabilities
- Full TypeScript definitions and exports
- Professional README with examples and API documentation
- Build configuration with CommonJS and ES Module outputs
- Publishing guides and documentation
- MIT license and proper package.json configuration

Ready for NPM publishing at: npm install oneview-react-multiselect"

echo "✅ Library committed successfully!"
echo ""
echo "🔗 Next steps:"
echo "1. Push to GitHub: git push origin main"
echo "2. Pull to your local machine: git pull origin main"
echo "3. Navigate to lib directory: cd lib"
echo "4. Login to NPM: npm login"
echo "5. Publish package: npm publish"
