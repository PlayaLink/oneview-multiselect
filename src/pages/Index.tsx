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

  const [horizontalSelection, setHorizontalSelection] = useState<
    MultiSelectItem[]
  >([
    { id: 101, label: "Team A" },
    { id: 102, label: "Utah" },
  ]);

  const [inlineBadgeSelection, setInlineBadgeSelection] = useState<
    MultiSelectItem[]
  >([
    { id: 301, label: "Design" },
    { id: 302, label: "Frontend" },
    { id: 303, label: "Backend" },
  ]);
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
              <div className="border border-gray-200 rounded-lg p-6">
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

            {/* Read-only State */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Read-only
              </h3>
              <p className="text-gray-600 mb-4">
                Display selected items without the ability to add or remove.
              </p>
              <div className="border border-gray-200 rounded-lg p-6">
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

        {/* Layout */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Layout</h2>
          <p className="text-gray-600 mb-6">
            Different layout configurations and orientations.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Horizontal Layout */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Horizontal
              </h3>
              <p className="text-gray-600 mb-4">
                Label and input positioned side by side (default layout).
              </p>
              <div className="border border-gray-200 rounded-lg p-6">
                <MultiSelect
                  orientation="horizontal"
                  label="Categories"
                  value={horizontalSelection}
                  options={basicOptions.slice(0, 6)}
                  onChange={setHorizontalSelection}
                  addButtonText="Add Category"
                  searchPlaceholder="Search categories..."
                />
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Default horizontal layout
              </div>
            </div>

            {/* Vertical Layout */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Vertical
              </h3>
              <p className="text-gray-600 mb-4">
                Stack the label and input vertically for better use of space.
              </p>
              <div className="border border-gray-200 rounded-lg p-6">
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

        {/* Custom UI for selected items */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Custom UI for selected items
          </h2>
          <p className="text-gray-600 mb-6">
            MultiSelect has a selectedItemUI prop that accepts different UI
            designs for displaying selected items.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Inline Badges */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Inline Badges
              </h3>
              <p className="text-gray-600 mb-4">
                Display selected items as compact inline badges (default
                design).
              </p>
              <div className="border border-gray-200 rounded-lg p-6">
                <MultiSelect
                  label="Tags"
                  value={inlineBadgeSelection}
                  options={basicOptions}
                  onChange={setInlineBadgeSelection}
                  addButtonText="Add Tags"
                  searchPlaceholder="Search tags..."
                />
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Default blue badge design
              </div>
            </div>

            {/* Full Width Row */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Full-width Row
              </h3>
              <p className="text-gray-600 mb-4">
                Each selected item takes the full width with custom styling and
                external link icon.
              </p>
              <div className="border border-gray-200 rounded-lg p-6">
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
              <div className="mt-2 text-sm text-gray-500">
                Custom full-width row design
              </div>
            </div>
          </div>
        </section>

        {/* Props */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Props</h2>
          <p className="text-gray-600 mb-6">
            Complete list of props available for the MultiSelect component.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Prop
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Type
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Default
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-blue-700">
                    label
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    string
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    "Tags"
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    Label displayed next to the component
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-blue-700">
                    value*
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    MultiSelectItem[]
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    -
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    Currently selected items
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-blue-700">
                    options*
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    MultiSelectItem[]
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    -
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    Available options to select from
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-blue-700">
                    onChange*
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    (items: MultiSelectItem[]) =&gt; void
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    -
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    Callback when items are added or removed
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-blue-700">
                    selectedItemUI
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    React.ComponentType&lt;SelectedItemUIProps&gt;
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    DefaultSelectedItemUI
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    Custom component to render each selected item
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-blue-700">
                    addButtonText
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    string
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    "Add Tags"
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    Text displayed on the add button
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-blue-700">
                    searchPlaceholder
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    string
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    "Search tags"
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    Placeholder text for the search input
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-blue-700">
                    maxWidth
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    string
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    "568px"
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    Maximum width of the component
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-blue-700">
                    orientation
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    "horizontal" | "vertical"
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    "horizontal"
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    Layout orientation of the component
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-blue-700">
                    size
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    "sm" | "default" | "lg"
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    "default"
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    Size variant of the component
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-blue-700">
                    disabled
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    boolean
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    false
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    Whether the component is disabled
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-blue-700">
                    showAddButton
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    boolean
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    true
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    Whether to show the add button
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-blue-700">
                    allowRemove
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    boolean
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    true
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    Whether items can be removed
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-mono text-blue-700">
                    fullWidthButton
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    boolean
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    false
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                    Whether the add button should take full width on its own
                    line
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Props marked with * are required. The
              MultiSelectItem interface contains:
              <code className="ml-1 px-1 py-0.5 bg-blue-100 rounded text-xs">
                &#123; id: string | number; label: string; disabled?: boolean
                &#125;
              </code>
            </p>
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
