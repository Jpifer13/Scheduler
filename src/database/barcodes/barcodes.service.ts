import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Barcodes } from './barcodes.entity';

@Injectable()
export class BarcodesService {

    constructor(@InjectRepository(Barcodes) private barcodesRepository: Repository<Barcodes>) { }

    async getBarcode(barcodes: Barcodes): Promise<Barcodes[]> {
        return await this.barcodesRepository.find();
    }
}
