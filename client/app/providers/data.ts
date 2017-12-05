import {Inject, Injectable, Optional} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataProvider{
    constructor(@Optional() @Inject('serverUrl') protected serverUrl: string,
                private http:HttpClient){
        console.log(`получено с сервера "${serverUrl}"`);
    }
    test(){
        return this.http.post<any>('/api/test',{})
    }
    config(){
        return this.http.get<any>('/api/config')
    }
}