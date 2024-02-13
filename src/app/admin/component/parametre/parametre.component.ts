import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit{
  userProfile:any;

constructor(private router:Router,private toastr:ToastrService,private loginApi:LoginService){}
ngOnInit(): void {
   this.profileUser();
}
logout(){
  const confirmation = confirm('Voulez vous vous deconnectez ? ');
  if(confirmation){
    localStorage.removeItem('access_token');
    this.router.navigate(["/login"]);
    this.toastr.success('Bye Bye');
  }
}

profileUser(){
  this.loginApi.getProfile().subscribe(
    (response) => {
      this.userProfile = response;
    },
    (error) => {
      console.error('Erreur lors de la récupération du profil :', error);
      this.toastr.error('Erreur lors de la récupération du profil');
    }
  );
}
}
