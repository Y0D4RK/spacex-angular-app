import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IBreadcrumb, McBreadcrumbsService} from 'ngx-breadcrumbs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: IBreadcrumb[];

  constructor(private router: Router,
              private breadcrumbsService: McBreadcrumbsService) {}

  ngOnInit() {
    this.breadcrumbsService.crumbs$.subscribe((data) => {
      this.breadcrumbs = data;
    });

  }

}
