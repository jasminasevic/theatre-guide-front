import { Component, Input, OnInit } from '@angular/core';
import { IMG_BASE_URL } from 'src/app/app.constants';

@Component({
  selector: 'recentlyJoinedTheatres',
  templateUrl: './RecentlyJoinedTheatres.component.html',
  styleUrls: ['./RecentlyJoinedTheatres.component.scss']
})
export class RecentlyJoinedTheatresComponent implements OnInit {

  readonly IMG_BASE_URL = IMG_BASE_URL;
  /** Title for section **/
  @Input('title') Title: any = 'Dummy Title';

  /** Desc for section **/
  @Input('desc') Desc: any = 'Dummy Description';

  /** Background for section **/
  @Input('data') Data: any;

  constructor(){}

  ngOnInit(){}

  ngAfterViewInit()
  {

  }

}
