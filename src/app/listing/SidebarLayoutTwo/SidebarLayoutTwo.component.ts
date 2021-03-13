import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'sidebar-layout-two',
  templateUrl: './SidebarLayoutTwo.component.html',
  styleUrls: ['./SidebarLayoutTwo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarLayoutTwoComponent implements OnInit{

  constructor(){}

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

   @Output() searchItem: EventEmitter<string> = new EventEmitter<string>();
   @Output() sortItems: EventEmitter<string> = new EventEmitter<string>();
   @Output() resetItems: EventEmitter<boolean> = new EventEmitter<boolean>();
   @ViewChild('searchedItem', { static: true }) searchedItem: ElementRef;
   @ViewChild('orderData') orderData: ElementRef;

   changeSortOrder(sortOrder){
     this.sortItems.emit(sortOrder.target.value);
   }

   resetValues(){
    this.searchedItem.nativeElement.value = '';
    this.orderData.nativeElement.value = '';
    this.searchItem.emit('');
    this.sortItems.emit('');
    this.resetItems.emit(true);
   }

   ngOnInit(){
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
   }
}
