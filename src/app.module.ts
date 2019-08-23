import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Barcodes } from './database/barcodes/barcodes.entity';
import { PhoneDids } from './database/phone_dids/phone_dids.entity';
import { PhoneExtensions } from './database/phone_extensions/phone_extensions.entity';
import { PhoneGroups } from './database/phone_groups/phone_groups.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'buildersql.capcom.tourtech.com',
      port: 5432,
      username: 'tourtech',
      password: 'Raleigh1723!',
      database: 'scheduler',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    Barcodes,
    PhoneDids,
    PhoneExtensions,
    PhoneGroups,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
  // constructor(private readonly connection: Connection) {}
}
