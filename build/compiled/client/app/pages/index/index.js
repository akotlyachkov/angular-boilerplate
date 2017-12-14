import { Component } from "@angular/core";
import { DataProvider } from "providers/data";
var IndexPage = (function () {
    function IndexPage(dataProvider) {
        this.dataProvider = dataProvider;
    }
    IndexPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataProvider.test().subscribe(function (resp) {
            _this.test = resp.test;
        }, function (err) {
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log(JSON.stringify(err));
                console.log("Server-side error occured.");
            }
        });
    };
    IndexPage.decorators = [
        { type: Component, args: [{
                    selector: 'index',
                    templateUrl: './index.html'
                },] },
    ];
    IndexPage.ctorParameters = function () { return [
        { type: DataProvider, },
    ]; };
    return IndexPage;
}());
export { IndexPage };
//# sourceMappingURL=index.js.map