"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRouter_1 = __importDefault(require("../ToDoBE/router/authRouter"));
const taskRouter_1 = __importDefault(require("../ToDoBE/router/taskRouter"));
const mainApp = (app) => {
    app
        .use(express_1.default.json())
        .use((0, cors_1.default)())
        .use("/api", authRouter_1.default)
        .use("/api", taskRouter_1.default);
};
exports.mainApp = mainApp;
