import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  TemplateRef,
  ContentChild,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnDestroy,
  forwardRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import {
  MultiSelectItem,
  MultiSelectOrientation,
  MultiSelectSize,
  SelectedItemUIContext,
} from "../../models/multi-select-item.interface";
import { TagComponent } from "../tag/tag.component";
import { MultiSelectDropdownComponent } from "./multi-select-dropdown.component";

@Component({
  selector: "app-multi-select",
  standalone: true,
  imports: [CommonModule, TagComponent, MultiSelectDropdownComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true,
    },
  ],
  template: `
    <div
      [class]="getContainerClasses()"
      [style.max-width]="maxWidth"
      [style.font-family]="'Poppins, sans-serif'"
    >
      <!-- Label -->
      <div
        *ngIf="label"
        class="label-container"
        [style.padding]="'7px 8px'"
        [style.min-width]="'153px'"
      >
        <span class="label-text">{{ label }}</span>
      </div>

      <!-- Value Container -->
      <div class="value-container">
        <!-- Selected Items -->
        <div [class]="getSelectedItemsClasses()">
          <ng-container *ngFor="let item of value; trackBy: trackSelectedItem">
            <!-- Custom Template -->
            <ng-container
              *ngIf="selectedItemTemplate; else defaultSelectedItem"
            >
              <ng-container
                *ngTemplateOutlet="
                  selectedItemTemplate;
                  context: {
                    $implicit: item,
                    removable: allowRemove && !disabled,
                    onRemove: getRemoveFunction(item),
                  }
                "
              >
              </ng-container>
            </ng-container>

            <!-- Default Tag -->
            <ng-template #defaultSelectedItem>
              <app-tag
                [label]="item.label"
                [removable]="allowRemove && !disabled"
                [disabled]="disabled"
                (remove)="handleRemove(item)"
                variant="default"
              ></app-tag>
            </ng-template>
          </ng-container>
        </div>

        <!-- Add Button with Dropdown -->
        <div
          *ngIf="showAddButton && !disabled && availableOptions.length > 0"
          class="add-button-container"
          [class.full-width]="fullWidthButton"
        >
          <div class="dropdown-wrapper" #dropdownWrapper>
            <!-- Positioning anchor -->
            <div class="dropdown-anchor" #dropdownAnchor></div>

            <!-- Add Button -->
            <button
              type="button"
              class="add-button"
              [class.full-width-button]="fullWidthButton"
              (click)="toggleDropdown()"
              [attr.aria-expanded]="isOpen"
              [attr.aria-haspopup]="true"
              [style.font-family]="'Poppins, sans-serif'"
            >
              <svg
                class="add-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              {{ addButtonText }}
            </button>

            <!-- Dropdown -->
            <div
              *ngIf="isOpen"
              class="dropdown-overlay"
              (click)="closeDropdown()"
            ></div>
            <div
              *ngIf="isOpen"
              class="dropdown-content"
              [style.position]="'fixed'"
              [style.z-index]="'1000'"
              #dropdownContent
            >
              <app-multi-select-dropdown
                [options]="availableOptions"
                [selectedItems]="value"
                [searchPlaceholder]="searchPlaceholder"
                (selectionChange)="handleSelectionChange($event)"
                (createNew)="handleCreateNew($event)"
              ></app-multi-select-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .multi-select-container {
        display: flex;
        width: 100%;
        gap: 4px;
      }

      .multi-select-horizontal {
        flex-direction: row;
        align-items: flex-start;
      }

      .multi-select-vertical {
        flex-direction: column;
      }

      .label-container {
        display: flex;
        align-items: flex-start;
      }

      .label-text {
        font-size: 12px;
        font-weight: 600;
        color: #545454;
        letter-spacing: 0.429px;
      }

      .value-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .selected-items {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        align-items: flex-start;
      }

      .selected-items-vertical {
        flex-direction: column;
        align-items: stretch;
      }

      .add-button-container {
        position: relative;
      }

      .add-button-container.full-width {
        width: 100%;
      }

      .dropdown-wrapper {
        position: relative;
        display: inline-block;
      }

      .dropdown-anchor {
        position: absolute;
        top: 0;
        left: 8px;
        width: 1px;
        height: 1px;
        opacity: 0;
        pointer-events: none;
      }

      .add-button {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 7px 8px;
        background: transparent;
        border: 1px solid #008bc9;
        border-radius: 4px;
        color: #006cab;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.429px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-decoration: none;
      }

      .add-button:hover {
        background-color: #f0f9ff;
        text-decoration: none;
      }

      .add-button:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 139, 201, 0.2);
      }

      .add-button.full-width-button {
        width: 100%;
        justify-content: center;
      }

      .add-icon {
        width: 12px;
        height: 12px;
      }

      .dropdown-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background: transparent;
      }

      .dropdown-content {
        min-width: 200px;
        max-width: 400px;
      }

      /* Size variants */
      .size-sm {
        font-size: 11px;
      }

      .size-default {
        font-size: 12px;
      }

      .size-lg {
        font-size: 14px;
      }

      /* Disabled styles */
      .multi-select-disabled {
        opacity: 0.6;
        pointer-events: none;
        cursor: not-allowed;
      }
    `,
  ],
})
export class MultiSelectComponent implements ControlValueAccessor, OnDestroy {
  @Input() label: string = "Tags";
  @Input() value: MultiSelectItem[] = [];
  @Input() options: MultiSelectItem[] = [];
  @Input() addButtonText: string = "Add Tags";
  @Input() searchPlaceholder: string = "Search tags";
  @Input() maxWidth: string = "568px";
  @Input() orientation: MultiSelectOrientation = "horizontal";
  @Input() size: MultiSelectSize = "default";
  @Input() disabled: boolean = false;
  @Input() showAddButton: boolean = true;
  @Input() allowRemove: boolean = true;
  @Input() fullWidthButton: boolean = false;

