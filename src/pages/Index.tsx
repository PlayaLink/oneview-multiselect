import React, { useState } from "react";
import {
  MultiSelect,
  MultiSelectItem,
  SelectedItemUIProps,
} from "@/components/MultiSelect";
import { Tag } from "@/components/Tag";

const Index = () => {
  // State for various examples
  const [basicSelection, setBasicSelection] = useState<MultiSelectItem[]>([
    { id: 1, label: "Team A" },
    { id: 2, label: "Team C" },
    { id: 3, label: "California" },
  ]);

  const [emptySelection, setEmptySelection] = useState<MultiSelectItem[]>([]);

  const [verticalSelection, setVerticalSelection] = useState<MultiSelectItem[]>(
    [
      { id: 201, label: "Engineering" },
      { id: 202, label: "Marketing" },
    ],
  );

  const [fullWidthSelection, setFullWidthSelection] = useState<
    MultiSelectItem[]
  >([
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
  ]);

  // Options data
  const basicOptions: MultiSelectItem[] = [
    { id: 1, label: "Team A" },
    { id: 2, label: "Team C" },
    { id: 3, label: "California" },
    { id: 4, label: "Utah" },
    { id: 5, label: "Nebraska" },
    { id: 6, label: "Tennessee" },
    { id: 7, label: "1099" },
    { id: 8, label: "Midwest" },
    { id: 9, label: "Northern Region" },
    { id: 10, label: "Team B" },
    { id: 11, label: "Texas" },
    { id: 12, label: "Florida" },
  ];

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

  const institutionOptions: MultiSelectItem[] = [
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
  ];

  // Custom UI components
  const FullWidthItemUI: React.FC<SelectedItemUIProps> = ({
    item,
    onRemove,
    removable,
  }) => (
    <div className="flex w-full items-start gap-2 p-2 self-stretch">
      <div className="flex-1 text-xs font-normal text-[#212529] font-poppins tracking-[0.429px] leading-normal">
        {item.label}
      </div>
      <div className="flex items-center gap-4 pb-px">
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
        {removable && onRemove && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="flex items-center justify-center hover:bg-red-50 rounded transition-colors"
            aria-label={`Remove ${item.label}`}
          >
            <svg
              className="h-4 w-4 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
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
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">MultiSelect</h1>
          <p className="text-xl text-gray-600 mb-6">
            A modern, accessible multi-select component with tags and dropdown
            functionality.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              React
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
              Accessible
            </span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
              Customizable
            </span>
          </div>
        </header>

        {/* Basic Usage */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Basic Usage
          </h2>
          <p className="text-gray-600 mb-6">
            The most basic usage of MultiSelect with default settings.
          </p>

          <div className="border border-gray-200 rounded-lg p-6">
            <MultiSelect
              label="Tags"
              value={basicSelection}
              options={basicOptions}
              onChange={setBasicSelection}
              addButtonText="Add Tags"
            />
          </div>

          <div className="mt-4 p-4 bg-gray-100 rounded text-sm text-gray-700">
            <strong>Selected:</strong>{" "}
            {basicSelection.map((item) => item.label).join(", ") || "None"}
          </div>
        </section>

        {/* States */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">States</h2>
          <p className="text-gray-600 mb-6">
            Different states of the MultiSelect component.
          </p>

          <div className="space-y-8">
            {/* Empty State */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Empty State
              </h3>
              <p className="text-gray-600 mb-4">
                When no items are selected, users can search and add new items.
              </p>
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <MultiSelect
                  label="Categories"
                  value={emptySelection}
                  options={basicOptions.slice(0, 5)}
                  onChange={setEmptySelection}
                  addButtonText="Add Categories"
                  searchPlaceholder="Search categories..."
                />
              </div>
            </div>

            {/* Disabled State */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Disabled State
              </h3>
              <p className="text-gray-600 mb-4">
                When the component is disabled, users cannot interact with it.
              </p>
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <MultiSelect
                  label="Skills"
                  value={[
                    { id: 101, label: "React" },
                    { id: 102, label: "TypeScript" },
                    { id: 103, label: "TailwindCSS" },
                  ]}
                  options={[]}
                  onChange={() => {}}
                  disabled={true}
                />
              </div>
            </div>

            {/* Read-only State */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Read-only
              </h3>
              <p className="text-gray-600 mb-4">
                Display selected items without the ability to add or remove.
              </p>
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <MultiSelect
                  label="Technologies"
                  value={[
                    { id: 1, label: "React" },
                    { id: 2, label: "TypeScript" },
                    { id: 3, label: "Node.js" },
                  ]}
                  options={[]}
                  onChange={() => {}}
                  allowRemove={false}
                  showAddButton={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Layout Variants */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Layout Variants
          </h2>
          <p className="text-gray-600 mb-6">
            Different layout configurations and orientations.
          </p>

          <div className="space-y-8">
            {/* Vertical Layout */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Vertical Layout
              </h3>
              <p className="text-gray-600 mb-4">
                Stack the label and input vertically for better use of space.
              </p>
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <MultiSelect
                  orientation="vertical"
                  label="Departments"
                  value={verticalSelection}
                  options={departmentOptions}
                  onChange={setVerticalSelection}
                  addButtonText="Add Department"
                  searchPlaceholder="Search departments..."
                />
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Selected: {verticalSelection.length} department
                {verticalSelection.length !== 1 ? "s" : ""}
              </div>
            </div>
          </div>
        </section>

        {/* Custom UI */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Custom Selected Item UI
          </h2>
          <p className="text-gray-600 mb-6">
            Customize how selected items are displayed using the selectedItemUI
            prop.
          </p>

          <div className="space-y-8">
            {/* Full Width Items */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Full Width Items
              </h3>
              <p className="text-gray-600 mb-4">
                Each selected item takes the full width with custom styling and
                external link icon.
              </p>
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <MultiSelect
                  label="Institutions"
                  value={fullWidthSelection}
                  options={institutionOptions}
                  onChange={setFullWidthSelection}
                  selectedItemUI={FullWidthItemUI}
                  addButtonText="Add Institution"
                  maxWidth="100%"
                  fullWidthButton={true}
                />
              </div>
            </div>

            {/* Code Badges */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Code Badges
              </h3>
              <p className="text-gray-600 mb-4">
                Display selected items as code-style badges with monospace font.
              </p>
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
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
                    { id: 106, label: "Java" },
                  ]}
                  onChange={() => {}}
                  selectedItemUI={CustomBadgeUI}
                />
              </div>
            </div>

            {/* Tag Variants */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Tag Variants
              </h3>
              <p className="text-gray-600 mb-4">
                Use different tag variants to indicate status or category.
              </p>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 min-w-[80px]">
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
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 min-w-[80px]">
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
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 min-w-[80px]">
                        Error:
                      </span>
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
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Core Features
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Search and filter options
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Create new tags on-the-fly
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Custom selected item UI
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Configurable label positioning
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Technical Features
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Full TypeScript support
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  WCAG accessibility compliance
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Form library integration
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Responsive design
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Installation
          </h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>
              import &#123; MultiSelect &#125; from "@/components/MultiSelect";
            </code>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
