import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeApiService } from '../../service/commande-api.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-commande-termine',
  templateUrl: './commande-termine.component.html',
  styleUrls: ['./commande-termine.component.css']
})
export class CommandeTermineComponent implements OnInit{
  ngOnInit(): void {
      this.commandeValider();
  }
  constructor(private datepipe:DatePipe,private router:Router,private apiCommande:CommandeApiService,private toarst:ToastrService){}
  commandeValide:any;
  clientData:any[]=[];
  produitData:any[]=[];
  commandeData:any[]=[];
  nombreCommande:any;
  loading: boolean = true;

  selectOption:any;
  navigatePage(selectOption:string):void{
    if(selectOption==='EnCours'){
      this.router.navigate(['/commandeEnCours']);
    }
    else if(selectOption==='Termine'){
      this.router.navigate(['/commandeTermine']);
    }
    else{
      this.router.navigate(['/commandeLivre']);
    }
  }
  commandeValider():void{
    this.apiCommande.getAllCommande().subscribe(commandes=>{
      this.commandeValide=commandes.filter(commande=>commande.status ==='ready');
      this.nombreCommande=this.commandeData.length;
      this.loading=false;

    });
  }

  livrerCommande(commande:any){
    const confirmation = confirm('Etes vous sûr de livrer la commmande ?');
    if(confirmation){
      return this.apiCommande.livreCommande(commande._id).subscribe(()=>{
      this.commandeValider();
      this.toarst.success('Commande Livré avec success !')
      })
    }
    else{
      return false;
    }
  }
  formatDate(updatedAt:string){
    const date = new Date(updatedAt);
    const formatDate =this.datepipe.transform(date, 'dd-MM-yyyy');
    return formatDate;
  }

}
