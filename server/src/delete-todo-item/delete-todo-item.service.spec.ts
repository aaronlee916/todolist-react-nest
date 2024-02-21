import { Test, TestingModule } from '@nestjs/testing';
import { DeleteTodoItemService } from './delete-todo-item.service';

describe('DeleteTodoItemService', () => {
  let service: DeleteTodoItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteTodoItemService],
    }).compile();

    service = module.get<DeleteTodoItemService>(DeleteTodoItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
