import { DeleteTodoItemService } from './delete-todo-item.service';
import { deleteItemDTO } from './deleteItem.dto';
export declare class DeleteTodoItemController {
    private deleteTodoItemService;
    constructor(deleteTodoItemService: DeleteTodoItemService);
    deleteTodoItem(deleteItemDto: deleteItemDTO): string[];
}
