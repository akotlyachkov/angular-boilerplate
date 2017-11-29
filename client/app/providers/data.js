import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
export class DataProvider {
    constructor(http) {
        this.http = http;
    }
    test() {
        return this.http.post('http://dl-002.integrum.net:403/api/test', {});
    }
    config() {
        return this.http.get('http://dl-002.integrum.net:403/api/config');
    }
}
DataProvider.decorators = [
    { type: Injectable },
];
DataProvider.ctorParameters = () => [
    { type: HttpClient, },
];
//# sourceMappingURL=data.js.map