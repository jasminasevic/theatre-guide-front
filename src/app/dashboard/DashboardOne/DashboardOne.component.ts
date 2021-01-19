import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { PopularShows } from '../../globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsService } from '../../globalFrontendComponents/PopularShows/PopularShows.service';
import { UpcomingShows } from 'src/app/globalFrontendComponents/UpcomingShows/UpcomingShows.model';
import { UpcomingShowsService } from '../../globalFrontendComponents/UpcomingShows/UpcomingShows.service';
import { RecentlyJoinedTheatres } from '../../globalFrontendComponents/RecentlyJoinedTheatres/RecentlyJoinedTheatres.model';
import { RecentlyJoinedTheatresService } from '../../globalFrontendComponents/RecentlyJoinedTheatres/RecentlyJoinedTheatres.service';
import { UpcomingPremieresService } from '../../globalFrontendComponents/UpcomingPremieres/UpcomingPremieres.service';
import { UpcomingPremieres } from 'src/app/globalFrontendComponents/UpcomingPremieres/UpcomingPremieres.model';
import { IImage } from 'src/app/shared/interfaces/IImage';
import { IMG_BASE_URL } from '../../app.constants';
@Component({
  selector: 'dashboard-one',
  templateUrl: './DashboardOne.component.html',
  styleUrls: ['./DashboardOne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardOneComponent implements OnInit{

	readonly IMG_BASE_URL = IMG_BASE_URL;
	constructor(private popularShowService: PopularShowsService,
		private upcomingShowService: UpcomingShowsService,
		private recentlyJoinedTheatreService: RecentlyJoinedTheatresService,
		private upcomingPremiereService: UpcomingPremieresService){}

	bannerTitle: string = 'Expolore Theatres, Shows and More';
	bannerDesc : string = 'What are you looking for?';
	bannerImage: string = 'assets/images/main-search-background-01.jpg';

	shows: PopularShows[];
	popularShowsTitle : string = 'Popular Shows';
	popularShowsDesc : string = 'Browse the most popular shows';

	upcomingShows: UpcomingShows[];
	upcomingShowsTitle : string = 'Upcoming Shows';
	upcomingShowsDesc : string = 'Browse the upcoming shows';

	recentlyJoinedTheatres: RecentlyJoinedTheatres[];
	recentlyJoinedTheatresTitle : string = 'Recently Joined Theatres';
	recentlyJoinedTheatresDesc : string = `Check theatres that recently joined our platform. 
	Browse their shows, actors, directors and more. Follow shows, check repertoire and 
	buy ticket for the upcoming plays.`;

	upcomingPremieres: UpcomingPremieres[];
	upcomingPremieresTitle : string = 'Upcoming Premieres';
	upcomingPremieresDesc  : string = 'Discover the upcoming show premieres';
	baseImgUrl: string = this.IMG_BASE_URL;
	
	ngOnInit(){
		this.upcomingShowService.getUpcomingShows()
			.subscribe(data => {
				this.upcomingShows = data
			})
			
		this.popularShowService.getPopularShows()
			.subscribe(data => {
				this.shows = data
			})

		this.recentlyJoinedTheatreService.getRecentlyJoinedTheatres()
			.subscribe(data => {
				this.recentlyJoinedTheatres = data
			})

		this.upcomingPremiereService.getUpcomingPremieres()
			.subscribe(data => {
				this.upcomingPremieres = data,
				console.log(data)
			})
	}

	servicesTitle : string = 'Plan Your Visit';
	servicesDesc  : string = `Explore some of the best theatres in the world. 
	 Discover the most popular shows on their repertoire and buy tickets.`;
	services   : any = [
		{
			icon : 'fa fa-search',
			title: 'Find Interesting Theatres',
			desc : `Discover some of the world's most spectacular theaters on Theatre Guide platform. `
		},
		{
			icon : 'fa fa-phone-square',
			title: 'Browse Shows',
			desc : `Explore amazing dramas, musicals, comedies, tragedies, operas and more.`
		},
		{
			icon : 'fa fa-user-plus',
			title: 'Buy Tickets',
			desc : `Check when some show is on the repertoire and buy ticket(s) for it.`
		}
	];

	ngAfterViewInit()
	{

	}
}
