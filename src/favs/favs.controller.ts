import { Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { Delete, HttpCode } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { FavsService } from './favs.service';

@ApiTags('Favorites')
@Controller('favs')
export class FavsController {
  constructor(private readonly favsService: FavsService) {}
}
