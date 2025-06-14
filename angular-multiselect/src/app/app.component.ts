import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule, FormControl } from "@angular/forms";
import { MultiSelectComponent } from "./components/multi-select/multi-select.component";
import { MultiSelectItem } from "./models/multi-select-item.interface";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectComponent,
  ],
  template: `
    <div
      class="min-vh-100 bg-light p-4"
      style="background: linear-gradient(to right bottom, #f8fafc, #f1f5f9);"
    >
      <div class="container">
        <div class="text-center mb-5">
          <h1 class="display-5 fw-bold text-dark mb-3">
            Angular MultiSelect with ng-select Demo
          </h1>
          <p class="lead text-muted">
            Interactive multi-select component using ng-select 14.9.0 and
            Bootstrap 5
          </p>
        </div>

        <div class="row g-4">
          <!-- Main Demo -->
          <div class="col-12">
            <div class="card shadow-sm">
              <div class="card-header">
                <h3 class="card-title mb-1">Default MultiSelect</h3>
                <p class="card-text text-muted small mb-0">
                  Click the X to remove items, or open dropdown to add new ones
                </p>
              </div>
              <div class="card-body">
                <app-multi-select
                  label="Tags"
                  [availableOptions]="availableOptions"
                  [(ngModel)]="selectedItems"
                  (selectionChange)="onSelectionChange($event)"
                ></app-multi-select>

                <div class="mt-3 p-3 bg-light rounded">
                  <h6>Selected Items ({{ selectedItems.length }}):</h6>
                  <code>{{ selectedItems | json }}</code>
                </div>
              </div>
            </div>
          </div>

          <!-- Variations -->
          <div class="col-12">
            <div class="card shadow-sm">
              <div class="card-header">
                <h3 class="card-title mb-1">Variations</h3>
                <p class="card-text text-muted small mb-0">
                  Different configurations of the MultiSelect component
                </p>
              </div>
              <div class="card-body">
                <div class="row g-4">
                  <!-- Empty State -->
                  <div class="col-12 col-md-6">
                    <h6 class="text-dark mb-2">Empty State</h6>
                    <app-multi-select
                      label="Categories"
                      [availableOptions]="availableOptions.slice(0, 5)"
                      [(ngModel)]="emptySelection"
                      searchPlaceholder="Select categories..."
                    ></app-multi-select>
                  </div>

                  <!-- Read-only -->
                  <div class="col-12 col-md-6">
                    <h6 class="text-dark mb-2">Disabled State</h6>
                    <app-multi-select
                      label="Skills"
                      [availableOptions]="skillsOptions"
                      [(ngModel)]="readOnlySelection"
                      [disabled]="true"
                    ></app-multi-select>
                  </div>

                  <!-- Reactive Form -->
                  <div class="col-12">
                    <h6 class="text-dark mb-2">Reactive Form Integration</h6>
                    <form class="d-flex align-items-end gap-3">
                      <div class="flex-fill">
                        <app-multi-select
                          label="Departments"
                          [availableOptions]="departmentOptions"
                          [formControl]="departmentControl"
                        ></app-multi-select>
                      </div>
                      <button
                        type="button"
                        class="btn btn-primary"
                        (click)="clearForm()"
                      >
                        Clear
                      </button>
                    </form>

                    <div class="mt-2">
                      <small class="text-muted">
                        Form Value: {{ departmentControl.value | json }}
                        <br />
                        Form Valid: {{ departmentControl.valid }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Features Info -->
          <div class="col-12">
            <div class="card bg-primary bg-opacity-10 border-primary">
              <div class="card-body">
                <div class="d-flex align-items-start">
                  <div class="bg-primary bg-opacity-25 rounded-circle p-2 me-3">
                    <i class="bi bi-info-circle-fill text-primary"></i>
                  </div>
                  <div>
                    <h6 class="text-primary mb-2">Component Features</h6>
                    <ul class="list-unstyled text-primary small mb-0">
                      <li class="mb-1">
                        <i class="bi bi-check-circle-fill me-2"></i>
                        Built with Angular 17 and ng-select 14.9.0
                      </li>
                      <li class="mb-1">
                        <i class="bi bi-check-circle-fill me-2"></i>
                        Bootstrap 5 integration with custom styling
                      </li>
                      <li class="mb-1">
                        <i class="bi bi-check-circle-fill me-2"></i>
                        Reactive Forms and Template-driven Forms support
                      </li>
                      <li class="mb-1">
                        <i class="bi bi-check-circle-fill me-2"></i>
                        Custom tag display with remove functionality
                      </li>
                      <li class="mb-1">
                        <i class="bi bi-check-circle-fill me-2"></i>
                        Accessible with proper ARIA labels
                      </li>
                      <li class="mb-1">
                        <i class="bi bi-check-circle-fill me-2"></i>
                        Fully responsive design matching Figma specs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: [],
})
export class AppComponent {
  title = "angular-multiselect";

  // Main demo data
  selectedItems: MultiSelectItem[] = [
    { id: 1, label: "Team A" },
    { id: 2, label: "Team C" },
    { id: 3, label: "California" },
    { id: 4, label: "Utah" },
    { id: 5, label: "Nebraska" },
    { id: 6, label: "Tennessee" },
  ];

  availableOptions: MultiSelectItem[] = [
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
    { id: 13, label: "New York" },
    { id: 14, label: "Washington" },
  ];

  // Variation data
  emptySelection: MultiSelectItem[] = [];

  readOnlySelection: MultiSelectItem[] = [
    { id: 101, label: "React" },
    { id: 102, label: "TypeScript" },
    { id: 103, label: "Angular" },
  ];

  skillsOptions: MultiSelectItem[] = [
    { id: 101, label: "React" },
    { id: 102, label: "TypeScript" },
    { id: 103, label: "Angular" },
    { id: 104, label: "Bootstrap" },
    { id: 105, label: "ng-select" },
  ];

  // Reactive form
  departmentControl = new FormControl<MultiSelectItem[]>([
    { id: 201, label: "Engineering" },
    { id: 202, label: "Marketing" },
  ]);

  departmentOptions: MultiSelectItem[] = [
    { id: 201, label: "Engineering" },
    { id: 202, label: "Marketing" },
    { id: 203, label: "Sales" },
    { id: 204, label: "Support" },
    { id: 205, label: "Operations" },
    { id: 206, label: "Finance" },
    { id: 207, label: "Human Resources" },
  ];

  onSelectionChange(items: MultiSelectItem[]): void {
    console.log("Selection changed:", items);
  }

  clearForm(): void {
    this.departmentControl.setValue([]);
  }
}
