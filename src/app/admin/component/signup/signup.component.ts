import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { ToastrService } from 'ngx-toastr';
import { user } from '../../model/usermodel';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  showsidebar=false;
  userForm:FormGroup|any;
  userData:any;

  utilisateurConnecte=false;
  constructor(private formBuilder:FormBuilder,private loginApi:LoginService,private toastr:ToastrService,private router:Router){}
  ngOnInit(): void {
    this.getAllUser();
      this.userForm=this.formBuilder.group({
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        phone:['',Validators.required],
        username:['',Validators.required],
        password:['',Validators.required],

      })
  }

  addUser(data:any){
    this.loginApi.addUser(data).subscribe(user=>{
      this.toastr.success('Utilisateur ajouté avec success');
      this.userForm.reset();
      this.router.navigate(["/login"]);

    },err=>{
      this.toastr.error('Erreur lors de l ajout de l utilisateur');
    }
    )
  }

  getAllUser(){
    this.loginApi.getAllUser().subscribe(user=>{
      this.userData=user;
    })
  }


}
