import { Test, TestingModule } from '@nestjs/testing';
import { PostNewTodoItemController } from './post-new-todo-item.controller';

describe('PostNewTodoItemController', () => {
  let controller: PostNewTodoItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostNewTodoItemController],
    }).compile();

    controller = module.get<PostNewTodoItemController>(PostNewTodoItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
