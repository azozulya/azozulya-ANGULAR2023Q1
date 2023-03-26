import { Component } from '@angular/core';
import { IMovie } from 'src/models/search.interface';
import mockDataList from "../data/data.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent { 
  title = 'youtube-client';
  
  list!: IMovie[];

  onDataChanged(searchStr: string){
    this.list = mockDataList.items.filter((movie: IMovie) => movie.snippet.title.toLowerCase().includes(searchStr));
    console.log(this.list);
  }
}
