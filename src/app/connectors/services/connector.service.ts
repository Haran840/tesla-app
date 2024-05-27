import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectedCar } from '../models/SelectedCar';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  private selectedCarBehavior = new BehaviorSubject<SelectedCar>(new SelectedCar());
  selectedCarObservable:Observable<SelectedCar> = this.selectedCarBehavior.asObservable();

  selectedCar(selectedCar: SelectedCar){
    this.selectedCarBehavior.next(selectedCar);
  }
}