import {Component, EventEmitter, Output} from "@angular/core";
import {User} from "../../entities/user";
import {CommunicateService} from "../../services/communicate";

@Component({
    selector: 'control2',
    styleUrls:['control2.scss'],
    templateUrl: 'control2.html'
})
export class Control2Control {

    model: User = new User;

    constructor(private communicateService: CommunicateService) {

    }

    @Output()
    onClick = new EventEmitter<string>();

    clickHandler(): void {
        this.onClick.emit("privet");
        console.log(this.communicateService.test())
    }

    clickReactiveHandler(): void {
        this.communicateService.provideFilter(this.model)
    }
}
