import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {LaunchService, MomentService } from '../../services';
import { Launch } from '../../models';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css'],
})
export class LaunchesComponent implements OnInit {
  launches: Launch[];
  displayedColumns = ['flight_number', 'mission_name', 'launch_date_utc', 'rocket'];
  dataSource: MatTableDataSource<Launch>;
  formatDate = MomentService.formatDate;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private launchService: LaunchService) {}

  ngOnInit() {
    this.launchService.getAllLaunches().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
