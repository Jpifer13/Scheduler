import { Test, TestingModule } from '@nestjs/testing';
import { PhoneExtensionsController } from './phone_extensions.controller';

describe('PhoneExtensions Controller', () => {
  let controller: PhoneExtensionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhoneExtensionsController],
    }).compile();

    controller = module.get<PhoneExtensionsController>(PhoneExtensionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
