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
    return this.guestModel.find();
  }

  findOne(code: string) {
    const guest = this.guestModel.findOne({
      code: code,
    });
    return guest;
  }

  create(creatGuestCode: CreatGuestCode) {
    // const code: CreatGuestCode[] = [];
    // for (let i = 100; i <= 200; i++) {
    //   code.push({ code: `AD${i}` });
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
