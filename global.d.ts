import type { PrismaClient } from '@prisma/client';
import type { MongoClient } from 'mongodb';

// Este código es para prevenir errores en el archivo prismadb.ts en lib
declare global {
  namespace globalThis {
    var prismadb: PrismaClient
  }
}