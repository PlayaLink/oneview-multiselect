import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MultiSelectItem } from "../../models/multi-select-item.interface";

@Component({
  selector: "app-multi-select-dropdown",
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="dropdown-content">
      <!-- Search Input -->
      <div class="search-container">
        <input
          type="text"
          class="search-input"
          [placeholder]="searchPlaceholder"
          [(ngModel)]="searchValue"
          (input)="onSearchChange()"
          [style.font-family]="'Poppins, sans-serif'"
        />
      </div>

      <!-- Options List -->
      <div class="options-container">
        <div
          *ngFor="let option of filteredOptions; trackBy: trackOption"
          class="option-item"
          (click)="onOptionClick(option)"
        >
          <div class="option-checkbox">
            <input
              type="checkbox"
              [id]="'option-' + option.id"
              [checked]="isSelected(option)"
              [disabled]="option.disabled"
              class="checkbox-input"
            />
            <div class="checkbox-custom" [class.checked]="isSelected(option)">
              <svg
                *ngIf="isSelected(option)"
                class="checkbox-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <span
            class="option-label"
            [style.font-family]="'Poppins, sans-serif'"
            [class.disabled]="option.disabled"
          >
            {{ option.label }}
          </span>
        </div>

        <!-- Create New Option -->
        <div
          *ngIf="shouldShowCreateOption"
          class="option-item create-option"
          (click)="onCreateClick()"
        >
          <span
            class="create-option-text"
            [style.font-family]="'Poppins, sans-serif'"
          >
            Create tag "{{ searchValue }}"
          </span>
        </div>

        <!-- No Options Message -->
        <div
          *ngIf="filteredOptions.length === 0 && !shouldShowCreateOption"
          class="no-options"
          [style.font-family]="'Poppins, sans-serif'"
        >
          No options found
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .dropdown-content {
        background: white;
        border: 1px solid #008bc9;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        max-height: 240px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .search-container {
        padding: 8px;
        border-bottom: 1px solid #e5e7eb;
      }

      .search-input {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid #d1d5db;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.429px;
        outline: none;
        transition: border-color 0.2s ease;
      }

      .search-input:focus {
        border-color: #008bc9;
      }

      .search-input::placeholder {
        color: #bababa;
      }

      .options-container {
        flex: 1;
        overflow-y: auto;
        max-height: 184px;
      }

      .option-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        cursor: pointer;
        transition: background-color 0.2s ease;
      }

      .option-item:hover {
        background-color: #f3f4f6;
      }

      .option-checkbox {
        position: relative;
        display: flex;
        align-items: center;
      }

      .checkbox-input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
      }

      .checkbox-custom {
        width: 16px;
        height: 16px;
        border: 1px solid #d1d5db;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        transition: all 0.2s ease;
      }

      .checkbox-custom.checked {
        background-color: #008bc9;
        border-color: #008bc9;
      }

      .checkbox-icon {
        width: 12px;
        height: 12px;
        color: white;
      }

      .option-label {
        flex: 1;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.429px;
        color: #212529;
      }

      .option-label.disabled {
        color: #9ca3af;
        cursor: not-allowed;
      }

      .create-option {
        border-top: 1px solid #e5e7eb;
        background-color: #f9fafb;
      }

      .create-option:hover {
        background-color: #f3f4f6;
      }

      .create-option-text {
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.429px;
        color: #4c5564;
      }

      .no-options {
        padding: 16px 12px;
        text-align: center;
        font-size: 12px;
        color: #9ca3af;
        font-style: italic;
      }
    `,
  ],
})
export class MultiSelectDropdownComponent implements OnInit, OnChanges {
  @Input() options: MultiSelectItem[] = [];
  @Input() selectedItems: MultiSelectItem[] = [];
  @Input() searchPlaceholder: string = "Search tags";

  @Output() selectionChange = new EventEmitter<{
    item: MultiSelectItem;
    isSelected: boolean;
  }>();
  @Output() createNew = new EventEmitter<string>();

  searchValue: string = "";
  filteredOptions: MultiSelectItem[] = [];

  ngOnInit(): void {
    this.updateFilteredOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["options"] || changes["selectedItems"]) {
      this.updateFilteredOptions();
    }
  }

  onSearchChange(): void {
    this.updateFilteredOptions();
  }

  private updateFilteredOptions(): void {
    if (!this.searchValue.trim()) {
      this.filteredOptions = this.options.slice();
    } else {
      const searchLower = this.searchValue.toLowerCase();
      this.filteredOptions = this.options.filter((option) =>
        option.label.toLowerCase().includes(searchLower),
      );
    }
  }

  get shouldShowCreateOption(): boolean {
    if (!this.searchValue.trim()) return false;

    // Check if search exactly matches any existing option
    const exactMatch = this.options.some(
      (option) =>
        option.label.toLowerCase() === this.searchValue.toLowerCase().trim(),
    );

    return !exactMatch;
  }

  isSelected(option: MultiSelectItem): boolean {
    return this.selectedItems.some((item) => item.id === option.id);
  }

  onOptionClick(option: MultiSelectItem): void {
    if (option.disabled) return;

    const isSelected = this.isSelected(option);
    this.selectionChange.emit({ item: option, isSelected });
  }

  onCreateClick(): void {
    if (this.searchValue.trim()) {
      this.createNew.emit(this.searchValue.trim());
    }
  }

  trackOption(index: number, option: MultiSelectItem): any {
    return option.id;
  }
}
