import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SettingPomodoroService } from './setting-pomodoro.service';
import { SettingPomodoro } from './entities/setting-pomodoro.entity';
import { CreateSettingPomodoroInput } from './dto/create-setting-pomodoro.input';
import { UpdateSettingPomodoroInput } from './dto/update-setting-pomodoro.input';

@Resolver(() => SettingPomodoro)
export class SettingPomodoroResolver {
  constructor(
    private readonly settingPomodoroService: SettingPomodoroService,
  ) {}

  @Mutation(() => SettingPomodoro, { name: 'createSettingPomodoro' })
  async createSettingPomodoro(
    @Args('createSettingPomodoroInput')
    createSettingPomodoroInput: CreateSettingPomodoroInput,
  ): Promise<SettingPomodoro> {
    return this.settingPomodoroService.create(createSettingPomodoroInput);
  }

  @Query(() => [SettingPomodoro], { name: 'settingsPomodoro' })
  async findAll(): Promise<SettingPomodoro[]> {
    return this.settingPomodoroService.findAll();
  }

  @Query(() => SettingPomodoro, { name: 'settingPomodoro' })
  async findOne(
    @Args('id', { type: () => String }) id: string,
  ): Promise<SettingPomodoro> {
    return this.settingPomodoroService.findOneById(id);
  }

  @Mutation(() => SettingPomodoro, { name: 'updateSettingPomodoro' })
  async updateSettingPomodoro(
    @Args('updateSettingPomodoroInput')
    updateSettingPomodoroInput: UpdateSettingPomodoroInput,
  ): Promise<SettingPomodoro> {
    return this.settingPomodoroService.update(
      updateSettingPomodoroInput.id,
      updateSettingPomodoroInput,
    );
  }
}
