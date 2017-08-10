import * as i0 from '@angular/core';
import * as i1 from './control1';
import * as i2 from '../../services/communicate';
var styles_Control1Control = [];
export var RenderType_Control1Control = i0.ɵcrt({ encapsulation: 2,
    styles: styles_Control1Control, data: {} });
export function View_Control1Control_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class',
                'ctrl1']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Контрол 1'])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵted(null, ['\n']))], null, null);
}
export function View_Control1Control_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'control1', [], null, null, null, View_Control1Control_0, RenderType_Control1Control)),
        i0.ɵdid(49152, null, 0, i1.Control1Control, [i2.CommunicateService], null, null)], null, null);
}
export var Control1ControlNgFactory = i0.ɵccf('control1', i1.Control1Control, View_Control1Control_Host_0, { logger: 'logger' }, {}, []);
