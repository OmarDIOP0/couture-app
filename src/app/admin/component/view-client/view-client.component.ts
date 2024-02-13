import { Component, OnInit } from '@angular/core';
import { ClientApiService } from '../../service/client-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit{
  idRoute:any;
  clientData:any;
  loading:boolean=true;
  constructor(private apiClient:ClientApiService,private activeRoute:ActivatedRoute,private route:Router){}
  ngOnInit(): void {
    this.idRoute=this.activeRoute.snapshot.paramMap.get('id');
    this.apiClient.fetchData(this.idRoute).subscribe(response=>{
      this.loading=false;
      this.clientData=response;
     })
  }

}
