/* import modules */
import { app } from './server/app';

/* function main */
const main = (): void => {
  const port: string = app.get('port');
  app.listen(port);
  console.log(`Server in http://localhost:${port}`);
};
/*  */

main();
