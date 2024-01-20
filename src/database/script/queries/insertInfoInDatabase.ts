import { getConnection } from '../conecction/connection';
import { queryVillages } from './queryVillages';
import { queryClans } from './queryClans';
import { queryKekkeigenkai } from './queryKekkeigenkai';
import { queryCharacters } from './queryCharacters';
import { queryClanXCharacter } from './queryClanXCharacter';
import { queryVillageXCharacter } from './queryVillageXCharacter';
import { queryKekkeigenkaiXCharacter } from './queryKekkeigenkaiXCharacter';

const insertInfoInDatabase = async () => {
  try {
    const connection = await getConnection();
    const villages = await queryVillages();
    const clans = await queryClans();
    const kekkeigenkai = await queryKekkeigenkai();
    const characters = await queryCharacters();
    const villageXCharacter = await queryVillageXCharacter();
    const clanXCharacter = await queryClanXCharacter();
    const kekkeigenkaiXCharacter = await queryKekkeigenkaiXCharacter();
    await connection.query(villages);
    await connection.query(clans);
    await connection.query(kekkeigenkai);
    await connection.query(characters);
    await connection.query(villageXCharacter);
    await connection.query(clanXCharacter);
    await connection.query(kekkeigenkaiXCharacter);
  } catch (error) {
    console.log(error);
  }
};

insertInfoInDatabase();
