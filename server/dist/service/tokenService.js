"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../utils/config"));
var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    TokenService.prototype.generateTokens = function (payload) {
        var JWT_SECRET_ACCESS = config_1.default.JWT_SECRET_ACCESS, JWT_SECRET_REFRESH = config_1.default.JWT_SECRET_REFRESH;
        if (!JWT_SECRET_ACCESS) {
            return;
            // throw ProgramError.objectUndefined("JWT_SECRET_ACCESS");
        }
        if (!JWT_SECRET_REFRESH) {
            return;
            // throw ProgramError.objectUndefined("JWT_SECRET_REFRESH");
        }
        var accessToken = jsonwebtoken_1.default.sign(payload, JWT_SECRET_ACCESS, {
            expiresIn: "30m",
        });
        var refreshToken = jsonwebtoken_1.default.sign(payload, JWT_SECRET_REFRESH, {
            expiresIn: "30d",
        });
        return {
            accessToken: accessToken,
            refreshToken: refreshToken,
        };
    };
    return TokenService;
}());
exports.TokenService = TokenService;
