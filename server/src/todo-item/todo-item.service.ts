import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoItemService {
  getTodo(): string[] {
    return ['这是一条默认todoItem，请删除后添加自己的todoItem....'];
  }
}
