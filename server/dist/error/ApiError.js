"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError(status, message) {
        var _this = _super.call(this) || this;
        _this.status = status;
        _this.message = message;
        return _this;
    }
    ApiError.badRequest = function (message) {
        return new ApiError(400, message);
    };
    ApiError.notFound = function (message) {
        return new ApiError(404, message);
    };
    ApiError.internal = function (message) {
        return new ApiError(500, message || "На сервере произошла ошибка");
    };
    ApiError.forbidden = function (message) {
        return new ApiError(403, message);
    };
    return ApiError;
}(Error));
exports.ApiError = ApiError;
