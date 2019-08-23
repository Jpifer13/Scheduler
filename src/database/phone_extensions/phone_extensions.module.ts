import { Module } from '@nestjs/common';
import { PhoneExtensionsService } from './phone_extensions.service';
import { PhoneExtensionsController } from './phone_extensions.controller';

@Module({
  providers: [PhoneExtensionsService],
  controllers: [PhoneExtensionsController]
})
export class PhoneExtensionsModule {}
