import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/api';
import { Company } from '../../models';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company: Company;

  constructor(private companyService: CompanyService) {
    this.companyService.getCompanyInfos().subscribe(data => {
      this.company = data;
    });
  }

  ngOnInit() {
  }
}
