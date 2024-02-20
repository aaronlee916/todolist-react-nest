import { Controller } from '@nestjs/common';
import { TodoItemService } from './todo-item.service';
import { Get } from '@nestjs/common';

@Controller('todo-item')
export class TodoItemController {
  constructor(private todoItemService: TodoItemService) {}
  @Get('get-todo')
  getTodo(): string[] {
    return this.todoItemService.getTodo();
  }
}
