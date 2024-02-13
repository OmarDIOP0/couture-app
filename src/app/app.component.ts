import { Component } from '@angular/core';
import { LoginService } from './admin/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginApi:LoginService){}

  showsidebar=true;
  infoData:any;
  title = 'Put & Go';
  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
  }

}
