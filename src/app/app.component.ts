import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],  
  templateUrl: './app.component.html',
})
export class AppComponent {

  currentStep: number = 1;
  highlightStep(step: number): void {
    this.currentStep = step;
  }
  
}
