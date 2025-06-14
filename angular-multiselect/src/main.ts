import { bootstrapApplication } from "@angular/platform-browser";
import { importProvidersFrom } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FormsModule, ReactiveFormsModule, NgSelectModule),
  ],
}).catch((err) => console.error(err));
