import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DataService } from './data.service';
import { CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';

@Controller()
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @MessagePattern('createDatum')
  create(@Payload() createDatumDto: CreateDatumDto) {
    return this.dataService.create(createDatumDto);
  }

  @MessagePattern('findAllData')
  findAll() {
    return this.dataService.findAll();
  }

  @MessagePattern('findOneDatum')
  findOne(@Payload() id: number) {
    return this.dataService.findOne(id);
  }

  @MessagePattern('updateDatum')
  update(@Payload() updateDatumDto: UpdateDatumDto) {
    return this.dataService.update(updateDatumDto.id, updateDatumDto);
  }

  @MessagePattern('removeDatum')
  remove(@Payload() id: number) {
    return this.dataService.remove(id);
  }
}
