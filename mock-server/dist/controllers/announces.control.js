"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnnounce = exports.getAnnounceList = void 0;
const announces_mock_1 = require("../mock/announces.mock");
const getAnnounceList = () => {
    return { announces: announces_mock_1.announces };
};
exports.getAnnounceList = getAnnounceList;
const getAnnounce = (id) => {
    var _a;
    const announce = (_a = announces_mock_1.announces.find((x) => x.id === id)) !== null && _a !== void 0 ? _a : {
        id: 'notfound',
        title: '',
        content: '',
    };
    return { announce };
};
exports.getAnnounce = getAnnounce;
