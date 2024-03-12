/* import modules */
import { pool } from '../connection/pool';
import { queries } from './queries';

/* function insertInfoInDatabase */
const insertInfoInDatabase = async () => {
  try {
    console.log('starting process');

    /* queries to data base */
    console.log('queries to data base');
    const villages = await queries.queryVillages(),
      clans = await queries.queryClans(),
      kekkeigenkai = await queries.queryKekkeigenkai(),
      characters = await queries.queryCharacters(),
      villageXCharacter = await queries.queryVillageXCharacter(),
      clanXCharacter = await queries.queryClanXCharacter(),
      kekkeigenkaiXCharacter = await queries.queryKekkeigenkaiXCharacter();
    /*  */

    /* insert data to database */
    console.log('insert data to database');
    await Promise.all([
      await pool.query(villages),
      await pool.query(clans),
      await pool.query(kekkeigenkai),
      await pool.query(characters),
      await pool.query(villageXCharacter),
      await pool.query(clanXCharacter),
      await pool.query(kekkeigenkaiXCharacter),
    ]);
    await pool.end();
    console.log('The data has been successfully inserted into the database');
    /*  */

    console.log('finished process');
  } catch (error) {
    /* errors */
    console.log(error);
  }
};
/*  */

insertInfoInDatabase();
