import { Component, OnInit, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'title-bar',
  templateUrl: './TitleBar.component.html',
  styleUrls: ['./TitleBar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TitleBarComponent implements OnInit {

   @Input('title') Title: any = 'Dummy Title';
   @Input('subtitle') SubTitle: any = 'Dummy Sub Title';
   @Input('page') Page: any = 'Dummy Sub Title';

   constructor(private router: Router){}

   ngOnInit(){

   }

   ngAfterViewInit()
   {
     
   }
}
