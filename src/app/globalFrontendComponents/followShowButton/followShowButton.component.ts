import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { FollowShowButtonService } from './followShowButton.service';

@Component({
  selector: 'follow-show-button',
  templateUrl: './followShowButton.component.html',
  styleUrls: ['./followShowButton.component.scss']
})
export class FollowShowButtonComponent {

  userId: number;
  showIdentifier: number;
  isFollowed: boolean = false;
  title: string = 'Follow';

  constructor(private token: TokenStorageService,
    private followerService: FollowShowButtonService) {}

  @Input() set showId(showId: any){
    this.showIdentifier = showId;

    if(this.token.getToken() != null){
      this.userId = this.token.getUserId();

      this.followerService.checkIsFollowing(this.userId, this.showIdentifier)
        .subscribe(data => {
          this.isFollowed = data,
          this.isFollowed ? this.title = "Unfollow" : this.title = "Follow"
        });
    }
  }

}
