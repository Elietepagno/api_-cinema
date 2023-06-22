import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Sala } from './sala.entity';

export class SalaController {
  public async list(req: Request, res: Response) {

    const salas = await  await AppDataSource.manager.find(Sala)

    res.status(200).json({ dados: salas });
  }
}
