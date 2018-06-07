import { Component, OnInit } from '@angular/core';
import {LaunchService, MomentService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pastLaunchesCount: number;
  nextLaunchesCount: number;
  nextLaunch: any;
  formatDate = MomentService.formatDate;

  text: any = {
    Month: 'mois',
    Days: 'jours',
    Hours: 'h',
    Minutes: 'min',
    Seconds: 'sec',
  };

  constructor(private launchService: LaunchService) { }

  ngOnInit() {
    this.launchService.getPastLaunches().subscribe(data => {
        this.pastLaunchesCount = data.length - 1;
    });
    this.launchService.getUpcomingLaunches().subscribe(data => {
      this.nextLaunchesCount = data.length - 1;
    });
    this.launchService.getNextLaunch().subscribe(data => {
      this.nextLaunch = {
        date: new Date(data.launch_date_utc),
        name: data.mission_name      };
    });
  }

}
