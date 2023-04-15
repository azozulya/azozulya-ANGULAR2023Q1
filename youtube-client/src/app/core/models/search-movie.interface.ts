import { ISnippet } from 'src/app/youtube/models/snippet.interface';

export interface ISearchMovie {
  etag: string;
  id: {
    [key: string]: string;
  };
  kind: string;
  snippet: ISnippet;
}
