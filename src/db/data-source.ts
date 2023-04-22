import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entities/User'

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  entities: [User],
  migrations: [`${__dirname}/src/**/migrations/*.{ts,js}`],
})