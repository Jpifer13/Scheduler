import { Module } from '@nestjs/common';
import { PhoneDidsController } from './phone_dids.controller';
import { PhoneDidsService } from './phone_dids.service';

@Module({
  controllers: [PhoneDidsController],
  providers: [PhoneDidsService]
})
export class PhoneDidsModule {}
