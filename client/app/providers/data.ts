import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataProvider{
    constructor(private http:HttpClient){

    }
    test(){
        return this.http.post<any>('http://dl-002.integrum.net:403/api/test',{})
    }
    config(){
        return this.http.get<any>('http://dl-002.integrum.net:403/api/config')
    }
}