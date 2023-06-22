import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Ingresso } from './ingresso.entity';

export class IngresssoController {
  public async list(req: Request, res: Response) {

    const ingressos = await  await AppDataSource.manager.find(Ingresso)

    res.status(200).json({ dados: ingressos });
  }
}
