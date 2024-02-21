"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const todo_item_controller_1 = require("./todo-item/todo-item.controller");
const todo_item_service_1 = require("./todo-item/todo-item.service");
const post_new_todo_item_controller_1 = require("./post-new-todo-item/post-new-todo-item.controller");
const post_new_todo_item_service_1 = require("./post-new-todo-item/post-new-todo-item.service");
const delete_todo_item_controller_1 = require("./delete-todo-item/delete-todo-item.controller");
const delete_todo_item_service_1 = require("./delete-todo-item/delete-todo-item.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, todo_item_controller_1.TodoItemController, post_new_todo_item_controller_1.PostNewTodoItemController, delete_todo_item_controller_1.DeleteTodoItemController],
        providers: [app_service_1.AppService, todo_item_service_1.TodoItemService, post_new_todo_item_service_1.PostNewTodoItemService, delete_todo_item_service_1.DeleteTodoItemService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map