import { Injectable } from '@nestjs/common';
import { todoItemDTO } from './todoItem.dto';

@Injectable()
export class PostNewTodoItemService {
  postNew(todoItemDto: todoItemDTO): string[] {
    const { currArray, newItem } = todoItemDto;
    currArray.push(newItem);
    return currArray;
  }
}
