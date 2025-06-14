import React, { useState } from "react";
import { MultiSelect, MultiSelectItem } from "@/components/MultiSelect";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  const [selectedItems, setSelectedItems] = useState<MultiSelectItem[]>([
    { id: 1, label: "Team A" },
    { id: 2, label: "Team c" },
    { id: 3, label: "California" },
    { id: 4, label: "Utah" },
    { id: 5, label: "Nebraska" },
    { id: 6, label: "Tennessee" },
  ]);

  const availableOptions: MultiSelectItem[] = [
    { id: 1, label: "Team A" },
    { id: 2, label: "Team c" },
    { id: 3, label: "California" },
    { id: 4, label: "Utah" },
    { id: 5, label: "Nebraska" },
    { id: 6, label: "Tennessee" },
    { id: 7, label: "1099" },
    { id: 8, label: "Midwest" },
    { id: 9, label: "Northern Region" },
    { id: 10, label: "Team B" },
    { id: 11, label: "Team C" },
    { id: 12, label: "Texas" },
  ];

  const [emptySelection, setEmptySelection] = useState<MultiSelectItem[]>([]);
  const [readOnlySelection] = useState<MultiSelectItem[]>([
    { id: 101, label: "React" },
    { id: 102, label: "TypeScript" },
    { id: 103, label: "TailwindCSS" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            MultiSelect Component Demo
          </h1>
          <p className="text-slate-600">
            Interactive multi-select component with removable tags
          </p>
        </div>

        <div className="grid gap-8">
          {/* Main Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Default MultiSelect</CardTitle>
              <CardDescription>
                Click the X to remove items, or "Add Tags" to add new ones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <MultiSelect
                label="Tags"
                value={selectedItems}
                options={availableOptions}
                onChange={setSelectedItems}
                addButtonText="Add Tags"
              />
            </CardContent>
          </Card>

          {/* Variations */}
          <Card>
            <CardHeader>
              <CardTitle>Component Variations</CardTitle>
              <CardDescription>
                Different configurations of the MultiSelect component
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Empty State */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-3">
                  Empty State
                </h3>
                <MultiSelect
                  label="Categories"
                  value={emptySelection}
                  options={availableOptions.slice(0, 5)}
                  onChange={setEmptySelection}
                  addButtonText="Add Categories"
                  searchPlaceholder="Search categories..."
                />
              </div>

              {/* Read-only */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-3">
                  Read-only (no remove)
                </h3>
                <MultiSelect
                  label="Skills"
                  value={readOnlySelection}
                  options={[]}
                  onChange={() => {}}
                  allowRemove={false}
                  showAddButton={false}
                />
              </div>

              {/* Disabled State */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-3">
                  Disabled State
                </h3>
                <MultiSelect
                  label="Locked Tags"
                  value={selectedItems.slice(0, 3)}
                  options={availableOptions}
                  onChange={() => {}}
                  disabled={true}
                />
              </div>

              {/* Vertical Layout */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-3">
                  Vertical Layout
                </h3>
                <MultiSelect
                  orientation="vertical"
                  label="Departments"
                  value={[
                    { id: 201, label: "Engineering" },
                    { id: 202, label: "Marketing" },
                  ]}
                  options={[
                    { id: 201, label: "Engineering" },
                    { id: 202, label: "Marketing" },
                    { id: 203, label: "Sales" },
                    { id: 204, label: "Support" },
                    { id: 205, label: "Operations" },
                  ]}
                  onChange={(items) =>
                    console.log("Vertical selection:", items)
                  }
                />
              </div>

              {/* Custom Styling */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-3">
                  Custom Width
                </h3>
                <MultiSelect
                  label="Custom"
                  value={selectedItems.slice(0, 2)}
                  options={availableOptions}
                  onChange={() => {}}
                  maxWidth="400px"
                  addButtonText="Add Item"
                />
              </div>
            </CardContent>
          </Card>

          {/* API Demo */}
          <Card>
            <CardHeader>
              <CardTitle>API Integration Example</CardTitle>
              <CardDescription>
                Example showing how to integrate with forms and APIs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-medium text-slate-700 mb-2">
                  Current Selection:
                </h4>
                <pre className="text-sm text-slate-600 bg-white p-2 rounded border overflow-auto">
                  {JSON.stringify(selectedItems, null, 2)}
                </pre>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedItems([])}
                  className="px-3 py-1 bg-slate-200 text-slate-700 rounded text-sm hover:bg-slate-300"
                >
                  Clear All
                </button>
                <button
                  onClick={() => {
                    const randomItem =
                      availableOptions[
                        Math.floor(Math.random() * availableOptions.length)
                      ];
                    if (
                      !selectedItems.find((item) => item.id === randomItem.id)
                    ) {
                      setSelectedItems([...selectedItems, randomItem]);
                    }
                  }}
                  className="px-3 py-1 bg-blue-200 text-blue-700 rounded text-sm hover:bg-blue-300"
                >
                  Add Random
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Info */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <svg
                    className="h-4 w-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-blue-900 mb-2">
                    Production-Ready Component
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>
                      • Export from{" "}
                      <code className="bg-blue-100 px-1 rounded">
                        @/components/MultiSelect
                      </code>
                    </li>
                    <li>• Full TypeScript support with interfaces</li>
                    <li>• Accessible with proper ARIA labels</li>
                    <li>• Customizable styling with Tailwind CSS</li>
                    <li>• Form integration ready (React Hook Form, Formik)</li>
                    <li>• Comprehensive documentation included</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
