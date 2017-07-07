(function (_angular_platformBrowserDynamic,_angular_core,_angular_platformBrowser,rxjs_Subject,_angular_forms,_angular_router) {
'use strict';

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let DefaultLayout = class DefaultLayout {
};
DefaultLayout = __decorate$1([
    _angular_core.Component({
        selector: 'application',
        host: { 'class': 'sticky-content' },
        templateUrl: 'default.html'
    })
], DefaultLayout);

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let CommunicateService = class CommunicateService {
    constructor() {
        this.filterObserver = new rxjs_Subject.Subject();
        this.filterObservable = this.filterObserver.asObservable();
    }
    test() {
        return ' проверочка';
    }
    provideFilter(filter) {
        this.filterObserver.next(filter);
    }
};
CommunicateService = __decorate$5([
    _angular_core.Injectable()
], CommunicateService);

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Control1Control = class Control1Control {
    constructor(communicateService) {
        this.communicateService = communicateService;
    }
    logger() {
        console.log("контрол 1 написал");
    }
};
__decorate$4([
    _angular_core.Input(),
    __metadata$1("design:type", Function),
    __metadata$1("design:paramtypes", []),
    __metadata$1("design:returntype", void 0)
], Control1Control.prototype, "logger", null);
Control1Control = __decorate$4([
    _angular_core.Component({
        selector: 'control1',
        templateUrl: 'control1.html'
    }),
    __metadata$1("design:paramtypes", [CommunicateService])
], Control1Control);

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Page1Page = class Page1Page {
    clickHandler() {
        console.log('нажали 1');
        this.control1.logger();
    }
};
__decorate$3([
    _angular_core.ViewChild(Control1Control),
    __metadata("design:type", Control1Control)
], Page1Page.prototype, "control1", void 0);
Page1Page = __decorate$3([
    _angular_core.Component({
        selector: 'page1',
        templateUrl: 'page1.html'
    })
], Page1Page);

class User {
}

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Page2Page = class Page2Page {
    constructor(srv) {
        this.srv = srv;
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
};
Page2Page = __decorate$6([
    _angular_core.Component({
        selector: 'page2',
        templateUrl: 'page2.html'
    }),
    __metadata$2("design:paramtypes", [CommunicateService])
], Page2Page);

var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let IndexPage = class IndexPage {
};
IndexPage = __decorate$7([
    _angular_core.Component({
        selector: 'index',
        templateUrl: 'index.html'
    })
], IndexPage);

var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Control2Control = class Control2Control {
    constructor(communicateService) {
        this.communicateService = communicateService;
        this.model = new User;
        this.onClick = new _angular_core.EventEmitter();
    }
    clickHandler() {
        this.onClick.emit("privet");
        console.log(this.communicateService.test());
    }
    clickReactiveHandler() {
        this.communicateService.provideFilter(this.model);
    }
};
__decorate$9([
    _angular_core.Output(),
    __metadata$3("design:type", Object)
], Control2Control.prototype, "onClick", void 0);
Control2Control = __decorate$9([
    _angular_core.Component({
        selector: 'control2',
        templateUrl: 'control2.html'
    }),
    __metadata$3("design:paramtypes", [CommunicateService])
], Control2Control);

var __decorate$10 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let MenuControl = class MenuControl {
};
MenuControl = __decorate$10([
    _angular_core.Component({
        selector: 'menus',
        templateUrl: 'menu.html'
    })
], MenuControl);

var __decorate$11 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Control3Control = class Control3Control {
};
Control3Control = __decorate$11([
    _angular_core.Component({
        selector: 'control3',
        templateUrl: 'control3.html'
    })
], Control3Control);

var __decorate$12 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Control4Control = class Control4Control {
};
Control4Control = __decorate$12([
    _angular_core.Component({
        selector: 'control4',
        templateUrl: 'control4.html'
    })
], Control4Control);

var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ControlsModule = class ControlsModule {
};
ControlsModule = __decorate$8([
    _angular_core.NgModule({
        declarations: [
            Control1Control,
            Control2Control,
            MenuControl,
            Control3Control,
            Control4Control
        ],
        imports: [
            _angular_forms.FormsModule,
            _angular_router.RouterModule
        ],
        exports: [
            Control1Control,
            Control2Control,
            MenuControl,
            Control3Control,
            Control4Control
        ]
    })
], ControlsModule);

var __decorate$13 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Page3Page = class Page3Page {
};
Page3Page = __decorate$13([
    _angular_core.Component({
        selector: 'page3',
        templateUrl: 'page3.html'
    })
], Page3Page);

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let PagesModule = class PagesModule {
};
PagesModule = __decorate$2([
    _angular_core.NgModule({
        declarations: [
            IndexPage,
            Page1Page,
            Page2Page,
            Page3Page
        ],
        imports: [
            _angular_router.RouterModule,
            ControlsModule
        ],
        exports: [
            IndexPage,
            Page1Page,
            Page2Page,
            Page3Page
        ]
    })
], PagesModule);

var __decorate$15 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Master1Layout = class Master1Layout {
};
Master1Layout = __decorate$15([
    _angular_core.Component({
        selector: 'master1',
        templateUrl: 'master1.html'
    })
], Master1Layout);

var __decorate$16 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Master2Layout = class Master2Layout {
};
Master2Layout = __decorate$16([
    _angular_core.Component({
        selector: 'master2',
        templateUrl: 'master2.html'
    })
], Master2Layout);

var __decorate$14 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const routes = [
    {
        path: '', component: Master1Layout, children: [
            { path: '', component: IndexPage },
            { path: 'page1', component: Page1Page }
        ]
    },
    {
        path: 'page2', component: Master2Layout, children: [
            {
                path: '', component: Page2Page, children: [
                    { path: 'subpage3', component: Control3Control },
                    { path: 'subpage4', component: Control4Control },
                ]
            },
        ]
    }
];
let RoutingModule = class RoutingModule {
};
RoutingModule = __decorate$14([
    _angular_core.NgModule({
        imports: [_angular_router.RouterModule.forRoot(routes)],
        exports: [_angular_router.RouterModule]
    })
], RoutingModule);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let InitModule = class InitModule {
};
InitModule = __decorate([
    _angular_core.NgModule({
        declarations: [
            DefaultLayout,
            Master1Layout,
            Master2Layout
        ],
        imports: [
            _angular_platformBrowser.BrowserModule,
            ControlsModule,
            PagesModule,
            RoutingModule
        ],
        providers: [CommunicateService],
        bootstrap: [
            DefaultLayout
        ]
    })
], InitModule);

_angular_core.enableProdMode();
_angular_platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(InitModule);

}(_angular_platformBrowserDynamic,_angular_core,_angular_platformBrowser,rxjs_Subject,_angular_forms,_angular_router));
