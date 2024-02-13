import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProduitApiService } from '../../service/produit-api.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{
  produitForm:FormGroup|any;
  produitData:any;
  produitList:any;
  shopData:any;
  categorieData:any
  userData:any;
  selectedFile:File|null=null;
  loading:boolean=true;

  constructor(private route:Router,private formBuilder:FormBuilder,private apiProduit:ProduitApiService,private toastr:ToastrService){}
  ngOnInit(): void {
    this.getAllProduit();
    this.getShop();
    this.getCategorie();
    this.produitForm=this.formBuilder.group({
      name:['',Validators.required],
      quantity:['',Validators.required],
      price:['',Validators.required],
      shopId:['',Validators.required],
      category:['',Validators.required],
      size:['',Validators.required]
    })
  }
  navigatePrevious(){
    this.route.navigate(['/boutique']);
  }

  addProduit(data:any){
     this.apiProduit.addProduct(data).subscribe(res =>{
      this.toastr.success('Produit ajouté avec success !');
      this.produitForm.reset();
      this.getAllProduit();
     },
     (error)=>{
      this.toastr.error('Erreur lors de l ajout');
      console.error('Une erreur est survenue');
     }

     )
  }
  getShop(){
    this.apiProduit.getAllBoutique().subscribe(res=>{
    this.shopData=res;
    })
  }
  getCategorie(){
    this.apiProduit.getAllCategorie().subscribe(res=>{
      this.categorieData=res;
      this.loading=false;
    })
  }

  getAllProduit(){
    this.apiProduit.getAllProduct().subscribe(res=>{
     this.produitList=res;
     console.log(this.produitList);

    },
    (error)=>{
      this.toastr.error('Erreur lors de la recupération des produits;')
      console.error('Erreur lors de la récupération des produits');

    })
  }
  deleteProduit(id:string){
    const confirmation = confirm('Voulez vous supprimé le client ?');
    if(confirmation){
      return this.apiProduit.deleteProduct(id).subscribe(res=>{
      this.toastr.success("Client supprimé avec success!");
      this.getAllProduit();
    },
    (error)=>{
      this.toastr.error('Une erreur est survenue');
      console.error('Erreur lors de la suppression');
     });
    }
    return false;

  }

}
