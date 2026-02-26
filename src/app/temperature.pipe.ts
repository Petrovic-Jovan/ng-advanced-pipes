import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: number,
    inputUnit: 'cel' | 'fah',
    outputUnit?: 'cel' | 'fah',
  ) {
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp: number;

    if (inputUnit === 'cel' && outputUnit === 'fah') {
      outputTemp = (val * 9) / 5 + 32;
    } else if (inputUnit === 'fah' && outputUnit === 'cel') {
      outputTemp = ((val - 32) * 5) / 9;
    } else {
      outputTemp = val;
    }

    let symbol: '°C' | '°F';
    if (!outputUnit) {
      symbol = inputUnit === 'cel' ? '°C' : '°F';
    } else {
      symbol = outputUnit === 'cel' ? '°C' : '°F';
    }

    return `${outputTemp.toFixed(0)} ${symbol}`;
  }
}
