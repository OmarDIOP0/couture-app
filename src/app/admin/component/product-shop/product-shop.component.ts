import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitApiService } from '../../service/produit-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent {
  produitForm:FormGroup|any;
  produitData:any;
  categoryData:any;
  selectedFile:File|null=null;
  boutique:any;
  loading:boolean=true;

  constructor(private activedRoute:ActivatedRoute, private route:Router,private formBuilder:FormBuilder,private apiProduit:ProduitApiService,private toastr:ToastrService){}
  ngOnInit(): void {
    this.boutique=this.activedRoute.snapshot.paramMap.get('shopId');
    console.log("Boutique" +this.boutique);

      this.apiProduit.getAllProduitShop(this.boutique).subscribe(products => {
        this.loading=false;
        this.produitData = products;
        console.log("Produit "+this.produitData);

      },
       (error)=>{
        console.error('Erreur lors de la récupération des produits');
       }
      );

  }
  navigatePrevious(){
    this.route.navigate(['/mesboutiques']);
  }

}
