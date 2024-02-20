import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoItemController } from './todo-item/todo-item.controller';
import { TodoItemService } from './todo-item/todo-item.service';

@Module({
  imports: [],
  controllers: [AppController, TodoItemController],
  providers: [AppService, TodoItemService],
})
export class AppModule {}
