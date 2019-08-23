import { Test, TestingModule } from '@nestjs/testing';
import { PhoneDidsService } from './phone_dids.service';

describe('PhoneDidsService', () => {
  let service: PhoneDidsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhoneDidsService],
    }).compile();

    service = module.get<PhoneDidsService>(PhoneDidsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