  @Output() valueChange = new EventEmitter<MultiSelectItem[]>();

  @ContentChild("selectedItem") selectedItemTemplate?: TemplateRef<any>;
  @ViewChild("dropdownAnchor") dropdownAnchor!: ElementRef;
  @ViewChild("dropdownContent") dropdownContent!: ElementRef;

  isOpen: boolean = false;
  private destroy$ = new Subject<void>();

  // ControlValueAccessor implementation
  private onChange = (value: MultiSelectItem[]) => {};
  private onTouched = () => {};

  constructor(
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef,
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ControlValueAccessor methods
  writeValue(value: MultiSelectItem[]): void {
    this.value = value || [];
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: MultiSelectItem[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  get availableOptions(): MultiSelectItem[] {
    return this.options.filter((option) => !option.disabled);
  }

  getContainerClasses(): string {
    const classes = ["multi-select-container"];

    classes.push(`multi-select-${this.orientation}`);
    classes.push(`size-${this.size}`);

    if (this.disabled) {
      classes.push("multi-select-disabled");
    }

    return classes.join(" ");
  }

  getSelectedItemsClasses(): string {
    const classes = ["selected-items"];

    if (this.fullWidthButton) {
      classes.push("selected-items-vertical");
    }

    return classes.join(" ");
  }

  toggleDropdown(): void {
    if (this.disabled) return;

    this.isOpen = !this.isOpen;
    this.onTouched();

    if (this.isOpen) {
      setTimeout(() => this.positionDropdown(), 0);
    }
  }

  closeDropdown(): void {
    this.isOpen = false;
    this.cdr.markForCheck();
  }

  private positionDropdown(): void {
    if (!this.dropdownAnchor || !this.dropdownContent) return;

    const anchor = this.dropdownAnchor.nativeElement;
    const dropdown = this.dropdownContent.nativeElement;
    const rect = anchor.getBoundingClientRect();

    dropdown.style.left = `${rect.left}px`;
    dropdown.style.top = `${rect.top}px`;
  }

  handleSelectionChange(event: {
    item: MultiSelectItem;
    isSelected: boolean;
  }): void {
    const { item, isSelected } = event;
    let newValue: MultiSelectItem[];

    if (isSelected) {
      // Remove item
      newValue = this.value.filter((existing) => existing.id !== item.id);
    } else {
      // Add item
      const itemExists = this.value.some((existing) => existing.id === item.id);
      if (!itemExists) {
        newValue = [...this.value, item];
      } else {
        newValue = this.value;
      }
    }

    this.updateValue(newValue);
  }

  handleCreateNew(label: string): void {
    const newItem: MultiSelectItem = {
      id: `new-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      label: label.trim(),
    };

    const newValue = [...this.value, newItem];
    this.updateValue(newValue);
    this.closeDropdown();
  }

  handleRemove(itemToRemove: MultiSelectItem): void {
    if (this.disabled || !this.allowRemove) return;

    const newValue = this.value.filter((item) => item.id !== itemToRemove.id);
    this.updateValue(newValue);
  }

  getRemoveFunction(item: MultiSelectItem): () => void {
    return () => this.handleRemove(item);
  }

  private updateValue(newValue: MultiSelectItem[]): void {
    this.value = newValue;
    this.valueChange.emit(newValue);
    this.onChange(newValue);
    this.cdr.markForCheck();
  }

  trackSelectedItem(index: number, item: MultiSelectItem): any {
    return item.id;
  }
}
