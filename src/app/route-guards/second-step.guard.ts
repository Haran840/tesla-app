import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { ConnectorService } from "../connectors/services/connector.service";
import { SelectedCar } from "../connectors/models/SelectedCar";


export function secondStepGuard():CanActivateFn{

    return ()=>{
        let connectorService= inject(ConnectorService);
        let router= inject(Router);
       
        let isActive:boolean=false;
        connectorService.selectedCarObservable.subscribe((selectedCar:SelectedCar)=>
            isActive = !selectedCar.colorAndModelNotSelected()
        );

        if(!isActive){
            router.navigateByUrl('/firstStep');
        }
        return isActive;
    }
}