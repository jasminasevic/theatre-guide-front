import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, ElementRef, ViewChild, Input } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';

@Component({
  selector: 'sidebar-layout-one',
  templateUrl: './SidebarLayoutOne.component.html',
  styleUrls: ['./SidebarLayoutOne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarLayoutOneComponent implements OnInit{

   constructor(){}
  // searchItemsField: string;
  // searchedItem: string;

  orderValues = [
  {
    value : "",
    name: "Order by" 
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
   @ViewChild('searchedItem') searchedItem: ElementRef;
   @ViewChild('orderData') orderData: ElementRef;

   searchField(searchedTerms){
    this.searchItem.emit(searchedTerms.target.value);
   }

   changeSortOrder(sortOrder){
     this.sortItems.emit(sortOrder.target.value);
     console.log(sortOrder.target.value);
   }

   resetValues(){
    this.searchedItem.nativeElement.value = '';
    this.orderData.nativeElement.value = '';
    this.searchItem.emit('');
    this.sortItems.emit('');
    this.resetItems.emit(true);
   }

   ngOnInit(){}

   ngAfterViewInit()
   {

   }
}
