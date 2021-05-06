import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { IFollower } from 'src/app/shared/interfaces/IFollower';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { FollowShowButtonService } from './followShowButton.service';
import { IShowFollowerChange } from '../../shared/interfaces/IShowFollowerChange';

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
  updateFollowersNumber: number = 0;

  constructor(private token: TokenStorageService,
    private followerService: FollowShowButtonService,
    private alertify: AlertifyService) {}


  @Input() set showId(showId: any){
    console.log('jcnsjnsj ', showId);
    this.showIdentifier = showId;
    console.log('id je ', showId);

    if(this.token.getToken() != null){
      this.userId = this.token.getUserId();

      this.followerService.checkIsFollowing(this.userId, this.showIdentifier)
        .subscribe(data => {
          this.isFollowed = data,
          console.log(this.isFollowed);
          this.isFollowed ? this.title = "Unfollow" : this.title = "Follow"
        });
    }
  }

  @Output() updateTotalFollowersNumber = new EventEmitter<IShowFollowerChange>();
  
  follow(){
    console.log('follow f-ja');
    if(this.userId != null){
      if(this.isFollowed == false){
        let follower: IFollower = {
          userId: null,
          showId: null
        };
        follower.showId = this.showIdentifier.toString();
        follower.userId = this.userId.toString();
        console.log('omg');
        this.followerService.followShow(follower)
          .subscribe(() => {
            this.isFollowed = true;
            this.title = "Unfollow";
            this.updateTotalFollowersNumber.emit({ amount: 1, showId: this.showIdentifier});
          }, err => {
            this.alertify.error("Something went wrong. Please try again later.");
          })
      } 
      else {
        this.followerService.unfollowShow(this.userId, this.showIdentifier)
          .subscribe(() => {
            this.isFollowed = false;
            this.title = "Follow";
            this.updateTotalFollowersNumber.emit({ amount: -1, showId: this.showIdentifier});
          }, err => {
            this.alertify.error("Something went wrong. Please try again later.");
          })
      }
    } else {
      this.alertify.warning("Please sign in to your account to proceed.")
    }
  }

}
