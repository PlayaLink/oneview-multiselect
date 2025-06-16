# Angular MultiSelect Component

A modern, accessible multi-select component with tags and dropdown functionality for Angular applications. Initially built to support the Tags input in the side panel of OneView V2, but designed with flexibility for other multi-select use cases.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher recommended)
- Angular CLI (v17 or higher)

### Installation & Running

1. **Navigate to the Angular project:**

   ```bash
   cd angular-multiselect
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser:**
   Navigate to `http://localhost:4200` to see the full documentation and interactive examples.

### Available Scripts

- `npm start` - Start development server (runs on http://localhost:4200)
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode
- `npm test` - Run unit tests
- `npm run lint` - Run linting
- `ng version` - Check Angular CLI and project versions

## 📁 Project Structure

```
angular-multiselect/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── multi-select/           # Main MultiSelect component
│   │   │   │   ├── multi-select.component.ts
│   │   │   │   └── multi-select-dropdown.component.ts
│   │   │   └── tag/                    # Tag component with variants
│   │   │       └── tag.component.ts
│   │   ├── models/
│   │   │   └── multi-select-item.interface.ts
│   │   ├── app.component.ts            # Demo/documentation page
│   │   ├── app.component.html          # Demo template
│   │   └── app.module.ts               # Module configuration
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
└── README.md
```

## 🎯 Features

### Core Features

- ✅ Search and filter options
- ✅ Create new tags on-the-fly
- ✅ Custom selected item UI templates
- ✅ Multiple layout orientations (horizontal/vertical)
- ✅ Badge wrapping with many selected items

### Angular-Specific Features

- ✅ **Reactive Forms Integration** (`ControlValueAccessor`)
- ✅ **Custom Templates** (via `ng-template` and `@ContentChild`)
- ✅ **Standalone Components** (Angular 17+ pattern)
- ✅ **OnPush Change Detection** (optimized performance)
- ✅ **Full TypeScript Support** with interfaces

### UI Variants

- ✅ Inline badges (default)
- ✅ Block elements (custom full-width rows)
- ✅ Multiple tag variants (success, warning, error, etc.)

## 🔧 Basic Usage

### Import the Component

```typescript
import { MultiSelectComponent } from './components/multi-select/multi-select.component';

@Component({
  imports: [MultiSelectComponent],
  // ...
})
```

### Basic Implementation

```html
<app-multi-select
  label="Tags"
  [value]="selectedItems"
  [options]="availableOptions"
  (valueChange)="selectedItems = $event"
  addButtonText="Add Tags"
>
</app-multi-select>
```

### With Custom Template

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

### Reactive Forms Integration

```typescript
// In your component
formControl = new FormControl<MultiSelectItem[]>([]);

// In template
<app-multi-select
  [formControl]="formControl"
  [options]="options">
</app-multi-select>
```

## 📋 Component Inputs

| Input               | Type                         | Default         | Description                           |
| ------------------- | ---------------------------- | --------------- | ------------------------------------- |
| `label`             | `string`                     | `"Tags"`        | Label displayed next to the component |
| `value`             | `MultiSelectItem[]`          | `[]`            | Currently selected items              |
| `options`           | `MultiSelectItem[]`          | `[]`            | Available options to select from      |
| `addButtonText`     | `string`                     | `"Add Tags"`    | Text displayed on the add button      |
| `searchPlaceholder` | `string`                     | `"Search tags"` | Placeholder text for the search input |
| `maxWidth`          | `string`                     | `"568px"`       | Maximum width of the component        |
| `orientation`       | `"horizontal" \| "vertical"` | `"horizontal"`  | Layout orientation                    |
| `size`              | `"sm" \| "default" \| "lg"`  | `"default"`     | Size variant                          |
| `disabled`          | `boolean`                    | `false`         | Whether the component is disabled     |
| `showAddButton`     | `boolean`                    | `true`          | Whether to show the add button        |
| `allowRemove`       | `boolean`                    | `true`          | Whether items can be removed          |
| `fullWidthButton`   | `boolean`                    | `false`         | Whether add button takes full width   |

## 🎨 Styling

The component uses:

- **Bootstrap 5** for base styling
- **Poppins** font from Google Fonts
- **Custom CSS** for exact design specifications
- **Bootstrap Icons** for UI elements

### Color Palette

- Primary blue: `#008BC9`
- Tag background: `#E8F3FF`
- Text primary: `#212529`
- Text secondary: `#4C5564`

## 🌟 Advanced Features

### Custom Selected Item Templates

Use Angular's template system to customize how selected items are displayed:

```html
<app-multi-select [value]="items" [options]="options">
  <ng-template
    #selectedItem
    let-item
    let-removable="removable"
    let-onRemove="onRemove"
  >
    <!-- Your custom UI here -->
  </ng-template>
</app-multi-select>
```

### Form Validation

Works seamlessly with Angular's reactive forms and validation:

```typescript
this.form = this.fb.group({
  tags: [[], [Validators.required, Validators.minLength(1)]],
});
```

## 🔄 Development

### Build for Production

```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

### Run Tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

## 🚀 Live Demo

After running `npm start`, the development server provides a comprehensive demo showcasing:

- **States**: Empty state, read-only mode
- **Layouts**: Horizontal, vertical, badge wrapping
- **Custom UI**: Inline badges (default) and block elements (custom)
- **Form Integration**: Reactive forms support
- **Documentation**: Complete inputs table and usage examples

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 OneView V2 Integration

This component is specifically designed for OneView V2's side panel tags input, featuring:

- Exact color specifications matching the design system
- Responsive behavior for side panel constraints
- Accessibility compliance for enterprise applications
- TypeScript interfaces for robust type safety

## 📄 License

This project is part of the OneView V2 component library.
