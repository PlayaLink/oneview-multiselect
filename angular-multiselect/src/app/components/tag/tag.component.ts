import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MultiSelectItem } from "../../models/multi-select-item.interface";

@Component({
  selector: "app-tag",
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="custom-tag">
      <span class="tag-label">{{ item.label }}</span>
      <button
        *ngIf="removable"
        type="button"
        class="tag-remove"
        [attr.aria-label]="'Remove ' + item.label"
        (click)="onRemove()"
      >
        <i class="bi bi-x"></i>
      </button>
    </span>
  `,
  styleUrls: [],
})
export class TagComponent {
  @Input() item!: MultiSelectItem;
  @Input() removable: boolean = true;
  @Output() remove = new EventEmitter<MultiSelectItem>();

  onRemove(): void {
    this.remove.emit(this.item);
  }
}
