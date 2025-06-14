import React, { useState } from "react";
import { MultiSelect, MultiSelectItem } from "@/components/ui/multi-select";
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

  const handleRemove = (itemToRemove: MultiSelectItem) => {
    setSelectedItems((items) =>
      items.filter((item) => item.id !== itemToRemove.id),
    );
  };

  const handleAdd = () => {
    // In a real app, this would open a dialog or dropdown to select new items
    const newItem: MultiSelectItem = {
      id: Date.now(),
      label: `New Tag ${selectedItems.length + 1}`,
    };
    setSelectedItems((items) => [...items, newItem]);
  };

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
                items={selectedItems}
                onRemove={handleRemove}
                onAdd={handleAdd}
                addButtonText="Add Tags"
              />
            </CardContent>
          </Card>

          {/* Variations */}
          <Card>
            <CardHeader>
              <CardTitle>Variations</CardTitle>
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
                  items={[]}
                  onAdd={() => console.log("Add clicked")}
                  placeholder="No categories selected"
                />
              </div>

              {/* Read-only */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-3">
                  Read-only (no remove)
                </h3>
                <MultiSelect
                  label="Skills"
                  items={[
                    { id: 1, label: "React" },
                    { id: 2, label: "TypeScript" },
                    { id: 3, label: "TailwindCSS" },
                  ]}
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
                  items={[
                    { id: 1, label: "Engineering" },
                    { id: 2, label: "Marketing" },
                    { id: 3, label: "Sales" },
                  ]}
                  onRemove={(item) => console.log("Remove", item)}
                  onAdd={() => console.log("Add clicked")}
                />
              </div>
            </CardContent>
          </Card>
        </div>

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
                <h3 className="text-sm font-medium text-blue-900">
                  Component Features
                </h3>
                <ul className="mt-2 text-sm text-blue-800 space-y-1">
                  <li>• Fully responsive design</li>
                  <li>• Accessible with proper ARIA labels</li>
                  <li>• Customizable styling with Tailwind CSS</li>
                  <li>• TypeScript support with proper interfaces</li>
                  <li>• Keyboard navigation support</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
