import {Component, OnInit} from '@angular/core';

import formatNumber from './formatNumber';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {

  ngOnInit() {
  }

  c : number = 0;
  f : number = 0;

  getCelsiusToFar(c: number | null): void {
    this.f = formatNumber((this.c * 9/5) + 32);
  }

  getFarToCelsius(f: number | null): void {
    this.c = formatNumber((this.f - 32) * 5/9);
  }

}