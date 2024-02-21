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
exports.DeleteTodoItemController = void 0;
const common_1 = require("@nestjs/common");
const delete_todo_item_service_1 = require("./delete-todo-item.service");
const deleteItem_dto_1 = require("./deleteItem.dto");
let DeleteTodoItemController = class DeleteTodoItemController {
    constructor(deleteTodoItemService) {
        this.deleteTodoItemService = deleteTodoItemService;
    }
    deleteTodoItem(deleteItemDto) {
        return this.deleteTodoItemService.deleteTodoItem(deleteItemDto);
    }
};
exports.DeleteTodoItemController = DeleteTodoItemController;
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleteItem_dto_1.deleteItemDTO]),
    __metadata("design:returntype", Array)
], DeleteTodoItemController.prototype, "deleteTodoItem", null);
exports.DeleteTodoItemController = DeleteTodoItemController = __decorate([
    (0, common_1.Controller)('delete-todo-item'),
    __metadata("design:paramtypes", [delete_todo_item_service_1.DeleteTodoItemService])
], DeleteTodoItemController);
//# sourceMappingURL=delete-todo-item.controller.js.map