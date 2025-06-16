# 🏷️ Angular MultiSelect Component

[![Angular](https://img.shields.io/badge/Angular-17+-red?logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4+-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, accessible multi-select component with tags and dropdown functionality for Angular applications. Built for **OneView V2** with enterprise-grade features and beautiful design.

![Angular MultiSelect Demo](https://via.placeholder.com/800x400/008BC9/ffffff?text=Angular+MultiSelect+Component)

## ✨ Features

### 🎯 Core Features

- **🔍 Search & Filter** - Quickly find options with built-in search
- **➕ Dynamic Creation** - Create new items on-the-fly
- **🎨 Custom Templates** - Flexible UI customization for selected items
- **📱 Responsive Design** - Works on all screen sizes
- **♿ Accessibility** - ARIA labels and keyboard navigation

### 🅰️ Angular-Specific Features

- **📋 Reactive Forms** - Full `ControlValueAccessor` integration
- **🧩 Custom Templates** - Use `ng-template` for custom UI
- **⚡ Standalone Components** - Angular 17+ pattern
- **🚀 OnPush Strategy** - Optimized change detection
- **🔷 TypeScript** - Complete type safety

### 🎭 UI Variants

- **🏷️ Inline Badges** - Default compact tag display
- **📄 Block Elements** - Full-width custom rows
- **🌈 Tag Variants** - Multiple color schemes
- **📐 Layout Options** - Horizontal/vertical orientations

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/angular-multiselect.git

# Navigate to project
cd angular-multiselect

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:4200](http://localhost:4200) to see the live demo with full documentation!

## 📖 Usage

### Basic Implementation

```typescript
import { MultiSelectComponent } from "./components/multi-select/multi-select.component";

@Component({
  imports: [MultiSelectComponent],
  template: `
    <app-multi-select
      label="Tags"
      [value]="selectedItems"
      [options]="availableOptions"
      (valueChange)="selectedItems = $event"
      addButtonText="Add Tags"
    ></app-multi-select>
  `,
})
export class MyComponent {
  selectedItems: MultiSelectItem[] = [];
  availableOptions: MultiSelectItem[] = [
    { id: 1, label: "Angular" },
    { id: 2, label: "TypeScript" },
    { id: 3, label: "Bootstrap" },
  ];
}
```

### Reactive Forms Integration

```typescript
// Perfect integration with Angular forms
formControl = new FormControl<MultiSelectItem[]>([]);

// In template
<app-multi-select [formControl]="formControl" [options]="options">
</app-multi-select>
```

### Custom Templates

```html
<app-multi-select [value]="items" [options]="options">
  <ng-template #selectedItem let-item let-onRemove="onRemove">
    <div class="custom-item">
      <span>{{ item.label }}</span>
      <button (click)="onRemove()" class="remove-btn">×</button>
    </div>
  </ng-template>
</app-multi-select>
```

## 📋 API Reference

### Component Inputs

| Input             | Type                         | Default        | Description           |
| ----------------- | ---------------------------- | -------------- | --------------------- |
| `label`           | `string`                     | `"Tags"`       | Component label       |
| `value`           | `MultiSelectItem[]`          | `[]`           | Selected items        |
| `options`         | `MultiSelectItem[]`          | `[]`           | Available options     |
| `orientation`     | `"horizontal" \| "vertical"` | `"horizontal"` | Layout direction      |
| `disabled`        | `boolean`                    | `false`        | Disable component     |
| `allowRemove`     | `boolean`                    | `true`         | Allow item removal    |
| `fullWidthButton` | `boolean`                    | `false`        | Full-width add button |

### Component Outputs

| Output        | Type                              | Description       |
| ------------- | --------------------------------- | ----------------- |
| `valueChange` | `EventEmitter<MultiSelectItem[]>` | Selection changes |

### Interfaces

```typescript
interface MultiSelectItem {
  id: string | number;
  label: string;
  disabled?: boolean;
}
```

## 🎨 Design System

Built with **OneView V2** design specifications:

- **🎨 Colors**: Primary blue (#008BC9), Tag background (#E8F3FF)
- **📝 Typography**: Poppins font, 12px size, 0.429px letter-spacing
- **🎯 Components**: Bootstrap 5 with custom styling
- **📱 Responsive**: Mobile-first approach

## 📁 Project Structure

```
angular-multiselect/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── multi-select/           # 🎯 Main component
│   │   │   │   ├── multi-select.component.ts
│   │   │   │   └── multi-select-dropdown.component.ts
│   │   │   └── tag/                    # 🏷️ Tag component
│   │   │       └── tag.component.ts
│   │   ├── models/
│   │   │   └── multi-select-item.interface.ts # 📝 TypeScript interfaces
│   │   └── app.component.ts            # 📚 Demo & docs
│   └── styles.scss                     # 🎨 Global styles
├── README.md                           # 📖 Documentation
└── package.json                        # 📦 Dependencies
```

## 🔧 Development

```bash
# Development server
npm start              # http://localhost:4200

# Build for production
npm run build          # Output in dist/

# Run tests
npm test               # Unit tests

# Linting
npm run lint           # Code quality
```

## 🌟 Live Demo

The development server includes a comprehensive demo showcasing:

- 📊 **States**: Empty, read-only modes
- 📐 **Layouts**: Horizontal, vertical, wrapping
- 🎨 **Custom UI**: Badges vs block elements
- 📋 **Forms**: Reactive forms integration
- 📖 **Documentation**: Complete API reference

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 Built for OneView V2

This component is specifically designed for **OneView V2's** side panel tags input, featuring:

- ✅ Enterprise-grade accessibility
- ✅ Exact design system compliance
- ✅ TypeScript for robust development
- ✅ Scalable architecture for complex applications

---

<div align="center">

**⭐ Star this repository if it helped you!**

Made with ❤️ for Angular developers

</div>
