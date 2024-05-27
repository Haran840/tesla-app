import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectedCar } from '../connectors/models/SelectedCar';
import { Config } from '../connectors/models/Config';
import { ApiCallsService } from '../connectors/services/api-calls.service';
import { ConnectorService } from '../connectors/services/connector.service';
import { Option } from '../connectors/models/Option';
import { PrependDollarPipe } from '../utils/custom-pipes/prepend-dollar.pipe';

@Component({
  selector: 'app-second-step',
  standalone: true,
  imports: [CommonModule,FormsModule,PrependDollarPipe],
  templateUrl: './second-step.component.html',
  styleUrl: './second-step.component.scss'
})
export class SecondStepComponent implements OnInit{
  
  selectedConfig?:Config;
  vehicleOptions?:Option;
  towHitchChecked:boolean=false;
  yokeChecked:boolean=false;

  selectedCar:SelectedCar=new SelectedCar();

  constructor(
    private apiCallService:ApiCallsService,
    private connectorService:ConnectorService){}


  ngOnInit(): void {
    this.connectorService.selectedCarObservable.subscribe((selectedCar:SelectedCar)=>{
      console.log(JSON.stringify(selectedCar));

      this.selectedCar=selectedCar;

      this.apiCallService.getCarOptionsById(this.selectedCar.model?.code!).subscribe((options:Option)=>{
        this.vehicleOptions=options;
        this.selectedConfig=this.vehicleOptions?.configs.find(a=>a.id == this.selectedCar.config?.id);
        this.yokeChecked=this.selectedCar.yoke;
        this.towHitchChecked=this.selectedCar.tow
      })
    }
    )
  }

  onTowHitchApplied(){
    console.log("Tow Hitch checked -> "+this.towHitchChecked)
    this.selectedCar.tow = this.towHitchChecked;
    this.connectorService.selectedCar(this.selectedCar);
   
  }

  onYokeChangedApplied(){
    console.log("Yoke checked -> "+this.yokeChecked)
    this.selectedCar.yoke=this.yokeChecked;
    this.connectorService.selectedCar(this.selectedCar);
    
    
  }
  onSelecConfigChanged(){
    this.selectedCar.config=this.selectedConfig;
    this.connectorService.selectedCar(this.selectedCar);
    
  }
}
