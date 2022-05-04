import { Router } from 'express';
import ModelController from './model.controller';
import ModelService from './model.service';
import { Model } from './model.schema';

export default class ModelRoutes {
    public router = Router();
    private modelService: ModelService;
    private modelController: ModelController;

    constructor() {
        this.modelService = new ModelService(Model);
        this.modelController = new ModelController(this.modelService);
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.modelController.getModels);
        this.router.get('/:id', this.modelController.getModelById);
        this.router.patch('/:id', this.modelController.updateModel);
        this.router.delete('/:id', this.modelController.deleteModel);
    }
}
