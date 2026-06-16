// api-backend/src/app/defects/defects.controller.ts
import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { DefectsService } from './defects.service';

// @Controller('defects') define el prefijo base de las rutas:
// todas las rutas de este controlador comenzarán con /api/defects
@Controller('defects')
export class DefectsController {
  constructor(private readonly defectsService: DefectsService) {}

  // POST /api/defects
  // Recibe el JSON del cuerpo de la petición y llama al servicio para crear
  @Post()
  create(@Body() body: { title: string; description: string; severity: string }) {
    return this.defectsService.reportDefect(body);
  }

  // GET /api/defects
  // Devuelve el listado completo de defectos registrados
  @Get()
  findAll() {
    return this.defectsService.getAllDefects();
  }

  // PATCH /api/defects/:id/status
  // Actualiza únicamente el campo 'status' de un defecto específico
  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.defectsService.updateStatus(id, status);
  }
}
