import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { SidebarLayoutTwoComponent } from 'src/app/listing/SidebarLayoutTwo/SidebarLayoutTwo.component';
import { SceneBaseInfo } from '../sceneBaseInfo.model';
import { ScenesService } from '../scenes.service';
import { ISceneData } from '../../../shared/interfaces/ISceneData';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { CheckIsTheatreDataAddeedService } from 'src/app/shared/services/checkIsTheatreDataAddeed.service';

@Component({
  selector: 'app-all-scenes',
  templateUrl: './all-scenes.component.html',
  styleUrls: ['./all-scenes.component.scss']
})
export class AllScenesComponent implements OnInit {

  scenes: SceneBaseInfo[];
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

  searchScene: string;
  sortScenes: string;

  sceneId: number;

  constructor(private token: TokenStorageService,
    private sceneService: ScenesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertify: AlertifyService,
    private checkIsTheatreDataAddedService: CheckIsTheatreDataAddeedService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: {sceneList: ISceneData}) => {
      this.scenes = data.sceneList.data,
      this.totalCount = data.sceneList.totalCount
    });
  }

  handlePageSizeChange(event) {
    this.size = event.target.value;
  
    this.sceneService.getScenesFilteredByTheatre(this.size, this.p, this.searchScene, this.sortScenes)
    .subscribe(data => {
      if(data.data.length == 0){
        this.sceneService.getScenesFilteredByTheatre(this.size, this.p = 1, this.searchScene, this.sortScenes)
          .subscribe(data => {
            this.scenes = data.data,
            this.totalCount = data.totalCount
          })
      }
      this.scenes = data.data,
      this.totalCount = data.totalCount
    })
  }

  handlePageChange(event) {
    this.p = event;
    this.sceneService.getScenesFilteredByTheatre(this.size, this.p, this.searchScene, this.sortItems)
    .subscribe(data => {
      this.scenes = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSearchItems(searchTerm: string) : void {
    this.searchScene = searchTerm;

    this.sceneService.getScenesFilteredByTheatre(this.size, this.p = 1, this.searchScene, this.sortScenes)
    .subscribe(data => {
      this.scenes = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSortItems(sortOrder: string) : void{
    this.sortScenes = sortOrder;

    this.sceneService.getScenesFilteredByTheatre(this.size, this.p = 1, this.searchScene, this.sortScenes)
    .subscribe(data => {
      this.scenes = data.data,
      this.totalCount = data.totalCount
    })
  }

  onResetItems(value){
    if(value == true){
      this.sceneService.getScenesFilteredByTheatre(this.size, 1, '', '')
      .subscribe(data => {
        this.scenes = data.data,
        this.totalCount = data.totalCount
      })
    }
  }

  setId(sceneId){
    this.sceneId = sceneId
  }

  deleteScene(){
    this.sceneService.deleteScene(this.sceneId)
    .subscribe(() => {
      let index = this.scenes.findIndex(x => x.id === this.sceneId); //find index in array
      this.scenes.splice(index, 1);//remove element from array
      if(this.scenes.length == 0){
        this.checkIsTheatreDataAddedService.changeSceneAddedStatus(false);
      }
      this.alertify.success("Successfully deleted")
    }, err => {
      this.alertify.error('Something went wrong');
      });
  }

  popoverTitle = 'Be careful!';
  popoverMessage = 'Are you sure you want to delete this scene?';
  confirmClicked = false;
  cancelClicked = false;
  confirmText = 'Yes';
  cancelText = 'No';

}
