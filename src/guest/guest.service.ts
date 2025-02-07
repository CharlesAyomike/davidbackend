import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Guest } from 'src/schema/guest.schema';
import { CreatGuestCode } from './dto/createGuest.dto';
import { CreateGuestDetails } from './dto/createGuestDetails.dto';

@Injectable()
export class GuestService {
  constructor(@InjectModel(Guest.name) private guestModel: Model<Guest>) {}

  async findAll() {
    return this.guestModel.find({}, { _id: 0, code: 1 });
  }

  findOne(code: string) {
    const guest = this.guestModel.findOne({
      code: code,
    });
    return guest;
  }

  async create(creatGuestCode: CreatGuestCode) {
    // const code: CreatGuestCode[] = [];
    // for (let i = 1; i <= 100; i++) {
    //   const rand1 = Math.random().toString(36).substring(2, 6).toUpperCase();
    //   code.push({ code: `AD${rand1}` });
    // }
    // return await this.guestModel.insertMany(code);
    const addGuest = new this.guestModel(creatGuestCode);
    return addGuest.save();
  }
  async update(code: string, createGuestDetails: CreateGuestDetails) {
    const result = this.guestModel.findOneAndUpdate(
      { code: code },
      { $set: createGuestDetails },
      { new: true },
    );
    return result;
  }
}
