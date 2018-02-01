import {Inject, Injectable, Optional} from '@angular/core';
import {HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Request}from 'express'

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {

    constructor(@Optional() @Inject('serverUrl') protected serverUrl: string,
                @Optional() @Inject('expressRequest') protected expressRequest: Request) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        
        let serverReq = !this.serverUrl ? req : req.clone({
            url: `${this.serverUrl}${req.url}`,
            headers: req.headers.set('Cookie', this.expressRequest.headers.cookie)
        });

        return next.handle(serverReq);

    }

}