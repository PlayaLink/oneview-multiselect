# MultiSelect Component Library

A modern, accessible multi-select component with tags and dropdown functionality, built for OneView V2. This repository contains both **React** and **Angular** implementations of the same component with identical functionality and styling.

## 🎯 Purpose

This input component was initially designed to support the **Tags input in the side panel of OneView V2**, but is built with the intention of supporting other multi-select inputs that have different requirements for:

- **Orientation** (label placed above the input vs to the left)
- **UI display** for selected values (inline badges vs custom block elements)
- **Layout flexibility** (horizontal, vertical, wrapping behaviors)

## 🚀 Quick Start

### React Version (Main)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Angular Version

```bash
# Navigate to Angular implementation
cd angular-multiselect

# Install dependencies
npm install

# Start development server
npm start

# Open browser to http://localhost:4200
```

## 📁 Repository Structure

```
multiselect/
├── src/                           # React implementation (main)
│   ├── components/
│   │   ├── MultiSelect/
│   │   │   ├── MultiSelect.tsx           # Main component
│   │   │   ├── MultiSelectDropdown.tsx  # Dropdown functionality
│   │   │   ├── index.ts                 # Exports
│   │   │   └── README.md                # Component docs
│   │   ├── Tag.tsx                      # Standalone tag component
│   │   └── ui/                          # Shadcn/ui components
│   ├── pages/
│   │   └── Index.tsx                    # Demo/documentation page
│   └── ...
├── angular-multiselect/           # Angular implementation
│   ├── src/app/
│   │   ├── components/
│   │   │   ├── multi-select/            # Angular MultiSelect
│   │   │   └── tag/                     # Angular Tag component
│   │   └── app.component.ts             # Angular demo page
│   └── ...
├── package.json                   # React dependencies
└── README.md                      # This file
```

## ✨ Features

### Core Functionality

- ✅ **Search and filter** options in real-time
- ✅ **Create new tags** on-the-fly when exact match not found
- ✅ **Custom selected item UI** via props/templates
- ✅ **Multiple layout orientations** (horizontal/vertical)
- ✅ **Badge wrapping** behavior with many selected items
- ✅ **Accessibility compliance** (ARIA labels, keyboard navigation)

### UI Variants

- ✅ **Inline badges** (default blue tags)
- ✅ **Block elements** (full-width custom rows with external links)
- ✅ **Tag variants** (success, warning, error, info, etc.)

### Framework-Specific Features

#### React Features

- ✅ **TypeScript interfaces** for type safety
- ✅ **Tailwind CSS** styling
- ✅ **Shadcn/ui components** integration
- ✅ **Vite development** environment

#### Angular Features

- ✅ **Reactive Forms integration** (ControlValueAccessor)
- ✅ **Custom templates** via ng-template
- ✅ **Standalone components** (Angular 17+)
- ✅ **OnPush change detection** strategy
- ✅ **Bootstrap 5** integration

## 🎨 Design System

### Color Palette

- **Primary Blue:** `#008BC9` (dropdown borders, buttons)
- **Tag Background:** `#E8F3FF` (pale blue)
- **Text Primary:** `#212529` (black)
- **Text Secondary:** `#4C5564` (medium gray)
- **Hyperlinks:** `#006CAB` (blue)

### Typography

- **Font Family:** Poppins (Google Fonts)
- **Primary Text:** 12px, normal weight
- **Letter Spacing:** 0.429px
- **Exact Figma specifications** maintained

## 🔧 Usage Examples

### React Implementation

```tsx
import { MultiSelect, MultiSelectItem } from "@/components/MultiSelect";

const [selectedItems, setSelectedItems] = useState<MultiSelectItem[]>([]);
const options = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
];

<MultiSelect
  label="Tags"
  value={selectedItems}
  options={options}
  onChange={setSelectedItems}
  addButtonText="Add Tags"
/>;
```

### Angular Implementation

```typescript
// Component
selectedItems: MultiSelectItem[] = [];
options: MultiSelectItem[] = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
];
```

```html
<!-- Template -->
<app-multi-select
  label="Tags"
  [value]="selectedItems"
  [options]="options"
  (valueChange)="selectedItems = $event"
  addButtonText="Add Tags"
>
</app-multi-select>
```

