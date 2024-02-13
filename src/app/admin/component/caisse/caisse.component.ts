import { Component, OnInit } from '@angular/core';
import { ComptabiliteService } from '../../service/comptabilite.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { caisse } from '../../model/caissemodel';
import { MesBoutiquesApiService } from '../../service/mes-boutiques-api.service';
import { loadTranslations } from '@angular/localize';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.css']
})
export class CaisseComponent implements OnInit{

  caisseData:any;
  caisseForm:FormGroup|any;
  totalEntree:any;
  totalSortie:any;
  total:any;
  shopData:any;
  loading:boolean=true;

  ngOnInit(): void {
    this.getCaisse();
    this.getShop();
    this.calculTotal();
    this.caisseForm=this.formBuilder.group({
      shopId:["",Validators.required],
      libelleEntree:["",Validators.required],
      entree:[1,Validators.required],
      libelleSortie:["",Validators.required],
      sortie:[2,Validators.required]
    });

  }
  constructor(private apiCompt:ComptabiliteService,private toastr:ToastrService,private formBuilder:FormBuilder,private apiShop:MesBoutiquesApiService,private toarst:ToastrService){}

  addCaisse(data:caisse){
    this.apiCompt.addCaisse(data).subscribe(res=>{
      this.toastr.success('Ajout effectué avec success !');
      this.caisseForm.reset();
      this.getCaisse();
    })
  }
  getCaisse(){
    this.apiCompt.getAllCaisse().subscribe(res=>{
      this.caisseData=res;
      this.calculTotal();
      this.loading=false;
    });
  }
  calculTotal(){
    this.apiCompt.totalCaisse().subscribe(res=>{
      this.totalEntree=res.totalEntree;
      this.totalSortie=res.totalSortie;
        this.total=this.caisseData.reduce((acc:any,totalCaisse:any)=>{
      return acc+(totalCaisse.entree-totalCaisse.sortie);
    },0);
    })
  }
  getShop(){
    this.apiShop.getAllBoutique().subscribe(res=>{
      this.shopData=res;
    })
  }
  deleteCaisse(id:string){
    const confirmation = confirm('Voulez vous supprimé le client ?');
    if(confirmation){
      return this.apiCompt.deleteCaisse(id).subscribe(res=>{
      this.toarst.success("Caisse supprimé avec success!");
      this.getCaisse();
    },
    (error)=>{
      this.toarst.error('Une erreur est survenue');
      console.error('Erreur lors de la suppression');
     });
    }
    return false;

  }

}
