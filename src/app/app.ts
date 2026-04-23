import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mainheader } from "./partials/mainheader/mainheader";
import { Footer } from "./partials/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mainheader, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lab3-typescript');
}
