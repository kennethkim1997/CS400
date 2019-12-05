// Kenneth Kim
// CS400: PS7 - Simple Angular App

import { Component } from '@angular/core';

import {CITY} from './models/cityModel';
import { CityServiceAsyncService} from './services/city-service-async.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PS7: Simple Angular App';
  private selectedCity: CITY = null;
  cities: CITY[] = []
  test = 'foo';

  getContacts(): void {
    this.cityService.getCities()
      .subscribe(cities => {
        this.cities = cities;
        console.log(`Cities: ${this.cities}`);
      });
  }


  displayContactDetail(cities: CITY) {
    this.selectedCity = city;
  }

  constructor(private cityService: CityServiceAsyncService) {

  }
  ngOnInit() {
    this.getCities();
  }
}
