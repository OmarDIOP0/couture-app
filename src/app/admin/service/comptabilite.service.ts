import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { caisse } from '../model/caissemodel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ComptabiliteService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  addCaisse(data:any){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.post<any>(`${this.apiUrl}/comptabilite/es`,data,{headers});
  }

  getAllCaisse():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/comptabilite/es/all`,{headers});
  }
  deleteCaisse(id:string):Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.delete<any>(`${this.apiUrl}/comptabilite/es/${id}`,{headers});
  }
  totalCaisse():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/comptabilite/es/total`,{headers});
  }
  addEmploye(data:any){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.post<any>(`${this.apiUrl}/employee`,data,{headers});
  }
  getAllEmploye():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/employee`,{headers});
  }

  deleteEmploye(id:string){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.delete<any>(`${this.apiUrl}/employee/${id}`, { headers });
  }

  getEmploye(id:string){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/employee/${id}`,{headers});
  }

  updateEmploye(data:any,id:string){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.patch<any>(`${this.apiUrl}/employee/${id}`,data,{headers});
  }
  comptabiliteSalaire(){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/comptabilite/salaries`,{headers});
  }
  comptabiliteSalaireShop(id:string){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl} /comptabilite/salaries/shop/${id}`,{headers});
  }
}
