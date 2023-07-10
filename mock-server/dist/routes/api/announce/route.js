"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnounceRouter = void 0;
const express_1 = require("express");
const announces_control_1 = require("../../../controllers/announces.control");
const router = (0, express_1.Router)();
router.get('/list', (req, res) => {
    const data = (0, announces_control_1.getAnnounceList)();
    res.status(200).json(data);
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const data = (0, announces_control_1.getAnnounce)(id);
    res.status(200).json(data);
});
exports.AnnounceRouter = router;
