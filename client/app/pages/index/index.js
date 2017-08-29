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
let IndexPage = class IndexPage {
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
};
IndexPage = __decorate([
    Component({
        selector: 'index',
        templateUrl: './index.html'
    }),
    __metadata("design:paramtypes", [DataProvider])
], IndexPage);
export { IndexPage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQVE1QyxJQUFhLFNBQVMsR0FBdEI7SUFHSSxZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUM5QyxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ3pCLENBQUMsRUFDRCxDQUFDLEdBQXNCO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQzlDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFFSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQzlDLENBQUM7UUFDTCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFBO0FBckJZLFNBQVM7SUFKckIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLGNBQWM7S0FDOUIsQ0FBQztxQ0FJb0MsWUFBWTtHQUhyQyxTQUFTLENBcUJyQjtTQXJCWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0RhdGFQcm92aWRlcn0gZnJvbSBcInByb3ZpZGVycy9kYXRhXCI7XG5pbXBvcnQge0h0dHBFcnJvclJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2luZGV4JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW5kZXguaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW5kZXhQYWdlIHtcbiAgICB0ZXN0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZGF0YVByb3ZpZGVyLnRlc3QoKS5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXN0ID0gcmVzcC50ZXN0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGllbnQtc2lkZSBlcnJvciBvY2N1cmVkLlwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZlci1zaWRlIGVycm9yIG9jY3VyZWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG59Il19