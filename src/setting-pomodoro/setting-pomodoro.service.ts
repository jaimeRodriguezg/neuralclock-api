import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSettingPomodoroInput } from './dto/create-setting-pomodoro.input';
import { UpdateSettingPomodoroInput } from './dto/update-setting-pomodoro.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SettingPomodoro } from './entities/setting-pomodoro.entity';
import { HandleErrorService } from '../common/handle-errors.service';

@Injectable()
export class SettingPomodoroService {
  constructor(
    @InjectRepository(SettingPomodoro)
    private readonly settingPomodoroRepository: Repository<SettingPomodoro>,
    private readonly handleErrorService: HandleErrorService,
  ) {}

  async create(
    createSettingPomodoroInput: CreateSettingPomodoroInput,
  ): Promise<SettingPomodoro> {
    const newSettingPomodoro = this.settingPomodoroRepository.create(
      createSettingPomodoroInput,
    );

    try {
      return await this.settingPomodoroRepository.save(newSettingPomodoro);
    } catch (error) {
      this.handleErrorService.handleErrorExceptions(
        'SettingPomodoro',
        'create',
        error,
      );
    }
  }

  async findAll(): Promise<SettingPomodoro[]> {
    try {
      const response = await this.settingPomodoroRepository.find();
      return response;
    } catch (error) {
      this.handleErrorService.handleErrorExceptions(
        'SettingPomodoro',
        'findAll',
        error,
      );
    }
  }

  async findOneById(id: string): Promise<SettingPomodoro> {
    try {
      const response = await this.settingPomodoroRepository.findOneByOrFail({
        email: id,
      });
      return response;
    } catch (error) {
      throw new NotFoundException(
        `[SettingPomodoro] - [findOneById]: ${id} not found`,
      );
    }
  }

  async update(
    id: string,
    updateSettingPomodoroInput: UpdateSettingPomodoroInput,
  ): Promise<SettingPomodoro> {
    try {
      const settingPomodoro = await this.settingPomodoroRepository.preload({
        ...updateSettingPomodoroInput,
        id,
      });

      return await this.settingPomodoroRepository.save(settingPomodoro);
    } catch (error) {
      this.handleErrorService.handleErrorExceptions(
        'SettingPomodoro',
        'update',
        error,
      );
    }
  }
}
