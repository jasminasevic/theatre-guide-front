import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RepertoiresService } from 'src/app/repertoires/repertoires.service';
import { HomePageSearchService } from '../../shared/services/homePageSearch.service';
import { IHomePageSearchRepertoire } from '../../shared/interfaces/IHomePageSearchRepertoire';
import { ConvertDateService } from 'src/app/shared/services/convert-date.service';

@Component({
  selector: 'banner-version1',
  templateUrl: './Banner.component.html',
  styleUrls: ['./Banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent {

   /** Title for baner **/
   @Input('title') Title: any = 'Dummy Title';

   /** Description for baner **/
   @Input('desc') Desc: any = 'Description';

   /** Background for baner **/
   @Input('bgImageUrl') BgImageUrl: any = 'assets/images/main-search-background-01.jpg';

   subscription: Subscription;
   searchedData: IHomePageSearchRepertoire = {
    location: '',
    showDate: ''
   };
   minDate: any;

   constructor(private repertoireService: RepertoiresService,
    private homePageSearch: HomePageSearchService,
    private router: Router,
    private convertDateService: ConvertDateService){
      this.minDate = this.convertDateService.getMinDate();
    }

   searchRepertoire(location, date){
     this.searchedData['location'] = location;
     this.searchedData['showDate'] = date;
     this.homePageSearch.changeSearchedData(this.searchedData);
     this.router.navigate(['/repertoires/all-plays']);
   }

}
