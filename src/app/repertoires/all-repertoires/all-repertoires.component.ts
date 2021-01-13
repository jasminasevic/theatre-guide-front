import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { SidebarLayoutOneComponent } from 'src/app/listing/SidebarLayoutOne/SidebarLayoutOne.component';
import { IRepertoireData } from 'src/app/shared/interfaces/IRepertoireData';
import { RepertoireBaseDetails } from '../RepertoireBaseDetails.model';
import { RepertoiresService } from '../repertoires.service';

@Component({
  selector: 'all-repertoires',
  templateUrl: './all-repertoires.component.html',
  styleUrls: ['./all-repertoires.component.css']
})
export class AllRepertoiresComponent implements OnInit {

  repertoires: RepertoireBaseDetails[];
  readonly IMG_BASE_URL = IMG_BASE_URL;
  totalCount: number;

  itemsPerPage: any;
  currentPage = 1;
  totalItems: any;
  p: number = 1;

  @ViewChild(SidebarLayoutOneComponent) searchItem;
  @ViewChild(SidebarLayoutOneComponent) sortItems;

  searchRepertoire: string; 
  sortRepertoires: string;

  size = 4;
  pageSizes = [4, 8, 12];

  constructor(private repertoireService: RepertoiresService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { repertoireList: IRepertoireData}) => {
        this.repertoires = data.repertoireList.data,
        console.log(data.repertoireList.data),
        this.totalCount = data.repertoireList.totalCount
      })
  }

  handlePageSizeChange(event) {
    this.size = event.target.value;
  
    this.repertoireService.getAllRepertoires(this.size, this.p, this.searchRepertoire, this.sortRepertoires)
    .subscribe(data => {
      if(data.data.length == 0){
        this.repertoireService.getAllRepertoires(this.size, this.p = 1, this.searchRepertoire, this.sortRepertoires)
          .subscribe(data => {
            this.repertoires = data.data,
            this.totalCount = data.totalCount
          })
      }
      this.repertoires = data.data,
      this.totalCount = data.totalCount
    })
  }

  handlePageChange(event) {
    this.p = event;
    this.repertoireService.getAllRepertoires(this.size, this.p, this.searchRepertoire, this.sortRepertoires)
    .subscribe(data => {
      this.repertoires = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSearchItems(searchTerm: string) : void {
    this.searchRepertoire = searchTerm;

    this.repertoireService.getAllRepertoires(this.size, this.p = 1, this.searchRepertoire, this.sortRepertoires)
    .subscribe(data => {
      this.repertoires = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSortItems(sortOrder: string) : void{
    this.sortRepertoires = sortOrder;

    this.repertoireService.getAllRepertoires(this.size, this.p = 1, this.searchRepertoire, this.sortRepertoires)
    .subscribe(data => {
      this.repertoires = data.data,
      this.totalCount = data.totalCount
    })
  }

  onResetItems(value){
    if(value == true){
      this.repertoireService.getAllRepertoires(this.size, 1, '', '')
      .subscribe(data => {
        this.repertoires = data.data,
        this.totalCount = data.totalCount
      })
    }
  }

}
