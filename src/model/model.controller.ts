import { Request, Response } from 'express';
import ModelService from './model.service';

export default class ModelController {
    private modelService: ModelService;

    constructor(modelService: ModelService) {
        this.modelService = modelService;
    }

    public getModels = async (req: Request, res: Response): Promise<Response> => {
        try {
            const models = await this.modelService.getModels();

            return res.status(200).json({ models });
        } catch ({ name, message }) {
            return res.status(500).json({ error: name, msg: message });
        }
    };

    public getModelById = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;

            const model = await this.modelService.getModelById(id);

            if (!model) {
                return res.status(404).json({ msg: 'model not found' });
            }

            return res.status(200).json({ model });
        } catch ({ name, message }) {
            return res.status(500).json({ error: name, msg: message });
        }
    };

    public createModel = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { name, shape } = req.body;
            const model = await this.modelService.createModel({ name, ...shape });

            return res.status(201).json({ model });
        } catch ({ name, message }) {
            return res.status(500).json({ error: name, msg: message });
        }
    };

    public updateModel = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;

            const model = await this.modelService.getModelById(id);

            if (!model) {
                return res.status(404).json({ msg: 'model not found' });
            }

            await this.modelService.updateModel(id, { ...req.body });

            return res.status(200).json({ msg: 'model updated' });
        } catch ({ name, message }) {
            return res.status(500).json({ error: name, msg: message });
        }
    };

    public deleteModel = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;

            const model = await this.modelService.getModelById(id);

            if (!model) {
                return res.status(404).json({ msg: 'model not found' });
            }

            await this.modelService.deleteModel(id);

            return res.status(200).json({ msg: 'model deleted' });
        } catch ({ name, message }) {
            return res.status(500).json({ error: name, msg: message });
        }
    };
}
