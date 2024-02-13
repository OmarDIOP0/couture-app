import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProduitApiService {
  private apiUrl=environment.apiUrl;

  constructor(private http:HttpClient) { }

  addProduct(data:any){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.post(`${this.apiUrl}/product`,data,{headers});
  }
  getAllProduct():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/product`,{headers});
  }
  getAllBoutique():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/shop`,{headers});
  }
  getAllCategorie():Observable<any>{
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/category`,{headers});
  }

  getAllProduitCategorie(category: string){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/product/category/${category}`,{headers})
  }
  getAllProduitShop(shopId: string){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/product/shop/${shopId}`,{headers})
  }
  deleteProduct(id:string){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.delete<any>(`${this.apiUrl}/product/${id}`, { headers });
  }

  getProduct(id:string){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<any>(`${this.apiUrl}/product/${id}`,{headers});
  }

  updateProduct(data:any,id:string){
    const authToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.patch<any>(`${this.apiUrl}/product/${id}`,data,{headers});
  }
}
