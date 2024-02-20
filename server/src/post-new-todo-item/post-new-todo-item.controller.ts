import { Body, Controller, Post } from '@nestjs/common';
import { PostNewTodoItemService } from './post-new-todo-item.service';
import { todoItemDTO } from './todoItem.dto';

@Controller('post-new-todo-item')
export class PostNewTodoItemController {
  constructor(private postNewTodoItemService: PostNewTodoItemService) {}
  @Post('new')
  postNew(@Body() todoItemDto: todoItemDTO): string[] {
    return this.postNewTodoItemService.postNew(todoItemDto);
  }
}
