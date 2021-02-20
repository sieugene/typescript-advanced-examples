import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Domains
import { CatsModule } from './cats/cats.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://lab.lectrum.io:37019/cats'),
    CatsModule,
  ],
})
export class AppModule {}
