import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { client } from '../model/clientmodel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService {

  private apiUrl=environment.apiUrl;

  constructor(private http:HttpClient) { }

  addClient(data:any){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.post(`${this.apiUrl}/client`,data,{headers});
  }
  getClient():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/client`,{headers});
  }
  getAllUser():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/user`,{headers});
  }

  deleteClient(id:string){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.delete<any>(`${this.apiUrl}/client/${id}`, { headers });
  }

  fetchData(id:string){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/client/${id}`,{headers});
  }

  updateClient(data:any,id:string){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.patch<any>(`${this.apiUrl}/client/${id}`,data,{headers});
  }
}
