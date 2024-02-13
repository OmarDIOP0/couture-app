import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/usermodel';
import { Observable, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl=environment.apiUrl;

  constructor(private http:HttpClient) { }

  addUser(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/user`,data);
  }
  accueil():Observable<any>{
    return this.http.get(`${this.apiUrl}/`);
  }

  getAllUser():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get(`${this.apiUrl}/user`);
  }

  getUser(id:string):Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/user/${id}`,{headers});
  }

  fetchData(id:number){
    return this.http.get<user>(this.apiUrl+"/"+id);
  }

  updateUser(data:user,id:number){
    return this.http.put<any>(`${this.apiUrl}/auth`,data);
  }

  getProfile():Observable<any>  {
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/auth/profile`, { headers });
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, data).pipe(
      tap(response => this.handleLoginResponse(response)),
      // catchError(this.handleError('Login', []))
    );
  }

  private handleLoginResponse(response: any): void {
    if (response && response.access_token) {
      localStorage.setItem('access_token', response.access_token);
    }
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token');
  }


}
