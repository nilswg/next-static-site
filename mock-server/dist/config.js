"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staticPath = exports.port = exports.serverUrl = void 0;
const path_1 = __importDefault(require("path"));
exports.serverUrl = process.env.SERVER_URL;
exports.port = !!exports.serverUrl ? new URL(exports.serverUrl).port : '5000';
exports.staticPath = path_1.default.join(__dirname, '../../out');
