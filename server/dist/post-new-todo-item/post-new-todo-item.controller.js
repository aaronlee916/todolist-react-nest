"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostNewTodoItemController = void 0;
const common_1 = require("@nestjs/common");
const post_new_todo_item_service_1 = require("./post-new-todo-item.service");
const todoItem_dto_1 = require("./todoItem.dto");
let PostNewTodoItemController = class PostNewTodoItemController {
    constructor(postNewTodoItemService) {
        this.postNewTodoItemService = postNewTodoItemService;
    }
    postNew(todoItemDto) {
        return this.postNewTodoItemService.postNew(todoItemDto);
    }
};
exports.PostNewTodoItemController = PostNewTodoItemController;
__decorate([
    (0, common_1.Post)('new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todoItem_dto_1.todoItemDTO]),
    __metadata("design:returntype", Array)
], PostNewTodoItemController.prototype, "postNew", null);
exports.PostNewTodoItemController = PostNewTodoItemController = __decorate([
    (0, common_1.Controller)('post-new-todo-item'),
    __metadata("design:paramtypes", [post_new_todo_item_service_1.PostNewTodoItemService])
], PostNewTodoItemController);
//# sourceMappingURL=post-new-todo-item.controller.js.map