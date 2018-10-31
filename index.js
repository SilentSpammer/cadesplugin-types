"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadesplugin = cadesplugin;
exports.asyncMode = cadesplugin && !!cadesplugin.CreateObjectAsync;
function guardAsync() {
    return exports.asyncMode;
}
exports.guardAsync = guardAsync;
function guardSync() {
    return !exports.asyncMode;
}
exports.guardSync = guardSync;
