import React, { useState } from "react";
import {
  MultiSelect,
  Tag,
  type MultiSelectItem,
} from "oneview-react-multiselect";

const NPMTest: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<MultiSelectItem[]>([
    { id: 1, label: "React" },
    { id: 2, label: "TypeScript" },
  ]);

  const [advancedSelectedItems, setAdvancedSelectedItems] = useState<
    MultiSelectItem[]
  >([]);

  const options: MultiSelectItem[] = [
    { id: 1, label: "React" },
    { id: 2, label: "TypeScript" },
    { id: 3, label: "JavaScript" },
    { id: 4, label: "Node.js" },
    { id: 5, label: "Python" },
    { id: 6, label: "Java" },
    { id: 7, label: "C#", disabled: true },
    { id: 8, label: "Go" },
    { id: 9, label: "Rust" },
    { id: 10, label: "Swift" },
  ];

  const skillOptions: MultiSelectItem[] = [
    { id: 1, label: "Frontend Development" },
    { id: 2, label: "Backend Development" },
    { id: 3, label: "DevOps" },
    { id: 4, label: "UI/UX Design" },
    { id: 5, label: "Mobile Development" },
    { id: 6, label: "Database Management" },
    { id: 7, label: "Cloud Computing" },
    { id: 8, label: "Machine Learning" },
  ];

  // Custom selected item component
  const CustomSelectedItem: React.FC<{
    item: MultiSelectItem;
    onRemove?: () => void;
    removable?: boolean;
  }> = ({ item, onRemove, removable }) => (
    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-md border border-blue-200">
      <span className="font-medium text-blue-900">{item.label}</span>
      {removable && onRemove && (
        <button
          onClick={onRemove}
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          ×
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            NPM Package Test
          </h1>
          <p className="text-gray-600 mb-8">
            Testing the oneview-react-multiselect NPM package components
          </p>

          <div className="space-y-12">
            {/* Basic MultiSelect Test */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Basic MultiSelect Component
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <MultiSelect
                  label="Programming Languages"
                  value={selectedItems}
                  options={options}
                  onChange={setSelectedItems}
                  addButtonText="Add Language"
                  searchPlaceholder="Search programming languages..."
                />
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded border">
                <h3 className="font-medium text-blue-900 mb-2">
                  Selected Items:
                </h3>
                <pre className="text-sm text-blue-800">
                  {JSON.stringify(selectedItems, null, 2)}
                </pre>
              </div>
            </section>

            {/* Advanced MultiSelect Test */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Advanced MultiSelect with Custom Template
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <MultiSelect
                  label="Skills"
                  value={advancedSelectedItems}
                  options={skillOptions}
                  onChange={setAdvancedSelectedItems}
                  selectedItemUI={CustomSelectedItem}
                  orientation="vertical"
                  fullWidthButton={true}
                  maxWidth="100%"
                  addButtonText="Add Skill"
                  searchPlaceholder="Search skills..."
                />
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded border">
                <h3 className="font-medium text-green-900 mb-2">
                  Selected Skills:
                </h3>
                <pre className="text-sm text-green-800">
                  {JSON.stringify(advancedSelectedItems, null, 2)}
                </pre>
              </div>
            </section>

            {/* Standalone Tag Components Test */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Standalone Tag Components
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex flex-wrap gap-3">
                  <Tag label="Default Tag" variant="default" />
                  <Tag label="Success Tag" variant="success" />
                  <Tag label="Warning Tag" variant="warning" />
                  <Tag label="Error Tag" variant="destructive" />
                  <Tag label="Info Tag" variant="info" />
                  <Tag label="Secondary Tag" variant="secondary" />
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Tag label="Small Tag" variant="default" size="sm" />
                  <Tag label="Default Size" variant="default" size="default" />
                  <Tag label="Large Tag" variant="default" size="lg" />
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Tag
                    label="Removable Tag"
                    variant="default"
                    removable={true}
                    onRemove={() => alert("Tag removed!")}
                  />
                  <Tag
                    label="Loading Tag"
                    variant="default"
                    loading={true}
                    removable={true}
                    onRemove={() => console.log("Can't remove while loading")}
                  />
                </div>
              </div>
            </section>

            {/* Component Features Demo */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Component Features Demo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Disabled State</h3>
                  <MultiSelect
                    label="Disabled"
                    value={[{ id: 1, label: "Can't interact" }]}
                    options={options}
                    onChange={() => {}}
                    disabled={true}
                  />
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">No Add Button</h3>
                  <MultiSelect
                    label="Read Only"
                    value={[{ id: 1, label: "Fixed item" }]}
                    options={options}
                    onChange={() => {}}
                    showAddButton={false}
                  />
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Non-removable Items</h3>
                  <MultiSelect
                    label="Permanent"
                    value={[{ id: 1, label: "Permanent item" }]}
                    options={options}
                    onChange={() => {}}
                    allowRemove={false}
                  />
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Small Size</h3>
                  <MultiSelect
                    label="Compact"
                    value={[{ id: 1, label: "Small tag" }]}
                    options={options}
                    onChange={() => {}}
                    size="sm"
                  />
                </div>
              </div>
            </section>

            {/* Package Info */}
            <section className="border-t pt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Package Information
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">
                      Package Name:
                    </h3>
                    <code className="text-sm bg-white px-2 py-1 rounded border">
                      oneview-react-multiselect
                    </code>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">Version:</h3>
                    <code className="text-sm bg-white px-2 py-1 rounded border">
                      1.0.0
                    </code>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">
                      Installation:
                    </h3>
                    <code className="text-sm bg-white px-2 py-1 rounded border">
                      npm install oneview-react-multiselect
                    </code>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">Import:</h3>
                    <code className="text-sm bg-white px-2 py-1 rounded border text-wrap">
                      import {"{MultiSelect}"} from 'oneview-react-multiselect'
                    </code>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPMTest;
