import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoItemController } from './todo-item/todo-item.controller';
import { TodoItemService } from './todo-item/todo-item.service';
import { PostNewTodoItemController } from './post-new-todo-item/post-new-todo-item.controller';
import { PostNewTodoItemService } from './post-new-todo-item/post-new-todo-item.service';

@Module({
  imports: [],
  controllers: [AppController, TodoItemController, PostNewTodoItemController],
  providers: [AppService, TodoItemService, PostNewTodoItemService],
})
export class AppModule {}
