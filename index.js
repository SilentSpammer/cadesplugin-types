"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
exports.cadesplugin = cadesplugin;

exports.asyncMode = cadesplugin && !!cadesplugin.CreateObjectAsync;
exports.syncMode = !asyncMode;


exports.isSync = function isSync() {
    return exports.syncMode;
};
exports.isAsync = function isAsync() {
    return exports.asyncMode;
};
