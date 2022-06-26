import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SequenciaComponent } from './sequencia.component';
import { SequenciaRoutingModule } from './sequencia-routing.module';
import {CardModule} from 'primeng/card';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ButtonModule} from 'primeng/button';

//
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SequenciaService } from 'src/app/service/sequencia.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [SequenciaComponent],
  imports: [
    CommonModule,
    SequenciaRoutingModule,
    CardModule,
    KeyFilterModule,
    ButtonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SequenciaService]
})
export class SequenciaModule { }
