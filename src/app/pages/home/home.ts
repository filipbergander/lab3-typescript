import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  heroImage = "/images/angular-pic.jpg";

  welcomeMsg: string = 'Välkommen till webbplatsen! På sidan "Konvertera" kan du konvertera mellan olika enheter och mått samt temperaturer. Sidan "Om" beskriver uppgiften. Roligt att du hittat hit!';

  welcomeMessage(): void {
    alert(this.welcomeMsg);
  }
}
