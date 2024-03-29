import { RowDataPacket } from 'mysql2';
export const convertStringToJSON = (
  arrayCharacter: RowDataPacket[],
  ...properties: string[]
) => {
  arrayCharacter.map((character) => {
    properties.map((element) => {
      character[element] = JSON.parse(character[element]);
    });
  });
};
