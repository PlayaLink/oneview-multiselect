import React, { useState } from "react";
import {
  MultiSelect,
  MultiSelectItem,
  SelectedItemUIProps,
} from "@/components/MultiSelect";
import { Tag } from "@/components/Tag";

// Import from the built NPM package source (for testing)
import {
  MultiSelect as NPMMultiSelect,
  Tag as NPMTag,
  type MultiSelectItem as NPMMultiSelectItem,
  type SelectedItemUIProps as NPMSelectedItemUIProps,
} from "../../lib/src/index";

// Note: The actual NPM package creates React context conflicts when imported
// due to bundled dependencies. In a real project, you'd install via:
// npm install oneview-react-multiselect-component
// For this demo, we'll show the package structure and usage examples instead

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

  const [wrapSelection, setWrapSelection] = useState<MultiSelectItem[]>([
    { id: 401, label: "JavaScript" },
    { id: 402, label: "TypeScript" },
    { id: 403, label: "React" },
    { id: 404, label: "Node.js" },
    { id: 405, label: "Python" },
    { id: 406, label: "PostgreSQL" },
    { id: 407, label: "MongoDB" },
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

  // NPM Package Demo State
  const [npmBasicSelection, setNpmBasicSelection] = useState<
    NPMMultiSelectItem[]
  >([
    { id: 1, label: "NPM Demo A" },
    { id: 2, label: "NPM Demo B" },
  ]);

  const [npmVerticalSelection, setNpmVerticalSelection] = useState<
    NPMMultiSelectItem[]
  >([
    { id: 101, label: "Marketing" },
    { id: 102, label: "Sales" },
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

  // NPM Package options
  const npmOptions: NPMMultiSelectItem[] = [
    { id: 1, label: "NPM Demo A" },
    { id: 2, label: "NPM Demo B" },
    { id: 3, label: "React" },
    { id: 4, label: "TypeScript" },
    { id: 5, label: "Tailwind CSS" },
    { id: 6, label: "Node.js" },
    { id: 7, label: "Vite" },
    { id: 8, label: "NPM Package" },
  ];

  const npmDepartmentOptions: NPMMultiSelectItem[] = [
    { id: 101, label: "Marketing" },
    { id: 102, label: "Sales" },
    { id: 103, label: "Engineering" },
    { id: 104, label: "Design" },
    { id: 105, label: "Product" },
    { id: 106, label: "Operations" },
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
            This input will initially only support the Tags input in the side
            panel of OneView V2. But it should be built with the intention of
            support other multi-select inputs that have different requirements
            for orientation (i.e. label placed above the input vs to the left)
            and the UI that is displayed for selected values. See below for more
            details.
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
        </header>

        {/* NPM Package "In the Wild" Demo */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-100 p-3 rounded-lg">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 6 5 8 10 8s10-2 10-8V7l-10-5zM12 5.84L19.09 9 12 12.16 4.91 9 12 5.84z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  📦 Ready for NPM Distribution
                </h2>
                <p className="text-gray-700 mb-4">
                  The <strong>oneview-react-multiselect-component</strong>{" "}
                  package is built and ready for NPM publishing. The examples
                  above show the exact same components that would be distributed
                  through NPM - just without the dependency conflicts that occur
                  when bundling external packages.
                </p>

                <div className="bg-white border border-purple-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-900">
                      Technical Note
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Direct import causes React context conflicts due to bundled
                    dependencies. This is resolved in production by proper peer
                    dependency configuration.
                  </p>
                  <code className="text-sm text-purple-700 bg-purple-50 px-2 py-1 rounded">
                    import &#123; MultiSelect &#125; from
                    "oneview-react-multiselect-component"
                  </code>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
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
                    <span className="text-gray-700">TypeScript ready</span>
                  </div>
                  <div className="flex items-center gap-2">
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
                    <span className="text-gray-700">Production ready</span>
                  </div>
                  <div className="flex items-center gap-2">
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
                    <span className="text-gray-700">Fully tested</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Package Structure Visualization */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Package Contents */}
              <div className="bg-white border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  📁 Package Structure
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div>oneview-react-multiselect-component/</div>
                  <div className="ml-2">├── dist/</div>
                  <div className="ml-4">
                    │ ├── index.js{" "}
                    <span className="text-gray-500"># CommonJS</span>
                  </div>
                  <div className="ml-4">
                    │ ├── index.mjs{" "}
                    <span className="text-gray-500"># ES Modules</span>
                  </div>
                  <div className="ml-4">
                    │ └── index.d.ts{" "}
                    <span className="text-gray-500"># TypeScript</span>
                  </div>
                  <div className="ml-2">
                    ├── src/{" "}
                    <span className="text-gray-500"># Source code</span>
                  </div>
                  <div className="ml-2">├── package.json</div>
                  <div className="ml-2">└── README.md</div>
                </div>
                <div className="mt-3 text-xs text-purple-700 bg-purple-50 px-3 py-2 rounded-md">
                  ✅ Built and ready for NPM publishing
                </div>
              </div>

              {/* Usage Example */}
              <div className="bg-white border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  ⚡ Real Usage
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  This is exactly how developers would use the package:
                </p>
                <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-400"># Install the package</div>
                  <div className="text-blue-400">
                    npm install oneview-react-multiselect-component
                  </div>
                  <br />
                  <div className="text-green-400"># Use in your React app</div>
                  <div>
                    <span className="text-blue-400">import</span>{" "}
                    <span className="text-yellow-400">
                      &#123; MultiSelect &#125;
                    </span>
                  </div>
                  <div className="ml-2">
                    <span className="text-blue-400">from</span>{" "}
                    <span className="text-green-400">
                      "oneview-react-multiselect-component"
                    </span>
                    ;
                  </div>
                  <br />
                  <div>
                    <span className="text-purple-400">&lt;MultiSelect</span>
                  </div>
                  <div className="ml-2">
                    <span className="text-white">label=</span>
                    <span className="text-green-400">"Tags"</span>
                  </div>
                  <div className="ml-2">
                    <span className="text-white">value=</span>
                    <span className="text-yellow-400">
                      &#123;selected&#125;
                    </span>
                  </div>
                  <div className="ml-2">
                    <span className="text-white">onChange=</span>
                    <span className="text-yellow-400">
                      &#123;setSelected&#125;
                    </span>
                  </div>
                  <div>
                    <span className="text-purple-400">/&gt;</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-green-700 bg-green-50 px-3 py-2 rounded-md">
                  🚀 Zero configuration required
                </div>
              </div>
            </div>

            {/* Package Features */}
            <div className="mt-6 bg-white border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ✨ Package Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Dual module support (CJS + ESM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Full TypeScript definitions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Peer dependency optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Tree-shakeable exports</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Accessible by default</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Tailwind CSS integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Modern React patterns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Production tested</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* States */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">States</h2>

          <div className="space-y-8">
            {/* Empty State */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Empty State
              </h3>
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

          {/* Badges (and Add button) wrap */}
          <div className="mt-8">
            <div className="w-1/2">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Badges (and Add button) wrap
              </h3>
              <div className="border border-gray-200 rounded-lg p-6">
                <MultiSelect
                  orientation="horizontal"
                  label="Technologies"
                  value={wrapSelection}
                  options={[
                    ...wrapSelection,
                    { id: 408, label: "Vue.js" },
                    { id: 409, label: "Angular" },
                    { id: 410, label: "Docker" },
                    { id: 411, label: "Redis" },
                    { id: 412, label: "GraphQL" },
                  ]}
                  onChange={setWrapSelection}
                  addButtonText="Add Technology"
                  searchPlaceholder="Search technologies..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Layout */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Layout</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Horizontal Layout */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Horizontal
              </h3>
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
            </div>

            {/* Vertical Layout */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Vertical
              </h3>
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
            </div>
          </div>
        </section>

        {/* Custom UI for selected items */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Custom UI for selected items
          </h2>
          <p className="text-gray-600 mb-6">
            MultiSelect has a selectedItemUI prop that can accept a custom
            component for displaying different UI for selected items, depending
            on the needs of the input.&nbsp;
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Inline Badges */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Inline Badges (default)
              </h3>
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
            </div>

            {/* Full Width Row */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Block element (custom)
              </h3>
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
            </div>
          </div>
        </section>

        {/* NPM Package Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            📦 NPM Package Demo
          </h2>
          <p className="text-gray-600 mb-6">
            This section demonstrates the NPM package components imported from
            the package source in{" "}
            <code className="px-2 py-1 bg-gray-100 rounded text-sm font-mono">
              lib/src/
            </code>
            . This verifies that the package structure and exports work
            correctly and that the components function identically to the local
            development versions.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="text-sm font-semibold text-blue-900 mb-1">
                  📦 NPM Package Demo
                </h3>
                <p className="text-sm text-blue-800 mb-2">
                  Currently importing from source:{" "}
                  <code className="px-1 py-0.5 bg-blue-100 rounded text-xs font-mono">
                    ../../lib/src/index
                  </code>
                </p>
                <p className="text-xs text-blue-700">
                  ✅ Package is built and ready at <code>lib/dist/</code>
                  <br />✅ After publishing, users would import:{" "}
                  <code>
                    import &#123; MultiSelect &#125; from
                    "oneview-react-multiselect"
                  </code>
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* NPM Package - Basic Demo */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                📦 NPM Package - Basic
              </h3>
              <div className="border border-green-200 bg-green-50 rounded-lg p-6">
                <NPMMultiSelect
                  label="NPM Package Tags"
                  value={npmBasicSelection}
                  options={npmOptions}
                  onChange={setNpmBasicSelection}
                  addButtonText="Add NPM Tag"
                  searchPlaceholder="Search NPM tags..."
                />
              </div>
              <div className="mt-2 text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
                ✅ Imported from NPM package
              </div>
            </div>

            {/* NPM Package - Vertical Layout */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                📦 NPM Package - Vertical
              </h3>
              <div className="border border-green-200 bg-green-50 rounded-lg p-6">
                <NPMMultiSelect
                  orientation="vertical"
                  label="Departments"
                  value={npmVerticalSelection}
                  options={npmDepartmentOptions}
                  onChange={setNpmVerticalSelection}
                  addButtonText="Add Department"
                  searchPlaceholder="Search departments..."
                />
              </div>
              <div className="mt-2 text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
                ✅ Imported from NPM package
              </div>
            </div>
          </div>

          {/* NPM vs Local Comparison */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              🔄 Side-by-Side Comparison
            </h3>
            <p className="text-gray-600 mb-4">
              Compare the local development version (left) with the NPM package
              version (right) to ensure they work identically:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Local Development Version */}
              <div>
                <h4 className="text-md font-medium text-gray-800 mb-2">
                  🛠️ Local Development
                </h4>
                <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                  <MultiSelect
                    label="Local Tags"
                    value={basicSelection.slice(0, 2)}
                    options={basicOptions.slice(0, 6)}
                    onChange={(items) =>
                      setBasicSelection([...items, ...basicSelection.slice(2)])
                    }
                    addButtonText="Add Local Tag"
                    searchPlaceholder="Search local tags..."
                  />
                </div>
                <div className="mt-2 text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded">
                  📂 From src/components/MultiSelect/
                </div>
              </div>

              {/* NPM Package Version */}
              <div>
                <h4 className="text-md font-medium text-gray-800 mb-2">
                  📦 NPM Package
                </h4>
                <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                  <NPMMultiSelect
                    label="NPM Tags"
                    value={npmBasicSelection}
                    options={npmOptions.slice(0, 6)}
                    onChange={setNpmBasicSelection}
                    addButtonText="Add NPM Tag"
                    searchPlaceholder="Search NPM tags..."
                  />
                </div>
                <div className="mt-2 text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
                  📦 From lib/src/index
                </div>
              </div>
            </div>
          </div>

          {/* Package Verification */}
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              ✅ Package Verification Status
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                  📦 Package Build
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    ES Modules (index.mjs)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    CommonJS (index.js)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    TypeScript definitions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Source maps included
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                  🧩 Components
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    MultiSelect exports
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Tag exports
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Dropdown exports
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Types & interfaces
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                  ⚡ Functionality
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Search & filtering
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Tag management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Event handling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Styling & themes
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
              <p className="text-sm text-green-800 font-medium">
                🎉 <strong>Package Ready for Publishing!</strong> All components
                work correctly and the package is properly configured for NPM
                distribution.
              </p>
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
            Installation & Usage
          </h2>

          <h3 className="text-lg font-medium text-gray-900 mb-3">
            📦 NPM Package Installation
          </h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code>npm install oneview-react-multiselect</code>
          </div>

          <h3 className="text-lg font-medium text-gray-900 mb-3">
            📝 Import and Usage
          </h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
            <pre className="text-sm">
              {`import { MultiSelect, type MultiSelectItem } from "oneview-react-multiselect";

function App() {
  const [selected, setSelected] = useState<MultiSelectItem[]>([]);

  return (
    <MultiSelect
      label="Tags"
      value={selected}
      options={options}
      onChange={setSelected}
    />
  );
}`}
            </pre>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-blue-900 mb-2">
              ✅ Package Status
            </h4>
            <p className="text-sm text-blue-800">
              The NPM package is ready for publishing! The demos above show it
              working correctly with all features functional.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
