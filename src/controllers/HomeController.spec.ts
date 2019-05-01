import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './HomeController';

describe('HomeController', () => {
  let controller: HomeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [],
    }).compile();

    controller = app.get<HomeController>(HomeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(controller.index()).toBe('Hello!');
    });
  });
});
