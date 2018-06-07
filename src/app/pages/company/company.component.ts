import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/api';
import { Company, CompanyEvent } from '../../models';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company: Company;
  events: CompanyEvent;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {

      this.companyService.getCompanyInfos().subscribe(data => {
          this.company = data;
      });

      this.companyService.getCompanyInfosHistory().subscribe(data => {
          this.events = data;
      });

  }
}
