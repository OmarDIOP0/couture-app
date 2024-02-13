import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm:FormGroup|any;
  userProfile: any;
  ngOnInit(): void {
    this.loginApi.getProfile().subscribe(
      (response) => {
        this.userProfile = response;
      },
      (error) => {
        this.toastr.error('Une erreur est survenue');
        console.error('Erreur lors de la récupération du profil :', error);
      }
    );
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })

  }

  constructor(private formBuilder:FormBuilder,private loginApi:LoginService,private toastr:ToastrService,private router:Router){}
  public user:any;

  //  getUser(){
  //   this.loginApi.getUser().subscribe(res=>{
  //     this.user = res.find((a:any)=>{
  //       return a.password === this.loginForm.value.password
  //     });
  //     if(this.user){
  //       localStorage.setItem('access_token',Math.random().toString());
  //        this.toastr.success('Login success');
  //        this.loginForm.reset();
  //        this.router.navigate(["/dashboard"]);
  //     }
  //     else{
  //       this.toastr.error('Mot de passe incorrect');
  //     }
  //   },
  //   err=>{
  //     this.toastr.error("Une erreur est survenue");
  //   })
  // }
  // LoginUser(data:any){
  //   this.loginApi.getUserConnect(data).subscribe(userfound=>{
  //     if(userfound){
  //       localStorage.setItem('access_token',Math.random().toString());
  //       this.toastr.success('Login success');
  //       this.loginForm.reset();
  //       this.router.navigate(["/dashboard"]);
  //     }
  //     else{
  //       this.toastr.error('Username ou password incorrect !');
  //     }
  //   },
  //   err=>{
  //     this.toastr.error("Une erreur est survenue !");
  //   }

  //   )
  // }
  login(data: any) {
    this.loginApi.login(data).subscribe(
      () => {
        if (this.loginApi.isAuthenticated()) {
          this.router.navigate(['/dashboard']);
          this.toastr.success('Bienvenue');
        } else {
          console.error('Authentification échouée : Jeton d\'accès non reçu.');
        }
      },
      error => {
        console.error('Erreur lors de l\'authentification :', error);
      }
    );
  }
  profileUser(){
    console.log('Bonjour');

    // this.loginApi.profileUser().subscribe(user=>{
    //   this.profileData=user;
    //   console.log(this.profileData);
    // })
  }

}
