import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.html',
  styleUrl: './convert.scss',
})
export class Convert {
  convCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 1.8) + 32;
  }

  convFahrenheitToCelsius(fahrenheit:number): number {
    return (fahrenheit -32 )/ 1.8;
  }

  convFeetToMeter (feet:number): number {
    return (feet * 0.3048);
  }

    convMeterToFeet (meter:number): number {
    return (meter * 3.28084);
  }

  constructor() {
  }
}
