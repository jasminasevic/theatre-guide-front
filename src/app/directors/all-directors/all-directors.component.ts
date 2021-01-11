import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { SidebarLayoutOneComponent } from 'src/app/listing/SidebarLayoutOne/SidebarLayoutOne.component';
import { IDirectorData } from 'src/app/shared/interfaces/IDirectorData';
import { DirectorBaseDetails } from '../DirectorBaseDetails.model';
import { DirectorsService } from '../directors.service';

@Component({
  selector: 'all-directors',
  templateUrl: './all-directors.component.html',
  styleUrls: ['./all-directors.component.css']
})
export class AllDirectorsComponent implements OnInit {

  directors: DirectorBaseDetails[];
  readonly IMG_BASE_URL = IMG_BASE_URL;
  totalCount: number;

  itemsPerPage: any;
  currentPage = 1;
  totalItems: any;
  p: number = 1;

  @ViewChild(SidebarLayoutOneComponent) searchItem;
  @ViewChild(SidebarLayoutOneComponent) sortItems;

  searchDirector: string; 
  sortDirector: string;

  size = 4;
  pageSizes = [4, 8, 12];

  constructor(private directorService: DirectorsService,
    private activatedRoute: ActivatedRoute) {}
  

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { directorList: IDirectorData}) => {
      this.directors = data.directorList.data,
      this.totalCount = data.directorList.totalCount
  })
}

  handlePageSizeChange(event) {
    this.size = event.target.value;
  
    this.directorService.getAllDirectors(this.size, this.p, this.searchDirector, this.sortDirector)
    .subscribe(data => {
      if(data.data.length == 0){
        this.directorService.getAllDirectors(this.size, this.p = 1, this.searchDirector, this.sortDirector)
          .subscribe(data => {
            this.directors = data.data,
            this.totalCount = data.totalCount
          });
      }
      this.directors = data.data,
      this.totalCount = data.totalCount
    })
  }

  handlePageChange(event) {
    this.p = event;
    this.directorService.getAllDirectors(this.size, this.p, this.searchDirector, this.sortDirector)
    .subscribe(data => {
      this.directors = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSearchItems(searchTerm: string) : void {
    this.searchDirector = searchTerm;

    this.directorService.getAllDirectors(this.size, this.p = 1, this.searchDirector, this.sortDirector)
    .subscribe(data => {
      this.directors = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSortItems(sortOrder: string) : void{
    this.sortDirector = sortOrder;

    this.directorService.getAllDirectors(this.size, this.p = 1, this.searchDirector, this.sortDirector)
    .subscribe(data => {
      this.directors = data.data,
      this.totalCount = data.totalCount
    })
  }

  onResetItems(value){
    if(value == true){
      this.directorService.getAllDirectors(this.size, 1, '', '')
      .subscribe(data => {
        this.directors = data.data,
        this.totalCount = data.totalCount
      })
    }
  }

}
