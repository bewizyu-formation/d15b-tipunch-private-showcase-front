import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatGridListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: []
})
export class MaterialConfigModule { }
