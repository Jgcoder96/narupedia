/* import modules */
import { pool } from '../connection/pool';
import { methods } from './helpers/methods.helper';

/* function insertInfoInDatabase */
const createDatabase = async () => {
  try {
    console.log('starting process');

    /* queries to data base */
    console.log('queries to data base');
    const villages = await methods.createQueryOfVillages(),
      clans = await methods.createQueryOfClans(),
      kekkeigenkai = await methods.createQueryOfKekkeigenkai(),
      characters = await methods.createQueryOfCharacters(),
      villageXCharacter = await methods.createQueryOfVillageXCharacters(),
      clanXCharacter = await methods.createQueryOfClanXCharacter(),
      kekkeigenkaiXCharacter =
        await methods.createQueryOfKekkeigenkaiXCharacters();
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

createDatabase();
