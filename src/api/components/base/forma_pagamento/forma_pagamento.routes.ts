import { Router } from 'express';
import { Forma_PagamentoController } from './forma_pagamento.controller';

export class Forma_PagamentoRoutes {
  private router: Router = Router();

  private controller: Forma_PagamentoController;

  constructor() {
    this.controller = new Forma_PagamentoController();
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