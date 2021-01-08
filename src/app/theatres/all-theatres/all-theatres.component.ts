import { Component, OnInit } from '@angular/core';
import { TheatresService } from '../theatres.service';
import { TheatreBaseDetails } from '../TheatreBaseDetails.model';
import { IMG_BASE_URL } from '../../app.constants';
import { SidebarLayoutOneComponent } from 'src/app/listing/SidebarLayoutOne/SidebarLayoutOne.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-all-theatres',
  templateUrl: './all-theatres.component.html',
  styleUrls: ['./all-theatres.component.scss']
})
export class AllTheatresComponent implements OnInit {

  theatres: TheatreBaseDetails[];
  readonly IMG_BASE_URL = IMG_BASE_URL;
  totalCount: number;

  itemsPerPage: any;
  currentPage = 1;
  totalItems: any;
  p: number = 1;

  @ViewChild(SidebarLayoutOneComponent) searchItem;
  @ViewChild(SidebarLayoutOneComponent) sortItems;

  searchTheatre: string; 
  sortTheatres: string;

  size = 4;
  pageSizes = [4, 8, 12];

  handlePageSizeChange(event) {
    this.size = event.target.value;
  
    this.theatreService.getAllTheatres(this.size, this.p, this.searchTheatre, this.sortTheatres)
    .subscribe(data => {
      if(data.data.length == 0){
        this.theatreService.getAllTheatres(this.size, 1, this.searchTheatre, this.sortTheatres)
          .subscribe(data => {
            this.theatres = data.data,
            this.totalCount = data.totalCount
          })
      }
      this.theatres = data.data,
      this.totalCount = data.totalCount
    })
  }

  handlePageChange(event) {
    this.p = event;
    this.theatreService.getAllTheatres(this.size, this.p, this.searchTheatre, this.sortTheatres)
    .subscribe(data => {
      this.theatres = data.data,
      this.totalCount = data.totalCount
    })
  }

  constructor(private theatreService: TheatresService) { }

  ngOnInit() {
    this.theatreService.getAllTheatres(this.itemsPerPage, this.p)
      .subscribe(data => {
        this.theatres = data.data,
        this.totalCount = data.totalCount
      })
  }

  onSearchItems(searchTerm: string) : void {
    this.searchTheatre = searchTerm;

    this.theatreService.getAllTheatres(this.size, this.p = 1, this.searchTheatre, this.sortTheatres)
    .subscribe(data => {
      this.theatres = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSortItems(sortOrder: string) : void{
    this.sortTheatres = sortOrder;

    this.theatreService.getAllTheatres(this.size, this.p = 1, this.searchTheatre, this.sortTheatres)
    .subscribe(data => {
      this.theatres = data.data,
      this.totalCount = data.totalCount
    })
  }

  onResetItems(value){
    if(value == true){
      this.theatreService.getAllTheatres(this.size, 1, '', '')
      .subscribe(data => {
        this.theatres = data.data,
        this.totalCount = data.totalCount
      })
    }
  }
  
}
