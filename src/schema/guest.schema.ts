import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class Guest {
  @Prop({ required: true })
  code: string;

  @Prop()
  name: string;

  @Prop()
  email: string;
}

export const guestSchema = SchemaFactory.createForClass(Guest);
