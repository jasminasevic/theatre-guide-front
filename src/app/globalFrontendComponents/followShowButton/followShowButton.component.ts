import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { IFollower } from 'src/app/shared/interfaces/IFollower';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
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
    private followerService: FollowShowButtonService,
    private alertify: AlertifyService) {}

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

  follow(){
    if(this.userId != null){
      if(this.isFollowed == false){
        console.log(this.userId, this.showIdentifier);
        let follower: IFollower = {
          userId: null,
          showId: null
        };
        follower.showId = this.showIdentifier.toString();
        follower.userId = this.userId.toString();

        this.followerService.followShow(follower)
          .subscribe(() => {
            this.isFollowed = true,
            this.title = "Unfollow"
          }, err => {
            console.log(err)
          })
      } 
      else {
        console.log(this.userId, this.showIdentifier);
        this.followerService.unfollowShow(this.userId, this.showIdentifier)
          .subscribe(() => {
            this.isFollowed = false,
            this.title = "Follow"
          }, err => {
            console.log(err)
          })
      }
    } else {
      this.alertify.warning("Please sign in to your account to proceed.")
    }
  }

}
