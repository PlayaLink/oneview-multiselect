import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { TagComponent } from "../tag/tag.component";
import { MultiSelectItem } from "../../models/multi-select-item.interface";

@Component({
  selector: "app-multi-select",
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, TagComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true,
    },
  ],
  template: `
    <div class="d-flex align-items-start gap-1" [style.max-width]="maxWidth">
      <!-- Label Section -->
      <div *ngIf="label" class="multiselect-label">
        {{ label }}
      </div>

      <!-- Value Container -->
      <div
        class="flex-fill d-flex flex-column justify-content-center"
        style="padding-top: 6px; min-height: 32px;"
      >
        <div
          class="d-flex flex-wrap align-items-center gap-2"
          style="min-height: 32px;"
        >
          <!-- Selected Items as Tags -->
          <app-tag
            *ngFor="let item of selectedItems; trackBy: trackByFn"
            [item]="item"
            [removable]="!disabled"
            (remove)="removeItem($event)"
          ></app-tag>

          <!-- ng-select Dropdown -->
          <ng-select
            [items]="availableOptions"
            [multiple]="true"
            [closeOnSelect]="false"
            [clearable]="false"
            [searchable]="true"
            [placeholder]="searchPlaceholder"
            bindLabel="label"
            bindValue="id"
            [ngModel]="selectedValues"
            (ngModelChange)="onSelectionChange($event)"
            [disabled]="disabled"
            class="custom-multiselect flex-fill"
            [clearSearchOnAdd]="true"
            [hideSelected]="false"
            [addTag]="false"
            appendTo="body"
          >
            <!-- Custom option template with checkboxes -->
            <ng-option
              *ngFor="let option of availableOptions; trackBy: trackByOptionFn"
              [value]="option.id"
              [disabled]="option.disabled"
            >
              {{ option.label }}
            </ng-option>

            <!-- Custom search not found template -->
            <ng-option-template ng-notfound-tmp>
              <div class="text-muted small p-2">No options found</div>
            </ng-option-template>
          </ng-select>
        </div>
      </div>
    </div>
  `,
  styleUrls: [],
})
export class MultiSelectComponent implements ControlValueAccessor {
  @Input() label: string = "Tags";
  @Input() availableOptions: MultiSelectItem[] = [];
  @Input() maxWidth: string = "568px";
  @Input() searchPlaceholder: string = "Search tags";
  @Input() disabled: boolean = false;
  @Output() selectionChange = new EventEmitter<MultiSelectItem[]>();

  selectedItems: MultiSelectItem[] = [];
  selectedValues: (string | number)[] = [];

  private onChange = (value: MultiSelectItem[]) => {};
  private onTouched = () => {};

  // ControlValueAccessor implementation
  writeValue(value: MultiSelectItem[]): void {
    if (value) {
      this.selectedItems = [...value];
      this.selectedValues = value.map((item) => item.id);
    } else {
      this.selectedItems = [];
      this.selectedValues = [];
    }
  }

  registerOnChange(fn: (value: MultiSelectItem[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Selection change handler
  onSelectionChange(selectedIds: (string | number)[]): void {
    this.selectedValues = selectedIds || [];
    this.selectedItems = this.availableOptions.filter((option) =>
      selectedIds.includes(option.id),
    );

    this.onChange(this.selectedItems);
    this.selectionChange.emit(this.selectedItems);
    this.onTouched();
  }

  // Remove item handler
  removeItem(item: MultiSelectItem): void {
    const newSelectedValues = this.selectedValues.filter(
      (id) => id !== item.id,
    );
    this.onSelectionChange(newSelectedValues);
  }

  // Track by functions for performance
  trackByFn(index: number, item: MultiSelectItem): string | number {
    return item.id;
  }

  trackByOptionFn(index: number, option: MultiSelectItem): string | number {
    return option.id;
  }
}
