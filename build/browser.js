webpackJsonp([1],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HttpClient; });
/* unused harmony export HttpHeaders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP_INTERCEPTORS; });
/* unused harmony export JsonpClientBackend */
/* unused harmony export JsonpInterceptor */
/* unused harmony export HttpClientJsonpModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HttpClientXsrfModule; });
/* unused harmony export ɵinterceptingHandler */
/* unused harmony export HttpParams */
/* unused harmony export HttpUrlEncodingCodec */
/* unused harmony export HttpRequest */
/* unused harmony export HttpErrorResponse */
/* unused harmony export HttpEventType */
/* unused harmony export HttpHeaderResponse */
/* unused harmony export HttpResponse */
/* unused harmony export HttpResponseBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return HttpXsrfTokenExtractor; });
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return HttpInterceptingHandler; });
/* unused harmony export ɵd */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return HttpXsrfInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return XSRF_HEADER_NAME; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_concatMap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tslib__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/**
 * @license Angular v5.2.3
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * \@stable
 * @abstract
 */
var HttpHandler = /** @class */ (function () {
    function HttpHandler() {
    }
    return HttpHandler;
}());
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * \@stable
 * @abstract
 */
var HttpBackend = /** @class */ (function () {
    function HttpBackend() {
    }
    return HttpBackend;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @record
 */
/**
 * Immutable set of Http headers, with lazy parsing.
 * \@stable
 */
var HttpHeaders = /** @class */ (function () {
    function HttpHeaders(headers) {
        var _this = this;
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = function () {
                _this.headers = new Map();
                headers.split('\n').forEach(function (line) {
                    var /** @type {?} */ index = line.indexOf(':');
                    if (index > 0) {
                        var /** @type {?} */ name_1 = line.slice(0, index);
                        var /** @type {?} */ key = name_1.toLowerCase();
                        var /** @type {?} */ value = line.slice(index + 1).trim();
                        _this.maybeSetNormalizedName(name_1, key);
                        if (_this.headers.has(key)) {
                            /** @type {?} */ ((_this.headers.get(key))).push(value);
                        }
                        else {
                            _this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = function () {
                _this.headers = new Map();
                Object.keys(headers).forEach(function (name) {
                    var /** @type {?} */ values = headers[name];
                    var /** @type {?} */ key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        _this.headers.set(key, values);
                        _this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of header by given name.
     */
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.has = /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    };
    /**
     * Returns first header that matches given name.
     */
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.get = /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.init();
        var /** @type {?} */ values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    };
    /**
     * Returns the names of the headers
     */
    /**
     * Returns the names of the headers
     * @return {?}
     */
    HttpHeaders.prototype.keys = /**
     * Returns the names of the headers
     * @return {?}
     */
    function () {
        this.init();
        return Array.from(this.normalizedNames.values());
    };
    /**
     * Returns list of header values for a given name.
     */
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.getAll = /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    HttpHeaders.prototype.append = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        return this.clone({ name: name, value: value, op: 'a' });
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    HttpHeaders.prototype.set = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        return this.clone({ name: name, value: value, op: 's' });
    };
    /**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */
    HttpHeaders.prototype.delete = /**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */
    function (name, value) {
        return this.clone({ name: name, value: value, op: 'd' });
    };
    /**
     * @param {?} name
     * @param {?} lcName
     * @return {?}
     */
    HttpHeaders.prototype.maybeSetNormalizedName = /**
     * @param {?} name
     * @param {?} lcName
     * @return {?}
     */
    function (name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    };
    /**
     * @return {?}
     */
    HttpHeaders.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) { return _this.applyUpdate(update); });
                this.lazyUpdate = null;
            }
        }
    };
    /**
     * @param {?} other
     * @return {?}
     */
    HttpHeaders.prototype.copyFrom = /**
     * @param {?} other
     * @return {?}
     */
    function (other) {
        var _this = this;
        other.init();
        Array.from(other.headers.keys()).forEach(function (key) {
            _this.headers.set(key, /** @type {?} */ ((other.headers.get(key))));
            _this.normalizedNames.set(key, /** @type {?} */ ((other.normalizedNames.get(key))));
        });
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpHeaders.prototype.clone = /**
     * @param {?} update
     * @return {?}
     */
    function (update) {
        var /** @type {?} */ clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpHeaders.prototype.applyUpdate = /**
     * @param {?} update
     * @return {?}
     */
    function (update) {
        var /** @type {?} */ key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                var /** @type {?} */ value = /** @type {?} */ ((update.value));
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                var /** @type {?} */ base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, value);
                this.headers.set(key, base);
                break;
            case 'd':
                var /** @type {?} */ toDelete_1 = /** @type {?} */ (update.value);
                if (!toDelete_1) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    var /** @type {?} */ existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(function (value) { return toDelete_1.indexOf(value) === -1; });
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    HttpHeaders.prototype.forEach = /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var _this = this;
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(function (key) { return fn(/** @type {?} */ ((_this.normalizedNames.get(key))), /** @type {?} */ ((_this.headers.get(key)))); });
    };
    return HttpHeaders;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A codec for encoding and decoding parameters in URLs.
 *
 * Used by `HttpParams`.
 *
 * \@stable
 *
 * @record
 */

/**
 * A `HttpParameterCodec` that uses `encodeURIComponent` and `decodeURIComponent` to
 * serialize and parse URL parameter keys and values.
 *
 * \@stable
 */
var HttpUrlEncodingCodec = /** @class */ (function () {
    function HttpUrlEncodingCodec() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.encodeKey = /**
     * @param {?} k
     * @return {?}
     */
    function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.encodeValue = /**
     * @param {?} v
     * @return {?}
     */
    function (v) { return standardEncoding(v); };
    /**
     * @param {?} k
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.decodeKey = /**
     * @param {?} k
     * @return {?}
     */
    function (k) { return decodeURIComponent(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.decodeValue = /**
     * @param {?} v
     * @return {?}
     */
    function (v) { return decodeURIComponent(v); };
    return HttpUrlEncodingCodec;
}());
/**
 * @param {?} rawParams
 * @param {?} codec
 * @return {?}
 */
function paramParser(rawParams, codec) {
    var /** @type {?} */ map$$1 = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map$$1.get(key) || [];
            list.push(val);
            map$$1.set(key, list);
        });
    }
    return map$$1;
}
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Options used to construct an `HttpParams` instance.
 * @record
 */

/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable - all mutation operations return a new instance.
 *
 * \@stable
 */
var HttpParams = /** @class */ (function () {
    function HttpParams(options) {
        if (options === void 0) { options = /** @type {?} */ ({}); }
        var _this = this;
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error("Cannot specify both fromString and fromObject.");
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(function (key) {
                var /** @type {?} */ value = (/** @type {?} */ (options.fromObject))[key]; /** @type {?} */
                ((_this.map)).set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Check whether the body has one or more values for the given parameter name.
     */
    /**
     * Check whether the body has one or more values for the given parameter name.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.has = /**
     * Check whether the body has one or more values for the given parameter name.
     * @param {?} param
     * @return {?}
     */
    function (param) {
        this.init();
        return /** @type {?} */ ((this.map)).has(param);
    };
    /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     */
    /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.get = /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    function (param) {
        this.init();
        var /** @type {?} */ res = /** @type {?} */ ((this.map)).get(param);
        return !!res ? res[0] : null;
    };
    /**
     * Get all values for the given parameter name, or `null` if it's not present.
     */
    /**
     * Get all values for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.getAll = /**
     * Get all values for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    function (param) {
        this.init();
        return /** @type {?} */ ((this.map)).get(param) || null;
    };
    /**
     * Get all the parameter names for this body.
     */
    /**
     * Get all the parameter names for this body.
     * @return {?}
     */
    HttpParams.prototype.keys = /**
     * Get all the parameter names for this body.
     * @return {?}
     */
    function () {
        this.init();
        return Array.from(/** @type {?} */ ((this.map)).keys());
    };
    /**
     * Construct a new body with an appended value for the given parameter name.
     */
    /**
     * Construct a new body with an appended value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    HttpParams.prototype.append = /**
     * Construct a new body with an appended value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
    /**
     * Construct a new body with a new value for the given parameter name.
     */
    /**
     * Construct a new body with a new value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    HttpParams.prototype.set = /**
     * Construct a new body with a new value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
    /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     */
    /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     * @param {?} param
     * @param {?=} value
     * @return {?}
     */
    HttpParams.prototype.delete = /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     * @param {?} param
     * @param {?=} value
     * @return {?}
     */
    function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
    /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */
    HttpParams.prototype.toString = /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */
    function () {
        var _this = this;
        this.init();
        return this.keys()
            .map(function (key) {
            var /** @type {?} */ eKey = _this.encoder.encodeKey(key);
            return /** @type {?} */ ((/** @type {?} */ ((_this.map)).get(key))).map(function (value) { return eKey + '=' + _this.encoder.encodeValue(value); }).join('&');
        })
            .join('&');
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpParams.prototype.clone = /**
     * @param {?} update
     * @return {?}
     */
    function (update) {
        var /** @type {?} */ clone = new HttpParams(/** @type {?} */ ({ encoder: this.encoder }));
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    };
    /**
     * @return {?}
     */
    HttpParams.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function (key) { return ((_this.map)).set(key, /** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ ((_this.cloneFrom)).map)).get(key)))); }); /** @type {?} */
            ((this.updates)).forEach(function (update) {
                switch (update.op) {
                    case 'a':
                    case 's':
                        var /** @type {?} */ base = (update.op === 'a' ? /** @type {?} */ ((_this.map)).get(update.param) : undefined) || [];
                        base.push(/** @type {?} */ ((update.value))); /** @type {?} */
                        ((_this.map)).set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            var /** @type {?} */ base_1 = /** @type {?} */ ((_this.map)).get(update.param) || [];
                            var /** @type {?} */ idx = base_1.indexOf(update.value);
                            if (idx !== -1) {
                                base_1.splice(idx, 1);
                            }
                            if (base_1.length > 0) {
                                /** @type {?} */ ((_this.map)).set(update.param, base_1);
                            }
                            else {
                                /** @type {?} */ ((_this.map)).delete(update.param);
                            }
                        }
                        else {
                            /** @type {?} */ ((_this.map)).delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = null;
        }
    };
    return HttpParams;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 * @param {?} method
 * @return {?}
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 * @param {?} value
 * @return {?}
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 * @param {?} value
 * @return {?}
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 * @param {?} value
 * @return {?}
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * \@stable
 */
var HttpRequest = /** @class */ (function () {
    function HttpRequest(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        var /** @type {?} */ options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? /** @type {?} */ (third) : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = /** @type {?} */ (third);
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var /** @type {?} */ params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                var /** @type {?} */ qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                var /** @type {?} */ sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */
    HttpRequest.prototype.serializeBody = /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */
    function () {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return (/** @type {?} */ (this.body)).toString();
    };
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */
    HttpRequest.prototype.detectContentTypeHeader = /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */
    function () {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    };
    /**
     * @param {?=} update
     * @return {?}
     */
    HttpRequest.prototype.clone = /**
     * @param {?=} update
     * @return {?}
     */
    function (update) {
        if (update === void 0) { update = {}; }
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        var /** @type {?} */ method = update.method || this.method;
        var /** @type {?} */ url = update.url || this.url;
        var /** @type {?} */ responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        var /** @type {?} */ body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        var /** @type {?} */ withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        var /** @type {?} */ reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        var /** @type {?} */ headers = update.headers || this.headers;
        var /** @type {?} */ params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce(function (headers, name) { return headers.set(name, /** @type {?} */ ((update.setHeaders))[name]); }, headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce(function (params, param) { return params.set(param, /** @type {?} */ ((update.setParams))[param]); }, params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
        });
    };
    return HttpRequest;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
var HttpEventType = {
    /**
       * The request was sent out over the wire.
       */
    Sent: 0,
    /**
       * An upload progress event was received.
       */
    UploadProgress: 1,
    /**
       * The response status code and headers were received.
       */
    ResponseHeader: 2,
    /**
       * A download progress event was received.
       */
    DownloadProgress: 3,
    /**
       * The full response including the body was received.
       */
    Response: 4,
    /**
       * A custom event from an interceptor or a backend.
       */
    User: 5,
};
HttpEventType[HttpEventType.Sent] = "Sent";
HttpEventType[HttpEventType.UploadProgress] = "UploadProgress";
HttpEventType[HttpEventType.ResponseHeader] = "ResponseHeader";
HttpEventType[HttpEventType.DownloadProgress] = "DownloadProgress";
HttpEventType[HttpEventType.Response] = "Response";
HttpEventType[HttpEventType.User] = "User";
/**
 * Base interface for progress events.
 *
 * \@stable
 * @record
 */

/**
 * A download progress event.
 *
 * \@stable
 * @record
 */

/**
 * An upload progress event.
 *
 * \@stable
 * @record
 */

/**
 * An event indicating that the request was sent to the server. Useful
 * when a request may be retried multiple times, to distinguish between
 * retries on the final event stream.
 *
 * \@stable
 * @record
 */

/**
 * A user-defined event.
 *
 * Grouping all custom events under this type ensures they will be handled
 * and forwarded by all implementations of interceptors.
 *
 * \@stable
 * @record
 */

/**
 * An error that represents a failed attempt to JSON.parse text coming back
 * from the server.
 *
 * It bundles the Error object with the actual response body that failed to parse.
 *
 * \@stable
 * @record
 */

/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * \@stable
 * @abstract
 */
var HttpResponseBase = /** @class */ (function () {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
        if (defaultStatus === void 0) { defaultStatus = 200; }
        if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
    return HttpResponseBase;
}());
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * \@stable
 */
var HttpHeaderResponse = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["b" /* __extends */])(HttpHeaderResponse, _super);
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    function HttpHeaderResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.ResponseHeader;
        return _this;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */
    HttpHeaderResponse.prototype.clone = /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */
    function (update) {
        if (update === void 0) { update = {}; }
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpHeaderResponse;
}(HttpResponseBase));
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * \@stable
 */
var HttpResponse = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["b" /* __extends */])(HttpResponse, _super);
    /**
     * Construct a new `HttpResponse`.
     */
    function HttpResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.Response;
        _this.body = init.body !== undefined ? init.body : null;
        return _this;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    HttpResponse.prototype.clone = /**
     * @param {?=} update
     * @return {?}
     */
    function (update) {
        if (update === void 0) { update = {}; }
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpResponse;
}(HttpResponseBase));
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * \@stable
 */
var HttpErrorResponse = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["b" /* __extends */])(HttpErrorResponse, _super);
    function HttpErrorResponse(init) {
        var _this = 
        // Initialize with a default status of 0 / Unknown Error.
        _super.call(this, init, 0, 'Unknown Error') || this;
        _this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        _this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (_this.status >= 200 && _this.status < 300) {
            _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        }
        else {
            _this.message =
                "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }
        _this.error = init.error || null;
        return _this;
    }
    return HttpErrorResponse;
}(HttpResponseBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Construct an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. Basically, this clones the object and adds the body.
 * @template T
 * @param {?} options
 * @param {?} body
 * @return {?}
 */
function addBody(options, body) {
    return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Perform HTTP requests.
 *
 * `HttpClient` is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies according to which
 * signature is called (mainly the values of `observe` and `responseType`).
 *
 * \@stable
 */
var HttpClient = /** @class */ (function () {
    function HttpClient(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an `Observable` for a particular HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * This method can be called in one of two ways. Either an `HttpRequest`
     * instance can be passed directly as the only parameter, or a method can be
     * passed as the first parameter, a string URL as the second, and an
     * options hash as the third.
     *
     * If a `HttpRequest` object is passed directly, an `Observable` of the
     * raw `HttpEvent` stream will be returned.
     *
     * If a request is instead built by providing a URL, the options object
     * determines the return type of `request()`. In addition to configuring
     * request parameters such as the outgoing headers and/or the body, the options
     * hash specifies two key pieces of information about the request: the
     * `responseType` and what to `observe`.
     *
     * The `responseType` value determines how a successful response body will be
     * parsed. If `responseType` is the default `json`, a type interface for the
     * resulting object may be passed as a type parameter to `request()`.
     *
     * The `observe` value determines the return type of `request()`, based on what
     * the consumer is interested in observing. A value of `events` will return an
     * `Observable<HttpEvent>` representing the raw `HttpEvent` stream,
     * including progress events by default. A value of `response` will return an
     * `Observable<HttpResponse<T>>` where the `T` parameter of `HttpResponse`
     * depends on the `responseType` and any optionally provided type parameter.
     * A value of `body` will return an `Observable<T>` with the same `T` body type.
     */
    /**
     * Constructs an `Observable` for a particular HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * This method can be called in one of two ways. Either an `HttpRequest`
     * instance can be passed directly as the only parameter, or a method can be
     * passed as the first parameter, a string URL as the second, and an
     * options hash as the third.
     *
     * If a `HttpRequest` object is passed directly, an `Observable` of the
     * raw `HttpEvent` stream will be returned.
     *
     * If a request is instead built by providing a URL, the options object
     * determines the return type of `request()`. In addition to configuring
     * request parameters such as the outgoing headers and/or the body, the options
     * hash specifies two key pieces of information about the request: the
     * `responseType` and what to `observe`.
     *
     * The `responseType` value determines how a successful response body will be
     * parsed. If `responseType` is the default `json`, a type interface for the
     * resulting object may be passed as a type parameter to `request()`.
     *
     * The `observe` value determines the return type of `request()`, based on what
     * the consumer is interested in observing. A value of `events` will return an
     * `Observable<HttpEvent>` representing the raw `HttpEvent` stream,
     * including progress events by default. A value of `response` will return an
     * `Observable<HttpResponse<T>>` where the `T` parameter of `HttpResponse`
     * depends on the `responseType` and any optionally provided type parameter.
     * A value of `body` will return an `Observable<T>` with the same `T` body type.
     * @param {?} first
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.request = /**
     * Constructs an `Observable` for a particular HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * This method can be called in one of two ways. Either an `HttpRequest`
     * instance can be passed directly as the only parameter, or a method can be
     * passed as the first parameter, a string URL as the second, and an
     * options hash as the third.
     *
     * If a `HttpRequest` object is passed directly, an `Observable` of the
     * raw `HttpEvent` stream will be returned.
     *
     * If a request is instead built by providing a URL, the options object
     * determines the return type of `request()`. In addition to configuring
     * request parameters such as the outgoing headers and/or the body, the options
     * hash specifies two key pieces of information about the request: the
     * `responseType` and what to `observe`.
     *
     * The `responseType` value determines how a successful response body will be
     * parsed. If `responseType` is the default `json`, a type interface for the
     * resulting object may be passed as a type parameter to `request()`.
     *
     * The `observe` value determines the return type of `request()`, based on what
     * the consumer is interested in observing. A value of `events` will return an
     * `Observable<HttpEvent>` representing the raw `HttpEvent` stream,
     * including progress events by default. A value of `response` will return an
     * `Observable<HttpResponse<T>>` where the `T` parameter of `HttpResponse`
     * depends on the `responseType` and any optionally provided type parameter.
     * A value of `body` will return an `Observable<T>` with the same `T` body type.
     * @param {?} first
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    function (first, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var /** @type {?} */ req;
        // Firstly, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = /** @type {?} */ (first);
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming GET unless a method is
            // provided.
            // Figure out the headers.
            var /** @type {?} */ headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            var /** @type {?} */ params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams(/** @type {?} */ ({ fromObject: options.params }));
                }
            }
            // Construct the request.
            req = new HttpRequest(first, /** @type {?} */ ((url)), (options.body !== undefined ? options.body : null), {
                headers: headers,
                params: params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        var /** @type {?} */ events$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_concatMap__["concatMap"].call(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(req), function (req) { return _this.handler.handle(req); });
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        var /** @type {?} */ res$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__["filter"].call(events$, function (event) { return event instanceof HttpResponse; });
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        });
                    case 'blob':
                        return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        });
                    case 'text':
                        return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        });
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__["map"].call(res$, function (res) { return res.body; });
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
        }
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * DELETE request to be executed on the server. See the individual overloads for
     * details of `delete()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * DELETE request to be executed on the server. See the individual overloads for
     * details of `delete()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.delete = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * DELETE request to be executed on the server. See the individual overloads for
     * details of `delete()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * GET request to be executed on the server. See the individual overloads for
     * details of `get()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * GET request to be executed on the server. See the individual overloads for
     * details of `get()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.get = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * GET request to be executed on the server. See the individual overloads for
     * details of `get()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * HEAD request to be executed on the server. See the individual overloads for
     * details of `head()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * HEAD request to be executed on the server. See the individual overloads for
     * details of `head()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.head = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * HEAD request to be executed on the server. See the individual overloads for
     * details of `head()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('HEAD', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause a request
     * with the special method `JSONP` to be dispatched via the interceptor pipeline.
     *
     * A suitable interceptor must be installed (e.g. via the `HttpClientJsonpModule`).
     * If no such interceptor is reached, then the `JSONP` request will likely be
     * rejected by the configured backend.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause a request
     * with the special method `JSONP` to be dispatched via the interceptor pipeline.
     *
     * A suitable interceptor must be installed (e.g. via the `HttpClientJsonpModule`).
     * If no such interceptor is reached, then the `JSONP` request will likely be
     * rejected by the configured backend.
     * @template T
     * @param {?} url
     * @param {?} callbackParam
     * @return {?}
     */
    HttpClient.prototype.jsonp = /**
     * Constructs an `Observable` which, when subscribed, will cause a request
     * with the special method `JSONP` to be dispatched via the interceptor pipeline.
     *
     * A suitable interceptor must be installed (e.g. via the `HttpClientJsonpModule`).
     * If no such interceptor is reached, then the `JSONP` request will likely be
     * rejected by the configured backend.
     * @template T
     * @param {?} url
     * @param {?} callbackParam
     * @return {?}
     */
    function (url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * OPTIONS request to be executed on the server. See the individual overloads for
     * details of `options()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * OPTIONS request to be executed on the server. See the individual overloads for
     * details of `options()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.options = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * OPTIONS request to be executed on the server. See the individual overloads for
     * details of `options()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('OPTIONS', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * PATCH request to be executed on the server. See the individual overloads for
     * details of `patch()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * PATCH request to be executed on the server. See the individual overloads for
     * details of `patch()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.patch = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * PATCH request to be executed on the server. See the individual overloads for
     * details of `patch()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, addBody(options, body));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.post = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, addBody(options, body));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.put = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, addBody(options, body));
    };
    HttpClient.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    HttpClient.ctorParameters = function () { return [
        { type: HttpHandler, },
    ]; };
    return HttpClient;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Intercepts `HttpRequest` and handles them.
 *
 * Most interceptors will transform the outgoing request before passing it to the
 * next interceptor in the chain, by calling `next.handle(transformedReq)`.
 *
 * In rare cases, interceptors may wish to completely handle a request themselves,
 * and not delegate to the remainder of the chain. This behavior is allowed.
 *
 * \@stable
 * @record
 */

/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 * \@stable
 */
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    HttpInterceptorHandler.prototype.handle = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * A multi-provider token which represents the array of `HttpInterceptor`s that
 * are registered.
 *
 * \@stable
 */
var HTTP_INTERCEPTORS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('HTTP_INTERCEPTORS');
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    NoopInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        return next.handle(req);
    };
    NoopInterceptor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    NoopInterceptor.ctorParameters = function () { return []; };
    return NoopInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
var nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 * \@stable
 * @abstract
 */
var JsonpCallbackContext = /** @class */ (function () {
    function JsonpCallbackContext() {
    }
    return JsonpCallbackContext;
}());
/**
 * `HttpBackend` that only processes `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 *
 * \@stable
 */
var JsonpClientBackend = /** @class */ (function () {
    function JsonpClientBackend(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @return {?}
     */
    JsonpClientBackend.prototype.nextCallback = /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @return {?}
     */
    function () { return "ng_jsonp_callback_" + nextRequestId++; };
    /**
     * Process a JSONP request and return an event stream of the results.
     */
    /**
     * Process a JSONP request and return an event stream of the results.
     * @param {?} req
     * @return {?}
     */
    JsonpClientBackend.prototype.handle = /**
     * Process a JSONP request and return an event stream of the results.
     * @param {?} req
     * @return {?}
     */
    function (req) {
        var _this = this;
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            var /** @type {?} */ callback = _this.nextCallback();
            var /** @type {?} */ url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
            // Construct the <script> tag and point it at the URL.
            var /** @type {?} */ node = _this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            var /** @type {?} */ body = null;
            // Whether the response callback has been called.
            var /** @type {?} */ finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            var /** @type {?} */ cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            _this.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            var /** @type {?} */ cleanup = function () {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete _this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            var /** @type {?} */ onLoad = function (event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url: url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body: body,
                    status: 200,
                    statusText: 'OK', url: url,
                }));
                // Complete the stream, the resposne is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            var /** @type {?} */ onError = function (error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error: error,
                    status: 0,
                    statusText: 'JSONP Error', url: url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            _this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    };
    JsonpClientBackend.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    JsonpClientBackend.ctorParameters = function () { return [
        { type: JsonpCallbackContext, },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DOCUMENT */],] },] },
    ]; };
    return JsonpClientBackend;
}());
/**
 * An `HttpInterceptor` which identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * \@stable
 */
var JsonpInterceptor = /** @class */ (function () {
    function JsonpInterceptor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    JsonpInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(/** @type {?} */ (req));
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    };
    JsonpInterceptor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    JsonpInterceptor.ctorParameters = function () { return [
        { type: JsonpClientBackend, },
    ]; };
    return JsonpInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 * @param {?} xhr
 * @return {?}
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * \@stable
 * @abstract
 */
var XhrFactory = /** @class */ (function () {
    function XhrFactory() {
    }
    return XhrFactory;
}());
/**
 * A factory for \@{link HttpXhrBackend} that uses the `XMLHttpRequest` browser API.
 *
 * \@stable
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = /**
     * @return {?}
     */
    function () { return /** @type {?} */ ((new XMLHttpRequest())); };
    BrowserXhr.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = function () { return []; };
    return BrowserXhr;
}());
/**
 * An `HttpBackend` which uses the XMLHttpRequest API to send
 * requests to a backend server.
 *
 * \@stable
 */
var HttpXhrBackend = /** @class */ (function () {
    function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Process a request and return a stream of response events.
     */
    /**
     * Process a request and return a stream of response events.
     * @param {?} req
     * @return {?}
     */
    HttpXhrBackend.prototype.handle = /**
     * Process a request and return a stream of response events.
     * @param {?} req
     * @return {?}
     */
    function (req) {
        var _this = this;
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        }
        // Everything happens on Observable subscription.
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            var /** @type {?} */ xhr = _this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach(function (name, values) { return xhr.setRequestHeader(name, values.join(',')); });
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                var /** @type {?} */ detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                var /** @type {?} */ responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = /** @type {?} */ (((responseType !== 'json') ? responseType : 'text'));
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            var /** @type {?} */ reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            var /** @type {?} */ headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            var /** @type {?} */ partialFromXhr = function () {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                var /** @type {?} */ status = xhr.status === 1223 ? 204 : xhr.status;
                var /** @type {?} */ statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                var /** @type {?} */ headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                var /** @type {?} */ url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            var /** @type {?} */ onLoad = function () {
                // Read response state from the memoized partial data.
                var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                // The body will be read out if present.
                var /** @type {?} */ body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                var /** @type {?} */ ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    var /** @type {?} */ originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (/** @type {?} */ error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = /** @type {?} */ ({ error: error, text: body });
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            var /** @type {?} */ onError = function (error) {
                var /** @type {?} */ res = new HttpErrorResponse({
                    error: error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            var /** @type {?} */ sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            var /** @type {?} */ onDownProgress = function (event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                var /** @type {?} */ progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            var /** @type {?} */ onUpProgress = function (event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var /** @type {?} */ progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            };
        });
    };
    HttpXhrBackend.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    HttpXhrBackend.ctorParameters = function () { return [
        { type: XhrFactory, },
    ]; };
    return HttpXhrBackend;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSRF_COOKIE_NAME = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('XSRF_COOKIE_NAME');
var XSRF_HEADER_NAME = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * \@stable
 * @abstract
 */
var HttpXsrfTokenExtractor = /** @class */ (function () {
    function HttpXsrfTokenExtractor() {
    }
    return HttpXsrfTokenExtractor;
}());
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
var HttpXsrfCookieExtractor = /** @class */ (function () {
    function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */
        this.parseCount = 0;
    }
    /**
     * @return {?}
     */
    HttpXsrfCookieExtractor.prototype.getToken = /**
     * @return {?}
     */
    function () {
        if (this.platform === 'server') {
            return null;
        }
        var /** @type {?} */ cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(__WEBPACK_IMPORTED_MODULE_6__angular_common__["p" /* ɵparseCookieValue */])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    };
    HttpXsrfCookieExtractor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    HttpXsrfCookieExtractor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DOCUMENT */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [XSRF_COOKIE_NAME,] },] },
    ]; };
    return HttpXsrfCookieExtractor;
}());
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
var HttpXsrfInterceptor = /** @class */ (function () {
    function HttpXsrfInterceptor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    HttpXsrfInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var /** @type {?} */ lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        var /** @type {?} */ token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    };
    HttpXsrfInterceptor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    HttpXsrfInterceptor.ctorParameters = function () { return [
        { type: HttpXsrfTokenExtractor, },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [XSRF_HEADER_NAME,] },] },
    ]; };
    return HttpXsrfInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An `HttpHandler` that applies a bunch of `HttpInterceptor`s
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 */
var HttpInterceptingHandler = /** @class */ (function () {
    function HttpInterceptingHandler(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    HttpInterceptingHandler.prototype.handle = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        if (this.chain === null) {
            var /** @type {?} */ interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.backend);
        }
        return this.chain.handle(req);
    };
    HttpInterceptingHandler.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    HttpInterceptingHandler.ctorParameters = function () { return [
        { type: HttpBackend, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    ]; };
    return HttpInterceptingHandler;
}());
/**
 * Constructs an `HttpHandler` that applies a bunch of `HttpInterceptor`s
 * to a request before passing it to the given `HttpBackend`.
 *
 * Meant to be used as a factory function within `HttpClientModule`.
 *
 * \@stable
 * @param {?} backend
 * @param {?=} interceptors
 * @return {?}
 */
function interceptingHandler(backend, interceptors) {
    if (interceptors === void 0) { interceptors = []; }
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 * \@stable
 * @return {?}
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * `NgModule` which adds XSRF protection support to outgoing requests.
 *
 * Provided the server supports a cookie-based XSRF protection system, this
 * module can be used directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no such names are provided, the default is to use `X-XSRF-TOKEN` for
 * the header name and `XSRF-TOKEN` for the cookie name.
 *
 * \@stable
 */
var HttpClientXsrfModule = /** @class */ (function () {
    function HttpClientXsrfModule() {
    }
    /**
     * Disable the default XSRF protection.
     */
    /**
     * Disable the default XSRF protection.
     * @return {?}
     */
    HttpClientXsrfModule.disable = /**
     * Disable the default XSRF protection.
     * @return {?}
     */
    function () {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    };
    /**
     * Configure XSRF protection to use the given cookie name or header name,
     * or the default names (as described above) if not provided.
     */
    /**
     * Configure XSRF protection to use the given cookie name or header name,
     * or the default names (as described above) if not provided.
     * @param {?=} options
     * @return {?}
     */
    HttpClientXsrfModule.withOptions = /**
     * Configure XSRF protection to use the given cookie name or header name,
     * or the default names (as described above) if not provided.
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    };
    HttpClientXsrfModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        HttpXsrfInterceptor,
                        { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                        { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                        { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                        { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpClientXsrfModule.ctorParameters = function () { return []; };
    return HttpClientXsrfModule;
}());
/**
 * `NgModule` which provides the `HttpClient` and associated services.
 *
 * Interceptors can be added to the chain behind `HttpClient` by binding them
 * to the multiprovider for `HTTP_INTERCEPTORS`.
 *
 * \@stable
 */
var HttpClientModule = /** @class */ (function () {
    function HttpClientModule() {
    }
    HttpClientModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [
                        HttpClientXsrfModule.withOptions({
                            cookieName: 'XSRF-TOKEN',
                            headerName: 'X-XSRF-TOKEN',
                        }),
                    ],
                    providers: [
                        HttpClient,
                        { provide: HttpHandler, useClass: HttpInterceptingHandler },
                        HttpXhrBackend,
                        { provide: HttpBackend, useExisting: HttpXhrBackend },
                        BrowserXhr,
                        { provide: XhrFactory, useExisting: BrowserXhr },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpClientModule.ctorParameters = function () { return []; };
    return HttpClientModule;
}());
/**
 * `NgModule` which enables JSONP support in `HttpClient`.
 *
 * Without this module, Jsonp requests will reach the backend
 * with method JSONP, where they'll be rejected.
 *
 * \@stable
 */
var HttpClientJsonpModule = /** @class */ (function () {
    function HttpClientJsonpModule() {
    }
    HttpClientJsonpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        JsonpClientBackend,
                        { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                        { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpClientJsonpModule.ctorParameters = function () { return []; };
    return HttpClientJsonpModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const INCREMENT = 'INCREMENT';
/* harmony export (immutable) */ __webpack_exports__["b"] = INCREMENT;

const DECREMENT = 'DECREMENT';
/* harmony export (immutable) */ __webpack_exports__["a"] = DECREMENT;

const RESET = 'RESET';
/* harmony export (immutable) */ __webpack_exports__["c"] = RESET;

//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_user__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_communicate__ = __webpack_require__(17);



class Control2Control {
    constructor(communicateService) {
        this.communicateService = communicateService;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__entities_user__["a" /* User */];
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    clickHandler() {
        this.onClick.emit("privet");
        console.log(this.communicateService.test());
    }
    clickReactiveHandler() {
        this.communicateService.provideFilter(this.model);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Control2Control;

//# sourceMappingURL=control2.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class User {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = User;

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class NavbarComponent {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NavbarComponent;

//# sourceMappingURL=navbar.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class FooterComponent {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FooterComponent;

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = counter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(118);

function counter(state = 0, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* INCREMENT */]:
            return state + 1;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* DECREMENT */]:
            return state - 1;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* RESET */]:
            return 0;
        default:
            return state;
    }
}
//# sourceMappingURL=reducer.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);

class CommunicateService {
    constructor() {
        this.filterObserver = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.filterObservable = this.filterObserver.asObservable();
    }
    test() {
        return ' проверочка';
    }
    provideFilter(filter) {
        this.filterObserver.next(filter);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CommunicateService;

//# sourceMappingURL=communicate.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zone_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_ngfactory__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(20);



function start() {
    __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["i" /* platformBrowser */]().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_1__module_ngfactory__["a" /* BrowserAppModuleNgFactory */]);
}
document.addEventListener('DOMContentLoaded', start, false);


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserAppModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_default_default__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_master1_master1_ngfactory__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_index_index_ngfactory__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_page1_page1_ngfactory__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_page3_page3_ngfactory__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_master2_master2_ngfactory__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page2_page2_ngfactory__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__controls_control3_control3_ngfactory__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controls_control4_control4_ngfactory__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_default_default_ngfactory__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngrx_store__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_communicate__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_data__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_status__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__nguniversal_express_engine_src_tokens__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__nguniversal_express_engine_src_tokens___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__nguniversal_express_engine_src_tokens__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__layouts_master1_master1__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_index_index__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_page1_page1__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_page3_page3__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__layouts_master2_master2__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_page2_page2__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__controls_control3_control3__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__controls_control4_control4__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__controls_module__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_module__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__routes__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__redux_reducer__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__module__ = __webpack_require__(237);



































var BrowserAppModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__module__["a" /* BrowserAppModule */], [__WEBPACK_IMPORTED_MODULE_2__layouts_default_default__["a" /* DefaultLayout */]], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, [__WEBPACK_IMPORTED_MODULE_3__layouts_master1_master1_ngfactory__["a" /* Master1LayoutNgFactory */], __WEBPACK_IMPORTED_MODULE_4__pages_index_index_ngfactory__["a" /* IndexPageNgFactory */], __WEBPACK_IMPORTED_MODULE_5__pages_page1_page1_ngfactory__["a" /* Page1PageNgFactory */], __WEBPACK_IMPORTED_MODULE_6__pages_page3_page3_ngfactory__["a" /* Page3PageNgFactory */], __WEBPACK_IMPORTED_MODULE_7__layouts_master2_master2_ngfactory__["a" /* Master2LayoutNgFactory */], __WEBPACK_IMPORTED_MODULE_8__pages_page2_page2_ngfactory__["a" /* Page2PageNgFactory */], __WEBPACK_IMPORTED_MODULE_9__controls_control3_control3_ngfactory__["a" /* Control3ControlNgFactory */], __WEBPACK_IMPORTED_MODULE_10__controls_control4_control4_ngfactory__["a" /* Control4ControlNgFactory */], __WEBPACK_IMPORTED_MODULE_11__layouts_default_default_ngfactory__["a" /* DefaultLayoutNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵq"], [[3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["j" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], [2, __WEBPACK_IMPORTED_MODULE_12__angular_common__["o" /* ɵa */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵn"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵo"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["s" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Sanitizer"], null, [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["b" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["e" /* HAMMER_GESTURE_CONFIG */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["f" /* HammerGestureConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["c" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["j" /* ɵDomEventsPlugin */](p0_0, p0_1), new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["o" /* ɵKeyEventsPlugin */](p1_0), new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["m" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [__WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["e" /* HAMMER_GESTURE_CONFIG */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["d" /* EventManager */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["d" /* EventManager */], [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["c" /* EVENT_MANAGER_PLUGINS */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](135680, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["l" /* ɵDomSharedStylesHost */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["l" /* ɵDomSharedStylesHost */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["k" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["k" /* ɵDomRendererFactory2 */], [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["d" /* EventManager */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["l" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], null, [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["k" /* ɵDomRendererFactory2 */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["p" /* ɵSharedStylesHost */], null, [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["l" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Testability"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Testability"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["g" /* Meta */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["g" /* Meta */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["h" /* Title */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["h" /* Title */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["h" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["n" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"], __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["l" /* ɵf */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["o" /* ɵi */], __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["o" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_14__angular_common_http__["h" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["m" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_14__angular_common_http__["o" /* ɵi */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["k" /* ɵe */], __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["k" /* ɵe */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["i" /* XhrFactory */], null, [__WEBPACK_IMPORTED_MODULE_14__angular_common_http__["k" /* ɵe */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["g" /* HttpXhrBackend */], __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["g" /* HttpXhrBackend */], [__WEBPACK_IMPORTED_MODULE_14__angular_common_http__["i" /* XhrFactory */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpBackend */], null, [__WEBPACK_IMPORTED_MODULE_14__angular_common_http__["g" /* HttpXhrBackend */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["f" /* HttpHandler */], __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["j" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpBackend */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["c" /* HttpClient */], [__WEBPACK_IMPORTED_MODULE_14__angular_common_http__["f" /* HttpHandler */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["i" /* ɵi */], __WEBPACK_IMPORTED_MODULE_15__angular_forms__["i" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_16__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["x" /* ɵf */], [__WEBPACK_IMPORTED_MODULE_16__angular_router__["k" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_16__angular_router__["d" /* NoPreloading */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["d" /* NoPreloading */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_16__angular_router__["f" /* PreloadingStrategy */], null, [__WEBPACK_IMPORTED_MODULE_16__angular_router__["d" /* NoPreloading */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](135680, __WEBPACK_IMPORTED_MODULE_16__angular_router__["p" /* RouterPreloader */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["p" /* RouterPreloader */], [__WEBPACK_IMPORTED_MODULE_16__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_16__angular_router__["f" /* PreloadingStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_16__angular_router__["e" /* PreloadAllModules */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["e" /* PreloadAllModules */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_16__angular_router__["h" /* ROUTER_INITIALIZER */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["A" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_16__angular_router__["y" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_16__angular_router__["h" /* ROUTER_INITIALIZER */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](135680, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["j" /* State */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["j" /* State */], [__WEBPACK_IMPORTED_MODULE_17__ngrx_store__["a" /* ActionsSubject */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["h" /* ReducerObservable */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["i" /* ScannedActionsSubject */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["c" /* INITIAL_STATE */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["k" /* StateObservable */], null, [__WEBPACK_IMPORTED_MODULE_17__ngrx_store__["j" /* State */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["l" /* Store */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["l" /* Store */], [__WEBPACK_IMPORTED_MODULE_17__ngrx_store__["k" /* StateObservable */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["a" /* ActionsSubject */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["f" /* ReducerManager */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_18__services_communicate__["a" /* CommunicateService */], __WEBPACK_IMPORTED_MODULE_18__services_communicate__["a" /* CommunicateService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_19__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_19__providers_data__["a" /* DataProvider */], [[2, "serverUrl"], __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["c" /* HttpClient */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_20__services_status__["a" /* ServerResponseService */], __WEBPACK_IMPORTED_MODULE_20__services_status__["a" /* ServerResponseService */], [[2, __WEBPACK_IMPORTED_MODULE_21__nguniversal_express_engine_src_tokens__["RESPONSE"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["c" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["r" /* ɵa */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgProbeToken"], function () { return [__WEBPACK_IMPORTED_MODULE_16__angular_router__["t" /* ɵb */]()]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__angular_router__["y" /* ɵg */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["y" /* ɵg */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_ID"], "my-app-id", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](2048, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["q" /* ɵTRANSITION_ID */], null, [__WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_ID"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["v" /* ɵh */](p0_0), __WEBPACK_IMPORTED_MODULE_16__angular_router__["z" /* ɵh */](p1_0), __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["t" /* ɵf */](p2_0, p2_1, p2_2)]; }, [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgProbeToken"]], __WEBPACK_IMPORTED_MODULE_16__angular_router__["y" /* ɵg */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["q" /* ɵTRANSITION_ID */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"], [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](131584, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵConsole"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationModule"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationModule"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */], [[3, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["e" /* HttpClientXsrfModule */], __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["e" /* HttpClientXsrfModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["d" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["d" /* HttpClientModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["h" /* ɵba */], __WEBPACK_IMPORTED_MODULE_15__angular_forms__["h" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_15__angular_forms__["c" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_16__angular_router__["s" /* ɵa */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["v" /* ɵd */], [[3, __WEBPACK_IMPORTED_MODULE_16__angular_router__["k" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__angular_router__["r" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["c" /* DefaultUrlSerializer */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["b" /* ChildrenOutletContexts */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_16__angular_router__["g" /* ROUTER_CONFIGURATION */], {}, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_12__angular_common__["h" /* LocationStrategy */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["u" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["m" /* PlatformLocation */], [2, __WEBPACK_IMPORTED_MODULE_12__angular_common__["a" /* APP_BASE_HREF */]], __WEBPACK_IMPORTED_MODULE_16__angular_router__["g" /* ROUTER_CONFIGURATION */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_12__angular_common__["g" /* Location */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["g" /* Location */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["h" /* LocationStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["SystemJsNgModuleLoader"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], [2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["SystemJsNgModuleLoaderConfig"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_16__angular_router__["i" /* ROUTES */], function () { return [[{ path: "", component: __WEBPACK_IMPORTED_MODULE_22__layouts_master1_master1__["a" /* Master1Layout */], children: [{ path: "", component: __WEBPACK_IMPORTED_MODULE_23__pages_index_index__["a" /* IndexPage */] }, { path: "page1", component: __WEBPACK_IMPORTED_MODULE_24__pages_page1_page1__["a" /* Page1Page */] }, { path: "page3", component: __WEBPACK_IMPORTED_MODULE_25__pages_page3_page3__["a" /* Page3Page */] }] }, { path: "page2", component: __WEBPACK_IMPORTED_MODULE_26__layouts_master2_master2__["a" /* Master2Layout */], children: [{ path: "", component: __WEBPACK_IMPORTED_MODULE_27__pages_page2_page2__["a" /* Page2Page */], children: [{ path: "subpage3", component: __WEBPACK_IMPORTED_MODULE_28__controls_control3_control3__["a" /* Control3Control */] }, { path: "subpage4", component: __WEBPACK_IMPORTED_MODULE_29__controls_control4_control4__["a" /* Control4Control */] }] }] }]]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_16__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["w" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_16__angular_router__["r" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["g" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_16__angular_router__["i" /* ROUTES */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["g" /* ROUTER_CONFIGURATION */], [2, __WEBPACK_IMPORTED_MODULE_16__angular_router__["q" /* UrlHandlingStrategy */]], [2, __WEBPACK_IMPORTED_MODULE_16__angular_router__["j" /* RouteReuseStrategy */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__angular_router__["n" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_16__angular_router__["n" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_16__angular_router__["s" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_16__angular_router__["k" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_30__controls_module__["a" /* ControlsModule */], __WEBPACK_IMPORTED_MODULE_30__controls_module__["a" /* ControlsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_31__pages_module__["a" /* PagesModule */], __WEBPACK_IMPORTED_MODULE_31__pages_module__["a" /* PagesModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_32__routes__["a" /* RoutingModule */], __WEBPACK_IMPORTED_MODULE_32__routes__["a" /* RoutingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](131584, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["a" /* ActionsSubject */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["a" /* ActionsSubject */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](2048, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["g" /* ReducerManagerDispatcher */], null, [__WEBPACK_IMPORTED_MODULE_17__ngrx_store__["a" /* ActionsSubject */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["o" /* _INITIAL_STATE */], undefined, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["c" /* INITIAL_STATE */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["s" /* _initialStateFactory */], [__WEBPACK_IMPORTED_MODULE_17__ngrx_store__["o" /* _INITIAL_STATE */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["n" /* _INITIAL_REDUCERS */], { counter: __WEBPACK_IMPORTED_MODULE_33__redux_reducer__["a" /* counter */] }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](2048, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["q" /* _STORE_REDUCERS */], null, [__WEBPACK_IMPORTED_MODULE_17__ngrx_store__["n" /* _INITIAL_REDUCERS */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["b" /* INITIAL_REDUCERS */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["r" /* _createStoreReducers */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["n" /* _INITIAL_REDUCERS */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["q" /* _STORE_REDUCERS */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["p" /* _REDUCER_FACTORY */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["t" /* combineReducers */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["d" /* META_REDUCERS */], [], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["e" /* REDUCER_FACTORY */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["u" /* createReducerFactory */], [__WEBPACK_IMPORTED_MODULE_17__ngrx_store__["p" /* _REDUCER_FACTORY */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["d" /* META_REDUCERS */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](131584, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["f" /* ReducerManager */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["f" /* ReducerManager */], [__WEBPACK_IMPORTED_MODULE_17__ngrx_store__["g" /* ReducerManagerDispatcher */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["c" /* INITIAL_STATE */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["b" /* INITIAL_REDUCERS */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["e" /* REDUCER_FACTORY */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](2048, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["h" /* ReducerObservable */], null, [__WEBPACK_IMPORTED_MODULE_17__ngrx_store__["f" /* ReducerManager */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](131584, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["i" /* ScannedActionsSubject */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["i" /* ScannedActionsSubject */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["m" /* StoreRootModule */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["m" /* StoreRootModule */], [__WEBPACK_IMPORTED_MODULE_17__ngrx_store__["a" /* ActionsSubject */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["h" /* ReducerObservable */], __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["i" /* ScannedActionsSubject */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_34__module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_34__module__["a" /* AppModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__module__["a" /* BrowserAppModule */], __WEBPACK_IMPORTED_MODULE_1__module__["a" /* BrowserAppModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["l" /* ɵf */], "XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["m" /* ɵg */], "X-XSRF-TOKEN", [])]); });



/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class BrowserAppModule {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BrowserAppModule;

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_Master1Layout */
/* unused harmony export View_Master1Layout_0 */
/* unused harmony export View_Master1Layout_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Master1LayoutNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__master1__ = __webpack_require__(64);



var styles_Master1Layout = [];
var RenderType_Master1Layout = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_Master1Layout, data: {} });

function View_Master1Layout_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "h1", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u0448\u0430\u0431\u043B\u043E\u043D 1"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](3, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](5, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](6, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_router__["o" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 6, 0); }, null); }
function View_Master1Layout_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "master1", [], null, null, null, View_Master1Layout_0, RenderType_Master1Layout)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__master1__["a" /* Master1Layout */], [], null, null)], null, null); }
var Master1LayoutNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("master1", __WEBPACK_IMPORTED_MODULE_2__master1__["a" /* Master1Layout */], View_Master1Layout_Host_0, {}, {}, []);



/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_IndexPage */
/* unused harmony export View_IndexPage_0 */
/* unused harmony export View_IndexPage_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPageNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(30);



var styles_IndexPage = [];
var RenderType_IndexPage = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_IndexPage, data: {} });

function View_IndexPage_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 7, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u0413\u043B\u0430\u0432\u043D\u0430\u044F"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](5, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](6, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.test; _ck(_v, 6, 0, currVal_0); }); }
function View_IndexPage_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "index", [], null, null, null, View_IndexPage_0, RenderType_IndexPage)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_1__index__["a" /* IndexPage */], [__WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* DataProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var IndexPageNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("index", __WEBPACK_IMPORTED_MODULE_1__index__["a" /* IndexPage */], View_IndexPage_Host_0, {}, {}, []);



/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_Page1Page */
/* unused harmony export View_Page1Page_0 */
/* unused harmony export View_Page1Page_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1PageNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controls_control1_control1_ngfactory__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controls_control1_control1__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_communicate__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page1__ = __webpack_require__(67);





var styles_Page1Page = [];
var RenderType_Page1Page = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_Page1Page, data: {} });

function View_Page1Page_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵqud"](402653184, 1, { control1: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 16, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](3, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](5, 0, null, null, 10, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](7, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 1"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](10, 0, null, null, 1, "control1", [], null, null, null, __WEBPACK_IMPORTED_MODULE_1__controls_control1_control1_ngfactory__["b" /* View_Control1Control_0 */], __WEBPACK_IMPORTED_MODULE_1__controls_control1_control1_ngfactory__["a" /* RenderType_Control1Control */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](11, 49152, [[1, 4]], 0, __WEBPACK_IMPORTED_MODULE_2__controls_control1_control1__["a" /* Control1Control */], [__WEBPACK_IMPORTED_MODULE_3__services_communicate__["a" /* CommunicateService */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](13, 0, null, null, 1, "button", [["class", "btn btn-default"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickHandler() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u041D\u0430\u0436\u0430\u0442\u044C"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_Page1Page_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "page1", [], null, null, null, View_Page1Page_0, RenderType_Page1Page)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4__page1__["a" /* Page1Page */], [], null, null)], null, null); }
var Page1PageNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("page1", __WEBPACK_IMPORTED_MODULE_4__page1__["a" /* Page1Page */], View_Page1Page_Host_0, {}, {}, []);



/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_Control1Control; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_Control1Control_0;
/* unused harmony export View_Control1Control_Host_0 */
/* unused harmony export Control1ControlNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__control1__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_communicate__ = __webpack_require__(17);




var styles_Control1Control = [];
var RenderType_Control1Control = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_Control1Control, data: {} });

function View_Control1Control_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 8, "div", [["class", "ctrl1"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u041A\u043E\u043D\u0442\u0440\u043E\u043B 1"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](6, 0, null, null, 2, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](7, null, ["Clicked ", " times"])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 7, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 8).transform(_co.count$)); _ck(_v, 7, 0, currVal_0); }); }
function View_Control1Control_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "control1", [], null, null, null, View_Control1Control_0, RenderType_Control1Control)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__control1__["a" /* Control1Control */], [__WEBPACK_IMPORTED_MODULE_3__services_communicate__["a" /* CommunicateService */]], null, null)], null, null); }
var Control1ControlNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("control1", __WEBPACK_IMPORTED_MODULE_2__control1__["a" /* Control1Control */], View_Control1Control_Host_0, { logger: "logger" }, {}, []);



/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_Page3Page */
/* unused harmony export View_Page3Page_0 */
/* unused harmony export View_Page3Page_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page3PageNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page3__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(69);




var styles_Page3Page = [];
var RenderType_Page3Page = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_Page3Page, data: {} });

function View_Page3Page_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 23, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](3, 0, null, null, 20, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](5, 0, null, null, 1, "h2", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 3"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](8, 0, null, null, 14, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](10, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.increment() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Increment"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](13, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](14, null, ["Current Count: ", ""])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](17, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.decrement() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Decrement"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](20, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.reset() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Reset Counter"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 14, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 15).transform(_co.counter)); _ck(_v, 14, 0, currVal_0); }); }
function View_Page3Page_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "page3", [], null, null, null, View_Page3Page_0, RenderType_Page3Page)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__page3__["a" /* Page3Page */], [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["l" /* Store */]], null, null)], null, null); }
var Page3PageNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("page3", __WEBPACK_IMPORTED_MODULE_2__page3__["a" /* Page3Page */], View_Page3Page_Host_0, {}, {}, []);



/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_Master2Layout */
/* unused harmony export View_Master2Layout_0 */
/* unused harmony export View_Master2Layout_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Master2LayoutNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__master2__ = __webpack_require__(72);



var styles_Master2Layout = [];
var RenderType_Master2Layout = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_Master2Layout, data: {} });

function View_Master2Layout_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "h1", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u0448\u0430\u0431\u043B\u043E\u043D 2"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](3, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](5, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](6, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_router__["o" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 6, 0); }, null); }
function View_Master2Layout_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "master2", [], null, null, null, View_Master2Layout_0, RenderType_Master2Layout)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__master2__["a" /* Master2Layout */], [], null, null)], null, null); }
var Master2LayoutNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("master2", __WEBPACK_IMPORTED_MODULE_2__master2__["a" /* Master2Layout */], View_Master2Layout_Host_0, {}, {}, []);



/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_Page2Page */
/* unused harmony export View_Page2Page_0 */
/* unused harmony export View_Page2Page_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2PageNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controls_control2_control2_ngfactory__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controls_control2_control2__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_communicate__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page2__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data__ = __webpack_require__(30);








var styles_Page2Page = [];
var RenderType_Page2Page = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_Page2Page, data: {} });

function View_Page2Page_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 35, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 32, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](4, 0, null, null, 29, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](6, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 2"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](9, 0, null, null, 1, "control2", [], null, [[null, "onClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onClick" === en)) {
        var pd_0 = (_co.testik($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__controls_control2_control2_ngfactory__["b" /* View_Control2Control_0 */], __WEBPACK_IMPORTED_MODULE_1__controls_control2_control2_ngfactory__["a" /* RenderType_Control2Control */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](10, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__controls_control2_control2__["a" /* Control2Control */], [__WEBPACK_IMPORTED_MODULE_3__services_communicate__["a" /* CommunicateService */]], null, { onClick: "onClick" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](12, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u041F\u043E\u043B\u0443\u0447\u0438\u043B \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0438\u0441: "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](14, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](15, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](17, 0, null, null, 5, "a", [["routerLink", "./subpage3"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 18).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](18, 671744, [[2, 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](19, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* RouterLinkActive */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵqud"](603979776, 1, { links: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u043F\u043E\u0434\u043F\u0435\u0439\u0434\u0436 3"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](24, 0, null, null, 5, "a", [["routerLink", "./subpage4"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 25).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](25, 671744, [[4, 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](26, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* RouterLinkActive */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵqud"](603979776, 3, { links: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u043F\u043E\u0434\u043F\u0435\u0439\u0434\u0436 4"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](31, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](32, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["o" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_3 = "./subpage3"; _ck(_v, 18, 0, currVal_3); var currVal_4 = "active"; _ck(_v, 19, 0, currVal_4); var currVal_7 = "./subpage4"; _ck(_v, 25, 0, currVal_7); var currVal_8 = "active"; _ck(_v, 26, 0, currVal_8); _ck(_v, 32, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.model.name; _ck(_v, 15, 0, currVal_0); var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 18).target; var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 18).href; _ck(_v, 17, 0, currVal_1, currVal_2); var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 25).target; var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 25).href; _ck(_v, 24, 0, currVal_5, currVal_6); }); }
function View_Page2Page_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "page2", [], null, null, null, View_Page2Page_0, RenderType_Page2Page)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_6__page2__["a" /* Page2Page */], [__WEBPACK_IMPORTED_MODULE_3__services_communicate__["a" /* CommunicateService */], __WEBPACK_IMPORTED_MODULE_7__providers_data__["a" /* DataProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var Page2PageNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("page2", __WEBPACK_IMPORTED_MODULE_6__page2__["a" /* Page2Page */], View_Page2Page_Host_0, {}, {}, []);



/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_Control2Control; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_Control2Control_0;
/* unused harmony export View_Control2Control_Host_0 */
/* unused harmony export Control2ControlNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__control2__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_communicate__ = __webpack_require__(17);




var styles_Control2Control = [];
var RenderType_Control2Control = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_Control2Control, data: {} });

function View_Control2Control_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 20, "div", [["class", "ctrl2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u041A\u043E\u043D\u0442\u0440\u043E\u043B 2"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](5, 0, null, null, 14, "div", [["class", "form-inline"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](7, 0, null, null, 1, "button", [["class", "btn btn-default"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickHandler() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u0415\u0432\u0435\u043D\u0442"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](10, 0, null, null, 5, "input", [["class", "form-control"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 11).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 11)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.name = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](13, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](15, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](17, 0, null, null, 1, "button", [["class", "btn btn-default"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clickReactiveHandler() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\u0420\u0435\u0430\u043A\u0442\u0438\u0432"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.model.name; _ck(_v, 13, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 15).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 15).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 15).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 15).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 15).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 15).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 10, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_Control2Control_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "control2", [], null, null, null, View_Control2Control_0, RenderType_Control2Control)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__control2__["a" /* Control2Control */], [__WEBPACK_IMPORTED_MODULE_3__services_communicate__["a" /* CommunicateService */]], null, null)], null, null); }
var Control2ControlNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("control2", __WEBPACK_IMPORTED_MODULE_2__control2__["a" /* Control2Control */], View_Control2Control_Host_0, {}, { onClick: "onClick" }, []);



/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_Control3Control */
/* unused harmony export View_Control3Control_0 */
/* unused harmony export View_Control3Control_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Control3ControlNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control3__ = __webpack_require__(75);


var styles_Control3Control = [];
var RenderType_Control3Control = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_Control3Control, data: {} });

function View_Control3Control_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [["class", "sub3"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    \u041F\u043E\u0434\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 3\n"]))], null, null); }
function View_Control3Control_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "control3", [], null, null, null, View_Control3Control_0, RenderType_Control3Control)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_1__control3__["a" /* Control3Control */], [], null, null)], null, null); }
var Control3ControlNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("control3", __WEBPACK_IMPORTED_MODULE_1__control3__["a" /* Control3Control */], View_Control3Control_Host_0, {}, {}, []);



/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_Control4Control */
/* unused harmony export View_Control4Control_0 */
/* unused harmony export View_Control4Control_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Control4ControlNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control4__ = __webpack_require__(76);


var styles_Control4Control = [];
var RenderType_Control4Control = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_Control4Control, data: {} });

function View_Control4Control_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [["class", "sub4"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    \u041F\u043E\u0434\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 4\n"]))], null, null); }
function View_Control4Control_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "control4", [], null, null, null, View_Control4Control_0, RenderType_Control4Control)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_1__control4__["a" /* Control4Control */], [], null, null)], null, null); }
var Control4ControlNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("control4", __WEBPACK_IMPORTED_MODULE_1__control4__["a" /* Control4Control */], View_Control4Control_Host_0, {}, {}, []);



/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_DefaultLayout */
/* unused harmony export View_DefaultLayout_0 */
/* unused harmony export View_DefaultLayout_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultLayoutNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controls_navbar_navbar_ngfactory__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controls_navbar_navbar__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controls_footer_footer_ngfactory__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controls_footer_footer__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__default__ = __webpack_require__(95);







var styles_DefaultLayout = [];
var RenderType_DefaultLayout = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_DefaultLayout, data: {} });

function View_DefaultLayout_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 10, "div", [["class", "wrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](3, 0, null, null, 1, "navbar", [["class", "sidebar"]], null, null, null, __WEBPACK_IMPORTED_MODULE_1__controls_navbar_navbar_ngfactory__["b" /* View_NavbarComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__controls_navbar_navbar_ngfactory__["a" /* RenderType_NavbarComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](4, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__controls_navbar_navbar__["a" /* NavbarComponent */], [], { navs: [0, "navs"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            \n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](6, 0, null, null, 4, "div", [["class", "content container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](8, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](9, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_router__["o" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](13, 0, null, null, 1, "footer", [["class", "footer"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__controls_footer_footer_ngfactory__["b" /* View_FooterComponent_0 */], __WEBPACK_IMPORTED_MODULE_4__controls_footer_footer_ngfactory__["a" /* RenderType_FooterComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](14, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__controls_footer_footer__["a" /* FooterComponent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.navs; _ck(_v, 4, 0, currVal_0); _ck(_v, 9, 0); }, null); }
function View_DefaultLayout_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "application", [], null, null, null, View_DefaultLayout_0, RenderType_DefaultLayout)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_6__default__["a" /* DefaultLayout */], [], null, null)], null, null); }
var DefaultLayoutNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("application", __WEBPACK_IMPORTED_MODULE_6__default__["a" /* DefaultLayout */], View_DefaultLayout_Host_0, {}, {}, []);



/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_NavbarComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_NavbarComponent_0;
/* unused harmony export View_NavbarComponent_Host_0 */
/* unused harmony export NavbarComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar__ = __webpack_require__(122);




var styles_NavbarComponent = [];
var RenderType_NavbarComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_NavbarComponent, data: {} });

function View_NavbarComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 8, "li", [["class", "nav-item"], ["routerLinkActive", "active"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_1__angular_router__["l" /* RouterLinkActive */], [__WEBPACK_IMPORTED_MODULE_1__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵqud"](603979776, 1, { links: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](5, 0, null, null, 2, "a", [["class", "nav-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](6, 671744, [[2, 4]], 0, __WEBPACK_IMPORTED_MODULE_1__angular_router__["m" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_1__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](7, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = "{exact: true}"; var currVal_1 = "active"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵinlineInterpolate"](1, "", _v.context.$implicit.path, ""); _ck(_v, 6, 0, currVal_4); }, function (_ck, _v) { var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 6).target; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 6).href; _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_5 = _v.context.$implicit.name; _ck(_v, 7, 0, currVal_5); }); }
function View_NavbarComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 11, "div", [["class", "navbar navbar-dark bg-dark"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](2, 0, null, null, 2, "a", [["class", "navbar-brand"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](3, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_router__["m" /* RouterLinkWithHref */], [__WEBPACK_IMPORTED_MODULE_1__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* LocationStrategy */]], { routerLink: [0, "routerLink"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["Boilerplate"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](6, 0, null, null, 4, "ul", [["class", "navbar-nav navbar-expand-sm mr-auto"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 1, null, View_NavbarComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](9, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/"; _ck(_v, 3, 0, currVal_2); var currVal_3 = _co.navs; _ck(_v, 9, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 3).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_NavbarComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "navbar", [], null, null, null, View_NavbarComponent_0, RenderType_NavbarComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__navbar__["a" /* NavbarComponent */], [], null, null)], null, null); }
var NavbarComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("navbar", __WEBPACK_IMPORTED_MODULE_3__navbar__["a" /* NavbarComponent */], View_NavbarComponent_Host_0, { navs: "navs" }, {}, []);



/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_FooterComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_FooterComponent_0;
/* unused harmony export View_FooterComponent_Host_0 */
/* unused harmony export FooterComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer__ = __webpack_require__(123);


var styles_FooterComponent = [];
var RenderType_FooterComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    \u0444\u0443\u0443\u0442\u0435\u0440\n"]))], null, null); }
function View_FooterComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_1__footer__["a" /* FooterComponent */], [], null, null)], null, null); }
var FooterComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("footer", __WEBPACK_IMPORTED_MODULE_1__footer__["a" /* FooterComponent */], View_FooterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ServerResponseService {
    constructor(response) {
        this.response = response;
    }
    setStatus(code, message) {
        if (this.response) {
            this.response.statusCode = code;
            if (message)
                this.response.statusMessage = message;
        }
    }
    setNotFound(message = 'not found') {
        if (this.response) {
            this.response.statusCode = 404;
            this.response.statusMessage = message;
        }
    }
    setUnauthorized(message = 'Unauthorized') {
        if (this.response) {
            this.response.statusCode = 401;
            this.response.statusMessage = message;
        }
    }
    setError(message = 'internal server error') {
        if (this.response) {
            this.response.statusCode = 500;
            this.response.statusMessage = message;
        }
    }
    setRedirect(url) {
        if (this.response) {
            this.response.statusCode = 301;
            this.response.location(url);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ServerResponseService;

//# sourceMappingURL=status.js.map

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(4);
exports.REQUEST = new core_1.InjectionToken('REQUEST');
exports.RESPONSE = new core_1.InjectionToken('RESPONSE');
//# sourceMappingURL=tokens.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ControlsModule {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ControlsModule;

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PagesModule {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PagesModule;

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_page1_page1__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_page2_page2__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_index_index__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_master1_master1__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_master2_master2__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controls_control3_control3__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controls_control4_control4__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_page3_page3__ = __webpack_require__(68);








const routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__layouts_master1_master1__["a" /* Master1Layout */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_index_index__["a" /* IndexPage */] },
            { path: 'page1', component: __WEBPACK_IMPORTED_MODULE_0__pages_page1_page1__["a" /* Page1Page */] },
            { path: 'page3', component: __WEBPACK_IMPORTED_MODULE_7__pages_page3_page3__["a" /* Page3Page */] }
        ]
    },
    {
        path: 'page2', component: __WEBPACK_IMPORTED_MODULE_4__layouts_master2_master2__["a" /* Master2Layout */], children: [
            {
                path: '', component: __WEBPACK_IMPORTED_MODULE_1__pages_page2_page2__["a" /* Page2Page */], children: [
                    { path: 'subpage3', component: __WEBPACK_IMPORTED_MODULE_5__controls_control3_control3__["a" /* Control3Control */] },
                    { path: 'subpage4', component: __WEBPACK_IMPORTED_MODULE_6__controls_control4_control4__["a" /* Control4Control */] },
                ]
            },
        ]
    }
];
class RoutingModule {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoutingModule;

//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__redux_reducer__ = __webpack_require__(124);

class AppModule {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppModule;

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(110);

class DataProvider {
    constructor(serverUrl, http) {
        this.serverUrl = serverUrl;
        this.http = http;
        console.log(`получено с сервера "${serverUrl}"`);
    }
    test() {
        return this.http.post('/api/test', {});
    }
    config() {
        return this.http.get('/api/config');
    }
    random() {
        return this.http.post('/api/random', {});
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DataProvider;

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Master1Layout {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Master1Layout;

//# sourceMappingURL=master1.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_providers_data__ = __webpack_require__(30);

class IndexPage {
    constructor(dataProvider) {
        this.dataProvider = dataProvider;
    }
    ngOnInit() {
        this.dataProvider.test().subscribe(resp => {
            this.test = resp.test;
        }, (err) => {
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log(JSON.stringify(err));
                console.log("Server-side error occured.");
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IndexPage;

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_communicate__ = __webpack_require__(17);

class Control1Control {
    constructor(communicateService) {
        this.communicateService = communicateService;
    }
    onClick() {
    }
    logger() {
        console.log("контрол 1 написал");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Control1Control;

//# sourceMappingURL=control1.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controls_control1_control1__ = __webpack_require__(66);

class Page1Page {
    clickHandler() {
        console.log('нажали 1');
        this.control1.logger();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Page1Page;

//# sourceMappingURL=page1.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_actions__ = __webpack_require__(118);


class Page3Page {
    constructor(store) {
        this.store = store;
        this.counter = store.pipe(Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["v" /* select */])('counter'));
    }
    increment() {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__redux_actions__["b" /* INCREMENT */] });
    }
    decrement() {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__redux_actions__["a" /* DECREMENT */] });
    }
    reset() {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__redux_actions__["c" /* RESET */] });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Page3Page;

//# sourceMappingURL=page3.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return combineReducers; });
/* unused harmony export compose */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return createReducerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsSubject; });
/* unused harmony export INIT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ReducerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ReducerObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ReducerManagerDispatcher; });
/* unused harmony export UPDATE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ScannedActionsSubject; });
/* unused harmony export createSelector */
/* unused harmony export createSelectorFactory */
/* unused harmony export createFeatureSelector */
/* unused harmony export defaultMemoize */
/* unused harmony export defaultStateFn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return StateObservable; });
/* unused harmony export reduceState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _REDUCER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REDUCER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _INITIAL_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INITIAL_REDUCERS; });
/* unused harmony export STORE_FEATURES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return META_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _STORE_REDUCERS; });
/* unused harmony export _FEATURE_REDUCERS */
/* unused harmony export FEATURE_REDUCERS */
/* unused harmony export _FEATURE_REDUCERS_TOKEN */
/* unused harmony export StoreModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return StoreRootModule; });
/* unused harmony export StoreFeatureModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _initialStateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _createStoreReducers; });
/* unused harmony export _createFeatureReducers */
/* unused harmony export ɵc */
/* unused harmony export ɵd */
/* unused harmony export ɵe */
/* unused harmony export ɵf */
/* unused harmony export ɵb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_pluck__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_distinctUntilChanged__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_scheduler_queue__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_scheduler_queue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_scheduler_queue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_observeOn__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_observeOn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_observeOn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_withLatestFrom__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_scan__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var INIT = ('@ngrx/store/init');
var ActionsSubject = (function (_super) {
    __extends(ActionsSubject, _super);
    function ActionsSubject() {
        return _super.call(this, { type: INIT }) || this;
    }
    /**
     * @param {?} action
     * @return {?}
     */
    ActionsSubject.prototype.next = function (action) {
        if (typeof action === 'undefined') {
            throw new TypeError("Actions must be objects");
        }
        else if (typeof action.type === 'undefined') {
            throw new TypeError("Actions must have a type property");
        }
        _super.prototype.next.call(this, action);
    };
    /**
     * @return {?}
     */
    ActionsSubject.prototype.complete = function () {
        /* noop */
    };
    /**
     * @return {?}
     */
    ActionsSubject.prototype.ngOnDestroy = function () {
        _super.prototype.complete.call(this);
    };
    return ActionsSubject;
}(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]));
ActionsSubject.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ActionsSubject.ctorParameters = function () { return []; };
var ACTIONS_SUBJECT_PROVIDERS = [ActionsSubject];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var _INITIAL_STATE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('@ngrx/store Internal Initial State');
var INITIAL_STATE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('@ngrx/store Initial State');
var REDUCER_FACTORY = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('@ngrx/store Reducer Factory');
var _REDUCER_FACTORY = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('@ngrx/store Reducer Factory Provider');
var INITIAL_REDUCERS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('@ngrx/store Initial Reducers');
var _INITIAL_REDUCERS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('@ngrx/store Internal Initial Reducers');
var META_REDUCERS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('@ngrx/store Meta Reducers');
var STORE_FEATURES = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('@ngrx/store Store Features');
var _STORE_REDUCERS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('@ngrx/store Internal Store Reducers');
var _FEATURE_REDUCERS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('@ngrx/store Internal Feature Reducers');
var _FEATURE_REDUCERS_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('@ngrx/store Internal Feature Reducers Token');
var FEATURE_REDUCERS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('@ngrx/store Feature Reducers');
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} reducers
 * @param {?=} initialState
 * @return {?}
 */
function combineReducers(reducers, initialState) {
    if (initialState === void 0) { initialState = {}; }
    var /** @type {?} */ reducerKeys = Object.keys(reducers);
    var /** @type {?} */ finalReducers = {};
    for (var /** @type {?} */ i = 0; i < reducerKeys.length; i++) {
        var /** @type {?} */ key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    var /** @type {?} */ finalReducerKeys = Object.keys(finalReducers);
    return function combination(state, action) {
        state = state || initialState;
        var /** @type {?} */ hasChanged = false;
        var /** @type {?} */ nextState = {};
        for (var /** @type {?} */ i = 0; i < finalReducerKeys.length; i++) {
            var /** @type {?} */ key = finalReducerKeys[i];
            var /** @type {?} */ reducer = finalReducers[key];
            var /** @type {?} */ previousStateForKey = state[key];
            var /** @type {?} */ nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}
/**
 * @template T
 * @param {?} object
 * @param {?} keyToRemove
 * @return {?}
 */
function omit(object, keyToRemove) {
    return Object.keys(object)
        .filter(function (key) { return key !== keyToRemove; })
        .reduce(function (result, key) {
        return Object.assign(result, (_a = {}, _a[key] = object[key], _a));
        var _a;
    }, {});
}
/**
 * @param {...?} functions
 * @return {?}
 */
function compose() {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return function (arg) {
        if (functions.length === 0) {
            return arg;
        }
        var /** @type {?} */ last = functions[functions.length - 1];
        var /** @type {?} */ rest = functions.slice(0, -1);
        return rest.reduceRight(function (composed, fn) { return fn(composed); }, last(arg));
    };
}
/**
 * @template T, V
 * @param {?} reducerFactory
 * @param {?=} metaReducers
 * @return {?}
 */
function createReducerFactory(reducerFactory, metaReducers) {
    if (Array.isArray(metaReducers) && metaReducers.length > 0) {
        return compose.apply(null, metaReducers.concat([reducerFactory]));
    }
    return reducerFactory;
}
/**
 * @template T, V
 * @param {?} reducer
 * @param {?=} metaReducers
 * @return {?}
 */
function createFeatureReducer(reducer, metaReducers) {
    if (Array.isArray(metaReducers) && metaReducers.length > 0) {
        return compose.apply(void 0, metaReducers)(reducer);
    }
    return reducer;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var ReducerObservable = (function (_super) {
    __extends(ReducerObservable, _super);
    function ReducerObservable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReducerObservable;
}(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]));
/**
 * @abstract
 */
var ReducerManagerDispatcher = (function (_super) {
    __extends(ReducerManagerDispatcher, _super);
    function ReducerManagerDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReducerManagerDispatcher;
}(ActionsSubject));
var UPDATE = ('@ngrx/store/update-reducers');
var ReducerManager = (function (_super) {
    __extends(ReducerManager, _super);
    /**
     * @param {?} dispatcher
     * @param {?} initialState
     * @param {?} reducers
     * @param {?} reducerFactory
     */
    function ReducerManager(dispatcher, initialState, reducers, reducerFactory) {
        var _this = _super.call(this, reducerFactory(reducers, initialState)) || this;
        _this.dispatcher = dispatcher;
        _this.initialState = initialState;
        _this.reducers = reducers;
        _this.reducerFactory = reducerFactory;
        return _this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ReducerManager.prototype.addFeature = function (_a) {
        var reducers = _a.reducers, reducerFactory = _a.reducerFactory, metaReducers = _a.metaReducers, initialState = _a.initialState, key = _a.key;
        var /** @type {?} */ reducer = typeof reducers === 'function'
            ? function (state, action) { return createFeatureReducer(reducers, metaReducers)(state || initialState, action); }
            : createReducerFactory(reducerFactory, metaReducers)(reducers, initialState);
        this.addReducer(key, reducer);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ReducerManager.prototype.removeFeature = function (_a) {
        var key = _a.key;
        this.removeReducer(key);
    };
    /**
     * @param {?} key
     * @param {?} reducer
     * @return {?}
     */
    ReducerManager.prototype.addReducer = function (key, reducer) {
        this.reducers = Object.assign({}, this.reducers, (_a = {}, _a[key] = reducer, _a));
        this.updateReducers();
        var _a;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ReducerManager.prototype.removeReducer = function (key) {
        this.reducers = omit(this.reducers, key);
        this.updateReducers();
    };
    /**
     * @return {?}
     */
    ReducerManager.prototype.updateReducers = function () {
        this.next(this.reducerFactory(this.reducers, this.initialState));
        this.dispatcher.next({ type: UPDATE });
    };
    /**
     * @return {?}
     */
    ReducerManager.prototype.ngOnDestroy = function () {
        this.complete();
    };
    return ReducerManager;
}(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]));
ReducerManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ReducerManager.ctorParameters = function () { return [
    { type: ReducerManagerDispatcher, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [INITIAL_STATE,] },] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [INITIAL_REDUCERS,] },] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [REDUCER_FACTORY,] },] },
]; };
var REDUCER_MANAGER_PROVIDERS = [
    ReducerManager,
    { provide: ReducerObservable, useExisting: ReducerManager },
    { provide: ReducerManagerDispatcher, useExisting: ActionsSubject },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ScannedActionsSubject = (function (_super) {
    __extends(ScannedActionsSubject, _super);
    function ScannedActionsSubject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    ScannedActionsSubject.prototype.ngOnDestroy = function () {
        this.complete();
    };
    return ScannedActionsSubject;
}(__WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__["Subject"]));
ScannedActionsSubject.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ScannedActionsSubject.ctorParameters = function () { return []; };
var SCANNED_ACTIONS_SUBJECT_PROVIDERS = [
    ScannedActionsSubject,
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var StateObservable = (function (_super) {
    __extends(StateObservable, _super);
    function StateObservable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StateObservable;
}(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]));
var State = (function (_super) {
    __extends(State, _super);
    /**
     * @param {?} actions$
     * @param {?} reducer$
     * @param {?} scannedActions
     * @param {?} initialState
     */
    function State(actions$, reducer$, scannedActions, initialState) {
        var _this = _super.call(this, initialState) || this;
        var /** @type {?} */ actionsOnQueue$ = __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_observeOn__["observeOn"].call(actions$, __WEBPACK_IMPORTED_MODULE_6_rxjs_scheduler_queue__["queue"]);
        var /** @type {?} */ withLatestReducer$ = __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_withLatestFrom__["withLatestFrom"].call(actionsOnQueue$, reducer$);
        var /** @type {?} */ stateAndAction$ = __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_scan__["scan"].call(withLatestReducer$, reduceState, { state: initialState });
        _this.stateSubscription = stateAndAction$.subscribe(function (_a) {
            var state = _a.state, action = _a.action;
            _this.next(state);
            scannedActions.next(action);
        });
        return _this;
    }
    /**
     * @return {?}
     */
    State.prototype.ngOnDestroy = function () {
        this.stateSubscription.unsubscribe();
        this.complete();
    };
    return State;
}(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]));
State.INIT = INIT;
State.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
State.ctorParameters = function () { return [
    { type: ActionsSubject, },
    { type: ReducerObservable, },
    { type: ScannedActionsSubject, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [INITIAL_STATE,] },] },
]; };
/**
 * @template T, V
 * @param {?=} stateActionPair
 * @param {?=} __1
 * @return {?}
 */
function reduceState(stateActionPair, _a) {
    if (stateActionPair === void 0) { stateActionPair = { state: undefined }; }
    var action = _a[0], reducer = _a[1];
    var state = stateActionPair.state;
    return { state: reducer(state, action), action: action };
}
var STATE_PROVIDERS = [
    State,
    { provide: StateObservable, useExisting: State },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Store = (function (_super) {
    __extends(Store, _super);
    /**
     * @param {?} state$
     * @param {?} actionsObserver
     * @param {?} reducerManager
     */
    function Store(state$, actionsObserver, reducerManager) {
        var _this = _super.call(this) || this;
        _this.actionsObserver = actionsObserver;
        _this.reducerManager = reducerManager;
        _this.source = state$;
        return _this;
    }
    /**
     * @param {?} pathOrMapFn
     * @param {...?} paths
     * @return {?}
     */
    Store.prototype.select = function (pathOrMapFn) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        return select.apply(void 0, [pathOrMapFn].concat(paths))(this);
    };
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    Store.prototype.lift = function (operator) {
        var /** @type {?} */ store = new Store(this, this.actionsObserver, this.reducerManager);
        store.operator = operator;
        return store;
    };
    /**
     * @template V
     * @param {?} action
     * @return {?}
     */
    Store.prototype.dispatch = function (action) {
        this.actionsObserver.next(action);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    Store.prototype.next = function (action) {
        this.actionsObserver.next(action);
    };
    /**
     * @param {?} err
     * @return {?}
     */
    Store.prototype.error = function (err) {
        this.actionsObserver.error(err);
    };
    /**
     * @return {?}
     */
    Store.prototype.complete = function () {
        this.actionsObserver.complete();
    };
    /**
     * @template State, Actions
     * @param {?} key
     * @param {?} reducer
     * @return {?}
     */
    Store.prototype.addReducer = function (key, reducer) {
        this.reducerManager.addReducer(key, reducer);
    };
    /**
     * @template Key
     * @param {?} key
     * @return {?}
     */
    Store.prototype.removeReducer = function (key) {
        this.reducerManager.removeReducer(key);
    };
    return Store;
}(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]));
Store.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
Store.ctorParameters = function () { return [
    { type: StateObservable, },
    { type: ActionsSubject, },
    { type: ReducerManager, },
]; };
var STORE_PROVIDERS = [Store];
/**
 * @template T, K
 * @param {?} pathOrMapFn
 * @param {...?} paths
 * @return {?}
 */
function select(pathOrMapFn) {
    var paths = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paths[_i - 1] = arguments[_i];
    }
    return function selectOperator(source$) {
        var /** @type {?} */ mapped$;
        if (typeof pathOrMapFn === 'string') {
            mapped$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_pluck__["pluck"].call.apply(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_pluck__["pluck"], [source$, pathOrMapFn].concat(paths));
        }
        else if (typeof pathOrMapFn === 'function') {
            mapped$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__["map"].call(source$, pathOrMapFn);
        }
        else {
            throw new TypeError("Unexpected type '" + typeof pathOrMapFn + "' in select operator," +
                " expected 'string' or 'function'");
        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_distinctUntilChanged__["distinctUntilChanged"].call(mapped$);
    };
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function isEqualCheck(a, b) {
    return a === b;
}
/**
 * @param {?} t
 * @param {?=} isEqual
 * @return {?}
 */
function defaultMemoize(t, isEqual) {
    if (isEqual === void 0) { isEqual = isEqualCheck; }
    var /** @type {?} */ lastArguments = null;
    var /** @type {?} */ lastResult = null;
    /**
     * @return {?}
     */
    function reset() {
        lastArguments = null;
        lastResult = null;
    }
    /**
     * @return {?}
     */
    function memoized() {
        if (!lastArguments) {
            lastResult = t.apply(null, arguments);
            lastArguments = arguments;
            return lastResult;
        }
        for (var /** @type {?} */ i = 0; i < arguments.length; i++) {
            if (!isEqual(arguments[i], lastArguments[i])) {
                lastResult = t.apply(null, arguments);
                lastArguments = arguments;
                return lastResult;
            }
        }
        return lastResult;
    }
    return { memoized: memoized, reset: reset };
}
/**
 * @param {...?} input
 * @return {?}
 */
function createSelector() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
    return createSelectorFactory(defaultMemoize).apply(void 0, input);
}
/**
 * @param {?} state
 * @param {?} selectors
 * @param {?} memoizedProjector
 * @return {?}
 */
function defaultStateFn(state, selectors, memoizedProjector) {
    var /** @type {?} */ args = selectors.map(function (fn) { return fn(state); });
    return memoizedProjector.memoized.apply(null, args);
}
/**
 * @param {?} memoize
 * @param {?=} options
 * @return {?}
 */
function createSelectorFactory(memoize, options) {
    if (options === void 0) { options = {
        stateFn: defaultStateFn,
    }; }
    return function () {
        var input = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            input[_i] = arguments[_i];
        }
        var /** @type {?} */ args = input;
        if (Array.isArray(args[0])) {
            var head = args[0], tail = args.slice(1);
            args = head.concat(tail);
        }
        var /** @type {?} */ selectors = args.slice(0, args.length - 1);
        var /** @type {?} */ projector = args[args.length - 1];
        var /** @type {?} */ memoizedSelectors = selectors.filter(function (selector) { return selector.release && typeof selector.release === 'function'; });
        var /** @type {?} */ memoizedProjector = memoize(function () {
            var selectors = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                selectors[_i] = arguments[_i];
            }
            return projector.apply(null, selectors);
        });
        var /** @type {?} */ memoizedState = defaultMemoize(function (state) {
            return options.stateFn.apply(null, [state, selectors, memoizedProjector]);
        });
        /**
         * @return {?}
         */
        function release() {
            memoizedState.reset();
            memoizedProjector.reset();
            memoizedSelectors.forEach(function (selector) { return selector.release(); });
        }
        return Object.assign(memoizedState.memoized, {
            release: release,
            projector: memoizedProjector.memoized,
        });
    };
}
/**
 * @template T
 * @param {?} featureName
 * @return {?}
 */
function createFeatureSelector(featureName) {
    return createSelector(function (state) { return state[featureName]; }, function (featureState) { return featureState; });
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StoreRootModule = (function () {
    /**
     * @param {?} actions$
     * @param {?} reducer$
     * @param {?} scannedActions$
     */
    function StoreRootModule(actions$, reducer$, scannedActions$) {
    }
    return StoreRootModule;
}());
StoreRootModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{},] },
];
/** @nocollapse */
StoreRootModule.ctorParameters = function () { return [
    { type: ActionsSubject, },
    { type: ReducerObservable, },
    { type: ScannedActionsSubject, },
]; };
var StoreFeatureModule = (function () {
    /**
     * @param {?} features
     * @param {?} featureReducers
     * @param {?} reducerManager
     */
    function StoreFeatureModule(features, featureReducers, reducerManager) {
        this.features = features;
        this.featureReducers = featureReducers;
        this.reducerManager = reducerManager;
        features
            .map(function (feature, index) {
            var /** @type {?} */ featureReducerCollection = featureReducers.shift();
            var /** @type {?} */ reducers = featureReducerCollection[index];
            return Object.assign({}, feature, { reducers: reducers, initialState: _initialStateFactory(feature.initialState) });
        })
            .forEach(function (feature) { return reducerManager.addFeature(feature); });
    }
    /**
     * @return {?}
     */
    StoreFeatureModule.prototype.ngOnDestroy = function () {
        var _this = this;
        this.features.forEach(function (feature) { return _this.reducerManager.removeFeature(feature); });
    };
    return StoreFeatureModule;
}());
StoreFeatureModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{},] },
];
/** @nocollapse */
StoreFeatureModule.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [STORE_FEATURES,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [FEATURE_REDUCERS,] },] },
    { type: ReducerManager, },
]; };
var StoreModule = (function () {
    function StoreModule() {
    }
    /**
     * @param {?} reducers
     * @param {?=} config
     * @return {?}
     */
    StoreModule.forRoot = function (reducers, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: StoreRootModule,
            providers: [
                { provide: _INITIAL_STATE, useValue: config.initialState },
                {
                    provide: INITIAL_STATE,
                    useFactory: _initialStateFactory,
                    deps: [_INITIAL_STATE],
                },
                { provide: _INITIAL_REDUCERS, useValue: reducers },
                {
                    provide: _STORE_REDUCERS,
                    useExisting: reducers instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"] ? reducers : _INITIAL_REDUCERS,
                },
                {
                    provide: INITIAL_REDUCERS,
                    deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], _INITIAL_REDUCERS, [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"](_STORE_REDUCERS)]],
                    useFactory: _createStoreReducers,
                },
                {
                    provide: META_REDUCERS,
                    useValue: config.metaReducers ? config.metaReducers : [],
                },
                {
                    provide: _REDUCER_FACTORY,
                    useValue: config.reducerFactory
                        ? config.reducerFactory
                        : combineReducers,
                },
                {
                    provide: REDUCER_FACTORY,
                    deps: [_REDUCER_FACTORY, META_REDUCERS],
                    useFactory: createReducerFactory,
                },
                ACTIONS_SUBJECT_PROVIDERS,
                REDUCER_MANAGER_PROVIDERS,
                SCANNED_ACTIONS_SUBJECT_PROVIDERS,
                STATE_PROVIDERS,
                STORE_PROVIDERS,
            ],
        };
    };
    /**
     * @param {?} featureName
     * @param {?} reducers
     * @param {?=} config
     * @return {?}
     */
    StoreModule.forFeature = function (featureName, reducers, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: StoreFeatureModule,
            providers: [
                {
                    provide: STORE_FEATURES,
                    multi: true,
                    useValue: /** @type {?} */ ({
                        key: featureName,
                        reducerFactory: config.reducerFactory
                            ? config.reducerFactory
                            : combineReducers,
                        metaReducers: config.metaReducers ? config.metaReducers : [],
                        initialState: config.initialState,
                    }),
                },
                { provide: _FEATURE_REDUCERS, multi: true, useValue: reducers },
                {
                    provide: _FEATURE_REDUCERS_TOKEN,
                    multi: true,
                    useExisting: reducers instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"] ? reducers : _FEATURE_REDUCERS,
                },
                {
                    provide: FEATURE_REDUCERS,
                    multi: true,
                    deps: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
                        _FEATURE_REDUCERS,
                        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"](_FEATURE_REDUCERS_TOKEN)],
                    ],
                    useFactory: _createFeatureReducers,
                },
            ],
        };
    };
    return StoreModule;
}());
StoreModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{},] },
];
/** @nocollapse */
StoreModule.ctorParameters = function () { return []; };
/**
 * @param {?} injector
 * @param {?} reducers
 * @param {?} tokenReducers
 * @return {?}
 */
function _createStoreReducers(injector, reducers, tokenReducers) {
    return reducers instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"] ? injector.get(reducers) : reducers;
}
/**
 * @param {?} injector
 * @param {?} reducerCollection
 * @param {?} tokenReducerCollection
 * @return {?}
 */
function _createFeatureReducers(injector, reducerCollection, tokenReducerCollection) {
    var /** @type {?} */ reducers = reducerCollection.map(function (reducer, index) {
        return reducer instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"] ? injector.get(reducer) : reducer;
    });
    return reducers;
}
/**
 * @param {?} initialState
 * @return {?}
 */
function _initialStateFactory(initialState) {
    if (typeof initialState === 'function') {
        return initialState();
    }
    return initialState;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=store.es5.js.map


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Master2Layout {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Master2Layout;

//# sourceMappingURL=master2.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_communicate__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_user__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(30);



class Page2Page {
    constructor(srv, dataProvider) {
        this.srv = srv;
        this.dataProvider = dataProvider;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__entities_user__["a" /* User */];
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
    ngOnInit() {
        this.dataProvider.config().subscribe(resp => {
            console.log(resp);
        }, err => {
            console.log(err);
            console.log("Error page2 occured.");
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Page2Page;

//# sourceMappingURL=page2.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Control3Control {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Control3Control;

//# sourceMappingURL=control3.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Control4Control {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Control4Control;

//# sourceMappingURL=control4.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DefaultLayout {
    constructor() {
        this.navs = [
            { path: '/page1', name: 'Страница 1' },
            { path: '/page2', name: 'Страница 2' },
            { path: '/page3', name: 'Страница 3' }
        ];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DefaultLayout;

//# sourceMappingURL=default.js.map

/***/ })

},[207]);
//# sourceMappingURL=browser.js.map