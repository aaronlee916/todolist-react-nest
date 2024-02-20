import { TodoItemService } from './todo-item.service';
export declare class TodoItemController {
    private todoItemService;
    constructor(todoItemService: TodoItemService);
    getTodo(): string[];
}
