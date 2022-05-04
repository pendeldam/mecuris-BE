import { prop, getModelForClass } from '@typegoose/typegoose';
import { BoxGeometry, SphereGeometry } from './model.interface';

export class ModelSchema {
    @prop()
    public name!: string;

    @prop()
    public color!: string;

    @prop()
    public scale!: string;

    @prop()
    public geometry!: BoxGeometry | SphereGeometry;
}

export const Model = getModelForClass(ModelSchema);
