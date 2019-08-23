import { Test, TestingModule } from '@nestjs/testing';
import { PhoneDidsController } from './phone_dids.controller';

describe('PhoneDids Controller', () => {
  let controller: PhoneDidsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhoneDidsController],
    }).compile();

    controller = module.get<PhoneDidsController>(PhoneDidsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
