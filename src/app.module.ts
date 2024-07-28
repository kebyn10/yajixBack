import { Module } from '@nestjs/common';
import { TshirtsModule } from './Tshirts/Tshirts.module';

@Module({
  imports: [TshirtsModule]
})
export class AppModule {}
