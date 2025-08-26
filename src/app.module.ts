import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [TweetModule, TypeOrmModule.forRootAsync({
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
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
