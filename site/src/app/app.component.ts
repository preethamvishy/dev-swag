import { Component, OnInit, ViewEncapsulation, AfterViewChecked } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { SwagService } from './swag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'Dev Swag';
  swagItems;

  constructor(private swag: SwagService) {
    this.swag.getSwag().subscribe(data => {
      this.swagItems = data;
    });
  }

  ngOnInit() {
    const screenHeight = window.screen.height;
    const screenWidth = window.screen.width;

  // Actual space available in navigator
  const actualHeight = window.innerHeight;
  const actualWidth = window.innerWidth;
  

  console.log(screenHeight, screenWidth, actualHeight, actualWidth)
  }
  ngAfterViewChecked() {
    window.resizeBy(200,1);
  }
}
