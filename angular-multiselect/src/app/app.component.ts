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
            A modern, accessible multi-select component with tags and dropdown
            functionality for Angular.
          </p>
          <div class="d-flex flex-wrap gap-2">
            <span class="badge bg-primary-subtle text-primary px-3 py-2">
              Angular
            </span>
            <span class="badge bg-success-subtle text-success px-3 py-2">
              TypeScript
            </span>
            <span class="badge bg-secondary-subtle text-secondary px-3 py-2">
              Accessible
            </span>
            <span class="badge bg-warning-subtle text-warning px-3 py-2">
              Customizable
            </span>
          </div>
        </header>

        <!-- Basic Usage -->
        <section class="mb-5">
          <h2 class="h3 fw-semibold text-dark mb-3">Basic Usage</h2>
          <p class="text-muted mb-4">
            The most basic usage of MultiSelect with default settings.
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

          <div class="mt-3 p-3 bg-light rounded">
            <small class="text-muted">
              <strong>Selected:</strong>
              {{
                basicSelection.length > 0
                  ? basicSelection.map((item) => item.label).join(", ")
                  : "None"
              }}
            </small>
          </div>
        </section>

        <!-- States -->
        <section class="mb-5">
          <h2 class="h3 fw-semibold text-dark mb-3">States</h2>
          <p class="text-muted mb-4">
            Different states of the MultiSelect component.
          </p>

          <div class="row g-4">
            <!-- Empty State -->
            <div class="col-12">
              <h3 class="h5 fw-medium text-dark mb-3">Empty State</h3>
              <p class="text-muted mb-3">
                When no items are selected, users can search and add new items.
              </p>
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

            <!-- Disabled State -->
            <div class="col-12">
              <h3 class="h5 fw-medium text-dark mb-3">Disabled State</h3>
              <p class="text-muted mb-3">
                When the component is disabled, users cannot interact with it.
              </p>
              <div class="border rounded p-4">
                <app-multi-select
                  label="Skills"
                  [value]="disabledSelection"
                  [options]="[]"
                  (valueChange)="disabledSelection = $event"
                  [disabled]="true"
                ></app-multi-select>
              </div>
            </div>

            <!-- Read-only State -->
            <div class="col-12">
              <h3 class="h5 fw-medium text-dark mb-3">Read-only</h3>
              <p class="text-muted mb-3">
                Display selected items without the ability to add or remove.
              </p>
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

        <!-- Layout Variants -->
        <section class="mb-5">
          <h2 class="h3 fw-semibold text-dark mb-3">Layout Variants</h2>
          <p class="text-muted mb-4">
            Different layout configurations and orientations.
          </p>

          <!-- Vertical Layout -->
          <div class="mb-4">
            <h3 class="h5 fw-medium text-dark mb-3">Vertical Layout</h3>
            <p class="text-muted mb-3">
              Stack the label and input vertically for better use of space.
            </p>
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
            <small class="text-muted mt-2 d-block">
              Selected: {{ verticalSelection.length }} department{{
                verticalSelection.length !== 1 ? "s" : ""
              }}
            </small>
          </div>
        </section>

        <!-- Custom UI -->
        <section class="mb-5">
          <h2 class="h3 fw-semibold text-dark mb-3">Custom Selected Item UI</h2>
          <p class="text-muted mb-4">
            Customize how selected items are displayed using custom templates.
          </p>

          <!-- Full Width Items -->
          <div class="mb-4">
            <h3 class="h5 fw-medium text-dark mb-3">Full Width Items</h3>
            <p class="text-muted mb-3">
              Each selected item takes the full width with custom styling and
              external link icon.
            </p>
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
                  <div
                    class="d-flex w-100 align-items-start gap-2 p-2 align-self-stretch"
                  >
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
        </section>

        <!-- Props Table -->
        <section class="mb-5">
          <h2 class="h3 fw-semibold text-dark mb-3">Props</h2>
          <p class="text-muted mb-4">
            Complete list of props available for the MultiSelect component.
          </p>

          <div class="table-responsive">
            <table class="table table-bordered">
              <thead class="table-light">
                <tr>
                  <th scope="col" class="fw-semibold">Prop</th>
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
                  <td>
                    Whether the add button should take full width on its own
                    line
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="alert alert-info mt-4">
            <strong>Note:</strong> Props marked with * are required. The
            MultiSelectItem interface contains:
            <code>
              &#123; id: string | number; label: string; disabled?: boolean
              &#125;
            </code>
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
              <h3 class="h5 fw-medium text-dark mb-3">Technical Features</h3>
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
                  <span>WCAG accessibility compliance</span>
                </li>
                <li class="d-flex align-items-center gap-2 mb-2">
                  <i class="bi bi-check-circle-fill text-success"></i>
                  <span>Responsive design</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Installation -->
        <section class="mb-5">
          <h2 class="h3 fw-semibold text-dark mb-3">Installation</h2>
          <pre
            class="bg-dark text-light p-3 rounded overflow-auto"
          ><code>import &#123; MultiSelectComponent &#125; from './components/multi-select/multi-select.component';</code></pre>
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

  // Vertical selection
  verticalSelection: MultiSelectItem[] = [
    { id: 201, label: "Engineering" },
    { id: 202, label: "Marketing" },
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

  // Disabled selection
  disabledSelection: MultiSelectItem[] = [
    { id: 101, label: "React" },
    { id: 102, label: "TypeScript" },
    { id: 103, label: "TailwindCSS" },
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
