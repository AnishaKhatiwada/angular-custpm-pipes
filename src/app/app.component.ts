import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  // encapsulation : ViewEncapsulation.Emulated,
  // encapsulation : ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'routing-fe';
}
