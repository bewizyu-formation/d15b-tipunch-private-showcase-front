import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCheckboxModule
  ],
  exports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class MaterialConfigModule { }
