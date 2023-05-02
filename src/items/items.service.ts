import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose'

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel:Model<Item>) {}


 async findAll():Promise<Item[]>{  
  return await this.itemModel.find()
 } 

 async findItemById(ID:string):Promise<Item>{
   const item = await this.itemModel.findOne({_id:ID})
   console.log(item)
   return item
 }
 
 async create(item:Item):Promise<Item>{
    const newItem =  new this.itemModel(item)
    await newItem.save()
    return newItem
   }

 async updateItem(id:string,item:Item){
    return await this.itemModel.findByIdAndUpdate(id,{...item})
 }

 async deleteItem(id:string){
    return await this.itemModel.findByIdAndDelete({_id:id})
 }
  
}
