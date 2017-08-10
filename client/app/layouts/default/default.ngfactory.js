import * as i0 from '@angular/core';
import * as i1 from '../../controls/navbar/navbar.ngfactory';
import * as i2 from '../../controls/navbar/navbar';
import * as i3 from '@angular/router';
import * as i4 from '../../controls/footer/footer.ngfactory';
import * as i5 from '../../controls/footer/footer';
import * as i6 from './default';
var styles_DefaultLayout = [];
export var RenderType_DefaultLayout = i0.ɵcrt({ encapsulation: 2,
    styles: styles_DefaultLayout, data: {} });
export function View_DefaultLayout_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 10, 'div', [['class',
                'wrapper']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'navbar', [['class', 'sidebar']], null, null, null, i1.View_NavbarComponent_0, i1.RenderType_NavbarComponent)), i0.ɵdid(49152, null, 0, i2.NavbarComponent, [], { navs: [0, 'navs'] }, null),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class', 'content']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])),
        (_l()(), i0.ɵeld(16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
        i0.ɵdid(212992, null, 0, i3.RouterOutlet, [i3.ChildrenOutletContexts, i0.ViewContainerRef,
            i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 1, 'footer', [['class', 'footer']], null, null, null, i4.View_FooterComponent_0, i4.RenderType_FooterComponent)),
        i0.ɵdid(49152, null, 0, i5.FooterComponent, [], null, null), (_l()(), i0.ɵted(null, ['\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.navs;
        _ck(_v, 3, 0, currVal_0);
        _ck(_v, 8, 0);
    }, null);
}
export function View_DefaultLayout_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'application', [], null, null, null, View_DefaultLayout_0, RenderType_DefaultLayout)), i0.ɵdid(49152, null, 0, i6.DefaultLayout, [], null, null)], null, null);
}
export var DefaultLayoutNgFactory = i0.ɵccf('application', i6.DefaultLayout, View_DefaultLayout_Host_0, {}, {}, []);
