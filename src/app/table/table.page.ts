import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  tableSwitch: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.tableSwitch = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
