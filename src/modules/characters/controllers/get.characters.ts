/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { getConnection } from '../../../database/script/connection/connection';
/*  */

/* function getCharacters */
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
/*  */
