import { Test, TestingModule } from '@nestjs/testing';
import { BarcodesController } from './barcodes.controller';

describe('Barcodes Controller', () => {
  let controller: BarcodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarcodesController],
    }).compile();

    controller = module.get<BarcodesController>(BarcodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
