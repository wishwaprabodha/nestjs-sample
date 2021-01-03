/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosDTO } from './todos.dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  async showAllTodos() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.todosService.showAll(),
    };
  }

  @Post()
  async createTodos(@Body() data: TodosDTO) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Todo added successfully',
      data: await this.todosService.create(data),
    };
  }

  @Get(':id')
  async readTodo(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.todosService.read(id),
    };
  }

  @Patch(':id')
  async uppdateTodo(@Param('id') id: number, @Body() data: Partial<TodosDTO>) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Todo update successfully',
      data: await this.todosService.update(id, data),
    };
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: number) {
    await this.todosService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Todo deleted successfully',
    };
  }
}
