# oneview-react-multiselect

[![npm version](https://img.shields.io/npm/v/oneview-react-multiselect.svg)](https://www.npmjs.com/package/oneview-react-multiselect)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-16.8+-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

A modern, accessible React MultiSelect component with tags, search, and custom templates. Built for **OneView V2** with enterprise-grade features and beautiful design.

## ✨ Features

- 🔍 **Search & Filter** - Built-in search with real-time filtering
- ➕ **Dynamic Creation** - Create new tags on-the-fly
- 🎨 **Custom Templates** - Flexible UI customization for selected items
- ♿ **Accessibility** - ARIA labels and keyboard navigation
- 🎭 **Multiple Variants** - Different tag styles and orientations
- 📱 **Responsive** - Works seamlessly across screen sizes
- 🔷 **TypeScript** - Full type safety and IntelliSense support
- 🎯 **OneView V2 Ready** - Enterprise design system compliance

## 🚀 Installation

```bash
npm install oneview-react-multiselect
```

## 📖 Usage

### Basic Example

```tsx
import React, { useState } from "react";
import { MultiSelect, type MultiSelectItem } from "oneview-react-multiselect";

function App() {
  const [selectedItems, setSelectedItems] = useState<MultiSelectItem[]>([]);

  const options: MultiSelectItem[] = [
    { id: 1, label: "React" },
    { id: 2, label: "TypeScript" },
    { id: 3, label: "Tailwind CSS" },
    { id: 4, label: "Node.js" },
  ];

  return (
    <MultiSelect
      label="Technologies"
      value={selectedItems}
      options={options}
      onChange={setSelectedItems}
      addButtonText="Add Technology"
      searchPlaceholder="Search technologies..."
    />
  );
}
```

### Advanced Example with Custom Template

```tsx
import React, { useState } from "react";
import {
  MultiSelect,
  Tag,
  type MultiSelectItem,
} from "oneview-react-multiselect";

// Custom selected item component
const CustomSelectedItem = ({ item, onRemove, removable }) => (
  <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-md">
    <span className="font-medium text-blue-900">{item.label}</span>
    {removable && (
      <button onClick={onRemove} className="text-blue-600 hover:text-blue-800">
        ×
      </button>
    )}
  </div>
);

function AdvancedExample() {
  const [selectedItems, setSelectedItems] = useState<MultiSelectItem[]>([]);

  const options: MultiSelectItem[] = [
    { id: 1, label: "Frontend Development" },
    { id: 2, label: "Backend Development", disabled: true },
    { id: 3, label: "DevOps" },
    { id: 4, label: "UI/UX Design" },
  ];

  return (
    <MultiSelect
      label="Skills"
      value={selectedItems}
      options={options}
      onChange={setSelectedItems}
      selectedItemUI={CustomSelectedItem}
      orientation="vertical"
      fullWidthButton={true}
      maxWidth="100%"
    />
  );
}
```

## 📋 API Reference

### MultiSelect Props

| Prop                | Type                                 | Default         | Description                           |
| ------------------- | ------------------------------------ | --------------- | ------------------------------------- |
| `label`             | `string`                             | `"Tags"`        | Label displayed next to the component |
| `value`             | `MultiSelectItem[]`                  | `[]`            | Currently selected items              |
| `options`           | `MultiSelectItem[]`                  | `[]`            | Available options to select from      |
| `onChange`          | `(items: MultiSelectItem[]) => void` | -               | Callback when items change            |
| `selectedItemUI`    | `React.ComponentType`                | `Tag`           | Custom component for selected items   |
| `addButtonText`     | `string`                             | `"Add Tags"`    | Text on the add button                |
| `searchPlaceholder` | `string`                             | `"Search tags"` | Search input placeholder              |
| `maxWidth`          | `string`                             | `"568px"`       | Maximum component width               |
| `orientation`       | `"horizontal" \| "vertical"`         | `"horizontal"`  | Layout direction                      |
| `size`              | `"sm" \| "default" \| "lg"`          | `"default"`     | Component size                        |
| `disabled`          | `boolean`                            | `false`         | Whether component is disabled         |
| `showAddButton`     | `boolean`                            | `true`          | Whether to show add button            |
| `allowRemove`       | `boolean`                            | `true`          | Whether items can be removed          |
| `fullWidthButton`   | `boolean`                            | `false`         | Full-width add button                 |

### MultiSelectItem Interface

```tsx
interface MultiSelectItem {
  id: string | number;
  label: string;
  disabled?: boolean;
}
```

### Tag Props

| Prop        | Type                                                                            | Default     | Description                |
| ----------- | ------------------------------------------------------------------------------- | ----------- | -------------------------- |
| `label`     | `string`                                                                        | -           | Tag text content           |
| `variant`   | `"default" \| "secondary" \| "destructive" \| "success" \| "warning" \| "info"` | `"default"` | Tag color variant          |
| `size`      | `"sm" \| "default" \| "lg"`                                                     | `"default"` | Tag size                   |
| `removable` | `boolean`                                                                       | `true`      | Whether tag can be removed |
| `onRemove`  | `() => void`                                                                    | -           | Remove callback            |
| `loading`   | `boolean`                                                                       | `false`     | Loading state              |

## 🎨 Styling

This component uses Tailwind CSS classes and is designed for the OneView V2 design system. The default styles include:

- **Colors**: Primary blue (`#008BC9`), tag background (`#E8F3FF`)
- **Typography**: Poppins font family with specific letter spacing
- **Spacing**: Consistent padding and margins following OneView V2 specs

### Custom CSS Variables

You can customize the component by overriding these CSS variables:

```css
:root {
  --multiselect-primary: #008bc9;
  --multiselect-tag-bg: #e8f3ff;
  --multiselect-text-primary: #212529;
  --multiselect-text-secondary: #4c5564;
}
```

## 🔧 Development

### Prerequisites

- React 16.8+
- TypeScript 5.5+
- Tailwind CSS 3.0+

### Peer Dependencies

The following packages are required in your project:

```bash
npm install react react-dom
```

### Optional Dependencies

For full functionality, install these Tailwind CSS plugins:

```bash
npm install tailwindcss @tailwindcss/typography
```

## 🌟 Examples

### Different Orientations

```tsx
// Horizontal (default)
<MultiSelect orientation="horizontal" {...props} />

// Vertical
<MultiSelect orientation="vertical" {...props} />
```

### Tag Variants

```tsx
import { Tag } from "oneview-react-multiselect";

<Tag label="Default" variant="default" />
<Tag label="Success" variant="success" />
<Tag label="Warning" variant="warning" />
<Tag label="Error" variant="destructive" />
```

### Disabled State

```tsx
<MultiSelect
  disabled={true}
  value={selectedItems}
  options={options}
  onChange={setSelectedItems}
/>
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 OneView V2

This component is part of the OneView V2 design system, built specifically for healthcare enterprise applications with:

- ✅ WCAG 2.1 AA accessibility compliance
- ✅ Enterprise-grade performance
- ✅ Consistent design language
- ✅ Comprehensive documentation

---

<div align="center">

**Built with ❤️ for the React community**

[Report Bug](https://github.com/jordanchghealthcare/react-multiselect/issues) • [Request Feature](https://github.com/jordanchghealthcare/react-multiselect/issues) • [Documentation](https://github.com/jordanchghealthcare/react-multiselect#readme)

</div>
