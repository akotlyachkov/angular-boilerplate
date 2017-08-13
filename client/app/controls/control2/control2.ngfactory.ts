/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './control2';
import * as i2 from '@angular/forms';
import * as i3 from '../../services/communicate';
const styles_Control2Control:any[] = ([] as any[]);
export const RenderType_Control2Control:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_Control2Control,data:{}});
export function View_Control2Control_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),20,'div',[['class',
      'ctrl2']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'h2',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['Контрол 2'])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),14,'div',[['class',
          'form-inline']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),1,'button',[['class','btn btn-default']],(null as any),
          [[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.Control2Control = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.clickHandler()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Евент'])),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),5,'input',[['class','form-control'],['type','text']],[[2,'ng-untouched',
              (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
              [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
                  (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'ngModelChange'],
              [(null as any),'input'],[(null as any),'blur'],[(null as any),'compositionstart'],
              [(null as any),'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.Control2Control = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,11)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,11).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,11)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,11)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_4:any = ((<any>(_co.model.name = $event)) !== false);
              ad = (pd_4 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i2.DefaultValueAccessor]),i0.ɵdid(671744,(null as any),0,i2.NgModel,[[8,(null as any)],
          [8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],{model:[0,
          'model']},{update:'ngModelChange'}),i0.ɵprd(2048,(null as any),i2.NgControl,
          (null as any),[i2.NgModel]),i0.ɵdid(16384,(null as any),0,i2.NgControlStatus,
          [i2.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'button',
          [['class','btn btn-default']],(null as any),[[(null as any),'click']],(_v,
              en,$event) => {
            var ad:boolean = true;
            var _co:i1.Control2Control = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.clickReactiveHandler()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Реактив'])),
      (_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵted((null as any),['\n']))],
      (_ck,_v) => {
        var _co:i1.Control2Control = _v.component;
        const currVal_7:any = _co.model.name;
        _ck(_v,13,0,currVal_7);
      },(_ck,_v) => {
        const currVal_0:any = i0.ɵnov(_v,15).ngClassUntouched;
        const currVal_1:any = i0.ɵnov(_v,15).ngClassTouched;
        const currVal_2:any = i0.ɵnov(_v,15).ngClassPristine;
        const currVal_3:any = i0.ɵnov(_v,15).ngClassDirty;
        const currVal_4:any = i0.ɵnov(_v,15).ngClassValid;
        const currVal_5:any = i0.ɵnov(_v,15).ngClassInvalid;
        const currVal_6:any = i0.ɵnov(_v,15).ngClassPending;
        _ck(_v,10,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
      });
}
export function View_Control2Control_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'control2',([] as any[]),
      (null as any),(null as any),(null as any),View_Control2Control_0,RenderType_Control2Control)),
      i0.ɵdid(49152,(null as any),0,i1.Control2Control,[i3.CommunicateService],(null as any),
          (null as any))],(null as any),(null as any));
}
export const Control2ControlNgFactory:i0.ComponentFactory<i1.Control2Control> = i0.ɵccf('control2',
    i1.Control2Control,View_Control2Control_Host_0,{},{onClick:'onClick'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovU2FtcGxlL2FuZ3VsYXIyLXdlYnBhY2syL2NsaWVudC9hcHAvY29udHJvbHMvY29udHJvbDIvY29udHJvbDIubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovU2FtcGxlL2FuZ3VsYXIyLXdlYnBhY2syL2NsaWVudC9hcHAvY29udHJvbHMvY29udHJvbDIvY29udHJvbDIudHMiLCJuZzovLy9DOi9TYW1wbGUvYW5ndWxhcjItd2VicGFjazIvY2xpZW50L2FwcC9jb250cm9scy9jb250cm9sMi9jb250cm9sMi5odG1sIiwibmc6Ly8vQzovU2FtcGxlL2FuZ3VsYXIyLXdlYnBhY2syL2NsaWVudC9hcHAvY29udHJvbHMvY29udHJvbDIvY29udHJvbDIudHMuQ29udHJvbDJDb250cm9sX0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cImN0cmwyXCI+XHJcbiAgICA8aDI+0JrQvtC90YLRgNC+0LsgMjwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbmxpbmVcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cImNsaWNrSGFuZGxlcigpXCI+0JXQstC10L3RgjwvYnV0dG9uPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJtb2RlbC5uYW1lXCIvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwiY2xpY2tSZWFjdGl2ZUhhbmRsZXIoKVwiPtCg0LXQsNC60YLQuNCyPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IiwiPGNvbnRyb2wyPjwvY29udHJvbDI+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztvQkNBQTtNQUFBO01BQW1CLDJDQUNmO1VBQUE7VUFBQSxnQkFBSSw4Q0FBYztVQUFBLGFBQ2xCO1VBQUE7VUFBQSxnQkFBeUIsK0NBQ3JCO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBZ0M7Y0FBQTtjQUFBO1lBQUE7WUFBaEM7VUFBQSxnQ0FBeUQ7TUFBYywrQ0FDdkU7VUFBQTtjQUFBO2NBQUE7a0JBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQXdDO2NBQUE7Y0FBQTtZQUFBO1lBQXhDO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1FBQUE7TUFBQSxvQ0FBQTtVQUFBO1VBQUEsMkNBQUE7VUFBQSxtQ0FBQTtVQUFBLDRDQUFrRTtVQUFBLGlCQUNsRTtVQUFBO3VCQUFBO1lBQUE7WUFBQTtZQUFnQztjQUFBO2NBQUE7WUFBQTtZQUFoQztVQUFBLGdDQUFpRTtNQUFnQiwyQ0FDL0U7OztRQUZzQztRQUF4QyxZQUF3QyxTQUF4Qzs7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBLFlBQUEscUVBQUE7Ozs7b0JDSlI7TUFBQTthQUFBO1VBQUE7OzsifQ==