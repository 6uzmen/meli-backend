"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const routes_1 = __importDefault(require("./routes"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/api', routes_1.default);
// tslint:disable-next-line:no-console
app.listen(3000, () => console.log('Listening on port 3000!'));
exports.default = app;
//# sourceMappingURL=server.js.map