import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Venda } from './venda.entity';

export class VendaController {
  public async list(req: Request, res: Response) {

    const vendas = await  await AppDataSource.manager.find(Venda)

    res.status(200).json({ dados: vendas });
  }
}
