import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { TagVariant } from "../../models/multi-select-item.interface";

@Component({
  selector: "app-tag",
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="getTagClasses()" [style.font-family]="'Poppins, sans-serif'">
      <span class="tag-label">{{ label }}</span>
      <button
        *ngIf="removable && !loading"
        type="button"
        class="tag-remove-btn"
        [attr.aria-label]="'Remove ' + label"
        (click)="handleRemove($event)"
      >
        <svg
          class="tag-remove-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div *ngIf="loading" class="tag-spinner">
        <svg
          class="tag-spinner-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
          />
        </svg>
      </div>
    </div>
  `,
  styles: [
    `
      .tag-base {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.429px;
        line-height: normal;
        transition: background-color 0.2s ease;
      }

      .tag-label {
        flex: 1;
        padding: 4px 8px;
        line-height: 12px;
      }

      .tag-remove-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        cursor: pointer;
        border-radius: 2px;
        transition: background-color 0.2s ease;
        border-left: 1px solid #afd6ff;
        height: 18px;
        width: 18px;
      }

      .tag-remove-btn:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .tag-remove-icon {
        width: 8px;
        height: 8px;
      }

      .tag-spinner {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .tag-spinner-icon {
        width: 12px;
        height: 12px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      /* Variant styles - exact match to React version */
      .tag-default {
        background-color: #e8f3ff;
        color: #212529;
      }

      .tag-secondary {
        background-color: #f1f3f4;
        color: #212529;
      }

      .tag-destructive {
        background-color: #fee2e2;
        color: #dc2626;
      }

      .tag-success {
        background-color: #dcfce7;
        color: #16a34a;
      }

      .tag-warning {
        background-color: #fef3c7;
        color: #d97706;
      }

      .tag-info {
        background-color: #dbeafe;
        color: #2563eb;
      }

      .tag-loading {
        opacity: 0.7;
        cursor: not-allowed;
      }

      .tag-disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      }
    `,
  ],
})
export class TagComponent {
  @Input() label: string = "";
  @Input() variant: TagVariant = "default";
  @Input() removable: boolean = true;
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;

  @Output() remove = new EventEmitter<void>();

  getTagClasses(): string {
    const baseClasses = ["tag-base"];

    // Add variant class
    baseClasses.push(`tag-${this.variant}`);

    // Add state classes
    if (this.loading) {
      baseClasses.push("tag-loading");
    }

    if (this.disabled) {
      baseClasses.push("tag-disabled");
    }

    return baseClasses.join(" ");
  }

  handleRemove(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (!this.loading && !this.disabled) {
      this.remove.emit();
    }
  }
}
