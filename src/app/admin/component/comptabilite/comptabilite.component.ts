import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comptabilite',
  templateUrl: './comptabilite.component.html',
  styleUrls: ['./comptabilite.component.css']
})
export class ComptabiliteComponent implements OnInit{

  constructor(private router:Router){}
  ngOnInit(): void {
  }

  navigateCaisse(){
    this.router.navigate(["/caisse"]);
  }
  navigateGenerale(){
    this.router.navigate(["/general"]);
  }
  navigateSalaire(){
    this.router.navigate(['/employee']);
  }
  navigateAutreFact(){
    this.router.navigate(['/autrefacture']);
  }
}
