import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SequenciaComponent } from "./sequencia.component";

const routes: Routes = [
    {
        path:'',
        component: SequenciaComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class SequenciaRoutingModule { }