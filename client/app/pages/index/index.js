import { Component } from "@angular/core";
import { DataProvider } from "providers/data";
export class IndexPage {
    constructor(dataProvider) {
        this.dataProvider = dataProvider;
    }
    ngOnInit() {
        this.dataProvider.test().subscribe(resp => {
            this.test = resp.test;
        }, (err) => {
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log(JSON.stringify(err));
                console.log("Server-side error occured.");
            }
        });
    }
}
IndexPage.decorators = [
    { type: Component, args: [{
                selector: 'index',
                templateUrl: './index.html'
            },] },
];
IndexPage.ctorParameters = () => [
    { type: DataProvider, },
];
//# sourceMappingURL=index.js.map