import { Test, TestingModule } from '@nestjs/testing';
import { SettingPomodoroResolver } from './setting-pomodoro.resolver';
import { SettingPomodoroService } from './setting-pomodoro.service';

describe('SettingPomodoroResolver', () => {
  let resolver: SettingPomodoroResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SettingPomodoroResolver, SettingPomodoroService],
    }).compile();

    resolver = module.get<SettingPomodoroResolver>(SettingPomodoroResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
