import { Component, OnInit, Input, Output, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Category } from '../Categories/Category.model';
import { CategoriesService } from '../Categories/Categories.service';

@Component({
  selector: 'banner-version1',
  templateUrl: './Banner.component.html',
  styleUrls: ['./Banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit {

   /** Title for baner **/
   @Input('title') Title: any = 'Dummy Title';

   /** Description for baner **/
   @Input('desc') Desc: any = 'Description';

   /** Background for baner **/
   @Input('bgImageUrl') BgImageUrl: any = 'assets/images/main-search-background-01.jpg';

   categories: Category[];
   constructor(private categoryService: CategoriesService){}

   ngOnInit(){
    this.categoryService.getCategoryList()
      .subscribe(data => {
        this.categories = data
      })
   }

   ngAfterViewInit()
   {

   }
}
