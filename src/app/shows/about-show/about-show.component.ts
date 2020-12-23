import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowsService } from '../shows.service';
import { ShowDetails } from '../ShowDetails.model';

@Component({
  selector: 'about-show',
  templateUrl: './about-show.component.html',
  styleUrls: ['./about-show.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutShowComponent implements OnInit {
   
   lat = -34.397;
   lng = 150.644;

   headerGallerySlider: any;
   show: ShowDetails;

   constructor(private showService: ShowsService,
      private activatedRoute: ActivatedRoute){}

   ngOnInit(){
      this.activatedRoute.data.subscribe((data: {show: ShowDetails}) => {
         this.show = data.show,
         this.headerGallerySlider = this.show.showImageDtos;
      })
   }

}
