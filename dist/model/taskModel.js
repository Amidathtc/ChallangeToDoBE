"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const taskModel = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    userID: { type: String },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    users: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "users",
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("tasks", taskModel);
