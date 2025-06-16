import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MultiSelectComponent } from "./components/multi-select/multi-select.component";
import { TagComponent } from "./components/tag/tag.component";
import { MultiSelectDropdownComponent } from "./components/multi-select/multi-select-dropdown.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectComponent,
    TagComponent,
    MultiSelectDropdownComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
