import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { LoginStatusService } from 'src/app/shared/services/loginStatus.service';

@Component({
  selector: 'app-footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
    
    isLoggedInStatus: boolean;
    
    constructor(private loginStatusService: LoginStatusService){}

  ngOnInit(){
    this.loginStatusService.currentLoginStatus$
      .subscribe(
        message => {
          this.isLoggedInStatus = message
        });
  }



}
