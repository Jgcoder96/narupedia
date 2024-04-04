import { pool } from '../connection/pool';
import { methods } from './helpers/methods.helper';

const createDatabase = async () => {
  try {
    console.log('starting process');

    console.log('queries to data base');
    const villages = await methods.createQueryOfVillages(),
      clans = await methods.createQueryOfClans(),
      kekkeigenkai = await methods.createQueryOfKekkeigenkai(),
      characters = await methods.createQueryOfCharacters(),
      villageXCharacter = await methods.createQueryOfVillageXCharacters(),
      clanXCharacter = await methods.createQueryOfClanXCharacter(),
      kekkeigenkaiXCharacter =
        await methods.createQueryOfKekkeigenkaiXCharacters();

    console.log('insert data to database');
    await Promise.all([
      await pool.query(villages),
      await pool.query(clans),
      await pool.query(kekkeigenkai),
      await pool.query(characters[0]),
      await pool.query(characters[1]),
      await pool.query(villageXCharacter),
      await pool.query(clanXCharacter),
      await pool.query(kekkeigenkaiXCharacter),
    ]);
    await pool.end();
    console.log('The data has been successfully inserted into the database');
    console.log('finished process');
  } catch (error) {
    console.log(error);
  }
};

createDatabase();
