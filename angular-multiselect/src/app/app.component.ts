import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MultiSelectComponent } from "./components/multi-select/multi-select.component";
import { TagComponent } from "./components/tag/tag.component";
import { MultiSelectItem } from "./models/multi-select-item.interface";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectComponent,
    TagComponent,
  ],
  template: `
    <div class="min-vh-100 bg-white">
      <div class="container-fluid px-4 py-5" style="max-width: 1200px">
        <!-- Header -->
        <header class="mb-5">
          <h1 class="display-4 fw-bold text-dark mb-3">MultiSelect</h1>
          <p class="lead text-muted mb-4">
            This input will initially only support the Tags input in the side panel of OneView V2. But it should be built with the intention of support other multi-select inputs that have different requirements for orientation (i.e. label placed above the input vs to the left) and the UI that is displayed for selected values. See below for more details.
          </p>
          <div class="border rounded p-4">
            <app-multi-select
              label="Tags"
              [value]="basicSelection"
              [options]="basicOptions"
              (valueChange)="basicSelection = $event"
              addButtonText="Add Tags"
            ></app-multi-select>
          </div>
        </header>

        <!-- States -->
        <section class="mb-5">
          <h2 class="h3 fw-semibold text-dark mb-3">States</h2>

          <div class="space-y-4">
            <!-- Empty State -->
            <div class="mb-4">
              <h3 class="h5 fw-medium text-dark mb-3">Empty State</h3>
              <div class="border rounded p-4">
                <app-multi-select
                  label="Categories"
                  [value]="emptySelection"
                  [options]="basicOptions.slice(0, 5)"
                  (valueChange)="emptySelection = $event"
                  addButtonText="Add Categories"
                  searchPlaceholder="Search categories..."
                ></app-multi-select>
              </div>
            </div>

            <!-- Read-only State -->
            <div class="mb-4">
              <h3 class="h5 fw-medium text-dark mb-3">Read-only</h3>
              <div class="border rounded p-4">
                <app-multi-select
                  label="Technologies"
                  [value]="readOnlySelection"
                  [options]="[]"
                  (valueChange)="readOnlySelection = $event"
                  [allowRemove]="false"
                  [showAddButton]="false"
                ></app-multi-select>
              </div>
            </div>
          </div>
        </section>

        <!-- Layout -->
        <section class="mb-5">
          <h2 class="h3 fw-semibold text-dark mb-3">Layout</h2>

          <div class="row g-4">
            <!-- Horizontal Layout -->
            <div class="col-md-6">
              <h3 class="h5 fw-medium text-dark mb-3">Horizontal</h3>
              <div class="border rounded p-4">
                <app-multi-select
                  orientation="horizontal"
                  label="Categories"
                  [value]="horizontalSelection"
                  [options]="basicOptions.slice(0, 6)"
                  (valueChange)="horizontalSelection = $event"
                  addButtonText="Add Category"
                  searchPlaceholder="Search categories..."
                ></app-multi-select>
              </div>
            </div>

            <!-- Vertical Layout -->
            <div class="col-md-6">
              <h3 class="h5 fw-medium text-dark mb-3">Vertical</h3>
              <div class="border rounded p-4">
                <app-multi-select
                  orientation="vertical"
                  label="Departments"
                  [value]="verticalSelection"
                  [options]="departmentOptions"
                  (valueChange)="verticalSelection = $event"
                  addButtonText="Add Department"
                  searchPlaceholder="Search departments..."
                ></app-multi-select>
              </div>
            </div>
          </div>

          <!-- Badges (and Add button) wrap -->
          <div class="mt-4">
            <div class="w-50">
              <h3 class="h5 fw-medium text-dark mb-3">Badges (and Add button) wrap</h3>
              <div class="border rounded p-4">
                <app-multi-select
                  orientation="horizontal"
                  label="Technologies"
                  [value]="wrapSelection"
                  [options]="wrapOptions"
                  (valueChange)="wrapSelection = $event"
                  addButtonText="Add Technology"
                  searchPlaceholder="Search technologies..."
                ></app-multi-select>
              </div>
            </div>
          </div>
        </section>

        <!-- Custom UI for selected items -->
        <section class="mb-5">
          <h2 class="h3 fw-semibold text-dark mb-3">Custom UI for selected items</h2>
          <p class="text-muted mb-4">
            MultiSelect has a selectedItemUI prop that can accept a custom component for displaying different UI for selected items, depending on the needs of the input.
          </p>

          <div class="row g-4">
            <!-- Inline Badges (default) -->
            <div class="col-md-6">
              <h3 class="h5 fw-medium text-dark mb-3">Inline Badges (default)</h3>
              <div class="border rounded p-4">
                <app-multi-select
                  label="Tags"
                  [value]="inlineBadgeSelection"
                  [options]="basicOptions"
                  (valueChange)="inlineBadgeSelection = $event"
                  addButtonText="Add Tags"
                  searchPlaceholder="Search tags..."
                ></app-multi-select>
              </div>
            </div>

            <!-- Block element (custom) -->
            <div class="col-md-6">
              <h3 class="h5 fw-medium text-dark mb-3">Block element (custom)</h3>
              <div class="border rounded p-4">
                <app-multi-select
                  label="Institutions"
                  [value]="fullWidthSelection"
                  [options]="institutionOptions"
                  (valueChange)="fullWidthSelection = $event"
                  addButtonText="Add Institution"
                  maxWidth="100%"
                  [fullWidthButton]="true"
                >
                  <ng-template
                    #selectedItem
                    let-item
                    let-removable="removable"
                    let-onRemove="onRemove"
                  >
                    <div class="d-flex w-100 align-items-start gap-2 p-2 align-self-stretch">
                      <div
                        class="flex-fill"
                        style="
                          font-family: 'Poppins', sans-serif;
                          font-size: 12px;
                          font-weight: 400;
                          color: #212529;
                          letter-spacing: 0.429px;
                          line-height: normal;
                        "
                      >
                        {{ item.label }}
                      </div>
                      <div class="d-flex align-items-center gap-3 pb-1">
                        <!-- External link icon -->
                        <svg
                          class="text-muted"
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style="color: #4c5564"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        <!-- Remove button -->
                        <button
                          *ngIf="removable"
                          type="button"
                          class="btn btn-sm p-1 d-flex align-items-center justify-content-center"
                          style="
                            border: none;
                            background: none;
                            border-radius: 2px;
                            transition: background-color 0.2s ease;
                          "
                          (click)="onRemove()"
                          (mouseenter)="
                            $event.target.style.backgroundColor = '#fee2e2'
                          "
                          (mouseleave)="
                            $event.target.style.backgroundColor = 'transparent'
                          "
                          [attr.aria-label]="'Remove ' + item.label"
                        >
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style="color: #dc2626"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </ng-template>
                </app-multi-select>
              </div>
            </div>
          </div>
        </section>

        <!-- Inputs (Angular Props) -->
        <section class="mb-5">
          <h2 class="h3 fw-semibold text-dark mb-3">Inputs</h2>
          <p class="text-muted mb-4">
            Complete list of inputs available for the Angular MultiSelect component.
          </p>

          <div class="table-responsive">
            <table class="table table-bordered">
              <thead class="table-light">
                <tr>
                  <th scope="col" class="fw-semibold">Input</th>
                  <th scope="col" class="fw-semibold">Type</th>
                  <th scope="col" class="fw-semibold">Default</th>
                  <th scope="col" class="fw-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code class="text-primary">label</code></td>
                  <td><code>string</code></td>
                  <td><code>"Tags"</code></td>
                  <td>Label displayed next to the component</td>
                </tr>
                <tr>
                  <td><code class="text-primary">value*</code></td>
                  <td><code>MultiSelectItem[]</code></td>
                  <td><code>-</code></td>
                  <td>Currently selected items</td>
                </tr>
                <tr>
                  <td><code class="text-primary">options*</code></td>
                  <td><code>MultiSelectItem[]</code></td>
                  <td><code>-</code></td>
                  <td>Available options to select from</td>
                </tr>
                <tr>
                  <td><code class="text-primary">addButtonText</code></td>
                  <td><code>string</code></td>
                  <td><code>"Add Tags"</code></td>
                  <td>Text displayed on the add button</td>
                </tr>
                <tr>
                  <td><code class="text-primary">searchPlaceholder</code></td>
                  <td><code>string</code></td>
                  <td><code>"Search tags"</code></td>
                  <td>Placeholder text for the search input</td>
                </tr>
                <tr>
                  <td><code class="text-primary">maxWidth</code></td>
                  <td><code>string</code></td>
                  <td><code>"568px"</code></td>
                  <td>Maximum width of the component</td>
                </tr>
                <tr>
                  <td><code class="text-primary">orientation</code></td>
                  <td><code>"horizontal" | "vertical"</code></td>
                  <td><code>"horizontal"</code></td>
                  <td>Layout orientation of the component</td>
                </tr>
                <tr>
                  <td><code class="text-primary">size</code></td>
                  <td><code>"sm" | "default" | "lg"</code></td>
                  <td><code>"default"</code></td>
                  <td>Size variant of the component</td>
                </tr>
                <tr>
                  <td><code class="text-primary">disabled</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Whether the component is disabled</td>
                </tr>
                <tr>
                  <td><code class="text-primary">showAddButton</code></td>
                  <td><code>boolean</code></td>
                  <td><code>true</code></td>
                  <td>Whether to show the add button</td>
                </tr>
                <tr>
                  <td><code class="text-primary">allowRemove</code></td>
                  <td><code>boolean</code></td>
                  <td><code>true</code></td>
                  <td>Whether items can be removed</td>
                </tr>
                <tr>
                  <td><code class="text-primary">fullWidthButton</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Whether the add button should take full width on its own line</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="alert alert-info mt-4">
            <strong>Note:</strong> Inputs marked with * are required. The MultiSelectItem interface contains:
            <code>
              &#123; id: string | number; label: string; disabled?: boolean &#125;
            </code>
          </div>

          <div class="alert alert-secondary mt-3">
            <h6 class="fw-semibold">Angular-Specific Features:</h6>
            <ul class="mb-0">
              <li><strong>@Output() valueChange:</strong> EventEmitter&lt;MultiSelectItem[]&gt; - Emits when selection changes</li>
              <li><strong>ControlValueAccessor:</strong> Full reactive forms integration support</li>
              <li><strong>Custom Templates:</strong> Use <code>&#60;ng-template #selectedItem&#62;</code> for custom selected item UI</li>
              <li><strong>Change Detection:</strong> Optimized with OnPush strategy</li>
            </ul>
          </div>
        </section>

        <!-- Features -->
        <section class="mb-5">
          <h2 class="h3 fw-semibold text-dark mb-3">Features</h2>
          <div class="row">
            <div class="col-md-6">
              <h3 class="h5 fw-medium text-dark mb-3">Core Features</h3>
              <ul class="list-unstyled">
                <li class="d-flex align-items-center gap-2 mb-2">
                  <i class="bi bi-check-circle-fill text-success"></i>
                  <span>Search and filter options</span>
                </li>
                <li class="d-flex align-items-center gap-2 mb-2">
                  <i class="bi bi-check-circle-fill text-success"></i>
                  <span>Create new tags on-the-fly</span>
                </li>
                <li class="d-flex align-items-center gap-2 mb-2">
                  <i class="bi bi-check-circle-fill text-success"></i>
                  <span>Custom selected item UI templates</span>
                </li>
                <li class="d-flex align-items-center gap-2 mb-2">
                  <i class="bi bi-check-circle-fill text-success"></i>
                  <span>Multiple layout orientations</span>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <h3 class="h5 fw-medium text-dark mb-3">Angular Features</h3>
              <ul class="list-unstyled">
                <li class="d-flex align-items-center gap-2 mb-2">
                  <i class="bi bi-check-circle-fill text-success"></i>
                  <span>Full TypeScript support</span>
                </li>
                <li class="d-flex align-items-center gap-2 mb-2">
                  <i class="bi bi-check-circle-fill text-success"></i>
                  <span>Angular reactive forms integration</span>
                </li>
                <li class="d-flex align-items-center gap-2 mb-2">
                  <i class="bi bi-check-circle-fill text-success"></i>
                  <span>Standalone components (Angular 17+)</span>
                </li>
                <li class="d-flex align-items-center gap-2 mb-2">
                  <i class="bi bi-check-circle-fill text-success"></i>
                  <span>OnPush change detection strategy</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Installation -->
        <section class="mb-5">
          <h2 class="h3 fw-semibold text-dark mb-3">Installation</h2>
          <pre class="bg-dark text-light p-3 rounded overflow-auto"><code>import &#123; MultiSelectComponent &#125; from './components/multi-select/multi-select.component';</code></pre>
        </section>
      </div>
    </div>
  `,
})
export class AppComponent {
  // Basic selection
  basicSelection: MultiSelectItem[] = [
    { id: 1, label: "Team A" },
    { id: 2, label: "Team C" },
    { id: 3, label: "California" },
  ];

