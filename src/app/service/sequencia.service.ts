import { Injectable, Injector } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class SequenciaService {
    constructor(
        public http: HttpClient
    ) {
    }

    getSequenciaAltice(n:any):Observable<any>{
        return this.http.get(`${environment.api}/alticci/${n}`)
    }
}