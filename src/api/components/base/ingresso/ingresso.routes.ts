import { Router } from 'express';
import { IngressoController } from './ingresso.controller';

export class IngressoRoutes {
  private router: Router = Router();

  private controller: IngressoController;

  constructor() {
    this.controller = new IngressoController();
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