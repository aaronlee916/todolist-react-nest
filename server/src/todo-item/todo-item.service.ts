import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoItemService {
  getTodo(): string[] {
    return ['抽烟', '喝酒', '烫头'];
  }
}
