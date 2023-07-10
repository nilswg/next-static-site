"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rewrites = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const config_1 = require("../../config");
const colors_1 = require("../../lib/colors");
const route = express_1.default.Router();
route.use((req, res, next) => {
    const uri = req.url;
    const method = req.method.toUpperCase();
    const { ext } = path_1.default.parse(uri);
    if (!ext && (0, fs_1.existsSync)(`${config_1.staticPath}/${uri}.html`)) {
        const pathname = `${uri}.html`;
        console.log(`-  ┌ ${(0, colors_1.blue)(method)} ${uri} \n   │\n   └──── $${config_1.staticPath}${pathname}\n`);
        res.sendFile(`${config_1.staticPath}${pathname}`);
    }
    else {
        const notfound = '/404.html';
        console.log(`-  ┌ ${(0, colors_1.blue)(method)} ${uri} \n   │\n   └──── $${config_1.staticPath}${notfound}\n`);
        res.sendFile(`${config_1.staticPath}${notfound}`);
    }
});
exports.rewrites = route;
