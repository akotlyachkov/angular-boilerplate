import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
var CommunicateService = (function () {
    function CommunicateService() {
        this.filterObserver = new Subject();
        this.filterObservable = this.filterObserver.asObservable();
    }
    CommunicateService.prototype.test = function () {
        return ' проверочка';
    };
    CommunicateService.prototype.provideFilter = function (filter) {
        this.filterObserver.next(filter);
    };
    CommunicateService.decorators = [
        { type: Injectable },
    ];
    CommunicateService.ctorParameters = function () { return []; };
    return CommunicateService;
}());
export { CommunicateService };
//# sourceMappingURL=communicate.js.map