# 🏠 Local Development Setup

This guide helps you clone and run the OneView React MultiSelect documentation site locally on your machine.

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

You can verify your installations by running:

```bash
node --version    # Should show v18 or higher
npm --version     # Should show latest version
git --version     # Should show git version
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
# Clone the repository (replace with actual GitHub URL)
git clone https://github.com/yourusername/oneview-react-multiselect-docs.git

# Navigate to the project directory
cd oneview-react-multiselect-docs
```

### 2. Install Dependencies

```bash
# Using npm (recommended)
npm install

# OR using yarn
yarn install

# OR using pnpm
pnpm install
```

### 3. Start Development Server

```bash
# Using npm
npm run dev

# OR using yarn
yarn dev

# OR using pnpm
pnpm dev
```

### 4. Open Your Browser

The development server will start and show you the local URL:

```
➜  Local:   http://localhost:8080/
➜  Network: http://[your-ip]:8080/
```

Open [http://localhost:8080](http://localhost:8080) in your browser to see the documentation site.

## 🎯 What You'll See

After running the project locally, you'll have access to:

- ✅ **Interactive MultiSelect Component** - Test all features live
- ✅ **Complete Documentation** - Props, examples, and usage guides
- ✅ **Multiple Examples** - Different configurations and use cases
- ✅ **Component Library** - Full UI component library (shadcn/ui)
- ✅ **TypeScript Support** - Full type safety and IntelliSense
- ✅ **Hot Module Replacement** - Changes update instantly

## 📁 Project Structure

```
oneview-react-multiselect-docs/
├── src/
│   ├── components/
│   │   ├── MultiSelect/          # Main MultiSelect component
│   │   │   ├── MultiSelect.tsx           # Core component
│   │   │   ├── MultiSelectDropdown.tsx  # Dropdown logic
│   │   │   ├── index.ts                 # Exports
│   │   │   └── README.md                # Component docs
│   │   ├── ui/                   # shadcn/ui component library
│   │   └── Tag.tsx               # Tag component
│   ├── pages/
│   │   ├── Index.tsx             # Main documentation page
│   │   └── NotFound.tsx          # 404 page
│   ├── lib/
│   │   └── utils.ts              # Utility functions
│   └── hooks/                    # Custom React hooks
├── lib/                          # NPM package source
│   ├── src/
│   │   ├── components/           # Package components
│   │   ├── lib/                  # Package utilities
│   │   └── index.ts              # Package exports
│   └── package.json              # Package configuration
├── public/                       # Static assets
├── package.json                  # Dependencies and scripts
├── tailwind.config.ts           # Tailwind CSS configuration
├── vite.config.ts               # Vite configuration
└── vercel.json                  # Deployment configuration
```

## 🛠️ Available Scripts

| Command              | Description                       |
| -------------------- | --------------------------------- |
| `npm run dev`        | Start development server with HMR |
| `npm run build`      | Build production version          |
| `npm run test`       | Run test suite                    |
| `npm run typecheck`  | Check TypeScript types            |
| `npm run format.fix` | Format code with Prettier         |

## 🔧 Development Workflow

### Making Changes

1. **Edit component files** in `src/components/MultiSelect/`
2. **Update documentation** in `src/pages/Index.tsx`
3. **Add new examples** or modify existing ones
4. **Changes will auto-reload** in your browser

### Testing Your Changes

```bash
# Run type checking
npm run typecheck

# Run tests
npm run test

# Format code
npm run format.fix
```

### Building for Production

```bash
# Create production build
npm run build

# Test production build locally
npm run preview
```

## 🎨 Customization

### Styling System

The project uses:

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **CSS Variables** - For theming and dark mode support

### Modifying the Component

1. **Core component**: Edit `src/components/MultiSelect/MultiSelect.tsx`
2. **Dropdown logic**: Edit `src/components/MultiSelect/MultiSelectDropdown.tsx`
3. **Styling**: Modify Tailwind classes or `tailwind.config.ts`
4. **Documentation**: Update `src/pages/Index.tsx`

### Adding New Examples

Edit `src/pages/Index.tsx` to add new usage examples:

```tsx
// Add your example
<MultiSelect
  label="Your Example"
  value={selectedItems}
  options={options}
  onChange={setSelectedItems}
  // Add your custom props
/>
```

## 🔄 NPM Package Development

This repository also contains the actual NPM package in the `lib/` directory:

```bash
# Navigate to package directory
cd lib

# Install package dependencies
npm install

# Build the package
npm run build

# Test the package
npm run test

# Develop with watch mode
npm run dev
```

## 🌐 Deployment

### Deploy Documentation Site

```bash
# Build the site
npm run build

# Deploy to Vercel
npx vercel

# Or deploy to Netlify
# Drag and drop the 'dist' folder to netlify.com/drop
```

### Publish NPM Package

```bash
# Navigate to package
cd lib

# Build and publish
npm run build
npm publish
```

## 🆘 Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Kill process on port 8080
npx kill-port 8080

# Or use a different port
npm run dev -- --port 3000
```

**Dependencies issues:**

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

**TypeScript errors:**

```bash
# Check types
npm run typecheck

# If using VS Code, restart TypeScript server:
# Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

### Getting Help

1. **Check the logs** - Look for error messages in terminal
2. **Clear cache** - Try `npm cache clean --force`
3. **Restart dev server** - Stop (Ctrl+C) and run `npm run dev` again
4. **Check Node version** - Ensure you're using Node 18+

## 📞 Support

If you encounter issues:

1. **Check existing issues** in the GitHub repository
2. **Create a new issue** with:
   - Your operating system
   - Node.js version (`node --version`)
   - Error messages or screenshots
   - Steps to reproduce

## 🎉 You're Ready!

You now have a fully functional local development environment for the OneView React MultiSelect component. Happy coding! 🚀

---

**Next Steps:**

- Explore the codebase in `src/components/MultiSelect/`
- Check out the documentation page at `src/pages/Index.tsx`
- Try making changes and see them update in real-time
- Deploy your own version to Vercel or Netlify
