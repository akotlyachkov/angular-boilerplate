import { Injectable, Inject, Optional } from '@angular/core';
var UniversalInterceptor = (function () {
    function UniversalInterceptor(serverUrl) {
        this.serverUrl = serverUrl;
    }
    UniversalInterceptor.prototype.intercept = function (req, next) {
        var serverReq = !this.serverUrl ? req : req.clone({
            url: "" + this.serverUrl + req.url
        });
        return next.handle(serverReq);
    };
    UniversalInterceptor.decorators = [
        { type: Injectable },
    ];
    UniversalInterceptor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['serverUrl',] },] },
    ]; };
    return UniversalInterceptor;
}());
export { UniversalInterceptor };
//# sourceMappingURL=universal.js.map