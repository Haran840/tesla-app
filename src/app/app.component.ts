import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe, CommonModule} from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ConnectorService } from './connectors/services/connector.service';
import { SelectedCar } from './connectors/models/SelectedCar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterLink, RouterOutlet, CommonModule],  
  templateUrl: './app.component.html',
})
export class AppComponent {

  secondStepDisabled: boolean =true;
  thirdStepDisabled: boolean =true;
  displayImage?:string;

  selectedCar:SelectedCar=new SelectedCar();
  constructor(
    private connectorService:ConnectorService
  ){}

  ngOnInit(): void {
    this.connectorService.selectedCarObservable.subscribe((selectedCar:SelectedCar) => { 
        this.selectedCar=selectedCar;
        this.secondStepDisabled = this.selectedCar.colorAndModelNotSelected();
        this.thirdStepDisabled = this.selectedCar.configNotSelected();
        // console.log(this.selectedCar.model?.code+" "+ this.selectedCar.color?.code);
        this.displayImage="assets/images/"+this.selectedCar.model?.code+"/"+this.selectedCar.color?.code+".jpg";
      }
    ); 
    
  }

  
}
