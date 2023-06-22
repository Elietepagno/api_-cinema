import { Router } from 'express';
import { SessaoController } from './sessao.controller';

export class SessaoRoutes {
  private router: Router = Router();

  private controller: SessaoController;

  constructor() {
    this.controller = new SessaoController();
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
