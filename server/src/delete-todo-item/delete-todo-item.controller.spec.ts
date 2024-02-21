import { Test, TestingModule } from '@nestjs/testing';
import { DeleteTodoItemController } from './delete-todo-item.controller';

describe('DeleteTodoItemController', () => {
  let controller: DeleteTodoItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteTodoItemController],
    }).compile();

    controller = module.get<DeleteTodoItemController>(DeleteTodoItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
