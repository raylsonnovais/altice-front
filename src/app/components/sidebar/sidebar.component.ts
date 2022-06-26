import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() display: boolean = false;
  @Output() hide = new EventEmitter<any>();
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Teste',
      routerLink: ["sequencia"],
      items: [{
          label: 'Sequencia',
          icon: 'pi pi-refresh',
      },
      ]}
    ];
  }  

  hideMenu(event:any){
    this.hide.emit(true);
  }

}
