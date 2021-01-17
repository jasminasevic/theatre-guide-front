import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { PopularShows } from '../../globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsService } from '../../globalFrontendComponents/PopularShows/PopularShows.service';
import { UpcomingShows } from 'src/app/globalFrontendComponents/UpcomingShows/UpcomingShows.model';
import { UpcomingShowsService } from '../../globalFrontendComponents/UpcomingShows/UpcomingShows.service';
import { RecentlyJoinedTheatres } from '../../globalFrontendComponents/RecentlyJoinedTheatres/RecentlyJoinedTheatres.model';
import { RecentlyJoinedTheatresService } from '../../globalFrontendComponents/RecentlyJoinedTheatres/RecentlyJoinedTheatres.service';

@Component({
  selector: 'dashboard-one',
  templateUrl: './DashboardOne.component.html',
  styleUrls: ['./DashboardOne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardOneComponent implements OnInit{

	constructor(private popularShowService: PopularShowsService,
		private upcomingShowService: UpcomingShowsService,
		private recentlyJoinedTheatreService: RecentlyJoinedTheatresService){}

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
	}


	mostVisitedPlacesTitle : string = 'Most Visited Places';
	mostVisitedPlacesDesc  : string = 'Discover top-rated local businesses';
	places : any = [
						{
						  badge    : 'Open',
						  category : 'Eat & Drink',
						  title    : 'Cafe Bar',
						  address  : 'Wall Street, New York',
						  image    : 'assets/images/most-img-4.jpg',
						  logo     : 'assets/images/logo-1.png',
						  review   : '(12 reviews)'
						  },
						  {
								badge    : 'Coming Soon',
								category : 'Concert',
								title    : 'Milky Ducth',
								address  : 'MayLand Square, LA',
								image    : 'assets/images/most-img-3.jpg',
								logo     : 'assets/images/logo-2.png',
								review   : '(23 reviews)'
						  },
						  {
								badge    : 'Open',
								category : 'Hotels',
								title    : 'Maledy Hotels',
								address  : '672, CreedWay, New York',
								image    : 'assets/images/most-img-2.jpg',
								logo     : 'assets/images/logo-3.png',
								review   : '(17 reviews)'
						  },
						  {
								badge    : 'Open',
								category : 'Eat & Drink',
								title    : 'Donuts Hub',
								address  : '56,Hihu Pora, New York',
								image    : 'assets/images/most-img-1.jpg',
								logo     : 'assets/images/logo-4.png',
								review   : '(31 reviews)'
						  },
						  {
								badge    : 'Now Open',
								category : 'Airport',
								title    : 'NYC',
								address  : 'Mill Dee, New York',
								image    : 'assets/images/most-img-6.jpg',
								logo     : 'assets/images/logo-1.png',
								review   : '(46 reviews)'
						  },
						  {
								badge    : 'Closed',
								category : 'Eat & Drink',
								title    : 'Groos Day',
								address  : '71,Rowling Street, New York',
								image    : 'assets/images/most-img-7.jpg',
								logo     : 'assets/images/logo-2.png',
								review   : '(15 reviews)'
						  }

						];

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
