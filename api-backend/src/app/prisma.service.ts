// api-backend/src/app/prisma.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// @Injectable() permite que NestJS inyecte esta clase donde sea necesaria
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // onModuleInit() se ejecuta automáticamente cuando NestJS inicia el módulo
  async onModuleInit() {
    await this.$connect();
    console.log('📦 Conexión a Sentinel DB (PostgreSQL) establecida correctamente.');
  }
}
