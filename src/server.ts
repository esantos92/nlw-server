import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client'

const app = Fastify();
const prisma = new PrismaClient();
const port = 3333;

app.get('/', async () => {
  const habits = await prisma.habit.findMany()
  return habits;
})

app.listen({
  port: port,
}).then(() => {
  console.log(`Runnig server on http://localhost:${port}`)
});
