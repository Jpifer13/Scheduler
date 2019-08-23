import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarcodesController } from './barcodes.controller';
import { Barcodes } from './barcodes.entity';
import { BarcodesService } from './barcodes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Barcodes])],
  providers: [BarcodesService],
  controllers: [BarcodesController],
})
export class BarcodesModule {
}