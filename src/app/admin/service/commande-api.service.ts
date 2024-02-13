import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commande } from '../model/commandemodel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommandeApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  addCommande(data:any){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.post<any>(`${this.apiUrl}/order`,data,{headers});
  }

  getAllCommande():Observable<commande[]> {
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<commande[]>(`${this.apiUrl}/order`,{headers});
  }
  getAllCategorie():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/category`,{headers});
  }
  getAllProduit():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/product`,{headers});
  }

  getAllBoutique():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/shop`,{headers});
  }

  validerCommande(id:string):Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.patch<any>(`${this.apiUrl}/order/status/${id}`,{status : 'ready'},{headers});
  }

  livreCommande(id:number):Observable<commande>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.patch<any>(`${this.apiUrl}/order/status/${id}`,{status : 'delivered'},{headers});
  }

  deleteCommande(id:any){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.delete<any>(`${this.apiUrl}/order/${id}`,{headers});
  }

  fetchData(id:any){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get(`${this.apiUrl}/order/${id}`,{headers});
  }

  updateCommande(commande:any,id:any){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.patch(`${this.apiUrl}/order/${id}`,commande,{headers});
  }

  updateStatus(commandeId: string, newStatus: string): Observable<any> {
    const updateStatusUrl = `${this.apiUrl}/order/${commandeId}/status`;
    const statusUpdate = { status: newStatus };
    return this.http.put(updateStatusUrl, statusUpdate);
  }
  updateCommandeStatus(commandeId: string, newStatus: string) {
    const updateCommande = { status: newStatus };
    return this.http.put(`${this.apiUrl}/${commandeId}/status`, updateCommande);
  }
}
