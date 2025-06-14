# MultiSelect Component

A modern, accessible multi-select component with tags and dropdown functionality. Built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ **Fully Accessible** - WCAG compliant with proper ARIA labels
- ✅ **TypeScript Support** - Complete type safety and IntelliSense
- ✅ **Customizable Styling** - Tailwind CSS with variant support
- ✅ **Custom Selected Item UI** - Pass any component to render selected items
- ✅ **Flexible Label Positioning** - Left or right label positioning
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

### Custom Selected Item UI

```tsx
import React from "react";
import { MultiSelect, SelectedItemUIProps } from "@/components/MultiSelect";

// Custom pill UI
const CustomPillUI: React.FC<SelectedItemUIProps> = ({
  item,
  onRemove,
  removable,
}) => (
  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium">
    <span>{item.label}</span>
    {removable && onRemove && (
      <button
        onClick={onRemove}
        className="ml-2 text-white hover:text-gray-200"
      >
        ×
      </button>
    )}
  </div>
);

function CustomUIExample() {
  const [items, setItems] = useState([]);

  return (
    <MultiSelect
      label="Skills"
      value={items}
      options={options}
      onChange={setItems}
      selectedItemUI={CustomPillUI}
    />
  );
}
```

### Label Positioning

```tsx
// Label on the right
<MultiSelect
  label="Categories"
  labelPosition="right"
  value={selectedItems}
  options={options}
  onChange={setSelectedItems}
/>

// Label on the left (default)
<MultiSelect
  label="Tags"
  labelPosition="left"
  value={selectedItems}
  options={options}
  onChange={setSelectedItems}
/>
```

### Using Different Tag Variants

```tsx
import { Tag } from "@/components/Tag";

// Success variant
<MultiSelect
  value={items}
  options={options}
  onChange={setItems}
  selectedItemUI={({ item, onRemove, removable }) => (
    <Tag
      label={item.label}
      variant="success"
      onRemove={onRemove}
      removable={removable}
    />
  )}
/>

// Warning variant
<MultiSelect
  selectedItemUI={({ item, onRemove, removable }) => (
    <Tag
      label={item.label}
      variant="warning"
      size="lg"
      onRemove={onRemove}
      removable={removable}
    />
  )}
/>
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

| Prop                | Type                                       | Default         | Description                                   |
| ------------------- | ------------------------------------------ | --------------- | --------------------------------------------- |
| `label`             | `string`                                   | `"Tags"`        | Label displayed next to the component         |
| `labelPosition`     | `"left" \| "right"`                        | `"left"`        | Position of the label relative to the input   |
| `value`             | `MultiSelectItem[]`                        | `[]`            | Currently selected items                      |
| `options`           | `MultiSelectItem[]`                        | `[]`            | Available options to select from              |
| `onChange`          | `(items: MultiSelectItem[]) => void`       | -               | Callback when items are added or removed      |
| `selectedItemUI`    | `React.ComponentType<SelectedItemUIProps>` | `DefaultTag`    | Custom component to render each selected item |
| `addButtonText`     | `string`                                   | `"Add Tags"`    | Text displayed on the add button              |
| `searchPlaceholder` | `string`                                   | `"Search tags"` | Placeholder text for the search input         |
| `maxWidth`          | `string`                                   | `"568px"`       | Maximum width of the component                |
| `disabled`          | `boolean`                                  | `false`         | Whether the component is disabled             |
| `showAddButton`     | `boolean`                                  | `true`          | Whether to show the add button                |
| `allowRemove`       | `boolean`                                  | `true`          | Whether items can be removed                  |
| `orientation`       | `"horizontal" \| "vertical"`               | `"horizontal"`  | Layout orientation                            |
| `size`              | `"sm" \| "default" \| "lg"`                | `"default"`     | Component size variant                        |

### SelectedItemUIProps Interface

```tsx
interface SelectedItemUIProps {
  item: MultiSelectItem;
  onRemove?: () => void;
  removable?: boolean;
}
```

### MultiSelectItem Interface

```tsx
interface MultiSelectItem {
  id: string | number;
  label: string;
  disabled?: boolean;
}
```

## Standalone Tag Component

The Tag component can also be used independently:

```tsx
import { Tag } from "@/components/Tag";

// Basic tag
<Tag label="Basic Tag" />

// Removable tag
<Tag
  label="Remove Me"
  removable
  onRemove={() => console.log('removed')}
/>

// Different variants
<Tag label="Success" variant="success" />
<Tag label="Warning" variant="warning" />
<Tag label="Error" variant="destructive" />
<Tag label="Info" variant="info" />

// Different sizes
<Tag label="Small" size="sm" />
<Tag label="Default" size="default" />
<Tag label="Large" size="lg" />

// Loading state
<Tag label="Loading..." loading />
```

### Tag Props

| Prop         | Type                                                                            | Default     | Description                                     |
| ------------ | ------------------------------------------------------------------------------- | ----------- | ----------------------------------------------- |
| `label`      | `string`                                                                        | -           | The text content of the tag                     |
| `onRemove`   | `() => void`                                                                    | -           | Callback when the remove button is clicked      |
| `removable`  | `boolean`                                                                       | `true`      | Whether the tag can be removed                  |
| `variant`    | `"default" \| "secondary" \| "destructive" \| "success" \| "warning" \| "info"` | `"default"` | Tag color variant                               |
| `size`       | `"sm" \| "default" \| "lg"`                                                     | `"default"` | Tag size variant                                |
| `removeIcon` | `React.ReactNode`                                                               | -           | Custom icon to display instead of the default X |
| `loading`    | `boolean`                                                                       | `false`     | Whether the tag is in a loading state           |

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

### Custom Selected Item Components

Create your own selected item UI:

```tsx
const CustomSelectedItem: React.FC<SelectedItemUIProps> = ({
  item,
  onRemove,
  removable,
}) => (
  <div className="custom-selected-item">
    <span>{item.label}</span>
    {removable && <button onClick={onRemove}>Remove</button>}
  </div>
);

<MultiSelect selectedItemUI={CustomSelectedItem} />;
```

## Examples

### E-commerce Product Tags

```tsx
const ProductTags = () => {
  const [tags, setTags] = useState([]);

  return (
    <MultiSelect
      label="Product Categories"
      value={tags}
      options={categories}
      onChange={setTags}
      selectedItemUI={({ item, onRemove, removable }) => (
        <Tag
          label={item.label}
          variant="info"
          size="sm"
          onRemove={onRemove}
          removable={removable}
        />
      )}
    />
  );
};
```

### Team Member Assignment

```tsx
const TeamAssignment = () => {
  const [members, setMembers] = useState([]);

  const MemberUI = ({ item, onRemove, removable }) => (
    <div className="flex items-center bg-blue-100 rounded-full px-3 py-1">
      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs mr-2">
        {item.label.charAt(0)}
      </div>
      <span className="text-sm">{item.label}</span>
      {removable && (
        <button onClick={onRemove} className="ml-2 text-blue-600">
          ×
        </button>
      )}
    </div>
  );

  return (
    <MultiSelect
      label="Assign Members"
      labelPosition="right"
      value={members}
      options={teamMembers}
      onChange={setMembers}
      selectedItemUI={MemberUI}
    />
  );
};
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
