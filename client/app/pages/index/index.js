var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    IndexPage = __decorate([
        Component({
            selector: 'index',
            templateUrl: './index.html'
        }),
        __metadata("design:paramtypes", [DataProvider])
    ], IndexPage);
    return IndexPage;
}());
export { IndexPage };
