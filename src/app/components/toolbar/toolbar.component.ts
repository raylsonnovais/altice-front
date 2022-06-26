import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() isVisible = new EventEmitter<boolean>();
  showMenu: boolean = false
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.isVisible)
  }

  changeShowMenu(){
    this.showMenu = !this.showMenu;
  }
   

  abrirMenu(): boolean {
    return this.showMenu;   
  }

  closeMenu(){
    this.showMenu = false;
  }

}
