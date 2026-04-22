import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.html',
  styleUrl: './convert.scss',
})
export class Convert {
  // Properties
  // Input-värden
  numbFahrenheit: number = 0;
  numbCelsius: number = 0;
  lengthFeet: number = 0;
  lengthMeter: number = 0;

  // Resultat-värden
  resultFahrenheit: number = 0;
  resultCelsius: number = 0;
  resultMeter: number = 0;
  resultFeet: number = 0;


  // Logik & metoder
  // Från Celsius till Fahrenheit
  convCelsiusToFahrenheit(): number {
    const Celsius = Number(this.numbCelsius); // Värdet som användaren skriver in i fältet för celsius

    if (isNaN(Celsius)) { // Om användaren skrivit in något annat än tal, ex bokstav
      this.resultFahrenheit = 0;
      return 0; // Resultatet för Fahrenheit blir då 0
    }

    const valueFahrenheit = (Celsius * 1.8) + 32; // Omvandlingen
    this.resultFahrenheit = Number(valueFahrenheit.toFixed(1)); // Resultatet med en decimal
    return this.resultFahrenheit;
  }

  // Från Fahrenheit till Celsius
  convFahrenheitToCelsius(): number {
    const Fahrenheit = Number(this.numbFahrenheit);

    if (isNaN(Fahrenheit)) {
      this.resultCelsius = 0;
      return 0;
    }
    const valueCelsius = (Fahrenheit - 32) / 1.8; // Omvandlingen
    this.resultCelsius = Number(valueCelsius.toFixed(1));
    return this.resultCelsius;
  }

  // Från Feet till Meter
  convFeetToMeter(): number {
    const Feet = Number(this.lengthFeet);// Värdet som användaren skriver in i inputfältet

    // Om man skriver in något annat än ett tal sätts resultatet till 0
    if (isNaN(Feet)) {
      this.resultMeter = 0;
      return 0;
    }
    const valueMeter = Feet * 0.3048; // Omvandlaren med logik
    this.resultMeter = Number(valueMeter.toFixed(1)); // Svaret avrundat till en decimal

    return this.resultMeter;
  }

  // Från Meter till Feet
  convMeterToFeet(): number {
    const Meter = Number(this.lengthMeter);

    if (isNaN(Meter)) {
      this.resultFeet = 0;
      return 0;
    }

    const valueFeet = Meter * 3.28084; // Omvandlaren med logik
    this.resultFeet = Number(valueFeet.toFixed(1));
    return this.resultFeet;
  }
}
