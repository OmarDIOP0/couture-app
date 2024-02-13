import { Component, OnInit } from '@angular/core';
import { ComptabiliteService } from '../../service/comptabilite.service';

@Component({
  selector: 'app-generale',
  templateUrl: './generale.component.html',
  styleUrls: ['./generale.component.css']
})
export class GeneraleComponent implements OnInit{

  totalEntree:number=0;
  totalSortie:number=0;
  caisseData:any;
  total:any;
  salaire:any;
  ngOnInit(): void {
    this.getCaisse();
  }
  constructor(private apiCompt:ComptabiliteService){}

  getCaisse(){
    this.comptaSalaire();
    this.apiCompt.getAllCaisse().subscribe(res=>{
      this.caisseData=res;
      this.calculTotal();
    });
  }
  calculTotal(){
    this.totalEntree=this.caisseData.reduce((acc:any,totalCaisse:any)=>{
      return acc+totalCaisse.entree;
    },0);

    this.totalSortie=this.caisseData.reduce((acc:any,totalCaisse:any)=>{
      return acc+totalCaisse.sortie;
    },0);

    this.total=this.caisseData.reduce((acc:any,totalCaisse:any)=>{
      return acc+(totalCaisse.entree-totalCaisse.sortie);
    },0);
  }

  comptaSalaire(){
    this.apiCompt.comptabiliteSalaire().subscribe(res=>{
    this.salaire=res.totalSalary;
    })
   }
}
