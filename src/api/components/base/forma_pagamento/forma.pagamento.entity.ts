import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Forma_Pagamento } from './forma_pagamento.entity';

export class Forma_PagamentoController {
  public async list(req: Request, res: Response) {

    const forma_pagamento = await  await AppDataSource.manager.find(Forma_Pagamento)

    res.status(200).json({ dados: forma_pagamento });
  }
}
