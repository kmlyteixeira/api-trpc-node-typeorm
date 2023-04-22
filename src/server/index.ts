import { AppDataSource } from '../db/data-source';
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { expressHandler } from 'trpc-playground/handlers/express'
import appRouter from './router';

const apiEndpoint = '/trpc';
const playgroundEndpoint = '/playground';

const runApp = async () => {

  const app = express();
  app.use(express.json());

  app.use(
    apiEndpoint,
    trpcExpress.createExpressMiddleware({
      router: appRouter,
    })
  );

  app.use(
    playgroundEndpoint,
    await expressHandler({
      trpcApiEndpoint: apiEndpoint,
      playgroundEndpoint,
      router: appRouter,
    })
  )

  app.listen(process.env.PORT, () => console.log('Server started on port 3000'));
};

AppDataSource.initialize().then(() => {
  runApp();
  console.log('Database initialized');
});