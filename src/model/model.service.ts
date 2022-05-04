import { ReturnModelType } from '@typegoose/typegoose';
import { ModelSchema } from './model.schema';
import { BoxGeometry, SphereGeometry } from './model.interface';

export default class ModelService {
    model: ReturnModelType<typeof ModelSchema>;

    constructor(model: ReturnModelType<typeof ModelSchema>) {
        this.model = model;
    }

    public async getModels(): Promise<ModelSchema[] | null> {
        return this.model.find();
    }

    public async getModelById(id: string): Promise<ModelSchema | null> {
        return this.model.findOne({ _id: id });
    }

    public async createModel(data: ModelSchema): Promise<ModelSchema> {
        const model = await this.model.create(data);

        return model;
    }

    public async updateModel(id: string, data: BoxGeometry | SphereGeometry): Promise<void> {
        await this.model.findByIdAndUpdate(id, data);
    }

    public async deleteModel(id: string): Promise<void> {
        await this.model.deleteOne({ _id: id });
    }
}
