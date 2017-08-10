import * as i0 from '@angular/core';
import * as i1 from '@angular/router';
import * as i2 from './master2';
var styles_Master2Layout = [];
export var RenderType_Master2Layout = i0.ɵcrt({ encapsulation: 2,
    styles: styles_Master2Layout, data: {} });
export function View_Master2Layout_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'h1', [['class',
                'col-xs-12']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['шаблон 2'])), (_l()(), i0.ɵted(null, ['\n'])),
        (_l()(), i0.ɵeld(16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
        i0.ɵdid(212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef,
            i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) {
        _ck(_v, 4, 0);
    }, null);
}
export function View_Master2Layout_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'master2', [], null, null, null, View_Master2Layout_0, RenderType_Master2Layout)),
        i0.ɵdid(49152, null, 0, i2.Master2Layout, [], null, null)], null, null);
}
export var Master2LayoutNgFactory = i0.ɵccf('master2', i2.Master2Layout, View_Master2Layout_Host_0, {}, {}, []);
