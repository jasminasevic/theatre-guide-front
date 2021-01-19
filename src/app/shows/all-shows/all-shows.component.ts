import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { SidebarLayoutOneComponent } from 'src/app/listing/SidebarLayoutOne/SidebarLayoutOne.component';
import { IShowData } from 'src/app/shared/interfaces/IShowData';
import { ShowBaseDetails } from '../ShowBaseDetails.model';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'all-shows',
  templateUrl: './all-shows.component.html',
  styleUrls: ['./all-shows.component.scss']
})
export class AllShowsComponent implements OnInit {

  shows: ShowBaseDetails[];
  readonly IMG_BASE_URL = IMG_BASE_URL;
  totalCount: number;

  itemsPerPage: any;
  currentPage = 1;
  totalItems: any;
  p: number = 1;

  @ViewChild(SidebarLayoutOneComponent) searchItem;
  @ViewChild(SidebarLayoutOneComponent) sortItems;

  searchShow: string; 
  sortShows: string;

  size = 4;
  pageSizes = [4, 8, 12];

  constructor(private showService: ShowsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { showList: IShowData}) => {
        this.shows = data.showList.data,
        this.totalCount = data.showList.totalCount
      })
  }

  handlePageSizeChange(event) {
    this.size = event.target.value;
  
    this.showService.getAllShows(this.size, this.p, this.searchShow, this.sortShows)
    .subscribe(data => {
      if(data.data.length == 0){
        this.showService.getAllShows(this.size, this.p = 1, this.searchShow, this.sortShows)
          .subscribe(data => {
            this.shows = data.data,
            this.totalCount = data.totalCount
          })
      }
      this.shows = data.data,
      this.totalCount = data.totalCount
    })
  }

  handlePageChange(event) {
    this.p = event;
    this.showService.getAllShows(this.size, this.p, this.searchShow, this.sortShows)
    .subscribe(data => {
      this.shows = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSearchItems(searchTerm: string) : void {
    this.searchShow = searchTerm;

    this.showService.getAllShows(this.size, this.p = 1, this.searchShow, this.sortShows)
    .subscribe(data => {
      this.shows = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSortItems(sortOrder: string) : void{
    this.sortShows = sortOrder;

    this.showService.getAllShows(this.size, this.p = 1, this.searchShow, this.sortShows)
    .subscribe(data => {
      this.shows = data.data,
      this.totalCount = data.totalCount
    })
  }

  onResetItems(value){
    if(value == true){
      this.showService.getAllShows(this.size, 1, '', '')
      .subscribe(data => {
        this.shows = data.data,
        this.totalCount = data.totalCount
      })
    }
  }
  
}
