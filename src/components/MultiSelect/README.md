# MultiSelect Component

A modern, accessible multi-select component with tags and dropdown functionality. Built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ **Fully Accessible** - WCAG compliant with proper ARIA labels
- ✅ **TypeScript Support** - Complete type safety and IntelliSense
- ✅ **Customizable Styling** - Tailwind CSS with variant support
- ✅ **Search Functionality** - Filter options with built-in search
- ✅ **Keyboard Navigation** - Full keyboard support
- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **Production Ready** - Tested and optimized for performance

## Installation

```bash
# Copy the MultiSelect folder to your components directory
cp -r src/components/MultiSelect your-project/src/components/
```

## Dependencies

Make sure you have these dependencies installed:

```bash
npm install lucide-react class-variance-authority
```

Required peer dependencies:

- `react >= 18.0.0`
- `@radix-ui/react-popover`
- `tailwindcss`

## Basic Usage

```tsx
import React, { useState } from "react";
import { MultiSelect, MultiSelectItem } from "@/components/MultiSelect";

function MyComponent() {
  const [selectedItems, setSelectedItems] = useState<MultiSelectItem[]>([]);

  const options: MultiSelectItem[] = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
  ];

  return (
    <MultiSelect
      label="Select Items"
      value={selectedItems}
      options={options}
      onChange={setSelectedItems}
    />
  );
}
```

## Advanced Usage

### Controlled Component with Validation

```tsx
import React, { useState } from "react";
import { MultiSelect, MultiSelectItem } from "@/components/MultiSelect";

function AdvancedExample() {
  const [selectedItems, setSelectedItems] = useState<MultiSelectItem[]>([]);
  const [error, setError] = useState<string>("");

  const options: MultiSelectItem[] = [
    { id: 1, label: "Frontend" },
    { id: 2, label: "Backend" },
    { id: 3, label: "DevOps", disabled: true },
    { id: 4, label: "Design" },
  ];

  const handleChange = (items: MultiSelectItem[]) => {
    if (items.length > 3) {
      setError("Maximum 3 items allowed");
      return;
    }
    setError("");
    setSelectedItems(items);
  };

  return (
    <div>
      <MultiSelect
        label="Skills"
        value={selectedItems}
        options={options}
        onChange={handleChange}
        addButtonText="Add Skill"
        searchPlaceholder="Search skills..."
        maxWidth="600px"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
```

### Form Integration

```tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { MultiSelect, MultiSelectItem } from "@/components/MultiSelect";

interface FormData {
  skills: MultiSelectItem[];
}

function FormExample() {
  const { control, handleSubmit } = useForm<FormData>();

  const skillOptions: MultiSelectItem[] = [
    { id: 1, label: "React" },
    { id: 2, label: "TypeScript" },
    { id: 3, label: "Node.js" },
  ];

  const onSubmit = (data: FormData) => {
    console.log("Selected skills:", data.skills);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="skills"
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <MultiSelect
            label="Technical Skills"
            value={field.value}
            options={skillOptions}
            onChange={field.onChange}
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## API Reference

### MultiSelect Props

| Prop                | Type                                 | Default         | Description                              |
| ------------------- | ------------------------------------ | --------------- | ---------------------------------------- |
| `label`             | `string`                             | `"Tags"`        | Label displayed next to the component    |
| `value`             | `MultiSelectItem[]`                  | `[]`            | Currently selected items                 |
| `options`           | `MultiSelectItem[]`                  | `[]`            | Available options to select from         |
| `onChange`          | `(items: MultiSelectItem[]) => void` | -               | Callback when items are added or removed |
| `addButtonText`     | `string`                             | `"Add Tags"`    | Text displayed on the add button         |
| `searchPlaceholder` | `string`                             | `"Search tags"` | Placeholder text for the search input    |
| `maxWidth`          | `string`                             | `"568px"`       | Maximum width of the component           |
| `disabled`          | `boolean`                            | `false`         | Whether the component is disabled        |
| `showAddButton`     | `boolean`                            | `true`          | Whether to show the add button           |
| `allowRemove`       | `boolean`                            | `true`          | Whether items can be removed             |
| `orientation`       | `"horizontal" \| "vertical"`         | `"horizontal"`  | Layout orientation                       |
| `size`              | `"sm" \| "default" \| "lg"`          | `"default"`     | Component size variant                   |

### MultiSelectItem Interface

```tsx
interface MultiSelectItem {
  id: string | number;
  label: string;
  disabled?: boolean;
}
```

### Tag Props

| Prop         | Type                                                     | Default     | Description                                     |
| ------------ | -------------------------------------------------------- | ----------- | ----------------------------------------------- |
| `label`      | `string`                                                 | -           | The text content of the tag                     |
| `onRemove`   | `() => void`                                             | -           | Callback when the remove button is clicked      |
| `removable`  | `boolean`                                                | `true`      | Whether the tag can be removed                  |
| `variant`    | `"default" \| "secondary" \| "destructive" \| "success"` | `"default"` | Tag color variant                               |
| `size`       | `"sm" \| "default" \| "lg"`                              | `"default"` | Tag size variant                                |
| `removeIcon` | `React.ReactNode`                                        | -           | Custom icon to display instead of the default X |

## Styling

The component uses Tailwind CSS and can be customized through:

### CSS Variables

```css
:root {
  --current-blue: #008bc9;
  --bg-pale-blue: #e8f3ff;
  --text-black: #212529;
  --text-med-grey: #bababa;
  --text-dark-grey: #545454;
  --text-hyperlinks: #006cab;
}
```

### Custom Variants

```tsx
// Create custom variants
const customTagVariants = cva(
  "inline-flex items-center text-xs font-normal transition-colors",
  {
    variants: {
      variant: {
        custom: "bg-purple-100 text-purple-800 rounded-lg",
      },
    },
  },
);
```

## Accessibility

The component includes:

- **ARIA labels** for screen readers
- **Keyboard navigation** (Tab, Enter, Escape)
- **Focus management** for dropdown interactions
- **Semantic HTML** structure
- **Color contrast** compliance

## Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## Contributing

1. Follow the existing code style
2. Add tests for new features
3. Update documentation
4. Ensure accessibility compliance

## License

MIT License - see LICENSE file for details.
