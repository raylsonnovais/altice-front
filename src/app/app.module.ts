import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import { SequenciaComponent } from './pages/altice/sequencia/sequencia.component';
import { SequenciaModule } from './pages/altice/sequencia/sequencia.module';
import {ListboxModule} from 'primeng/listbox';
import { RouterModule } from '@angular/router';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SidebarModule,
    MenuModule,
    SequenciaModule,
    RouterModule,
    ListboxModule,
    PanelMenuModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
