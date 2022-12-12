import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { RealtimeCoords } from './gateways/map-lives-coords.gateway';
import { CoordsController } from './controllers/coords.controller';

@Module({
  imports: [],
  controllers: [CoordsController],
  providers: [AppService, RealtimeCoords],
})
export class AppModule {}
