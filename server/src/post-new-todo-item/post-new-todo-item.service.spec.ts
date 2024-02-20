import { Test, TestingModule } from '@nestjs/testing';
import { PostNewTodoItemService } from './post-new-todo-item.service';

describe('PostNewTodoItemService', () => {
  let service: PostNewTodoItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostNewTodoItemService],
    }).compile();

    service = module.get<PostNewTodoItemService>(PostNewTodoItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
