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
  stats = {};

  constructor(private swag: SwagService) {
    this.swag.getSwag().subscribe(data => {
      this.swagItems = data;
      this.swagItems.forEach(element => {
        console.log(element.name)
        this.stats[element.name] = {
          upvotes: 0,
          difficulty: element.difficulty,
          received: 0
        }
      });
      console.log(this.stats)
    });
    
  }

  ngOnInit() {
    
  }
  ngAfterViewChecked() {
    window.resizeBy(200, 1);
  }

  upvote(name) {
    this.stats[name].upvotes+=1; 
  }

  receive(name) {
    this.stats[name].received+=1; 
  }
  
}
