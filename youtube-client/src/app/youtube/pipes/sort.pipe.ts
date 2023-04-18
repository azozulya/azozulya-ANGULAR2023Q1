import { Pipe, PipeTransform } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ESort } from 'src/app/core/models/sort.interface';
import { IMovie } from '../models/movie.interface';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(list: IMovie[], sort: Sort): IMovie[] {
    if (!sort) {
      return list;
    }

    const sortParam = ESort;
    let sortedResult: IMovie[] = [];

    switch (sort.active) {
      case sortParam.DATE: {
        sortedResult = [...list].sort((a, b) => Date.parse(a.publishedAt) - Date.parse(b.publishedAt));
        break;
      }
      case sortParam.VIEWS: {
        sortedResult = [...list].sort((a, b) => parseInt(a.statistics.viewCount) - parseInt(b.statistics.viewCount));
        break;
      }
    }

    return sort.direction === 'asc' ? sortedResult : sortedResult.reverse();
  }
}
