import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Model } from '../connectors/models/Model';
import { Color } from '../connectors/models/Color';
import { SelectedCar } from '../connectors/models/SelectedCar';
import { CommonModule } from '@angular/common';

import { ConnectorService } from '../connectors/services/connector.service';
import { ApiCallsService } from '../connectors/services/api-calls.service';

@Component({
  selector: 'app-first-step',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './first-step.component.html',
  styleUrl: './first-step.component.scss'
})
export class FirstStepComponent implements OnInit {
  selectedModel?:Model;
  selectedCar:SelectedCar=new SelectedCar();
  vehicleModels: Array<Model> =[];
  selectedColor?:Color;

  constructor(private connectorService:ConnectorService,private apiCallsService:ApiCallsService){}
 
  ngOnInit(){
    this.connectorService.selectedCarObservable.subscribe(
      (selectedCar:SelectedCar) =>
      { 
        this.selectedCar=selectedCar;
        this.apiCallsService.getAllCarModels().subscribe(
          data =>
          {
            this.vehicleModels=data;
            this.selectedModel=this.vehicleModels.find(x=> x.code == this.selectedCar.model?.code);
            this.selectedColor=this.selectedModel?.colors.find(x=>x.code == this.selectedCar.color?.code); 
          }
        );
      }
    );
  }

  onColorChangeApplied(){
    this.selectedCar.color=this.selectedColor;
    this.connectorService.selectedCar(this.selectedCar);
  }

  onModalChangeApplied(){
    this.selectedColor=undefined;
    this.selectedCar=new SelectedCar();
    this.selectedCar.model=this.selectedModel;
    this.connectorService.selectedCar(this.selectedCar);
  }
}