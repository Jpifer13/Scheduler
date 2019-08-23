import { Test, TestingModule } from '@nestjs/testing';
import { PhoneExtensionsService } from './phone_extensions.service';

describe('PhoneExtensionsService', () => {
  let service: PhoneExtensionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhoneExtensionsService],
    }).compile();

    service = module.get<PhoneExtensionsService>(PhoneExtensionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
