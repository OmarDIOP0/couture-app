import { Component, OnInit } from '@angular/core';
import { ClientApiService } from '../../service/client-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from '../../model/clientmodel';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit{

  clientData:any;
  idRoute!:any;
  constructor(private toarst:ToastrService, private apiClient:ClientApiService,private activeRoute:ActivatedRoute,private route:Router,private toastr:ToastrService){}

  ngOnInit(): void {
    const confirmation = confirm('Voulez vous modifié le client ?');
    if(confirmation){
      this.idRoute=this.activeRoute.snapshot.paramMap.get('id');
      this.apiClient.fetchData(this.idRoute).subscribe((data:any)=>{
        this.clientData=data;
      })
    }
    else{
      this.route.navigate(['/client']);
    }
  }

  updateClient(){
    this.apiClient.updateClient(this.clientData,this.idRoute).subscribe((res:any)=>{
      this.toastr.success("Client Modifié avec success!");
      this.route.navigate(['/client']);
    },

    (error)=>{
      this.toarst.error('Une erreur est survenue');
      console.error('Erreur lors de la modification');
     })
  }
}
