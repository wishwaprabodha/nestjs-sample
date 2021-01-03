import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodosDTO } from './todos.dto';
import { TodosEntity } from './todos.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodosEntity)
    private todosRepository: Repository<TodosEntity>,
  ) {}

  async showAll() {
    return await this.todosRepository.find();
  }

  async create(data: TodosDTO) {
    const Todo = this.todosRepository.create(data);
    await this.todosRepository.save(data);
    return Todo;
  }

  async read(id: number) {
    return await this.todosRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: Partial<TodosDTO>) {
    await this.todosRepository.update({ id }, data);
    return await this.todosRepository.findOne({ id });
  }

  async destroy(id: number) {
    await this.todosRepository.delete({ id });
    return { deleted: true };
  }
}
