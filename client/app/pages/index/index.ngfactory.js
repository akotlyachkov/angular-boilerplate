import * as i0 from '@angular/core';
import * as i1 from './index';
import * as i2 from '../../providers/data';
var styles_IndexPage = [];
export var RenderType_IndexPage = i0.ɵcrt({ encapsulation: 2, styles: styles_IndexPage,
    data: {} });
export function View_IndexPage_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class',
                'col-xs-12']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Главная'])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵted(null, ['\n'])),
        (_l()(), i0.ɵted(null, ['\n']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.test;
        _ck(_v, 6, 0, currVal_0);
    });
}
export function View_IndexPage_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'index', [], null, null, null, View_IndexPage_0, RenderType_IndexPage)),
        i0.ɵdid(114688, null, 0, i1.IndexPage, [i2.DataProvider], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
export var IndexPageNgFactory = i0.ɵccf('index', i1.IndexPage, View_IndexPage_Host_0, {}, {}, []);
