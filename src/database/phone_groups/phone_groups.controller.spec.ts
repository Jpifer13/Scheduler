import { Test, TestingModule } from '@nestjs/testing';
import { PhoneGroupsController } from './phone_groups.controller';

describe('PhoneGroups Controller', () => {
  let controller: PhoneGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhoneGroupsController],
    }).compile();

    controller = module.get<PhoneGroupsController>(PhoneGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
