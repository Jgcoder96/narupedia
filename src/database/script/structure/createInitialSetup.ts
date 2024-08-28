import { pool } from '../connection/pool';
import { queryInitialSetup } from './queries/QueryInitialSetup.querie';

export const createInitialSetup = async () => {
  try {
    console.log('starting process');
    const queries = queryInitialSetup;
    await Promise.all([
      await pool.query(queries[0]),
      await pool.query(queries[1]),
      await pool.query(queries[2]),
      await pool.query(queries[3]),
      await pool.query(queries[4]),
      await pool.query(queries[5]),
      await pool.query(queries[6]),
      await pool.query(queries[7]),
      await pool.query(queries[8]),
      await pool.query(queries[9]),
    ]);
    pool.end();
    console.log('finished process');
  } catch (error) {
    console.log(error);
  }
};

createInitialSetup();
