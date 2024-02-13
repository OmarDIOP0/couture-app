import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeApiService } from '../../service/commande-api.service';
import { ToastrService } from 'ngx-toastr';
import { commande } from '../../model/commandemodel';
import { ClientApiService } from '../../service/client-api.service';
import { ProduitApiService } from '../../service/produit-api.service';

@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
  styleUrls: ['./update-commande.component.css']
})
export class UpdateCommandeComponent implements OnInit{
  constructor(private activeRoute:ActivatedRoute,private router:Router,private apiCommande:CommandeApiService,private toastr:ToastrService,private apiClient:ClientApiService,private produitItems:ProduitApiService){}

  commandeData:commande|any;
  idRoute:any;
  clientData:any;
  produitData:any;

  ngOnInit(): void {
    this.getAllClient();
    const confirmation = confirm('Voulez vous modifier la commmande ?');
    if(confirmation){
      this.idRoute=this.activeRoute.snapshot.paramMap.get('id');
      this.apiCommande.fetchData(this.idRoute).subscribe(commande=>{
         this.commandeData=commande;
      })
    }
    else{
      this.router.navigate(['/commandeEnCours']);
    }
  }
  updateCommande(){
    this.apiCommande.updateCommande(this.commandeData,this.idRoute).subscribe(data=>{
      this.toastr.success("Commande Modifié avec success!");
      this.router.navigate(['/commandeEnCours']);
    })
  }
  getAllClient(){
    this.apiClient.getClient().subscribe(res=>{
      this.clientData=res;
    })
  }
  // getAllProduit(){
  //   this.produitItems.getAllProduit().subscribe(produit=>{
  //      this.produitData=produit;
  //   })
  // }
  selectedOption(e:any){
    e.target.value;
  }

}
