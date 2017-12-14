import { Inject, Injectable, Optional } from "@angular/core";
import { HttpClient } from "@angular/common/http";
var DataProvider = (function () {
    function DataProvider(serverUrl, http) {
        this.serverUrl = serverUrl;
        this.http = http;
        console.log("\u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \"" + serverUrl + "\"");
    }
    DataProvider.prototype.test = function () {
        return this.http.post('/api/test', {});
    };
    DataProvider.prototype.config = function () {
        return this.http.get('/api/config');
    };
    DataProvider.decorators = [
        { type: Injectable },
    ];
    DataProvider.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['serverUrl',] },] },
        { type: HttpClient, },
    ]; };
    return DataProvider;
}());
export { DataProvider };
//# sourceMappingURL=data.js.map