import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckIsTheatreDataAddeedService {

  private isTheatreVisibleSource = new BehaviorSubject<boolean>(false);
  private isSceneAddedSource = new BehaviorSubject<boolean>(false);
  private isShowAddedSource = new BehaviorSubject<boolean>(false);
  private isRepertoireAddedSoure = new BehaviorSubject<boolean>(false);

  currentTheatreVisibilityStatus$ = this.isTheatreVisibleSource.asObservable();
  currentSceneAddedStatus$ = this.isSceneAddedSource.asObservable();
  currentShowAddedStatus$ = this.isShowAddedSource.asObservable();
  currentRepertoireStatus$ = this.isRepertoireAddedSoure.asObservable();

  changeTheatreVisibilityStatus(isTheatreVisible: boolean){
    this.isTheatreVisibleSource.next(isTheatreVisible);
  }

  changeSceneAddedStatus(isSceneAdded: boolean){
    this.isSceneAddedSource.next(isSceneAdded);
  }

  changeShowAddedStatus(isShowAdded: boolean){
    this.isShowAddedSource.next(isShowAdded);
  }

  changeRerertoireAddedStatus(isRepertoireAdded: boolean){
    this.isRepertoireAddedSoure.next(isRepertoireAdded);
  }

}
