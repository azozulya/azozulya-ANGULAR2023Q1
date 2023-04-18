import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../models/movie.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(list: IMovie[], filterTag: string): IMovie[] {
    return !list || !filterTag
      ? list
      : [...list].filter((item) => item.tags?.filter((tag: string | string[]) => tag.includes(filterTag)).length);
  }
}
