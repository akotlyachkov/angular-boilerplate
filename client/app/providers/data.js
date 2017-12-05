import { Inject, Injectable, Optional } from "@angular/core";
import { HttpClient } from "@angular/common/http";
export class DataProvider {
    constructor(serverUrl, http) {
        this.serverUrl = serverUrl;
        this.http = http;
        console.log(`получено с сервера "${serverUrl}"`);
    }
    test() {
        return this.http.post('/api/test', {});
    }
    config() {
        return this.http.get('/api/config');
    }
}
DataProvider.decorators = [
    { type: Injectable },
];
DataProvider.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['serverUrl',] },] },
    { type: HttpClient, },
];
//# sourceMappingURL=data.js.map