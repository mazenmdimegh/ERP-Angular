import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const factClient_API = "http://localhost:8080/api/factClient"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }

  public getfactClient() : Observable<any> {
    return this.httpClient.get(factClient_API + "/all");
  }

  public SuppfactClient(id:number){
    return this.httpClient.delete(factClient_API + "/" + id)
  }

  AddfactClient(body:any ): Observable<any> {
    return this.httpClient.post(factClient_API + '/add', body, httpOptions);
  }
}
