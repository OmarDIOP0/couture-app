import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComptabiliteService } from '../../service/comptabilite.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MesBoutiquesApiService } from '../../service/mes-boutiques-api.service';

@Component({
  selector: 'app-salaire',
  templateUrl: './salaire.component.html',
  styleUrls: ['./salaire.component.css']
})
export class SalaireComponent implements OnInit{

 constructor(private router:Router,private apiComp:ComptabiliteService,private formbuilder:FormBuilder,private toastr:ToastrService,private apiShop:MesBoutiquesApiService){}
 employeForm:FormGroup|any;
 employeData:any;
 shopData:any;
 salaire:any;

 ngOnInit(): void {
   this.getAllEmployee();
  this.getShop();
  this.comptaSalaire();
    this.employeForm=this.formbuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      phone:['',Validators.required],
      salary:[0,Validators.required],
      shopId:['',Validators.required]
    })
}
 navigatePrevious(){
  this.router.navigate(['/comptabilite'])
 }

 addEmploye(data:any){
  this.apiComp.addEmploye(data).subscribe(res=>{
    this.employeForm.reset();
    this.toastr.success('Employe Ajouté avec success !');
    this.getAllEmployee();
  },

  (error)=>{
    this.toastr.error('Erreur lors de l ajout');
    console.error('Une erreur s est produit');
  });
}
getAllEmployee(){
  this.apiComp.getAllEmploye().subscribe(res=>{
    this.employeData=res
  },
    (error)=>{
      this.toastr.error('Une erreur est survenue');
    });
}
getShop(){
  this.apiShop.getAllBoutique().subscribe(res=>{
    this.shopData=res;
  })
}
deleteEmploye(id:string){
  const confirmation = confirm('Voulez vous supprimé le client ?');
  if(confirmation){
    return this.apiComp.deleteEmploye(id).subscribe(res=>{
    this.toastr.success("EMploye supprimé avec success!");
    this.getAllEmployee();
  },
  (error)=>{
    this.toastr.error('Une erreur est survenue');
    console.error('Erreur lors de la suppression');
   });
  }
  return false;

}
comptaSalaire(){
 this.apiComp.comptabiliteSalaire().subscribe(res=>{
  this.salaire=res.totalSalary;
 })
}

}
