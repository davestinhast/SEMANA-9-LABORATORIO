// api-backend/src/app/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DefectsModule } from './defects/defects.module'; // ← AÑADIDO

@Module({
  imports: [DefectsModule],    // ← MÓDULO DE DEFECTOS REGISTRADO
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
