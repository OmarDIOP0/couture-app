import { Component, OnInit } from '@angular/core';
import { BoutiqueApiService } from '../../service/boutique-api.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-boutique-categorie',
  templateUrl: './update-boutique-categorie.component.html',
  styleUrls: ['./update-boutique-categorie.component.css']
})
export class UpdateBoutiqueCategorieComponent implements OnInit{

  idRoute:any;
  categorieData:any;
  ngOnInit(): void {
    this.idRoute=this.activedRoute.snapshot.paramMap.get('id');
    this.apiBoutique.getCategorie(this.idRoute).subscribe(res=>{
     this.categorieData=res;
    })

  }
  constructor(private apiBoutique:BoutiqueApiService,private toastr:ToastrService,private activedRoute:ActivatedRoute,private router:Router){}

  updateCategorie(){
    this.apiBoutique.updateCategorie(this.categorieData,this.idRoute).subscribe(res=>{
      this.toastr.success('Categorie modifié avec success');
      this.router.navigate(['/boutique']);
    },
    (error)=>{
      this.toastr.error('Une erreur est survenue');
      console.error('Une erreur est survenue');

    })
  }
}
