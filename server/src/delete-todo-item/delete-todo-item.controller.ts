import { Body, Controller, Delete } from '@nestjs/common';
import { DeleteTodoItemService } from './delete-todo-item.service';
import { deleteItemDTO } from './deleteItem.dto';

@Controller('delete-todo-item')
export class DeleteTodoItemController {
  constructor(private deleteTodoItemService: DeleteTodoItemService) {}
  @Delete('/delete')
  deleteTodoItem(@Body() deleteItemDto: deleteItemDTO): string[] {
    return this.deleteTodoItemService.deleteTodoItem(deleteItemDto);
  }
}
