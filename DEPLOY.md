# 🚀 Deploy MultiSelect Documentation

This guide helps you deploy your React documentation site for the `oneview-react-multiselect` NPM package.

## 🌐 Deployment Options

### **Option 1: Vercel (Recommended)**

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**

   ```bash
   vercel login
   ```

3. **Deploy from project root:**

   ```bash
   # Build the project first
   npm run build

   # Deploy to Vercel
   vercel
   ```

4. **Follow prompts:**
   - Set up and deploy? **Y**
   - Which scope? **Your account**
   - Link to existing project? **N**
   - Project name? **oneview-react-multiselect-docs**
   - Directory? **./dist**

### **Option 2: Netlify**

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to https://app.netlify.com/drop
   - Drag and drop your `dist` folder
   - Get your URL: `https://random-name.netlify.app`

### **Option 3: GitHub Pages**

1. **Install gh-pages:**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json:**

   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## 🔗 After Deployment

Once deployed, you'll get a URL like:

- **Vercel**: `https://oneview-react-multiselect-docs.vercel.app`
- **Netlify**: `https://amazing-name-123456.netlify.app`
- **GitHub Pages**: `https://yourusername.github.io/your-repo`

## 📝 Update NPM Package

After deployment, update your NPM package README with the documentation link:

```bash
cd lib
# Edit README.md to include documentation link
# Bump version
npm version patch
# Rebuild and republish
npm run build
npm publish
```

## 🎯 Your Live Documentation Will Show:

- ✅ **Interactive Examples** - All MultiSelect variants and configurations
- ✅ **API Documentation** - Complete props table and usage examples
- ✅ **Live Component** - Users can test the component directly
- ✅ **Installation Instructions** - How to install your NPM package
- ✅ **Code Examples** - Copy-paste ready examples

Perfect for developers who want to see your component in action before installing it!
