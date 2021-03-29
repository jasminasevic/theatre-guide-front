import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarLayoutTwoComponent } from 'src/app/listing/SidebarLayoutTwo/SidebarLayoutTwo.component';
import { RepertoiresService } from '../repertoires.service';
import { Repertoire } from '../repertoire.model';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { IRepertoireData } from 'src/app/shared/interfaces/IRepertoireData';

@Component({
  selector: 'app-all-repertoires',
  templateUrl: './all-repertoires.component.html',
  styleUrls: ['./all-repertoires.component.scss']
})
export class AllRepertoiresComponent implements OnInit {

  repertoires: Repertoire[];
  totalCount: number;
  itemsPerPage: any;
  currentPage: number = 1;
  totalItems: any;

  p: number = 1;
  size: number = 4;
  pageSizes: Array<number> = [4, 8, 12];

  @ViewChild(SidebarLayoutTwoComponent) searchItem;
  @ViewChild(SidebarLayoutTwoComponent) sortItems;

  searchRepertoire: string;
  sortRepertoires: string;

  repertoireId: number;

  constructor(private repertoireService: RepertoiresService,
    private activatedRoute: ActivatedRoute,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: {repertoireList: IRepertoireData}) => {
      this.repertoires = data.repertoireList.data,
      this.totalCount = data.repertoireList.totalCount
    });
  }

  showPastShows(event){
    if(event.target.checked){
      this.repertoireService.getRepertoiresFilteredByTheatre()
        .subscribe(data => {
          this.repertoires = data.data,
          this.totalCount = data.totalCount
        })
    } else {
      this.repertoireService.getUpcomingRepertoiresFilteredByTheatre()
      .subscribe(data => {
        this.repertoires = data.data,
        this.totalCount = data.totalCount
      })
    }
  }

  isAfterToday(date) {
    return new Date(date).valueOf() > new Date().valueOf();
  }

  handlePageSizeChange(event) {
    this.size = event.target.value;
  
    this.repertoireService.getRepertoiresFilteredByTheatre(this.size, this.p, this.searchRepertoire, this.sortRepertoires)
    .subscribe(data => {
      if(data.data.length == 0){
        this.repertoireService.getRepertoiresFilteredByTheatre(this.size, this.p = 1, this.searchRepertoire, this.sortRepertoires)
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
    this.repertoireService.getRepertoiresFilteredByTheatre(this.size, this.p, this.searchRepertoire, this.sortRepertoires)
    .subscribe(data => {
      this.repertoires = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSearchItems(searchTerm: string) : void {
    this.searchRepertoire = searchTerm;

    this.repertoireService.getRepertoiresFilteredByTheatre(this.size, this.p = 1, this.searchRepertoire, this.sortRepertoires)
    .subscribe(data => {
      this.repertoires = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSortItems(sortOrder: string) : void{
    this.sortRepertoires = sortOrder;

    this.repertoireService.getRepertoiresFilteredByTheatre(this.size, this.p = 1, this.searchRepertoire, this.sortRepertoires)
    .subscribe(data => {
      this.repertoires = data.data,
      this.totalCount = data.totalCount
    })
  }

  onResetItems(value){
    if(value == true){
      this.repertoireService.getRepertoiresFilteredByTheatre(this.size, 1, '', '')
      .subscribe(data => {
        this.repertoires = data.data,
        this.totalCount = data.totalCount
      })
    }
  }

  setId(repertoireId){
    this.repertoireId = repertoireId
  }

  deleteRepertoire(){
    this.repertoireService.deleteRepertoire(this.repertoireId)
    .subscribe(() =>{
      let index = this.repertoires.findIndex(x => x.id === this.repertoireId); //find index in array
      this.repertoires.splice(index, 1);//remove element from array
      this.alertify.success("Successfully deleted")
    }, err => {
        this.alertify.error('Something went wrong')
      });
  }

  popoverTitle = 'Be careful!';
  popoverMessage = 'Are you sure you want to delete this repertoire?';
  confirmClicked = false;
  cancelClicked = false;
  confirmText = 'Yes';
  cancelText = 'No';

}
