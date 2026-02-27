import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(
    value: string[] | number[],
    direction: 'asc' | 'desc' = 'asc',
  ): unknown {
    // Create a copy of the input array to avoid mutating the original data.
    const sorted = [...value];

    // Sort the copied array based on the specified direction (ascending or descending).
    sorted.sort((a, b) => {
      if (direction === 'asc') {
        return a > b ? 1 : -1;
      } else {
        return a < b ? 1 : -1;
      }
    });
    return sorted;
  }
}
