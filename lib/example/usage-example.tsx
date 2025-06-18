import React, { useState } from "react";
import {
  MultiSelect,
  Tag,
  type MultiSelectItem,
  type SelectedItemUIProps,
} from "@oneview/react-multiselect";

// Example 1: Basic Usage
export function BasicExample() {
  const [selectedItems, setSelectedItems] = useState<MultiSelectItem[]>([
    { id: 1, label: "React" },
    { id: 2, label: "TypeScript" },
  ]);

  const options: MultiSelectItem[] = [
    { id: 1, label: "React" },
    { id: 2, label: "TypeScript" },
    { id: 3, label: "Tailwind CSS" },
    { id: 4, label: "Node.js" },
    { id: 5, label: "Express" },
    { id: 6, label: "MongoDB" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Basic MultiSelect</h2>
      <MultiSelect
        label="Technologies"
        value={selectedItems}
        options={options}
        onChange={setSelectedItems}
        addButtonText="Add Technology"
        searchPlaceholder="Search technologies..."
      />
    </div>
  );
}

// Example 2: Custom Selected Item UI
const CustomSelectedItem: React.FC<SelectedItemUIProps> = ({
  item,
  onRemove,
  removable,
}) => (
  <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-md">
    <span className="font-medium text-blue-900">{item.label}</span>
    {removable && onRemove && (
      <button
        onClick={onRemove}
        className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded p-1"
        aria-label={`Remove ${item.label}`}
      >
        ×
      </button>
    )}
  </div>
);

export function CustomUIExample() {
  const [selectedItems, setSelectedItems] = useState<MultiSelectItem[]>([]);

  const options: MultiSelectItem[] = [
    { id: 1, label: "Project Management" },
    { id: 2, label: "Frontend Development" },
    { id: 3, label: "Backend Development" },
    { id: 4, label: "DevOps" },
    { id: 5, label: "UI/UX Design" },
    { id: 6, label: "Quality Assurance" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Custom Selected Item UI</h2>
      <MultiSelect
        label="Skills"
        value={selectedItems}
        options={options}
        onChange={setSelectedItems}
        selectedItemUI={CustomSelectedItem}
        orientation="vertical"
        fullWidthButton={true}
        maxWidth="100%"
        addButtonText="Add Skill"
        searchPlaceholder="Search skills..."
      />
    </div>
  );
}

// Example 3: Different Tag Variants
export function TagVariantsExample() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Tag Variants</h2>
      <div className="flex flex-wrap gap-2">
        <Tag label="Default" variant="default" />
        <Tag label="Success" variant="success" />
        <Tag label="Warning" variant="warning" />
        <Tag label="Error" variant="destructive" />
        <Tag label="Info" variant="info" />
        <Tag label="Secondary" variant="secondary" />
      </div>

      <div className="flex flex-wrap gap-2">
        <Tag label="Small" size="sm" />
        <Tag label="Default Size" size="default" />
        <Tag label="Large" size="lg" />
      </div>

      <div className="flex flex-wrap gap-2">
        <Tag
          label="Removable"
          removable={true}
          onRemove={() => console.log("Removed!")}
        />
        <Tag label="Not Removable" removable={false} />
        <Tag label="Loading" loading={true} />
      </div>
    </div>
  );
}

// Example 4: Full-width Block Layout
export function BlockLayoutExample() {
  const [selectedItems, setSelectedItems] = useState<MultiSelectItem[]>([
    {
      id: 1,
      label: "University of California Berkeley - School of Medicine",
    },
    {
      id: 2,
      label: "Stanford University Medical Center - Department of Cardiology",
    },
  ]);

  const options: MultiSelectItem[] = [
    {
      id: 1,
      label: "University of California Berkeley - School of Medicine",
    },
    {
      id: 2,
      label: "Stanford University Medical Center - Department of Cardiology",
    },
    {
      id: 3,
      label: "Harvard Medical School - Massachusetts General Hospital",
    },
    {
      id: 4,
      label: "Johns Hopkins University School of Medicine",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Block Layout (OneView V2 Style)</h2>
      <MultiSelect
        label="Medical Institutions"
        value={selectedItems}
        options={options}
        onChange={setSelectedItems}
        fullWidthButton={true}
        maxWidth="100%"
        addButtonText="Add Institution"
        searchPlaceholder="Search institutions..."
      />
    </div>
  );
}

// Complete App Example
export function App() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">
        @oneview/react-multiselect Examples
      </h1>

      <BasicExample />
      <CustomUIExample />
      <TagVariantsExample />
      <BlockLayoutExample />

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Installation</h3>
        <code className="bg-gray-200 px-2 py-1 rounded text-sm">
          npm install @oneview/react-multiselect
        </code>
      </div>
    </div>
  );
}

export default App;
