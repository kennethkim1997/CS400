import { Component, OnInit, Input } from '@angular/core';

import {CITY} from '../models/cityModel';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
})
export class FormFieldWithValidationComponent implements OnInit {

  @Input() selectedCity: CITY;

  constructor() { }

  ngOnInit() {
  }

}
