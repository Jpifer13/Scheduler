import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { BarcodesService } from './barcodes.service';

@Controller('barcodes')
export class BarcodesController {

    constructor(private service: BarcodesService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getBarcode(params.id);
    }

    // @Post()
    // create(@Body() user: User) {
    //     return this.service.createUser(user);
    // }

    // @Put()
    // update(@Body() user: User) {
    //     return this.service.updateUser(user);
    // }

    // @Delete(':id')
    // deleteUser(@Param() params) {
    //     return this.service.deleteUser(params.id);
    // }
}
