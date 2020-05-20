import { Component, OnInit } from '@angular/core';
// import { CalendarComponentOptions } from 'ion2-calendar';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {

  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  eventList: any;
  selectedEvent: any;
  isSelected: any;

  // date: string;
  // type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  constructor(private alertCtrl: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  onChange($event) {
  }
}
