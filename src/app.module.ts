import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { TweetModule } from './tweet/tweet.module';
import { ProdModule } from './prod/prod.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [TweetModule, TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
   useFactory:()=>({
     type: 'postgres',
    entities: [],
    synchronize: true,
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'India@#2047',
    database: 'nestjs',
   })
  }), ProdModule, DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
