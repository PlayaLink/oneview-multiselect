# 🚀 Manual Publishing Guide

If you're experiencing issues with automated publishing, follow these manual steps:

## 📋 Prerequisites

1. **NPM Account**: Make sure you have an NPM account and are logged in:
   ```bash
   npm login
   npm whoami  # Should show your username
   ```

## 🔧 Step-by-Step Publishing

### 1. Navigate to Package Directory

```bash
cd lib
```

### 2. Install Dependencies (if not already done)

```bash
npm install
```

### 3. Build the Package

```bash
npm run build
```

### 4. Verify Build Output

```bash
ls -la dist/
# Should show: index.js, index.mjs, index.d.ts, etc.
```

### 5. Publish to NPM

```bash
npm publish
```

## 🛠️ Troubleshooting

### Error: "command not found: tsup"

**Solution**: Make sure dependencies are installed:

```bash
npm install
# Then try building again
npm run build
```

### Error: "You must be logged in to publish"

**Solution**: Log in to NPM:

```bash
npm login
```

### Error: "Package already exists"

**Solution**: Update version in package.json:

```bash
npm version patch  # For bug fixes (1.0.0 → 1.0.1)
npm version minor  # For new features (1.0.0 → 1.1.0)
npm version major  # For breaking changes (1.0.0 → 2.0.0)
```

### Error: "Build failed"

**Solution**: Check TypeScript errors:

```bash
npm run typecheck
# Fix any type errors, then try again
```

## ✅ Verification

After successful publishing:

1. **Check NPM**: Visit https://www.npmjs.com/package/oneview-react-multiselect
2. **Test Installation**: In a new project:
   ```bash
   npm install oneview-react-multiselect
   ```
3. **Import Test**:
   ```javascript
   import { MultiSelect } from "oneview-react-multiselect";
   ```

## 🔄 Alternative: Use the Script

If you prefer, use the provided script (after fixing any dependency issues):

```bash
chmod +x scripts/publish.sh
./scripts/publish.sh
```

## 🎯 Success!

Once published, your package will be available globally at:

- **NPM URL**: https://www.npmjs.com/package/oneview-react-multiselect
- **Install Command**: `npm install oneview-react-multiselect`
