import {Component} from "@angular/core";
import {CommunicateService} from "../../services/communicate";
import {User} from "../../entities/user";
import {DataProvider} from "../../providers/data";


@Component({
    selector: 'page2',
    templateUrl: './page2.html'
})
export class Page2Page {
    model: User = new User;

    observer = {
        next: function (obj) {
            obj.name += ' 1';
            console.dir(obj);
            this.model = obj;
        }
    };

    constructor(private srv: CommunicateService,
                private dataProvider: DataProvider) {
        this.model.name = "d";
        this.srv.filterObservable.subscribe(obj => {
            obj.name += ' 1';
            console.dir(obj);
            this.model = obj;
        })
    }

    testik($event: string): void {
        console.log(`from page2 "${$event}"`)
    }

    ngOnInit() {
        this.dataProvider.config().subscribe(resp => {
                console.log(resp)
            }, err => {
                console.log(err);
                console.log("Error page2 occured.")
            }
        )
    }
}