import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoItemController } from './todo-item/todo-item.controller';
import { TodoItemService } from './todo-item/todo-item.service';
import { PostNewTodoItemController } from './post-new-todo-item/post-new-todo-item.controller';
import { PostNewTodoItemService } from './post-new-todo-item/post-new-todo-item.service';
import { DeleteTodoItemController } from './delete-todo-item/delete-todo-item.controller';
import { DeleteTodoItemService } from './delete-todo-item/delete-todo-item.service';

@Module({
  imports: [],
  controllers: [AppController, TodoItemController, PostNewTodoItemController, DeleteTodoItemController],
  providers: [AppService, TodoItemService, PostNewTodoItemService, DeleteTodoItemService],
})
export class AppModule {}
