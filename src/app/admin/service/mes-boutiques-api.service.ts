import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mesboutiques } from '../model/mesboutiquesmodel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MesBoutiquesApiService {
  private apiUrl=environment.apiUrl;

  constructor(private http:HttpClient) { }

  addBoutique(data:any){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.post<any>(`${this.apiUrl}/shop`,data,{headers});
  }
  getAllCategorie():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/category`,{headers});
  }
  getAllBoutique():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/shop`,{headers});
  }
  getUser():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get(`${this.apiUrl}/user`,{headers});
  }

  getBoutique(id:string):Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/shop/${id}`,{headers});
  }

  updateBoutique(data:any,id:string){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.patch<any>(`${this.apiUrl}/shop/${id}`,data,{headers});
  }
  deleteBoutique(id:string){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.delete<any>(`${this.apiUrl}/shop/${id}`,{headers});
  }
}
