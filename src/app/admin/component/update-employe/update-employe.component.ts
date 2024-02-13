import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ComptabiliteService } from '../../service/comptabilite.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit{
  employeData:any;
  idRoute!:any;
  constructor(private toarst:ToastrService, private apiEmploye:ComptabiliteService ,private activeRoute:ActivatedRoute,private route:Router){}

  ngOnInit(): void {
    const confirmation = confirm('Voulez vous modifié le client ?');
    if(confirmation){
      this.idRoute=this.activeRoute.snapshot.paramMap.get('id');
      this.apiEmploye.getEmploye(this.idRoute).subscribe((data:any)=>{
        this.employeData=data;
      })
    }
    else{
      this.route.navigate(['/client']);
    }
  }

  updateEmploye(){
    this.apiEmploye.updateEmploye(this.employeData,this.idRoute).subscribe((res:any)=>{
      this.toarst.success("Employe Modifié avec success!");
      this.route.navigate(['/employee']);
    },

    (error)=>{
      this.toarst.error('Une erreur est survenue');
      console.error('Erreur lors de la modification');
     })
  }

}
