"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRouter = void 0;
const express_1 = require("express");
const route_1 = require("./announce/route");
const route_2 = require("./hero/route");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.status(200).json({ msg: 'api ok' });
});
router.use('/hero', route_2.HeroRouter);
router.use('/announce', route_1.AnnounceRouter);
exports.ApiRouter = router;
