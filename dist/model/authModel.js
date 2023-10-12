"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userModel = new mongoose_1.default.Schema({
    userName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    createdAt: { type: Date, default: Date.now },
    tasks: [
        {
            type: mongoose_1.default.Types.ObjectId,
            ref: "tasks"
        }
    ],
}, { timestamps: true });
exports.default = mongoose_1.default.model("users", userModel);
