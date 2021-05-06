import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IShowFollowerChange } from 'src/app/shared/interfaces/IShowFollowerChange';
import { IMG_BASE_URL } from '../../app.constants';
import { PopularShows } from '../PopularShows/PopularShows.model';

@Component({
  selector: 'popular-shows',
  templateUrl: './PopularShows.component.html',
  styleUrls: ['./PopularShows.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopularShowsComponent {

  imgBaseUrl: string = IMG_BASE_URL;
  readonly IMG_BASE_URL = IMG_BASE_URL;
  data: PopularShows[];
  
  /** Title for baner **/
  @Input('title') Title: any = 'Dummy Title';

  /** Description for baner **/
  @Input('desc') Desc: any = 'Description';

  /** Data for body **/
  @Input('data') 
    set Data(Data: PopularShows[]){
      this.data = Data;
      console.log('data u popular shows ', this.data)
    }

  updateFollowersNumber($event: IShowFollowerChange){
    console.log('event ', $event);
    this.data.forEach(element => {
      if(element.id == $event.showId){
        console.log('podaci su ', $event);
        element.followersNumber += $event.amount
      }
    });
  }

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

}
