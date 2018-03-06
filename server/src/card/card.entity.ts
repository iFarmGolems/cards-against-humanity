import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn() id: number;

  @Column() type: 'black' | 'white'

  @Column() blanks: number;
}
