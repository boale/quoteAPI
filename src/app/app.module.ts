import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [QuotesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
