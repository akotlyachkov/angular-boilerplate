import * as i0 from '@angular/core';
import * as i1 from './page2';
import * as i2 from '../../controls/control2/control2.ngfactory';
import * as i3 from '../../controls/control2/control2';
import * as i4 from '../../services/communicate';
import * as i5 from '@angular/router';
import * as i6 from '@angular/common';
import * as i7 from '../../providers/data';
var styles_Page2Page = [];
export var RenderType_Page2Page = i0.ɵcrt({ encapsulation: 2, styles: styles_Page2Page,
    data: {} });
export function View_Page2Page_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 35, 'div', [['class',
                'container']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 32, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 29, 'div', [['class', 'col-xs-12']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Страница 2'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'control2', [], null, [[null, 'onClick']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('onClick' === en)) {
                var pd_0 = (_co.testik($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i2.View_Control2Control_0, i2.RenderType_Control2Control)), i0.ɵdid(49152, null, 0, i3.Control2Control, [i4.CommunicateService], null, { onClick: 'onClick' }), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 3, 'p', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Получил через сервис: '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 5, 'a', [['routerLink', './subpage3'], ['routerLinkActive', 'active']], [[1, 'target',
                0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 18).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(671744, [[2, 4]], 0, i5.RouterLinkWithHref, [i5.Router, i5.ActivatedRoute, i6.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), i0.ɵdid(1720320, null, 2, i5.RouterLinkActive, [i5.Router,
            i0.ElementRef, i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, 'routerLinkActive'] }, null), i0.ɵqud(603979776, 1, { links: 1 }), i0.ɵqud(603979776, 2, { linksWithHrefs: 1 }),
        (_l()(), i0.ɵted(null, ['подпейдж 3'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 5, 'a', [['routerLink', './subpage4'], ['routerLinkActive', 'active']], [[1, 'target',
                0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 25).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(671744, [[4, 4]], 0, i5.RouterLinkWithHref, [i5.Router, i5.ActivatedRoute, i6.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), i0.ɵdid(1720320, null, 2, i5.RouterLinkActive, [i5.Router,
            i0.ElementRef, i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, 'routerLinkActive'] }, null), i0.ɵqud(603979776, 3, { links: 1 }), i0.ɵqud(603979776, 4, { linksWithHrefs: 1 }),
        (_l()(), i0.ɵted(null, ['подпейдж 4'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)), i0.ɵdid(212992, null, 0, i5.RouterOutlet, [i5.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver,
            [8, null], i0.ChangeDetectorRef], null, null),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵted(null, ['\n']))], function (_ck, _v) {
        var currVal_3 = './subpage3';
        _ck(_v, 18, 0, currVal_3);
        var currVal_4 = 'active';
        _ck(_v, 19, 0, currVal_4);
        var currVal_7 = './subpage4';
        _ck(_v, 25, 0, currVal_7);
        var currVal_8 = 'active';
        _ck(_v, 26, 0, currVal_8);
        _ck(_v, 32, 0);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.name;
        _ck(_v, 15, 0, currVal_0);
        var currVal_1 = i0.ɵnov(_v, 18).target;
        var currVal_2 = i0.ɵnov(_v, 18).href;
        _ck(_v, 17, 0, currVal_1, currVal_2);
        var currVal_5 = i0.ɵnov(_v, 25).target;
        var currVal_6 = i0.ɵnov(_v, 25).href;
        _ck(_v, 24, 0, currVal_5, currVal_6);
    });
}
export function View_Page2Page_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'page2', [], null, null, null, View_Page2Page_0, RenderType_Page2Page)),
        i0.ɵdid(114688, null, 0, i1.Page2Page, [i4.CommunicateService, i7.DataProvider], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
export var Page2PageNgFactory = i0.ɵccf('page2', i1.Page2Page, View_Page2Page_Host_0, {}, {}, []);
