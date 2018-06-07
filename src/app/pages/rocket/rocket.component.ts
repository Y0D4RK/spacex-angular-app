import { Component, OnInit, OnDestroy } from '@angular/core';
import {Rocket} from '../../models';
import {RocketService, MomentService} from '../../services';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit, OnDestroy {
  formatDate = MomentService.formatDate;
  rocket: Rocket;
  private sub: any;
  keys: any[];
  values: any[];

  constructor(private route: ActivatedRoute,
              private rocketService: RocketService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        const rocket_id = params['id'];
        this.rocketService.getRocketById(rocket_id).subscribe(data => {
            this.rocket = data;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
