import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';


@Controller('items')
export class ItemsController {

    constructor(private readonly itemService:ItemsService){}


    @Get()
   async findAll(): Promise<Item[]> {
        return this.itemService.findAll()
    }
    
    @Get(':id')
   async findOne(@Param('id') id:string): Promise<Item>{
        return this.itemService.findItemById(id)
    }
    
    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemService.create(createItemDto)
    }
   
    @Delete(':id')
    Delete(@Param('id') id: string): Promise<Item> {
       return this.itemService.deleteItem(id)
    }

    @Put(':id')
    updateItem(@Param('id') id: string, @Body() updateItemDto: CreateItemDto): Promise<Item> {
       return this.itemService.updateItem(id,updateItemDto)
    }
}
