import { Module } from '@nestjs/common';
import { SettingPomodoroService } from './setting-pomodoro.service';
import { SettingPomodoroResolver } from './setting-pomodoro.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingPomodoro } from './entities/setting-pomodoro.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  providers: [SettingPomodoroResolver, SettingPomodoroService],
  imports: [TypeOrmModule.forFeature([SettingPomodoro]), CommonModule],
})
export class SettingPomodoroModule {}
