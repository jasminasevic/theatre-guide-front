import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, ElementRef, ViewChild, Input } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'sidebar-layout-one',
  templateUrl: './SidebarLayoutOne.component.html',
  styleUrls: ['./SidebarLayoutOne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarLayoutOneComponent implements OnInit{

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
