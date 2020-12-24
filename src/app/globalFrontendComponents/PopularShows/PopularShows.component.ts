import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IMG_BASE_URL } from '../../app.constants';

@Component({
  selector: 'popular-shows',
  templateUrl: './PopularShows.component.html',
  styleUrls: ['./PopularShows.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopularShowsComponent implements OnInit {

  imgBaseUrl: string = IMG_BASE_URL;
  readonly IMG_BASE_URL = IMG_BASE_URL;
  
  /** Title for baner **/
  @Input('title') Title: any = 'Dummy Title';

  /** Description for baner **/
  @Input('desc') Desc: any = 'Description';

  /** Background for baner **/
  @Input('data') Data: any;

  slideConfig = {
       centerMode: true,
       centerPadding: '15%',
       slidesToShow: 3,
       dots: true,
       arrows: false,
       responsive: [
        {
          breakpoint: 1441,
          settings: {
            centerPadding: '10%',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1025,
          settings: {
            centerPadding: '10px',
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            centerPadding: '10px',
            slidesToShow: 1
          }
        }
       ]
     };

  ngOnInit(){
  }

  ngAfterViewInit()
  { }

}
