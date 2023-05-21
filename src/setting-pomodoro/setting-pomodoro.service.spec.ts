import { Test, TestingModule } from '@nestjs/testing';
import { SettingPomodoroService } from './setting-pomodoro.service';

describe('SettingPomodoroService', () => {
  let service: SettingPomodoroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SettingPomodoroService],
    }).compile();

    service = module.get<SettingPomodoroService>(SettingPomodoroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
