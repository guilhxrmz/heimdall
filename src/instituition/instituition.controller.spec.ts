import { Test, TestingModule } from '@nestjs/testing';
import { InstituitionController } from './instituition.controller';
import { InstituitionService } from './instituition.service';

describe('InstituitionController', () => {
  let controller: InstituitionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstituitionController],
      providers: [InstituitionService],
    }).compile();

    controller = module.get<InstituitionController>(InstituitionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
