import { Component, OnInit } from '@angular/core';
import { MesBoutiquesApiService } from '../../service/mes-boutiques-api.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mesboutiques } from '../../model/mesboutiquesmodel';
import { LoginService } from '../../service/login.service';
import { ActivatedRoute } from '@angular/router';
import { ProduitApiService } from '../../service/produit-api.service';

@Component({
  selector: 'app-mesboutiques',
  templateUrl: './mesboutiques.component.html',
  styleUrls: ['./mesboutiques.component.css']
})
export class MesboutiquesComponent implements OnInit{

  mesBoutiquesForm:FormGroup|any;
  mesBoutiquesData:any;
  loading: boolean = true;
  userData:any;
  boutiqueData:any;
  idRoute:any;
  categoryData:any;

  constructor(private apiMesBoutiques:MesBoutiquesApiService,private toastr:ToastrService,private formBuilder:FormBuilder,private activeRoute:ActivatedRoute,private apiProduit:ProduitApiService){}

  ngOnInit(): void {
    this.getCategory();
    this.getAllBoutiques();
    this.getAllUser();
    this.mesBoutiquesForm=this.formBuilder.group({
      name:['',Validators.required],
      adresse:['',Validators.required],
      manager:['',Validators.required]
    })
  }

  addBoutiques(data:any){
    this.apiMesBoutiques.addBoutique(data).subscribe(res=>{
      this.toastr.success('Boutique ajouté avec succes!');
      this.mesBoutiquesForm.reset();
      this.getAllBoutiques();

    },

    (error)=>{
      console.error('Une erreur est survenue');
      this.toastr.error('Une erreur est survenue');
    })
  }
  getCategory(){
    this.apiMesBoutiques.getAllCategorie().subscribe(res=>{
      this.categoryData=res;
    })
  }

  getAllBoutiques(){
    this.apiMesBoutiques.getAllBoutique().subscribe(res=>{
      this.mesBoutiquesData=res;
      this.loading=false;
    },
    (error)=>{
      console.error('Une erreur est survenue');
      this.toastr.error('Une erreur est survenue');
      this.loading=false;
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
  deleteBoutique(id:string){
    const confirmation= confirm('Voulez vous supprimez la boutique?')
    if(confirmation){
      return this.apiMesBoutiques.deleteBoutique(id).subscribe(response=>{
        this.toastr.success('Boutique supprimé avec success');
        this.getAllBoutiques();
      },
      (error)=>{
        this.toastr.error('Une erreur est survenue');
        console.error('Erreur lors de la suppression');
       });
    }
    return false;
  }

}
