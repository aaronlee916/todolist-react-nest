import { PostNewTodoItemService } from './post-new-todo-item.service';
import { todoItemDTO } from './todoItem.dto';
export declare class PostNewTodoItemController {
    private postNewTodoItemService;
    constructor(postNewTodoItemService: PostNewTodoItemService);
    postNew(todoItemDto: todoItemDTO): string[];
}
