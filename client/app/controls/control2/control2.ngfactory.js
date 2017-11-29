import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "./control2";
import * as i3 from "../../services/communicate";
var styles_Control2Control = [];
var RenderType_Control2Control = i0.ɵcrt({ encapsulation: 2, styles: styles_Control2Control, data: {} });
export { RenderType_Control2Control as RenderType_Control2Control };
export function View_Control2Control_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 20, "div", [["class", "ctrl2"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u041A\u043E\u043D\u0442\u0440\u043E\u043B 2"])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(5, 0, null, null, 14, "div", [["class", "form-inline"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(7, 0, null, null, 1, "button", [["class", "btn btn-default"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickHandler() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0415\u0432\u0435\u043D\u0442"])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(10, 0, null, null, 5, "input", [["class", "form-control"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 11)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 11).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 11)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 11)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.name = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(11, 16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.DefaultValueAccessor]), i0.ɵdid(13, 671744, null, 0, i1.NgModel, [[8, null], [8, null], [8, null], [2, i1.NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i1.NgControl, null, [i1.NgModel]), i0.ɵdid(15, 16384, null, 0, i1.NgControlStatus, [i1.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(17, 0, null, null, 1, "button", [["class", "btn btn-default"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickReactiveHandler() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0420\u0435\u0430\u043A\u0442\u0438\u0432"])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.model.name; _ck(_v, 13, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 15).ngClassUntouched; var currVal_1 = i0.ɵnov(_v, 15).ngClassTouched; var currVal_2 = i0.ɵnov(_v, 15).ngClassPristine; var currVal_3 = i0.ɵnov(_v, 15).ngClassDirty; var currVal_4 = i0.ɵnov(_v, 15).ngClassValid; var currVal_5 = i0.ɵnov(_v, 15).ngClassInvalid; var currVal_6 = i0.ɵnov(_v, 15).ngClassPending; _ck(_v, 10, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
export function View_Control2Control_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "control2", [], null, null, null, View_Control2Control_0, RenderType_Control2Control)), i0.ɵdid(1, 49152, null, 0, i2.Control2Control, [i3.CommunicateService], null, null)], null, null); }
var Control2ControlNgFactory = i0.ɵccf("control2", i2.Control2Control, View_Control2Control_Host_0, {}, { onClick: "onClick" }, []);
export { Control2ControlNgFactory as Control2ControlNgFactory };
//# sourceMappingURL=control2.ngfactory.js.map