import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Purchase } from 'src/app/adminTheatrePages/purchases/purchase.model';
import { PurchasesService } from 'src/app/adminTheatrePages/purchases/purchases.service';
import { SidebarLayoutTwoComponent } from 'src/app/listing/SidebarLayoutTwo/SidebarLayoutTwo.component';
import { IPurchaseData } from 'src/app/shared/interfaces/IPurchaseData';

@Component({
  selector: 'app-all-purchases',
  templateUrl: './all-purchases.component.html',
  styleUrls: ['./all-purchases.component.scss']
})
export class AllPurchasesComponent implements OnInit {

  purchases: Purchase[];
  totalCount: number;
  itemsPerPage: any;
  currentPage: number = 1;
  totalItems: any;

  p: number = 1;
  size: number = 4;
  pageSizes: Array<number> = [4, 8, 12];

  @ViewChild(SidebarLayoutTwoComponent) searchItem;
  @ViewChild(SidebarLayoutTwoComponent) sortItems;

  searchPurchase: string;
  sortPurchases: string;

  purchaseId: number;
 
  constructor(private purchaseService: PurchasesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: {purchaseList: IPurchaseData}) => {
      this.purchases = data.purchaseList.data,
      this.totalCount = data.purchaseList.totalCount
    });
  }

  handlePageSizeChange(event) {
    this.size = event.target.value;
  
    this.purchaseService.getPurchasesFilteredByUser(this.size, this.p, this.searchPurchase, this.sortPurchases)
    .subscribe(data => {
      if(data.data.length == 0){
        this.purchaseService.getPurchasesFilteredByUser(this.size, this.p = 1, this.searchPurchase, this.sortPurchases)
          .subscribe(data => {
            this.purchases = data.data,
            this.totalCount = data.totalCount
          })
      }
      this.purchases = data.data,
      this.totalCount = data.totalCount
    })
  }

  handlePageChange(event) {
    this.p = event;
    this.purchaseService.getPurchasesFilteredByUser(this.size, this.p, this.searchPurchase, this.sortPurchases)
    .subscribe(data => {
      this.purchases = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSearchItems(searchTerm: string) : void {
    this.searchPurchase = searchTerm;

    this.purchaseService.getPurchasesFilteredByUser(this.size, this.p = 1, this.searchPurchase, this.sortPurchases)
    .subscribe(data => {
      this.purchases = data.data,
      this.totalCount = data.totalCount
    })
  }

  onSortItems(sortOrder: string) : void{
    this.sortPurchases = sortOrder;

    this.purchaseService.getPurchasesFilteredByUser(this.size, this.p = 1, this.searchPurchase, this.sortPurchases)
    .subscribe(data => {
      this.purchases = data.data,
      this.totalCount = data.totalCount
    })
  }

  onResetItems(value){
    if(value == true){
      this.purchaseService.getPurchasesFilteredByUser(this.size, 1, '', '')
      .subscribe(data => {
        this.purchases = data.data,
        this.totalCount = data.totalCount
      })
    }
  }

}
