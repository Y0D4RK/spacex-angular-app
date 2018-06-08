import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LaunchService, MomentService } from '../../services';
import { Launch } from '../../models';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit, OnDestroy {
  formatDate = MomentService.formatDate;
  launch: Launch;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private launchService: LaunchService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] === 'next') {
        this.launchService.getNextLaunch().subscribe(data => {
            this.launch = data;
        });
      } else {
        const flight_number = +params['id'];
        this.launchService.getLaunchByFlightNumber(flight_number).subscribe(data => {
          if (data) {
            this.launch = data[0];
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
