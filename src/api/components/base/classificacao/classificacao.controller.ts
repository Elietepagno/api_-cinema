import {validate} from 'class-validator';
import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Classificacao } from './classificacao.entity';

export class ClassificacaoController {
  public async list(req: Request, res: Response) {

    const classificacao = await  await AppDataSource.manager.find(Classificacao)

    res.status(200).json({ dados: classificacao });
  }
  
}