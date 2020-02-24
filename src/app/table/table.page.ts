import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  tableSwitch: string;
  tableArr: any = [];

  constructor(private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.tableSwitch = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCategoryData();
  }

  getCategoryData() {

    // get Client Data
    if (this.tableSwitch && this.tableSwitch == '1') {
      this.categoryService.getClientData().subscribe(res => {
        if (res['length']) {
          this.tableArr = res;
        }

      }, err => {
        console.log("err", err);
      })
    }

    // get project Data
    if (this.tableSwitch && this.tableSwitch == '3') {
      this.categoryService.getProjectData().subscribe(res => {
        if (res['length']) {
          this.tableArr = res;
        }

      }, err => {
        console.log("err", err);
      })
    }

    // get invoice Data
    if (this.tableSwitch && this.tableSwitch == '4') {
      this.categoryService.getInvoiceData().subscribe(res => {
        if (res['length']) {
          this.tableArr = res;
        }

      }, err => {
        console.log("err", err);
      })
    }

    // get estimate Data
    if (this.tableSwitch && this.tableSwitch == '5') {
      this.categoryService.getEstimateData().subscribe(res => {
        if (res['length']) {
          this.tableArr = res;
        }

      }, err => {
        console.log("err", err);
      })
    }

  }

}
