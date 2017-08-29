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
import { CommunicateService } from "../../services/communicate";
import { User } from "../../entities/user";
import { DataProvider } from "../../providers/data";
let Page2Page = class Page2Page {
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
};
Page2Page = __decorate([
    Component({
        selector: 'page2',
        templateUrl: './page2.html'
    }),
    __metadata("design:paramtypes", [CommunicateService,
        DataProvider])
], Page2Page);
export { Page2Page };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFPbEQsSUFBYSxTQUFTLEdBQXRCO0lBV0ksWUFBb0IsR0FBdUIsRUFDdkIsWUFBMEI7UUFEMUIsUUFBRyxHQUFILEdBQUcsQ0FBb0I7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFYOUMsVUFBSyxHQUFTLElBQUksSUFBSSxDQUFDO1FBRXZCLGFBQVEsR0FBRztZQUNQLElBQUksRUFBRSxVQUFVLEdBQUc7Z0JBQ2YsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLENBQUM7U0FDSixDQUFDO1FBSUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUc7WUFDbkMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBYztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsTUFBTSxHQUFHLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQixDQUFDLEVBQUUsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUFsQ1ksU0FBUztJQUpyQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsT0FBTztRQUNqQixXQUFXLEVBQUUsY0FBYztLQUM5QixDQUFDO3FDQVkyQixrQkFBa0I7UUFDVCxZQUFZO0dBWnJDLFNBQVMsQ0FrQ3JCO1NBbENZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q29tbXVuaWNhdGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29tbXVuaWNhdGVcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uL2VudGl0aWVzL3VzZXJcIjtcbmltcG9ydCB7RGF0YVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL2RhdGFcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BhZ2UyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnZTIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnZTJQYWdlIHtcbiAgICBtb2RlbDogVXNlciA9IG5ldyBVc2VyO1xuXG4gICAgb2JzZXJ2ZXIgPSB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIG9iai5uYW1lICs9ICcgMSc7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihvYmopO1xuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG9iajtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogQ29tbXVuaWNhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXIpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5uYW1lID0gXCJkXCI7XG4gICAgICAgIHRoaXMuc3J2LmZpbHRlck9ic2VydmFibGUuc3Vic2NyaWJlKG9iaiA9PiB7XG4gICAgICAgICAgICBvYmoubmFtZSArPSAnIDEnO1xuICAgICAgICAgICAgY29uc29sZS5kaXIob2JqKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBvYmo7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdGVzdGlrKCRldmVudDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBmcm9tIHBhZ2UyIFwiJHskZXZlbnR9XCJgKVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmRhdGFQcm92aWRlci5jb25maWcoKS5zdWJzY3JpYmUocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcClcbiAgICAgICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHBhZ2UyIG9jY3VyZWQuXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG59Il19