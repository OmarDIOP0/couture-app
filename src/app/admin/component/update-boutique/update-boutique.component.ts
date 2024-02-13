import { Component, OnInit } from '@angular/core';
import { MesBoutiquesApiService } from '../../service/mes-boutiques-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-boutique',
  templateUrl: './update-boutique.component.html',
  styleUrls: ['./update-boutique.component.css']
})
export class UpdateBoutiqueComponent implements OnInit{

  idRoute:any;
  boutiqueData:any;
  userData:any;
  constructor(private apiMesBoutiques:MesBoutiquesApiService,private activeRoute:ActivatedRoute,private toastr:ToastrService,private route:Router){}
ngOnInit(): void {
  this.getAllUser();
  this.idRoute=this.activeRoute.snapshot.paramMap.get('id');
  this.apiMesBoutiques.getBoutique(this.idRoute).subscribe(response=>{
    this.boutiqueData=response;
   })
}
 updateBoutique(){
  this.apiMesBoutiques.updateBoutique(this.boutiqueData,this.idRoute).subscribe(response=>{
    this.toastr.success("Boutique modifié avec success!");
    this.route.navigate(['/mesboutiques']);
  },

  (error)=>{
    this.toastr.error('Une erreur est survenue');
    console.error('Erreur lors de la modification');
   })
 }
 getAllUser(){
  this.apiMesBoutiques.getUser().subscribe(response=>{
    this.userData=response;
  },
  (error)=>{
    console.error('Impossible de selectionner les utilisateurs');
  }
  )
}
navigatePrevious(){
  this.route.navigate(['/mesboutiques']);
}
}
