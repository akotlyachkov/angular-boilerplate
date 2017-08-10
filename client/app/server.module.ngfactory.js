import * as i0 from '@angular/core';
import * as i1 from './server.module';
import * as i2 from './layouts/default/default';
import * as i3 from './layouts/master1/master1.ngfactory';
import * as i4 from './pages/index/index.ngfactory';
import * as i5 from './pages/page1/page1.ngfactory';
import * as i6 from './layouts/master2/master2.ngfactory';
import * as i7 from './pages/page2/page2.ngfactory';
import * as i8 from './controls/control3/control3.ngfactory';
import * as i9 from './controls/control4/control4.ngfactory';
import * as i10 from './layouts/default/default.ngfactory';
import * as i11 from '@angular/common';
import * as i12 from '@angular/platform-browser';
import * as i13 from '@angular/platform-server';
import * as i14 from '@angular/animations/browser';
import * as i15 from '@angular/platform-browser/animations';
import * as i16 from '@angular/http';
import * as i17 from '@angular/common/http';
import * as i18 from '@angular/animations';
import * as i19 from '@angular/forms';
import * as i20 from '@angular/router';
import * as i21 from './services/communicate';
import * as i22 from './layouts/master1/master1';
import * as i23 from './pages/index/index';
import * as i24 from './pages/page1/page1';
import * as i25 from './layouts/master2/master2';
import * as i26 from './pages/page2/page2';
import * as i27 from './controls/control3/control3';
import * as i28 from './controls/control4/control4';
import * as i29 from './controls/module';
import * as i30 from './pages/module';
import * as i31 from './routes';
import * as i32 from './app.module';
export var ServerAppModuleNgFactory = i0.ɵcmf(i1.ServerAppModule, [i2.DefaultLayout], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.Master1LayoutNgFactory, i4.IndexPageNgFactory, i5.Page1PageNgFactory,
                    i6.Master2LayoutNgFactory, i7.Page2PageNgFactory, i8.Control3ControlNgFactory,
                    i9.Control4ControlNgFactory, i10.DefaultLayoutNgFactory]], [3, i0.ComponentFactoryResolver],
            i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]),
        i0.ɵmpd(4608, i11.NgLocalization, i11.NgLocaleLocalization, [i0.LOCALE_ID]),
        i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i12.DomSanitizer, i12.ɵe, [i11.DOCUMENT]),
        i0.ɵmpd(6144, i0.Sanitizer, null, [i12.DomSanitizer]), i0.ɵmpd(4608, i12.HAMMER_GESTURE_CONFIG, i12.HammerGestureConfig, []), i0.ɵmpd(5120, i12.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i12.ɵDomEventsPlugin(p0_0), new i12.ɵKeyEventsPlugin(p1_0),
                new i12.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i11.DOCUMENT, i11.DOCUMENT, i11.DOCUMENT, i12.HAMMER_GESTURE_CONFIG]),
        i0.ɵmpd(4608, i12.EventManager, i12.EventManager, [i12.EVENT_MANAGER_PLUGINS,
            i0.NgZone]), i0.ɵmpd(135680, i12.ɵDomSharedStylesHost, i12.ɵDomSharedStylesHost, [i11.DOCUMENT]), i0.ɵmpd(4608, i12.ɵDomRendererFactory2, i12.ɵDomRendererFactory2, [i12.EventManager, i12.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i13.ɵb, i13.ɵb, [i12.DOCUMENT, [2, i12.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i12.ɵSharedStylesHost, null, [i13.ɵb]), i0.ɵmpd(4608, i13.ɵServerRendererFactory2, i13.ɵServerRendererFactory2, [i0.NgZone, i12.DOCUMENT, i12.ɵSharedStylesHost]), i0.ɵmpd(4608, i14.AnimationDriver, i14.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i14.ɵAnimationStyleNormalizer, i15.ɵd, []), i0.ɵmpd(4608, i14.ɵAnimationEngine, i15.ɵb, [i14.AnimationDriver,
            i14.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i13.ɵa, [i13.ɵServerRendererFactory2, i14.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i12.Meta, i12.Meta, [i11.DOCUMENT]), i0.ɵmpd(4608, i12.Title, i12.Title, [i11.DOCUMENT]), i0.ɵmpd(4608, i16.BrowserXhr, i13.ɵc, []), i0.ɵmpd(4608, i16.ResponseOptions, i16.BaseResponseOptions, []), i0.ɵmpd(4608, i16.XSRFStrategy, i13.ɵd, []), i0.ɵmpd(4608, i16.XHRBackend, i16.XHRBackend, [i16.BrowserXhr,
            i16.ResponseOptions, i16.XSRFStrategy]), i0.ɵmpd(4608, i16.RequestOptions, i16.BaseRequestOptions, []), i0.ɵmpd(5120, i16.Http, i13.ɵe, [i16.XHRBackend,
            i16.RequestOptions]), i0.ɵmpd(4608, i17.HttpXsrfTokenExtractor, i17.ɵg, [i11.DOCUMENT, i0.PLATFORM_ID, i17.ɵe]), i0.ɵmpd(4608, i17.ɵh, i17.ɵh, [i17.HttpXsrfTokenExtractor,
            i17.ɵf]), i0.ɵmpd(5120, i17.HTTP_INTERCEPTORS, function (p0_0) {
            return [p0_0];
        }, [i17.ɵh]), i0.ɵmpd(4608, i17.XhrFactory, i13.ɵc, []), i0.ɵmpd(4608, i17.HttpXhrBackend, i17.HttpXhrBackend, [i17.XhrFactory]), i0.ɵmpd(6144, i17.HttpBackend, null, [i17.HttpXhrBackend]), i0.ɵmpd(5120, i17.HttpHandler, i13.ɵf, [i17.HttpBackend, [2, i17.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i17.HttpClient, i17.HttpClient, [i17.HttpHandler]), i0.ɵmpd(4608, i17.ɵd, i17.ɵd, []),
        i0.ɵmpd(4608, i18.AnimationBuilder, i15.ɵBrowserAnimationBuilder, [i0.RendererFactory2]),
        i0.ɵmpd(4608, i19.ɵi, i19.ɵi, []), i0.ɵmpd(5120, i20.ActivatedRoute, i20.ɵf, [i20.Router]), i0.ɵmpd(4608, i20.NoPreloading, i20.NoPreloading, []), i0.ɵmpd(6144, i20.PreloadingStrategy, null, [i20.NoPreloading]),
        i0.ɵmpd(135680, i20.RouterPreloader, i20.RouterPreloader, [i20.Router, i0.NgModuleFactoryLoader,
            i0.Compiler, i0.Injector, i20.PreloadingStrategy]), i0.ɵmpd(4608, i20.PreloadAllModules, i20.PreloadAllModules, []), i0.ɵmpd(5120, i20.ROUTER_INITIALIZER, i20.ɵi, [i20.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i20.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i21.CommunicateService, i21.CommunicateService, []), i0.ɵmpd(512, i11.CommonModule, i11.CommonModule, []),
        i0.ɵmpd(1024, i0.ErrorHandler, i12.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i20.ɵb()];
        }, []), i0.ɵmpd(512, i20.ɵg, i20.ɵg, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, 'my-app-id', []), i0.ɵmpd(2048, i12.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) {
            return [i12.ɵc(p0_0, p0_1), i20.ɵh(p1_0), i12.ɵf(p2_0, p2_1, p2_2)];
        }, [[2, i12.NgProbeToken], [2, i0.NgProbeToken], i20.ɵg, i12.ɵTRANSITION_ID, i11.DOCUMENT,
            i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole,
            i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]),
        i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i12.BrowserModule, i12.BrowserModule, [[3, i12.BrowserModule]]), i0.ɵmpd(512, i16.HttpModule, i16.HttpModule, []), i0.ɵmpd(512, i17.HttpClientXsrfModule, i17.HttpClientXsrfModule, []), i0.ɵmpd(512, i17.HttpClientModule, i17.HttpClientModule, []), i0.ɵmpd(512, i15.NoopAnimationsModule, i15.NoopAnimationsModule, []), i0.ɵmpd(512, i13.ServerModule, i13.ServerModule, []),
        i0.ɵmpd(512, i19.ɵba, i19.ɵba, []), i0.ɵmpd(512, i19.FormsModule, i19.FormsModule, []), i0.ɵmpd(1024, i20.ɵa, i20.ɵd, [[3, i20.Router]]), i0.ɵmpd(512, i20.UrlSerializer, i20.DefaultUrlSerializer, []), i0.ɵmpd(512, i20.ChildrenOutletContexts, i20.ChildrenOutletContexts, []),
        i0.ɵmpd(256, i20.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i11.LocationStrategy, i20.ɵc, [i11.PlatformLocation, [2, i11.APP_BASE_HREF], i20.ROUTER_CONFIGURATION]),
        i0.ɵmpd(512, i11.Location, i11.Location, [i11.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]),
        i0.ɵmpd(1024, i20.ROUTES, function () {
            return [[{ path: '', component: i22.Master1Layout, children: [{ path: '', component: i23.IndexPage },
                            { path: 'page1', component: i24.Page1Page }] }, { path: 'page2', component: i25.Master2Layout,
                        children: [{ path: '', component: i26.Page2Page, children: [{ path: 'subpage3',
                                        component: i27.Control3Control }, { path: 'subpage4', component: i28.Control4Control }] }] }]];
        }, []), i0.ɵmpd(1024, i20.Router, i20.ɵe, [i0.ApplicationRef, i20.UrlSerializer,
            i20.ChildrenOutletContexts, i11.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i20.ROUTES, i20.ROUTER_CONFIGURATION, [2, i20.UrlHandlingStrategy],
            [2, i20.RouteReuseStrategy]]), i0.ɵmpd(512, i20.RouterModule, i20.RouterModule, [[2, i20.ɵa], [2, i20.Router]]), i0.ɵmpd(512, i29.ControlsModule, i29.ControlsModule, []), i0.ɵmpd(512, i30.PagesModule, i30.PagesModule, []),
        i0.ɵmpd(512, i31.RoutingModule, i31.RoutingModule, []), i0.ɵmpd(512, i32.AppModule, i32.AppModule, []), i0.ɵmpd(512, i1.ServerAppModule, i1.ServerAppModule, []), i0.ɵmpd(256, i17.ɵe, 'XSRF-TOKEN', []),
        i0.ɵmpd(256, i17.ɵf, 'X-XSRF-TOKEN', [])]);
});
