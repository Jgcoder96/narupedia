import { getConnection } from '../../../database/connection';
import { Request, Response } from 'express';

export const getCharacters = async (_req: Request, res: Response) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      'SELECT usuario_id, nombre, apellidos, correo, edad FROM usuarios;',
    );
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