## 📋 Component Props/Inputs

| Prop/Input          | Type                         | Default         | Description                                   |
| ------------------- | ---------------------------- | --------------- | --------------------------------------------- |
| `label`             | `string`                     | `"Tags"`        | Label displayed next to the component         |
| `value`             | `MultiSelectItem[]`          | `[]`            | Currently selected items                      |
| `options`           | `MultiSelectItem[]`          | `[]`            | Available options to select from              |
| `onChange`          | `(items) => void` (React)    | -               | Callback when selection changes (React)       |
| `valueChange`       | `EventEmitter` (Angular)     | -               | Event emitter for selection changes (Angular) |
| `addButtonText`     | `string`                     | `"Add Tags"`    | Text displayed on the add button              |
| `searchPlaceholder` | `string`                     | `"Search tags"` | Placeholder text for the search input         |
| `maxWidth`          | `string`                     | `"568px"`       | Maximum width of the component                |
| `orientation`       | `"horizontal" \| "vertical"` | `"horizontal"`  | Layout orientation                            |
| `size`              | `"sm" \| "default" \| "lg"`  | `"default"`     | Size variant                                  |
| `disabled`          | `boolean`                    | `false`         | Whether the component is disabled             |
| `showAddButton`     | `boolean`                    | `true`          | Whether to show the add button                |
| `allowRemove`       | `boolean`                    | `true`          | Whether items can be removed                  |
| `fullWidthButton`   | `boolean`                    | `false`         | Whether add button takes full width           |
| `selectedItemUI`    | `React.Component` (React)    | `undefined`     | Custom component for selected items (React)   |

## 🛠️ Development

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**

### React Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Type checking
npm run type-check
```

### Angular Development

```bash
cd angular-multiselect

# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build

# Run tests
npm test

# Linting
npm run lint
```

## 🎨 Customization

### Custom Selected Item UI

#### React

```tsx
const CustomItem: React.FC<SelectedItemUIProps> = ({
  item,
  onRemove,
  removable,
}) => (
  <div className="custom-item">
    {item.label}
    {removable && <button onClick={onRemove}>×</button>}
  </div>
);

<MultiSelect selectedItemUI={CustomItem} {...props} />;
```

#### Angular

```html
<app-multi-select [value]="items" [options]="options">
  <ng-template #selectedItem let-item let-onRemove="onRemove">
    <div class="custom-item">
      {{ item.label }}
      <button (click)="onRemove()">×</button>
    </div>
  </ng-template>
</app-multi-select>
```

## 🔄 State Management

### React (with Form Libraries)

```tsx
// React Hook Form
const { control } = useForm();

<Controller
  name="tags"
  control={control}
  render={({ field }) => (
    <MultiSelect value={field.value} onChange={field.onChange} {...props} />
  )}
/>;
```

### Angular (Reactive Forms)

```typescript
// Component
tagControl = new FormControl<MultiSelectItem[]>([]);

// Template
<app-multi-select [formControl]="tagControl" [options]="options">
</app-multi-select>
```

## 🌟 OneView V2 Integration

This component is specifically designed for **OneView V2's side panel** with:

- ✅ **Exact color specifications** matching the design system
- ✅ **Responsive behavior** for side panel constraints
- ✅ **Accessibility compliance** for enterprise applications
- ✅ **TypeScript interfaces** for robust type safety
- ✅ **Performance optimizations** for large datasets

## 📱 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- **Maintain feature parity** between React and Angular versions
- **Follow existing code style** and patterns
- **Add tests** for new functionality
- **Update documentation** for any API changes
- **Test in both frameworks** before submitting

## 📄 License

This project is part of the OneView V2 component library.

---

## 📖 Additional Documentation

- **[React Component Documentation](src/components/MultiSelect/README.md)** - Detailed React API docs
- **[Angular Component Documentation](angular-multiselect/README.md)** - Angular-specific implementation details
- **[Figma Design Specs](https://figma.com/...)** - Design specifications and mockups

## 🆘 Support

For questions, issues, or feature requests:

1. **Check existing issues** in this repository
2. **Create a new issue** with detailed description
3. **Include framework version** (React/Angular)
4. **Provide minimal reproduction** example

---

**Built with ❤️ for OneView V2**
