// api-backend/src/app/defects/defects.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DefectsService {
  // Inyección de dependencia: NestJS proveerá el PrismaService automáticamente
  constructor(private prisma: PrismaService) {}

  // Método 1: Registrar un nuevo defecto en la base de datos
  async reportDefect(data: { title: string; description: string; severity: string }) {
    return this.prisma.defect.create({
      data: {
        title: data.title,
        description: data.description,
        severity: data.severity,
        // El campo 'status' se omite: Prisma usará el valor por defecto 'OPEN'
      },
    });
  }

  // Método 2: Obtener todos los defectos registrados (los más recientes primero)
  async getAllDefects() {
    return this.prisma.defect.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  // Método 3: Actualizar el estado de un defecto (gestión del ciclo de vida)
  async updateStatus(id: string, newStatus: string) {
    return this.prisma.defect.update({
      where: { id },
      data: { status: newStatus },
    });
  }
}
