"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const route_1 = require("./routes/api/route");
const route_2 = require("./routes/rewrites/route");
const app = (0, express_1.default)();
/**
 * static file
 */
app.use(express_1.default.static(config_1.staticPath));
/**
 * api router
 */
app.use('/api', route_1.ApiRouter);
/**
 * rewrite
 */
app.use(route_2.rewrites);
app.listen(config_1.port, () => console.log(`start listen on ${config_1.port}`));
