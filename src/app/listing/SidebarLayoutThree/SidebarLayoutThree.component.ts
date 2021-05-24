import { Component, OnInit, AfterViewInit, ViewEncapsulation, EventEmitter, Output, ViewChild, ElementRef, Input } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { HomePageSearchService } from 'src/app/shared/services/homePageSearch.service';

@Component({
  selector: 'sidebar-layout-three',
  templateUrl: './SidebarLayoutThree.component.html',
  styleUrls: ['./SidebarLayoutThree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarLayoutThreeComponent implements OnInit{


  constructor(private homePageSearch: HomePageSearchService){
  }

  orderValues = [
  {
    value : "",
    name: "Order" 
  },
  {
    value : "name_asc",
    name: "Ascending" 
  },
  {
    value : "name_desc",
    name: "Descending" 
  }]

   //search from home page
   subscription: Subscription;
   locationFromHomePage: string;
   foundLocation: string;
   foundDate: string;

   //sidebar search
   @Output() searchItem: EventEmitter<string> = new EventEmitter<string>();
   @Output() searchLocation: EventEmitter<string> = new EventEmitter<string>();
   @Output() searchDate: EventEmitter<string> = new EventEmitter<string>();
   @Output() sortItems: EventEmitter<string> = new EventEmitter<string>();
   @Output() resetItems: EventEmitter<boolean> = new EventEmitter<boolean>();

   @ViewChild('searchedItem', { static: true }) searchedItem: ElementRef;
   @ViewChild('searchedLocation', { static: true}) searchedLocation: ElementRef;
   @ViewChild('searchedDate', { static: true}) searchedDate: ElementRef;
   @ViewChild('orderData') orderData: ElementRef;

   changeSortOrder(sortOrder){
     this.sortItems.emit(sortOrder.target.value);
   }

   resetValues(){
    this.searchedItem.nativeElement.value = '';
    this.searchedLocation.nativeElement.value = '';
    this.searchedDate.nativeElement.value = '';
    this.orderData.nativeElement.value = '';
    this.searchItem.emit('');
    this.searchLocation.emit('');
    this.searchDate.emit('');
    this.sortItems.emit('');
    this.resetItems.emit(true);
   }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }

   ngOnInit(){
    this.subscription = this.homePageSearch.currentSearchedData.subscribe(
      dataFromHomePageSearch => {
        this.foundLocation = dataFromHomePageSearch['location'],
        this.foundDate = dataFromHomePageSearch['showDate']
      }
    ) 

     fromEvent(this.searchedItem.nativeElement, 'keyup')
      .pipe(
        // get value
        map((event: any) => {
          return event.target.value;
        })
        // Time in milliseconds between key events
        , debounceTime(500)
        // If previous query is diffent from current   
        , distinctUntilChanged()
        // subscription for response
      ).subscribe(() => 
        this.searchItem.emit(this.searchedItem.nativeElement.value)
      )

      fromEvent(this.searchedLocation.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        })
        , debounceTime(1000)
        , distinctUntilChanged()
      ).subscribe(() => 
        this.searchLocation.emit(this.searchedLocation.nativeElement.value)
      )

      fromEvent(this.searchedDate.nativeElement, 'change')
      .pipe(
        map((event: any) => {
          return event.target.value;
        })
        , debounceTime(500)
        , distinctUntilChanged()
      ).subscribe(() => 
        this.searchDate.emit(this.searchedDate.nativeElement.value)
      )
   }
}

