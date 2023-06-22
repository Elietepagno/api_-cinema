import { Request, Response } from 'express';
import { Cliente } from './cliente.entity';
import { AppDataSource } from '../../../../config/database/mysql-datasource.config';

export class ClienteController {
  public async list(req: Request, res: Response) {

    const cliente = await AppDataSource.manager.find(Cliente)

    res.status(200).json({ dados: cliente });
  }
}