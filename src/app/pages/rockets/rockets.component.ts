import {Component, OnInit} from '@angular/core';
import {RocketService, MomentService } from '../../services';
import { Rocket } from '../../models';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css'],
})
export class RocketsComponent implements OnInit {
  rockets: Rocket[];
  formatDate = MomentService.formatDate;

  constructor(private rocketService: RocketService) {}

  ngOnInit() {
    this.rocketService.getAllRockets().subscribe(data => {
      this.rockets = data;
      console.log(JSON.stringify(data, null, 2));
    });
  }

}
