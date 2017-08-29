var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
let CommunicateService = class CommunicateService {
    constructor() {
        this.filterObserver = new Subject();
        this.filterObservable = this.filterObserver.asObservable();
    }
    test() {
        return ' проверочка';
    }
    provideFilter(filter) {
        this.filterObserver.next(filter);
    }
};
CommunicateService = __decorate([
    Injectable()
], CommunicateService);
export { CommunicateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tdW5pY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFLckMsSUFBYSxrQkFBa0IsR0FBL0I7SUFEQTtRQVFZLG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUV0QyxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBT2pFLENBQUM7SUFkRyxJQUFJO1FBQ0EsTUFBTSxDQUFDLGFBQWEsQ0FBQTtJQUN4QixDQUFDO0lBT00sYUFBYSxDQUFDLE1BQVk7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUdKLENBQUE7QUFoQlksa0JBQWtCO0lBRDlCLFVBQVUsRUFBRTtHQUNBLGtCQUFrQixDQWdCOUI7U0FoQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzL1N1YmplY3RcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiZW50aXRpZXMvdXNlclwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRlU2VydmljZXtcclxuXHJcbiAgICB0ZXN0KCl7XHJcbiAgICAgICAgcmV0dXJuICcg0L/RgNC+0LLQtdGA0L7Rh9C60LAnXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZmlsdGVyT2JzZXJ2ZXIgPSBuZXcgU3ViamVjdDxVc2VyPigpO1xyXG5cclxuICAgIHB1YmxpYyBmaWx0ZXJPYnNlcnZhYmxlID0gdGhpcy5maWx0ZXJPYnNlcnZlci5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICBwdWJsaWMgcHJvdmlkZUZpbHRlcihmaWx0ZXI6IFVzZXIpIHtcclxuICAgICAgICB0aGlzLmZpbHRlck9ic2VydmVyLm5leHQoZmlsdGVyKTtcclxuICAgIH1cclxuXHJcblxyXG59Il19