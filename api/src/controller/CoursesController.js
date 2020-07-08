"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var CoursesServices_1 = __importDefault(require("../Services/CoursesServices"));
var CoursesController = /** @class */ (function () {
    function CoursesController() {
    }
    //private readonly _services = new coursesServices()
    CoursesController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var service, courses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        service = new CoursesServices_1.default();
                        return [4 /*yield*/, service.GetAll()];
                    case 1:
                        courses = _a.sent();
                        return [2 /*return*/, response.status(200).json(courses)];
                }
            });
        });
    };
    CoursesController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, title, subtitle, startedAt, description, isActive, date, created, updated, course, service, insertedCourse, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = Number(request.params.id);
                        _a = request.body, title = _a.title, subtitle = _a.subtitle, startedAt = _a.startedAt, description = _a.description, isActive = _a.isActive;
                        date = moment_1.default().endOf('day').toDate();
                        created = date;
                        updated = date;
                        course = {
                            title: title,
                            subtitle: subtitle,
                            startedAt: moment_1.default(startedAt).toDate(),
                            description: description,
                            isActive: isActive,
                            created: created,
                            updated: updated,
                        };
                        service = new CoursesServices_1.default();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, service.Create(id, course)];
                    case 2:
                        insertedCourse = _b.sent();
                        return [2 /*return*/, response.status(201).json(insertedCourse)];
                    case 3:
                        error_1 = _b.sent();
                        return [2 /*return*/, response.status(500).json((error_1))];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CoursesController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, service, course;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = Number(request.params.id);
                        service = new CoursesServices_1.default();
                        return [4 /*yield*/, service.GetById(id)];
                    case 1:
                        course = _a.sent();
                        if (typeof course == 'undefined') {
                            return [2 /*return*/, response.status(204)];
                        }
                        return [2 /*return*/, response.status(200).json(course)];
                }
            });
        });
    };
    CoursesController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, service;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = Number(request.params.id);
                        service = new CoursesServices_1.default();
                        return [4 /*yield*/, service.Delete(id).then(function (value) {
                                return response.status(200).json({ isDeleted: Boolean(value) });
                            }).catch(function (err) {
                                return response.status(500).json(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoursesController.prototype.updated = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, title, subtitle, startedAt, description, isActive, date, updated, course, service;
            return __generator(this, function (_b) {
                id = Number(request.params.id);
                _a = request.body, title = _a.title, subtitle = _a.subtitle, startedAt = _a.startedAt, description = _a.description, isActive = _a.isActive;
                date = moment_1.default([]).toISOString();
                updated = date;
                course = {
                    title: title,
                    subtitle: subtitle,
                    startedAt: moment_1.default(startedAt).toISOString(),
                    description: description,
                    isActive: isActive,
                    updated: updated,
                };
                service = new CoursesServices_1.default();
                service.update(id, course)
                    .then(function (value) {
                    return response.status(200).json({ isUpdated: Boolean(value) });
                });
                return [2 /*return*/];
            });
        });
    };
    return CoursesController;
}());
exports.default = CoursesController;
