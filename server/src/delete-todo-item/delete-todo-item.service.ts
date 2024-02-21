import { Injectable } from '@nestjs/common';
import { deleteItemDTO } from './deleteItem.dto';

@Injectable()
export class DeleteTodoItemService {
  deleteTodoItem(deleteItemDto: deleteItemDTO): string[] {
    return deleteItemDto.currArray.slice(0, deleteItemDto.currArray.length - 1);
  }
}
