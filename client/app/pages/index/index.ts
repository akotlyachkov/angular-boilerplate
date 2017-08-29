import {Component} from "@angular/core";
import {DataProvider} from "providers/data";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
    selector: 'index',
    templateUrl: './index.html'
})
export class IndexPage {
    test: any;

    constructor(private dataProvider: DataProvider) {
    }

    ngOnInit() {
        this.dataProvider.test().subscribe(resp => {
                this.test = resp.test
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log("Client-side error occured.");
                } else {

                    console.log(JSON.stringify(err));
                    console.log("Server-side error occured.");
                }
            }
        );
    }
}