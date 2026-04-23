import { Component } from '@angular/core';
import { Description } from '../../partials/description/description';

@Component({
  selector: 'app-not-found',
  imports: [Description],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {}
