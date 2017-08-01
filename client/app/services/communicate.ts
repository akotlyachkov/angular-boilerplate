import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {User} from "entities/user";


@Injectable()
export class CommunicateService{

    test(){
        return ' проверочка'
    }


    private filterObserver = new Subject<User>();

    public filterObservable = this.filterObserver.asObservable();

    public provideFilter(filter: User) {
        this.filterObserver.next(filter);
    }


}