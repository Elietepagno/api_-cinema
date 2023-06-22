import { Request, Response } from 'express';
import { Filme } from './filme.entity';
import { AppDataSource } from '../../../../config/database/mysql-datasource.config';

export class FilmeController {
  public async list(req: Request, res: Response) {
    const filme = await AppDataSource.manager.find(Filme)

    res.status(200).json({ dados: filme });
  }
}