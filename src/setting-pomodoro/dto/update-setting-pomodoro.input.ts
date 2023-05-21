import { CreateSettingPomodoroInput } from './create-setting-pomodoro.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSettingPomodoroInput extends PartialType(
  CreateSettingPomodoroInput,
) {
  @Field(() => String)
  id: string;
}
