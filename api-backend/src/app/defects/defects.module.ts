// api-backend/src/app/defects/defects.module.ts
import { Module } from '@nestjs/common';
import { DefectsController } from './defects.controller';
import { DefectsService } from './defects.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [DefectsController],          // Registra el controlador (rutas HTTP)
  providers: [DefectsService, PrismaService], // Registra los servicios inyectables
})
export class DefectsModule {}
