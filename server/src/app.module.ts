import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CardModule } from './card/card.module';

@Module({
  imports: [CardModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
