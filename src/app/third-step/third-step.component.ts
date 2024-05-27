import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SelectedCar } from '../connectors/models/SelectedCar';
import { PrependDollarPipe } from "../utils/custom-pipes/prepend-dollar.pipe";
import { ConnectorService } from '../connectors/services/connector.service';

@Component({
    selector: 'app-third-step',
    standalone: true,
    templateUrl: './third-step.component.html',
    styleUrl: './third-step.component.scss',
    imports: [CommonModule, PrependDollarPipe]
})
export class ThirdStepComponent implements OnInit{
  selectedVehicle:SelectedCar=new SelectedCar();

  constructor(private connectorService:ConnectorService){}

  ngOnInit(): void {
    this.connectorService.selectedCarObservable.subscribe(selectedCar=>
      this.selectedVehicle=selectedCar
    );
  }

}