import { Routes } from '@angular/router';
import { FirstStepComponent } from './first-step//first-step.component';
import { SecondStepComponent } from './second-step//second-step.component';
import { ThirdStepComponent } from './third-step//third-step.component';
import { secondStepGuard } from './route-guards/second-step.guard';
import { thirdStepGuard } from './route-guards/third-step.guard';

export const routes: Routes = [
    {path:'firstStep',component:FirstStepComponent},
    {path:'secondStep',component:SecondStepComponent , canActivate: [secondStepGuard()]},
    {path:'thirdStep',component:ThirdStepComponent, canActivate:[thirdStepGuard()]},
    {path:'',component:FirstStepComponent},
    {path:'**',component:FirstStepComponent},
    
    
];
