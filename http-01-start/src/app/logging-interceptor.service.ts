import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Outgoing request: ' + req.url)
    return next.handle(req).pipe(tap(event => {
      if (event.type === HttpEventType.Response) {
        console.log('Incoming response: ');
        console.log(event.body);
      }
    })
     );
  }
}