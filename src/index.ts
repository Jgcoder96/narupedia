import { app } from './server/app';

((): void => {
  const port: string = app.get('port');
  app.listen(port);
  console.log(`Server in http://localhost:${port}`);
})();
