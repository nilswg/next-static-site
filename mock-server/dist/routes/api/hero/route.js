"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroRouter = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ hero: { name: 'Nilson' } });
});
exports.HeroRouter = router;
