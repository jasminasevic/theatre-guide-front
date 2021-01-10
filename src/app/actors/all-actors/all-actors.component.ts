import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { SidebarLayoutOneComponent } from 'src/app/listing/SidebarLayoutOne/SidebarLayoutOne.component';
import { IActorData } from 'src/app/shared/interfaces/IActorData';
import { ActorBaseDetails } from '../ActorBaseDetails.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'all-actors',
  templateUrl: './all-actors.component.html',
  styleUrls: ['./all-actors.component.css']
})
export class AllActorsComponent implements OnInit {

  actors: ActorBaseDetails[];
  readonly IMG_BASE_URL = IMG_BASE_URL;
  totalCount: number;

  itemsPerPage: any;
  currentPage = 1;
  totalItems: any;
  p: number = 1;

  @ViewChild(SidebarLayoutOneComponent) searchItem;
  @ViewChild(SidebarLayoutOneComponent) sortItems;

  searchActor: string; 
  sortActors: string;

  size = 4;
  pageSizes = [4, 8, 12];

  constructor(private actorService: ActorsService,
    private activatedRoute: ActivatedRoute) {}
  

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { actorList: IActorData}) => {
      this.actors = data.actorList.data,
      this.totalCount = data.actorList.totalCount
  })
}

  handlePageSizeChange(event) {
    this.size = event.target.value;
  
    this.actorService.getAllActors(this.size, this.p, this.searchActor, this.sortActors)
    .subscribe(data => {
      if(data.data.length == 0){
        this.actorService.getAllActors(this.size, 1, this.searchActor, this.sortActors)
          .subscribe(data => {
            this.actors = data.data,
            this.totalCount = data.totalCount
          })
      }
      this.actors = data.data,
      this.totalCount = data.totalCount
    })
  }

  handlePageChange(event) {
    this.p = event;
    this.actorService.getAllActors(this.size, this.p, this.searchActor, this.sortActors)
    .subscribe(data => {
      this.actors = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSearchItems(searchTerm: string) : void {
    this.searchActor = searchTerm;

    this.actorService.getAllActors(this.size, this.p = 1, this.searchActor, this.sortActors)
    .subscribe(data => {
      this.actors = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSortItems(sortOrder: string) : void{
    this.sortActors = sortOrder;

    this.actorService.getAllActors(this.size, this.p = 1, this.searchActor, this.sortActors)
    .subscribe(data => {
      this.actors = data.data,
      this.totalCount = data.totalCount
    })
  }

  onResetItems(value){
    if(value == true){
      this.actorService.getAllActors(this.size, 1, '', '')
      .subscribe(data => {
        this.actors = data.data,
        this.totalCount = data.totalCount
      })
    }
  }
  

}
