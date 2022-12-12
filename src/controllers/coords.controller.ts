import { RealtimeCoords } from './../gateways/map-lives-coords.gateway';
import { Controller, Inject, Post } from '@nestjs/common';

@Controller('coords')
export class CoordsController {

    constructor(public realTime: RealtimeCoords) {}

  @Post()
  public coordsEmitter() {
    this.realTime.handleCoords(null);
    return null;
  }
}