  // Empty selection
  emptySelection: MultiSelectItem[] = [];

  // Horizontal selection
  horizontalSelection: MultiSelectItem[] = [
    { id: 101, label: "Team A" },
    { id: 102, label: "Utah" },
  ];

  // Vertical selection
  verticalSelection: MultiSelectItem[] = [
    { id: 201, label: "Engineering" },
    { id: 202, label: "Marketing" },
  ];

  // Wrap selection (7 items)
  wrapSelection: MultiSelectItem[] = [
    { id: 401, label: "JavaScript" },
    { id: 402, label: "TypeScript" },
    { id: 403, label: "React" },
    { id: 404, label: "Node.js" },
    { id: 405, label: "Python" },
    { id: 406, label: "PostgreSQL" },
    { id: 407, label: "MongoDB" },
  ];

  // Inline badge selection
  inlineBadgeSelection: MultiSelectItem[] = [
    { id: 301, label: "Design" },
    { id: 302, label: "Frontend" },
    { id: 303, label: "Backend" },
  ];

  // Full width selection
  fullWidthSelection: MultiSelectItem[] = [
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
  ];

  // Read-only selection
  readOnlySelection: MultiSelectItem[] = [
    { id: 1, label: "React" },
    { id: 2, label: "TypeScript" },
    { id: 3, label: "Node.js" },
  ];

  // Options data
  basicOptions: MultiSelectItem[] = [
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

  departmentOptions: MultiSelectItem[] = [
    { id: 201, label: "Engineering" },
    { id: 202, label: "Marketing" },
    { id: 203, label: "Sales" },
    { id: 204, label: "Support" },
    { id: 205, label: "Operations" },
    { id: 206, label: "Human Resources" },
    { id: 207, label: "Finance" },
    { id: 208, label: "Research & Development" },
  ];

  wrapOptions: MultiSelectItem[] = [
    ...this.wrapSelection,
    { id: 408, label: "Vue.js" },
    { id: 409, label: "Angular" },
    { id: 410, label: "Docker" },
    { id: 411, label: "Redis" },
    { id: 412, label: "GraphQL" },
  ];

  institutionOptions: MultiSelectItem[] = [
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
}
