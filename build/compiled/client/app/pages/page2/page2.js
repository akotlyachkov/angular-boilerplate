import { Component } from "@angular/core";
import { CommunicateService } from "../../services/communicate";
import { User } from "../../entities/user";
import { DataProvider } from "../../providers/data";
var Page2Page = (function () {
    function Page2Page(srv, dataProvider) {
        var _this = this;
        this.srv = srv;
        this.dataProvider = dataProvider;
        this.model = new User;
        this.observer = {
            next: function (obj) {
                obj.name += ' 1';
                console.dir(obj);
                this.model = obj;
            }
        };
        this.model.name = "d";
        this.srv.filterObservable.subscribe(function (obj) {
            obj.name += ' 1';
            console.dir(obj);
            _this.model = obj;
        });
    }
    Page2Page.prototype.testik = function ($event) {
        console.log("from page2 \"" + $event + "\"");
    };
    Page2Page.prototype.ngOnInit = function () {
        this.dataProvider.config().subscribe(function (resp) {
            console.log(resp);
        }, function (err) {
            console.log(err);
            console.log("Error page2 occured.");
        });
    };
    Page2Page.decorators = [
        { type: Component, args: [{
                    selector: 'page2',
                    templateUrl: './page2.html'
                },] },
    ];
    Page2Page.ctorParameters = function () { return [
        { type: CommunicateService, },
        { type: DataProvider, },
    ]; };
    return Page2Page;
}());
export { Page2Page };
//# sourceMappingURL=page2.js.map