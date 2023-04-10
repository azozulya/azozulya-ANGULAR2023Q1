import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private key = 'AIzaSyDL-9NcsUHxWuMeVI4zCxb7K_523W5KBG0';
  private baseUrl = 'https://www.googleapis.com/youtube/v3/';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('search')) {
      const params = request.params
        .set('key', this.key)
        .set('type', 'video')
        .set('part', 'snippet')
        .set('maxResults', 15);

      const modifiedRequest = request.clone({
        url: this.baseUrl + request.url,
        params,
      });

      return next.handle(modifiedRequest);
    }

    if (request.url.includes('videos')) {
      const params = request.params.set('key', this.key).set('part', 'snippet,statistics');

      const modifiedRequest = request.clone({
        url: this.baseUrl + request.url,
        params,
      });

      return next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}
