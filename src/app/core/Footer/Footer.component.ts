import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { InteractionService } from 'src/app/shared/services/interaction.service';

@Component({
  selector: 'app-footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
    
    isLoggedInStatus: boolean;
    
    constructor(private interactionService: InteractionService){}

  ngOnInit(){
    this.interactionService.currentLoginStatus$
      .subscribe(
        message => {
          this.isLoggedInStatus = message
        });
  }



}
