# Angular MultiSelect with ng-select

This project demonstrates a production-ready MultiSelect component built with **Angular 17**, **ng-select 14.9.0**, and **Bootstrap 5**, matching the exact Figma design specifications.

## 🚀 Features

- ✅ **Angular 17** with standalone components
- ✅ **ng-select 14.9.0** for powerful select functionality
- ✅ **Bootstrap 5** for responsive styling
- ✅ **Custom tag display** with remove functionality
- ✅ **Reactive Forms** and Template-driven Forms support
- ✅ **Accessibility** with proper ARIA labels
- ✅ **TypeScript** strict mode
- ✅ **Figma-perfect** styling with custom CSS variables

## 📦 Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   ng serve
   ```

3. **Open your browser:**
   Navigate to `http://localhost:4200/`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── multi-select/          # Main MultiSelect component
│   │   │   └── multi-select.component.ts
│   │   └── tag/                   # Tag display component
│   │       └── tag.component.ts
│   ├── models/
│   │   └── multi-select-item.interface.ts
│   └── app.component.ts           # Demo page
├── styles.scss                    # Global styles & ng-select customization
└── index.html
```

## 🎨 Component Usage

### Basic Usage

```typescript
import { MultiSelectComponent } from "./components/multi-select/multi-select.component";
import { MultiSelectItem } from "./models/multi-select-item.interface";

export class MyComponent {
  selectedItems: MultiSelectItem[] = [];

  availableOptions: MultiSelectItem[] = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
  ];
}
```

```html
<app-multi-select
  label="Tags"
  [availableOptions]="availableOptions"
  [(ngModel)]="selectedItems"
  (selectionChange)="onSelectionChange($event)"
></app-multi-select>
```

### Reactive Forms

```typescript
import { FormControl } from "@angular/forms";

export class MyComponent {
  myControl = new FormControl<MultiSelectItem[]>([]);
}
```

```html
<app-multi-select
  label="Categories"
  [availableOptions]="options"
  [formControl]="myControl"
></app-multi-select>
```

## 🎯 Component API

### Inputs

| Property            | Type                | Default         | Description                           |
| ------------------- | ------------------- | --------------- | ------------------------------------- |
| `label`             | `string`            | `'Tags'`        | Label displayed next to the component |
| `availableOptions`  | `MultiSelectItem[]` | `[]`            | Array of selectable options           |
| `maxWidth`          | `string`            | `'568px'`       | Maximum width of the component        |
| `searchPlaceholder` | `string`            | `'Search tags'` | Placeholder text for search input     |
| `disabled`          | `boolean`           | `false`         | Whether the component is disabled     |

### Outputs

| Event             | Type                              | Description                    |
| ----------------- | --------------------------------- | ------------------------------ |
| `selectionChange` | `EventEmitter<MultiSelectItem[]>` | Emitted when selection changes |

### MultiSelectItem Interface

```typescript
interface MultiSelectItem {
  id: string | number;
  label: string;
  disabled?: boolean;
}
```

## 🎨 Styling

The component uses custom CSS variables matching the Figma design:

```scss
:root {
  --current-blue: #008bc9;
  --bg-pale-blue: #e8f3ff;
  --text-black: #212529;
  --text-med-grey: #bababa;
  --text-dark-grey: #545454;
  --text-hyperlinks: #006cab;
}
```

### Customization

You can override the default styling by modifying the CSS variables or extending the component classes:

```scss
.ng-select.custom-multiselect {
  // Your custom styles here
}
```

## 🔧 Configuration

### ng-select Configuration

The component is configured with the following ng-select options:

- ✅ Multiple selection enabled
- ✅ Search functionality
- ✅ Custom checkbox styling
- ✅ Close on select disabled for better UX
- ✅ Clear search on add enabled
- ✅ Dropdown appended to body for better positioning

### Bootstrap Integration

Bootstrap 5 classes are used for:

- Grid system (`row`, `col-*`)
- Cards (`card`, `card-header`, `card-body`)
- Utilities (`d-flex`, `gap-*`, `text-*`)
- Icons (Bootstrap Icons)

## 🚀 Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## 📝 License

This project is licensed under the MIT License.
