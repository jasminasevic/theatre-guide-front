import { Component, Input, OnInit } from '@angular/core';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { IShowFollowerChange } from 'src/app/shared/interfaces/IShowFollowerChange';
import { PopularShows } from '../PopularShows/PopularShows.model';

@Component({
  selector: 'popular-shows-vertical',
  templateUrl: './PopularShowsVertical.component.html',
  styleUrls: ['./PopularShowsVertical.component.scss']
})
export class PopularShowsVerticalComponent {

  imgBaseUrl: string = IMG_BASE_URL;
  readonly IMG_BASE_URL = IMG_BASE_URL;
  data: PopularShows[];
  
  /** Title for baner **/
  @Input('title') Title: any = 'Dummy Title';

  /** Description for baner **/
  @Input('desc') Desc: any = 'Description';

  /** Data for body **/
  @Input('data') 
  set Data(Data: PopularShows[]) {
    this.data = Data
  }
 
  constructor() {}

  updateFollowersNumber($event: IShowFollowerChange){
    this.data.forEach(element => {
      if(element.id == $event.showId){
        element.followersNumber += $event.amount
      }
    });
 }
}
