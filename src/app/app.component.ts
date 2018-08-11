import { Component } from '@angular/core';
import { Company, Service } from './app.service';
import { DxCheckBoxModule,
         DxSelectBoxModule,
         DxNumberBoxModule,
         DxFormModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  companies: Company[];
  labelLocation: string;
  readOnly: boolean;
  showColon: boolean;
  minColWidth: number;
  colCount: number;
  width: any;

  constructor( service: Service ) {
      this.labelLocation = "top";
      this.readOnly = false;
      this.showColon = true;
      this.minColWidth = 300;
      this.colCount = 2;
      this.companies = service.getCompanies();
  }
}