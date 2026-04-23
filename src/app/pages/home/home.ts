import { Component } from '@angular/core';
import { Convert } from "../convert/convert";

@Component({
  selector: 'app-home',
  imports: [Convert],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
