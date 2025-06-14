import React, { useState } from "react";
import {
  MultiSelect,
  MultiSelectItem,
  SelectedItemUIProps,
} from "@/components/MultiSelect";
import { Tag } from "@/components/Tag";
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

  const [verticalSelection, setVerticalSelection] = useState<MultiSelectItem[]>(
    [
      { id: 201, label: "Engineering" },
      { id: 202, label: "Marketing" },
    ],
  );

  const departmentOptions: MultiSelectItem[] = [
    { id: 201, label: "Engineering" },
    { id: 202, label: "Marketing" },
    { id: 203, label: "Sales" },
    { id: 204, label: "Support" },
    { id: 205, label: "Operations" },
    { id: 206, label: "Human Resources" },
    { id: 207, label: "Finance" },
    { id: 208, label: "Research & Development" },
  ];

  // Custom selected item UI examples
  const FullWidthItemUI: React.FC<SelectedItemUIProps> = ({
    item,
    onRemove,
    removable,
  }) => (
    <div className="flex w-full items-start gap-2 p-2 self-stretch">
      <div className="flex-1 text-xs font-normal text-[#212529] font-poppins tracking-[0.429px] leading-normal">
        {item.label}
      </div>
      <div className="flex items-center justify-center pb-px">
        <svg
          className="h-4 w-4 text-[#4C5564]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </div>
  );

  const CustomBadgeUI: React.FC<SelectedItemUIProps> = ({
    item,
    onRemove,
    removable,
  }) => (
    <div className="inline-flex items-center px-2 py-1 rounded bg-green-100 border border-green-300 text-green-800 text-xs">
      <span className="font-mono">{item.label}</span>
      {removable && onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 text-green-600 hover:text-green-800 focus:outline-none"
          aria-label={`Remove ${item.label}`}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );

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
                  Vertical Layout (Interactive)
                </h3>
                <MultiSelect
                  orientation="vertical"
                  label="Departments"
                  value={verticalSelection}
                  options={departmentOptions}
                  onChange={setVerticalSelection}
                  addButtonText="Add Department"
                  searchPlaceholder="Search departments..."
                />
                <div className="mt-2 text-xs text-slate-500">
                  Selected: {verticalSelection.length} department
                  {verticalSelection.length !== 1 ? "s" : ""}
                </div>
              </div>

              {/* Custom Selected Item UI - Full Width */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-3">
                  Custom UI - Full Width Items
                </h3>
                <MultiSelect
                  label="Institutions"
                  value={[
                    {
                      id: 1,
                      label:
                        "University of California Berkeley - School of Optometry - TIN 12353843",
                    },
                    {
                      id: 2,
                      label:
                        "Stanford University Medical Center - Department of Ophthalmology - TIN 98765432",
                    },
                    {
                      id: 3,
                      label:
                        "Harvard Medical School - Massachusetts Eye and Ear - TIN 11223344",
                    },
                  ]}
                  options={[
                    {
                      id: 1,
                      label:
                        "University of California Berkeley - School of Optometry - TIN 12353843",
                    },
                    {
                      id: 2,
                      label:
                        "Stanford University Medical Center - Department of Ophthalmology - TIN 98765432",
                    },
                    {
                      id: 3,
                      label:
                        "Harvard Medical School - Massachusetts Eye and Ear - TIN 11223344",
                    },
                    {
                      id: 4,
                      label: "UCLA Jules Stein Eye Institute - TIN 55667788",
                    },
                    {
                      id: 5,
                      label: "UCSF Department of Ophthalmology - TIN 99887766",
                    },
                  ]}
                  onChange={() => {}}
                  selectedItemUI={FullWidthItemUI}
                  addButtonText="Add Institution"
                  maxWidth="100%"
                  fullWidthButton={true}
                />
              </div>

              {/* Custom Selected Item UI - Badges */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-3">
                  Custom UI - Code Badges
                </h3>
                <MultiSelect
                  label="Languages"
                  value={[
                    { id: 101, label: "JavaScript" },
                    { id: 102, label: "TypeScript" },
                    { id: 103, label: "Python" },
                  ]}
                  options={[
                    { id: 101, label: "JavaScript" },
                    { id: 102, label: "TypeScript" },
                    { id: 103, label: "Python" },
                    { id: 104, label: "Go" },
                    { id: 105, label: "Rust" },
                  ]}
                  onChange={() => {}}
                  selectedItemUI={CustomBadgeUI}
                />
              </div>

              {/* Different Tag Variants */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-3">
                  Different Tag Variants
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-slate-500 mr-2">
                      Success:
                    </span>
                    <MultiSelect
                      value={[{ id: 1, label: "Completed" }]}
                      options={[]}
                      onChange={() => {}}
                      selectedItemUI={({ item, onRemove, removable }) => (
                        <Tag
                          label={item.label}
                          variant="success"
                          onRemove={onRemove}
                          removable={removable}
                        />
                      )}
                      showAddButton={false}
                    />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 mr-2">
                      Warning:
                    </span>
                    <MultiSelect
                      value={[{ id: 1, label: "Pending" }]}
                      options={[]}
                      onChange={() => {}}
                      selectedItemUI={({ item, onRemove, removable }) => (
                        <Tag
                          label={item.label}
                          variant="warning"
                          onRemove={onRemove}
                          removable={removable}
                        />
                      )}
                      showAddButton={false}
                    />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 mr-2">Error:</span>
                    <MultiSelect
                      value={[{ id: 1, label: "Failed" }]}
                      options={[]}
                      onChange={() => {}}
                      selectedItemUI={({ item, onRemove, removable }) => (
                        <Tag
                          label={item.label}
                          variant="destructive"
                          onRemove={onRemove}
                          removable={removable}
                        />
                      )}
                      showAddButton={false}
                    />
                  </div>
                </div>
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
                    <li>• Custom selected item UI with selectedItemUI prop</li>
                    <li>• Configurable label positioning (left/right)</li>
                    <li>• Standalone Tag component with multiple variants</li>
                    <li>• Full TypeScript support with interfaces</li>
                    <li>• Accessible with proper ARIA labels</li>
                    <li>• Form integration ready (React Hook Form, Formik)</li>
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
