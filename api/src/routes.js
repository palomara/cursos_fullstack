"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var CoursesController_1 = __importDefault(require("./controller/CoursesController"));
var CoursesServices_1 = __importDefault(require("./Services/CoursesServices"));
var routes = express_1.default.Router();
var coursesServices = new CoursesServices_1.default();
var coursesController = new CoursesController_1.default();
routes.get('/courses/:id', coursesController.show);
routes.get('/courses/find', coursesController.index);
routes.put('/courses/:id', coursesController.create);
routes.delete('/courses/:id', coursesController.delete);
routes.patch('/courses/:id', coursesController.updated);
exports.default = routes;
