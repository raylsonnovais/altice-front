import { Component, OnInit } from '@angular/core';
import { SequenciaService } from 'src/app/service/sequencia.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sequencia',
  templateUrl: './sequencia.component.html',
  styleUrls: ['./sequencia.component.scss'],
})
export class SequenciaComponent implements OnInit {

  constructor(private service: SequenciaService,
    private _snackBar: MatSnackBar) { }
  numero: any;
  resposta:any
  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  getSequenciaAltice(){
    

    if(typeof this.numero === 'undefined'){
      this.openSnackBar('Digite um valor válido.', 'Erro')
      return
    }
    
    this.service.getSequenciaAltice(this.numero).subscribe(resp=>{
     this. resposta=resp
    })
  }

}
