import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'setting' })
@ObjectType()
export class SettingPomodoro {
  @PrimaryColumn('text', { unique: true })
  @Field(() => String)
  id: string;

  @Column('text', { unique: true })
  @Field(() => String)
  email: string;

  @Column('numeric')
  @Field(() => Int)
  pomodoro: number;

  @Column('numeric')
  @Field(() => Int)
  shortTimer: number;

  @Column('numeric')
  @Field(() => Int)
  longTimer: number;

  @Column('numeric')
  @Field(() => Int)
  intervals: number;
}
