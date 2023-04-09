import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from 'src/app/youtube/models/movie.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(list: IMovie[], filterTag: string): IMovie[] {
    if (!list || !filterTag) return list;

    return list.filter((item) => item.snippet.tags.filter((tag) => tag.includes(filterTag)).length);
  }
}
