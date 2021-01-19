import { Component, Input, OnInit } from '@angular/core';
import { IMG_BASE_URL } from 'src/app/app.constants';

@Component({
  selector: 'upcoming-premieres',
  templateUrl: './UpcomingPremieres.component.html',
  styleUrls: ['./UpcomingPremieres.component.scss']
})
export class UpcomingPremieresComponent implements OnInit {

  readonly IMG_BASE_URL = IMG_BASE_URL;
   /** Title for baner **/
   @Input('title') Title: any = 'Dummy Title';

   /** Description for baner **/
   @Input('desc') Desc: any = 'Description';

   /** Description for baner **/
   @Input('bgColor') BgColor: any = '#f8f8f8';

   /** Background for baner **/
   @Input('data') Data: any;

   @Input('baseImgUrl') baseImgUrl: any;

   slideConfig = {
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  dots: true,
                  arrows: true,
                  responsive: [
                      {
                        breakpoint: 992,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                        }
                      },
                      {
                        breakpoint: 769,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                        }
                      }
                 ]
               };

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {}

}
