import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsPositive,
  IsInt,
} from 'class-validator';

@InputType()
export class CreateSettingPomodoroInput {
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  @Field(() => String)
  id: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Field(() => String)
  email: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  pomodoro: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  shortTimer: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  longTimer: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  intervals: number;
}
