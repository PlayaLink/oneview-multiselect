# Publishing @oneview/react-multiselect to NPM

This guide walks you through publishing your MultiSelect component to NPM.

## 🚀 Quick Publishing Steps

### 1. **Prepare Your NPM Account**

```bash
# Login to NPM (if not already logged in)
npm login

# Verify you're logged in
npm whoami
```

### 2. **Test the Package Locally**

```bash
# Navigate to the lib directory
cd lib

# Install dependencies
npm install

# Build the package
npm run build

# Test that everything works
npm run typecheck
```

### 3. **Publish to NPM**

```bash
# Publish the package
npm publish

# If you need to publish as public (first time)
npm publish --access public
```

### 4. **Verify Publication**

Your package will be available at:

- **NPM**: https://www.npmjs.com/package/@oneview/react-multiselect
- **Install command**: `npm install @oneview/react-multiselect`

## 📦 Package Structure

After building, your package includes:

```
dist/
├── index.js          # CommonJS build
├── index.mjs         # ES Module build
├── index.d.ts        # TypeScript declarations
├── index.d.mts       # TypeScript declarations for ESM
├── index.js.map      # Source maps for debugging
└── index.mjs.map     # Source maps for ESM
```

## 🔧 Usage After Publishing

Once published, users can install and use your component:

```bash
npm install @oneview/react-multiselect
```

```tsx
import { MultiSelect, Tag } from "@oneview/react-multiselect";

// Component is ready to use!
<MultiSelect
  value={selectedItems}
  options={options}
  onChange={setSelectedItems}
/>;
```

## 📈 Version Management

To publish updates:

```bash
# Update version
npm version patch  # 1.0.0 → 1.0.1
npm version minor  # 1.0.0 → 1.1.0
npm version major  # 1.0.0 → 2.0.0

# Build and publish
npm run build
npm publish
```

## 🎯 Package Features

Your published package includes:

✅ **Full TypeScript Support** - Complete type definitions
✅ **Tree Shaking** - ESM build for optimal bundling
✅ **CommonJS Support** - Works with older Node.js setups
✅ **Source Maps** - For debugging in development
✅ **Optimized Bundle** - Minified and compressed
✅ **Peer Dependencies** - Minimal footprint

## 🚨 Important Notes

1. **Package Name**: Currently set to `@oneview/react-multiselect`

   - Change in `package.json` if you want a different name
   - Must be unique on NPM

2. **Version**: Starts at `1.0.0`

   - Follows semantic versioning
   - Update before each publish

3. **License**: MIT license included

   - Feel free to change if needed

4. **Dependencies**: Only includes essential packages
   - React/React-DOM are peer dependencies
   - Minimal external dependencies

## 🎉 Success!

Once published, your MultiSelect component will be:

- **Available globally** on NPM
- **Installable** in any React project
- **TypeScript ready** with full IntelliSense
- **Production ready** with optimized builds

## 🔄 Updating the Package

To make changes and republish:

1. **Edit source files** in `lib/src/`
2. **Update version** in `package.json`
3. **Build**: `npm run build`
4. **Publish**: `npm publish`

Your users can then update with:

```bash
npm update @oneview/react-multiselect
```

---

**🎊 Congratulations! Your MultiSelect component is now a published NPM package!**
