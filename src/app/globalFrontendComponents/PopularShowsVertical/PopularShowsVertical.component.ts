import { Component, Input, OnInit } from '@angular/core';
import { IMG_BASE_URL } from 'src/app/app.constants';

@Component({
  selector: 'popular-shows-vertical',
  templateUrl: './PopularShowsVertical.component.html',
  styleUrls: ['./PopularShowsVertical.component.scss']
})
export class PopularShowsVerticalComponent implements OnInit {

  imgBaseUrl: string = IMG_BASE_URL;
  readonly IMG_BASE_URL = IMG_BASE_URL;
  
  /** Title for baner **/
  @Input('title') Title: any = 'Dummy Title';

  /** Description for baner **/
  @Input('desc') Desc: any = 'Description';

  /** Background for baner **/
  @Input('data') Data: any;

  
  constructor() { }

  ngOnInit() {}

}
