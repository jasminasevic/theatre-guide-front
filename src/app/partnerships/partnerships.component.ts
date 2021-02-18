import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'partnerships',
  templateUrl: './partnerships.component.html',
  styleUrls: ['./partnerships.component.scss']
})
export class PartnershipsComponent implements OnInit {

  teamSectionTitle : string = 'The Amazing Team';
   teamSectionDesc  : string = `Our team is composed of many people who are working together 
   to achieve one goal - to help you discover some of the greatest shows and buy tickets for them.`;
   teamMembers : any = [
                     {
                        name     : 'Jasmina Sevic',
                        position : 'Web Developer',
                        image    : 'assets/images/jasmina-sevic.jpg'
                     },
                     {
                        name     : 'Romina Hadid',
                        position : 'Marketing Strategist',
                        image    : 'assets/images/thumb-2.jpg'
                     },
                     {
                        name     : 'Alexander Smith',
                        position : 'UI/UX Designer',
                        image    : 'assets/images/thumb-3.jpg'
                     },
                     {
                        name     : 'Ethan Moore',
                        position : 'Client Service Delivery',
                        image    : 'assets/images/thumb-4.jpg'
                     }
                    
                  ]; 
                  
  constructor() { }

  ngOnInit() {
  }


}
