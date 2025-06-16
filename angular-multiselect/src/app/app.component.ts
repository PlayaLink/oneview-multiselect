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
  templateUrl: "./app.component.html",
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

  onMouseEnter(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = "#fee2e2";
  }

  onMouseLeave(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = "transparent";
  }
}
