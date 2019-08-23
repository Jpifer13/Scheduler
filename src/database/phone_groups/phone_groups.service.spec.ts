import { Test, TestingModule } from '@nestjs/testing';
import { PhoneGroupsService } from './phone_groups.service';

describe('PhoneGroupsService', () => {
  let service: PhoneGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhoneGroupsService],
    }).compile();

    service = module.get<PhoneGroupsService>(PhoneGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
