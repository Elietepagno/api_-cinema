import { Router } from 'express';
import { PoltronaController } from './poltrona.controller';

export class PoltronaRoutes {
  private router: Router = Router();

  private controller: PoltronaController;

  constructor() {
    this.controller = new PoltronaController();
    this.init();
  }

  private init(): void {
    this.router.get('/', this.controller.list);
    // this.router.get('/info', this.controller.info);
  }

  public routes(): Router {
    return this.router;
  }
}