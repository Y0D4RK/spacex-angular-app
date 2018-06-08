import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatSortModule,
    MatGridListModule,
    MatStepperModule,
    MatExpansionModule,
    MatChipsModule,
    MatBadgeModule,
} from '@angular/material';

const modules = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatInputModule,
  MatSortModule,
  MatGridListModule,
  MatStepperModule,
  MatExpansionModule,
  MatChipsModule,
  MatBadgeModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  declarations: []
})
export class MaterialModule {}
