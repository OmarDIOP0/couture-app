import { Component, OnInit } from '@angular/core';
import { ProduitApiService } from '../../service/produit-api.service';
import { StockApiService } from '../../service/stock-api.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit{

  ngOnInit(): void {
    this.getAllProduct();
  }
   constructor(private apiProduit:ProduitApiService,private apiStock:StockApiService){}
   Categorie:any;
  countCategorie:any;
  stockData:any;
  clientData:any;
  loading:boolean=true;

  getAllProduct(){
    this.apiStock.getAllProduct().subscribe(res=>{
      this.stockData=res;
      this.loading=false;
      console.log(this.stockData);

    })
  }
}
