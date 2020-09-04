import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
<<<<<<< HEAD
import { MatTooltipModule } from '@angular/material/tooltip';
=======
import { MatStepperModule } from "@angular/material/stepper";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from '@angular/material/list';
>>>>>>> ea91cab55fe89975869fea7767ef6ad5440ebb56

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
<<<<<<< HEAD
    MatTooltipModule,
=======
    MatStepperModule,
    MatMenuModule,
    MatListModule


>>>>>>> ea91cab55fe89975869fea7767ef6ad5440ebb56
  ],
})
export class AppMaterialModule { }
