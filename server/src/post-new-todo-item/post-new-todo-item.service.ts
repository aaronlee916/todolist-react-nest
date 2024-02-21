import { Injectable } from '@nestjs/common';
import { todoItemDTO } from './todoItem.dto';

@Injectable()
export class PostNewTodoItemService {
  postNew(todoItemDto: todoItemDTO): string[] {
    todoItemDto.currArray.push(todoItemDto.newItem);
    return todoItemDto.currArray;
  }
}
