import { Component, OnInit } from '@angular/core';
import { ProduitApiService } from '../../service/produit-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-produit',
  templateUrl: './view-produit.component.html',
  styleUrls: ['./view-produit.component.css']
})
export class ViewProduitComponent implements OnInit{
  produitData:any;
  idRoute:string|any;
  loading:boolean=true;

  ngOnInit(): void {
    this.idRoute = this.activeRoute.snapshot.paramMap.get('id');
      this.apiProduit.getProduct(this.idRoute).subscribe(response => {
        this.loading=false;
        this.produitData = response;
      },
      (error=>{
        console.error('Erreur lors de recupération de la valeur');
        this.loading=false;
      })
      );

  }
  constructor(private apiProduit:ProduitApiService,private activeRoute:ActivatedRoute,private route:Router){}

  navigatePrevious(){
    this.route.navigate(['/boutique']);
  }
}
