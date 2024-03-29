import { Component, OnInit, ViewChild } from '@angular/core';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { ShowBaseDetails } from 'src/app/shows/ShowBaseDetails.model';
import { ShowsService } from '../shows.service';
import { SidebarLayoutTwoComponent } from '../../../listing/SidebarLayoutTwo/SidebarLayoutTwo.component';
import { ActivatedRoute } from '@angular/router';
import { IShowData } from 'src/app/shared/interfaces/IShowData';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { CheckIsTheatreDataAddeedService } from 'src/app/shared/services/checkIsTheatreDataAddeed.service';

@Component({
  selector: 'app-all-shows',
  templateUrl: './all-shows.component.html',
  styleUrls: ['./all-shows.component.scss']
})
export class AllShowsComponent implements OnInit {

  shows: ShowBaseDetails[];
  readonly IMG_BASE_URL = IMG_BASE_URL;
  
  totalCount: number;
  itemsPerPage: any;
  currentPage: number = 1;
  totalItems: any;

  p: number = 1;
  size: number = 4;
  pageSizes: Array<number> = [4, 8, 12];

  @ViewChild(SidebarLayoutTwoComponent) searchItem;
  @ViewChild(SidebarLayoutTwoComponent) sortItems;

  searchShow: string;
  sortShows: string;

  showId: number;

  constructor(private showService: ShowsService,
    private activatedRoute: ActivatedRoute,
    private alertify: AlertifyService,
    private checkIsTheatreDataAddedService: CheckIsTheatreDataAddeedService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: {showList: IShowData}) => {
      this.shows = data.showList.data,
      this.totalCount = data.showList.totalCount
    });
  }

  handlePageSizeChange(event) {
    this.size = event.target.value;
  
    this.showService.getShowsFilteredByTheatre(this.size, this.p, this.searchShow, this.sortShows)
    .subscribe(data => {
      if(data.data.length == 0){
        this.showService.getShowsFilteredByTheatre(this.size, this.p = 1, this.searchShow, this.sortShows)
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
    this.showService.getShowsFilteredByTheatre(this.size, this.p, this.searchShow, this.sortShows)
    .subscribe(data => {
      this.shows = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSearchItems(searchTerm: string) : void {
    this.searchShow = searchTerm;

    this.showService.getShowsFilteredByTheatre(this.size, this.p = 1, this.searchShow, this.sortShows)
    .subscribe(data => {
      this.shows = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSortItems(sortOrder: string) : void{
    this.sortShows = sortOrder;

    this.showService.getShowsFilteredByTheatre(this.size, this.p = 1, this.searchShow, this.sortShows)
    .subscribe(data => {
      this.shows = data.data,
      this.totalCount = data.totalCount
    })
  }

  onResetItems(value){
    if(value == true){
      this.showService.getShowsFilteredByTheatre(this.size, 1, '', '')
      .subscribe(data => {
        this.shows = data.data,
        this.totalCount = data.totalCount
      })
    }
  }

  setId(showId){
    this.showId = showId
  }

  deleteShow(){
    this.showService.deleteShow(this.showId)
    .subscribe(() =>{
      let index = this.shows.findIndex(x => x.id === this.showId); //find index in array
      this.shows.splice(index, 1);//remove element from array
      if(this.shows.length == 0){
        this.checkIsTheatreDataAddedService.changeShowAddedStatus(false);
      }
      this.alertify.success("Successfully deleted")
    }, err => {
        this.alertify.error('Something went wrong')
      });
  }

  popoverTitle = 'Be careful!';
  popoverMessage = 'Are you sure you want to delete this show?';
  confirmClicked = false;
  cancelClicked = false;
  confirmText = 'Yes';
  cancelText = 'No';
}

