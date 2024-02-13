import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from '../../model/clientmodel';
import { ClientApiService } from '../../service/client-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  clientCategory:any=['prenom','nom','numeroTel','mesure'];
  showAllData:any=[];
  filterName:any;
  filterData:any=[];
  showData:any;
  idRoute:any;
  dataClient:any;
  newdataClient?:Array<client>;
  nombreClient:any;
  pageNumber:number=1;
  pageSize:number=10;
  loading: boolean = true;
  numero:number=0;
  userData:any;
  nombreUser:any;
  //dataClient:undefined|client[];
  showClients: boolean = true;

  clientForm:FormGroup |any;
  constructor(private formBuilder:FormBuilder,private router:Router,private apiClient:ClientApiService,private route:ActivatedRoute,private toarst:ToastrService){}

  ngOnInit(): void {
    this.getAllUser();
    this.getAllClient();
    this.clientForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      phone:['',Validators.required],
      mesures:this.formBuilder.group({
      mesureC:['',Validators.required],
      mesureE:['',Validators.required],
      mesureM:['',Validators.required],
      mesureLa:['',Validators.required],
      mesureLb:['',Validators.required],
      mesureS:['',Validators.required],
      mesureK:['',Validators.required],
      mesureF:['',Validators.required],
      mesureLp:['',Validators.required],
      mesureBr:['',Validators.required],
      mesureBa:['',Validators.required],
      mesurePoignee:['',Validators.required],
      mesureMollet:['',Validators.required]
    })
  });
}


  submitClient(data:any){
    this.apiClient.addClient(data).subscribe(res=>{
      this.toarst.success("Client Ajouté avec success!");
      this.clientForm.reset();
      this.getAllClient();
      this.numero++;
    })}

  getAllClient(){
    this.apiClient.getClient().subscribe(res=>{
      this.dataClient=res;
      this.nombreClient=this.dataClient.length;
      this.loading=false;
    },
     (error)=>{
      this.loading=false;
      this.toarst.error('Une erreur est survenue');
      console.error('Erreur lors de l ajout');

     }
    )
  }
  getAllUser(){
    this.apiClient.getAllUser().subscribe(res=>{
      this.userData=res;
      this.nombreUser=this.userData.length;
      this.loading=false;
      console.log(this.userData);

    },
     (error)=>{
      this.loading=false;
      this.toarst.error('Une erreur est survenue');
      console.error('Erreur lors de l ajout');

     }
    )
  }

  deleteClient(id:string){
    const confirmation = confirm('Voulez vous supprimé le client ?');
    if(confirmation){
      return this.apiClient.deleteClient(id).subscribe(res=>{
      this.toarst.success("Client supprimé avec success!");
      this.getAllClient();
    },
    (error)=>{
      this.toarst.error('Une erreur est survenue');
      console.error('Erreur lors de la suppression');
     });
    }
    return false;

  }
}

