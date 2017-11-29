import { Component } from "@angular/core";
import { CommunicateService } from "../../services/communicate";
import { User } from "../../entities/user";
import { DataProvider } from "../../providers/data";
export class Page2Page {
    constructor(srv, dataProvider) {
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
        this.srv.filterObservable.subscribe(obj => {
            obj.name += ' 1';
            console.dir(obj);
            this.model = obj;
        });
    }
    testik($event) {
        console.log(`from page2 "${$event}"`);
    }
    ngOnInit() {
        this.dataProvider.config().subscribe(resp => {
            console.log(resp);
        }, err => {
            console.log(err);
            console.log("Error page2 occured.");
        });
    }
}
Page2Page.decorators = [
    { type: Component, args: [{
                selector: 'page2',
                templateUrl: './page2.html'
            },] },
];
Page2Page.ctorParameters = () => [
    { type: CommunicateService, },
    { type: DataProvider, },
];
//# sourceMappingURL=page2.js.map