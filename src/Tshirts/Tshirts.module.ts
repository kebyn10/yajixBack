import { Module } from '@nestjs/common';
import { TshirtsController } from './Tshirts.controller';
import { TshirtService } from './Tshirt.service';

@Module({
    controllers:[TshirtsController],
    providers:[TshirtService]
})
export class TshirtsModule {}
