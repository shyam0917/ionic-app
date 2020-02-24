import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.page.html',
  styleUrls: ['./main-list.page.scss'],
})
export class MainListPage implements OnInit {
  switch: string;
  categoryArr: any = [];

  constructor(private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.switch = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCategoryData();
  }

  getCategoryData() {

    // get Client Data
    if (this.switch && this.switch == '1') {
      this.categoryService.getClientData().subscribe(res => {
        if (res['data']) {
          this.categoryArr = res['data'];
        }

      }, err => {
        console.log("err", err);
      })
    }

    // get project Data
    if (this.switch && this.switch == '3') {
      this.categoryService.getProjectData().subscribe(res => {
        if (res['data']) {
          this.categoryArr = res['data'];
          console.log(this.categoryArr, res);
        }

      }, err => {
        console.log("err", err);
      })
    }

    // get invoice Data
    if (this.switch && this.switch == '4') {
      this.categoryService.getInvoiceData().subscribe(res => {
        if (res['length']) {
          this.categoryArr = res;
        }

      }, err => {
        console.log("err", err);
      })
    }

    // get estimate Data
    if (this.switch && this.switch == '5') {
      this.categoryService.getEstimateData().subscribe(res => {
        if (res['length']) {
          this.categoryArr = res;
        }

      }, err => {
        console.log("err", err);
      })
    }

  }


}
