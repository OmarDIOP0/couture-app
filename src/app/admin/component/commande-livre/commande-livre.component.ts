import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeApiService } from '../../service/commande-api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-commande-livre',
  templateUrl: './commande-livre.component.html',
  styleUrls: ['./commande-livre.component.css']
})
export class CommandeLivreComponent implements OnInit{

 ngOnInit(): void {
  this.getAllCommande();
 }

  constructor(private datepipe: DatePipe,private router:Router,private apiCommande:CommandeApiService){}
  commandeLivre:any;
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
  getAllCommande(){
    this.apiCommande.getAllCommande().subscribe(commandes=>{
      this.commandeLivre=commandes.filter(commande=>commande.status ==='delivered');
      // this.commandeData=commandes;
      this.nombreCommande=this.commandeLivre.length;
      this.loading=false;

    })
  }
  formatDate(updatedAt:string){
    const date = new Date(updatedAt);
    const formatDate =this.datepipe.transform(date, 'dd-MM-yyyy');
    return formatDate;
  }

}
