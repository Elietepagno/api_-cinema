import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Poltrona } from './poltrona.entity';

export class PoltronaController {
  public async list(req: Request, res: Response) {

    const poltronas = await  await AppDataSource.manager.find(Poltrona)

    res.status(200).json({ dados: poltronas });
  }
}
