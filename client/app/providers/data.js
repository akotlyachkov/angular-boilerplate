var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
let DataProvider = class DataProvider {
    constructor(http) {
        this.http = http;
    }
    test() {
        return this.http.post('http://dl-002.integrum.net:403/api/test', {});
    }
    config() {
        return this.http.get('http://dl-002.integrum.net:403/api/config');
    }
};
DataProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], DataProvider);
export { DataProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFHaEQsSUFBYSxZQUFZLEdBQXpCO0lBQ0ksWUFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7SUFFbkMsQ0FBQztJQUNELElBQUk7UUFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0seUNBQXlDLEVBQUMsRUFBRSxDQUFDLENBQUE7SUFDNUUsQ0FBQztJQUNELE1BQU07UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sMkNBQTJDLENBQUMsQ0FBQTtJQUMxRSxDQUFDO0NBQ0osQ0FBQTtBQVZZLFlBQVk7SUFEeEIsVUFBVSxFQUFFO3FDQUVnQixVQUFVO0dBRDFCLFlBQVksQ0FVeEI7U0FWWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFQcm92aWRlcntcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCl7XG5cbiAgICB9XG4gICAgdGVzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PignaHR0cDovL2RsLTAwMi5pbnRlZ3J1bS5uZXQ6NDAzL2FwaS90ZXN0Jyx7fSlcbiAgICB9XG4gICAgY29uZmlnKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4oJ2h0dHA6Ly9kbC0wMDIuaW50ZWdydW0ubmV0OjQwMy9hcGkvY29uZmlnJylcbiAgICB9XG59Il19