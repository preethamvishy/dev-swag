import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SwagService {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  public getSwag(): Observable<any> {
    return this.http.get("./assets/data.json")
  }

}
