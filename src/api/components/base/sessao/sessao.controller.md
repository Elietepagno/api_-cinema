import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Sessao } from './sessao.routes';

export class SessaoController {
  public async list(req: Request, res: Response) {

    const sessao = await  await AppDataSource.manager.find(Sessao)

    res.status(200).json({ dados: sessao });
  }
}
