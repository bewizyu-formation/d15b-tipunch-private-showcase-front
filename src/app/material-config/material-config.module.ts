import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatAutocompleteModule, MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialConfigModule { }
