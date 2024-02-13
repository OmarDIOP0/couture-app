import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{

  data:any;
  ngOnInit(): void {
    this.accueil();
  }
  constructor(private apiLogin:LoginService){}

  accueil(){
    this.apiLogin.accueil().subscribe(res=>{
      this.data=res;
    })
  }


}
