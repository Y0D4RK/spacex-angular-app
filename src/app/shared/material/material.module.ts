import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatPaginatorModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule, MatSortModule,
  MatGridListModule, MatProgressSpinnerModule,
  MatTreeModule, MatExpansionModule,
  MatChipsModule, MatBadgeModule
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
  MatBadgeModule,
  MatStepperModule,
  MatExpansionModule,
  MatChipsModule,
  MatBadgeModule
  MatProgressSpinnerModule,
  MatTreeModule,
  MatExpansionModule
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
