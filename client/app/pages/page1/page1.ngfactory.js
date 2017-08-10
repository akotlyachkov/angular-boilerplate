import * as i0 from '@angular/core';
import * as i1 from '../../controls/control1/control1.ngfactory';
import * as i2 from '../../controls/control1/control1';
import * as i3 from '../../services/communicate';
import * as i4 from './page1';
var styles_Page1Page = [];
export var RenderType_Page1Page = i0.ɵcrt({ encapsulation: 2, styles: styles_Page1Page,
    data: {} });
export function View_Page1Page_0(_l) {
    return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { control1: 0 }), (_l()(), i0.ɵeld(0, null, null, 16, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(),
            i0.ɵeld(0, null, null, 13, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 10, 'div', [['class',
                'col-xs-12']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Страница 1'])),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'control1', [], null, null, null, i1.View_Control1Control_0, i1.RenderType_Control1Control)), i0.ɵdid(49152, [[1, 4]], 0, i2.Control1Control, [i3.CommunicateService], null, null),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-default']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.clickHandler() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['Нажать'])),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵted(null, ['\n']))], null, null);
}
export function View_Page1Page_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'page1', [], null, null, null, View_Page1Page_0, RenderType_Page1Page)),
        i0.ɵdid(49152, null, 0, i4.Page1Page, [], null, null)], null, null);
}
export var Page1PageNgFactory = i0.ɵccf('page1', i4.Page1Page, View_Page1Page_Host_0, {}, {}, []);
