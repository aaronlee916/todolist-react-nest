import { Body, Controller, Post } from '@nestjs/common';
import { PostNewTodoItemService } from './post-new-todo-item.service';

@Controller('post-new-todo-item')
export class PostNewTodoItemController {
  constructor(private postNewTodoItemService: PostNewTodoItemService) {}
  @Post('new')
  postNew(@Body() createtodoItemDto: CreateTodoItemDto): any {
    r
  }
}
