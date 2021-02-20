import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Domains
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://lab.lectrum.io:37019/cats'),
    CatsModule,
    DogsModule,
  ],
})
export class AppModule {}
