import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Controller('cities')
export class CitiesController 
{
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  create(@Body() createCityDto: CreateCityDto) {
    return this.citiesService.create(createCityDto);
  }

  @Get()
  findAll() 
  {return this.citiesService.findAll();}
  
  //filter starts
  @Get('filter/')
  filters(@Body() args : {}) 
  {
    //console.log(args);
    return this.citiesService.filter(args);
  }
  //filter ends

  @Get(':id')
  findOne(@Param('id') id: string) 
  {
    const myid:Prisma.citiesWhereUniqueInput = {code: id}
    return this.citiesService.findOne(myid);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.citiesService.update(+id, updateCityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) 
  {
    //const myid:Prisma.citiesWhereUniqueInput = {code: id}
    return this.citiesService.remove(id);
  }

}
