import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
export class CommunicateService {
    constructor() {
        this.filterObserver = new Subject();
        this.filterObservable = this.filterObserver.asObservable();
    }
    test() {
        return ' проверочка';
    }
    provideFilter(filter) {
        this.filterObserver.next(filter);
    }
}
CommunicateService.decorators = [
    { type: Injectable },
];
CommunicateService.ctorParameters = () => [];
//# sourceMappingURL=communicate.js.map