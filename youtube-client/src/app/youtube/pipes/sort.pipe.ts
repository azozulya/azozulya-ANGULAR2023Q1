import { Pipe, PipeTransform } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { IMovie } from 'src/app/youtube/models/movie.interface';
import { ESort } from 'src/app/core/models/sort.interface';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(list: IMovie[], sort: Sort): IMovie[] {
    if (!sort)
      return list;

    const sortParam = ESort;
    let sortedResult: IMovie[] = [];

    switch (sort.active) {
      case sortParam.DATE: {
        sortedResult = list.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
        break;
      }
      case sortParam.VIEWS: {
        sortedResult = list.sort((a, b) => parseInt(a.statistics.viewCount) - parseInt(b.statistics.viewCount));
        break;
      }
    }

    return sort.direction === 'asc' ? sortedResult : sortedResult.reverse();
  }
}
