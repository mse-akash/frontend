import { Component, OnInit } from '@angular/core';
import { DatamodelBean, DataModelService } from '../service/data/data-model.service';

@Component({
  selector: 'app-data-model',
  templateUrl: './data-model.component.html',
  styleUrls: ['./data-model.component.css']
})
export class DataModelComponent implements OnInit {

  functionalArea = '';
  validationModel = '';
  modelMode = '';
  market = '';
  output = '';
  show = false;

  functionalAreas = ['MiddleOffice', 'BackOffice', 'FrontOffice'];
  validationModels = ['Instrmnt_Msg', 'Reject_Msg', 'TradeNotification_Msg'];
  modelModes = ['All', 'Internal-Full', 'Client'];
  markets = ['ICE', 'EUREX', 'LDM', 'LME', 'Meff'];
  outputs = ['Standalone', 'ClearVision', 'UBIX'];

  list:Array<DatamodelBean>=[];

  constructor(private dataModelService: DataModelService) { }

  ngOnInit(): void {
  }

  getData() {
    this.show = true;
    this.dataModelService.fetchdata().subscribe(Response => { var obj = JSON.parse(JSON.stringify(Response)) 
    this.list= obj;
    console.log(obj);

    });
    console.log("Inside getdata");

  }

}
