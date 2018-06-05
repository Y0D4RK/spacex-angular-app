import { Component, OnInit } from '@angular/core';
import {LaunchService } from '../../services/api';
import { Launch } from '../../models';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css'],
})
export class MissionsComponent implements OnInit {
  launches: Launch[];

  constructor(private launchService: LaunchService) {
    this.launchService.getPastLaunches().subscribe(data => {
      this.launches = data;
    });
  }

  ngOnInit() {
  }

}
