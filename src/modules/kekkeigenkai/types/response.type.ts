import { RowDataPacket } from 'mysql2';

export type Response = {
  procced?: boolean;
  message?: string;
  data?: RowDataPacket[][];
};
