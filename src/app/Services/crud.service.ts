import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const factClient_API = "http://localhost:8080/api/factClient"
const facture_fournisseur_API = "http://localhost:8080/api/facture_fournisseur"
const Client_API = "http://localhost:8080/api/Client"
const Fournisseur_API = "http://localhost:8080/api/fournisseur"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }

  public getfactClient(): Observable<any> {
    return this.httpClient.get(factClient_API + "/all");
  }

  public SuppfactClient(id: number) {
    return this.httpClient.delete(factClient_API + "/" + id)
  }

  AddfactClient(body: any): Observable<any> {
    return this.httpClient.post(factClient_API + '/add', body, httpOptions);
  }


  // Fournisseur

  AddfactFournisseur(body: any): Observable<any> {
    return this.httpClient.post(facture_fournisseur_API + '/add', body, httpOptions);
  }
  public getfacture_fournisseur(): Observable<any> {
    return this.httpClient.get(facture_fournisseur_API + "/all");
  }

  // Client
  AddClient(body: any): Observable<any> {
    return this.httpClient.post(Client_API + '/add', body, httpOptions);
  }
  public getClients(): Observable<any> {
    return this.httpClient.get(Client_API + "/all");
  }
  // Client
  AddFournisseur(body: any): Observable<any> {
    return this.httpClient.post(Fournisseur_API + '/add', body, httpOptions);
  }
  public getFournisseurs(): Observable<any> {
    return this.httpClient.get(Fournisseur_API + "/all");
  }
 
}
