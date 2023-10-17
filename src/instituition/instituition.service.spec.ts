import { Test, TestingModule } from '@nestjs/testing';
import { InstituitionService } from './instituition.service';

describe('InstituitionService', () => {
  let service: InstituitionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstituitionService],
    }).compile();

    service = module.get<InstituitionService>(InstituitionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
