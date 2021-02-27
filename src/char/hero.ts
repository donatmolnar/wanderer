'use strict';

import { Character } from "./character";

export class Hero extends Character {
  protected _isDefetedBoss: boolean;

  constructor() {
    super();
    this._isDefetedBoss = false;
    this._yPosition = 0;
    this._xPosition = 0;
    this._level = 1;
    this._healthPoint = 20 + 3 * (Math.floor(Math.random() * 6) + 1);
    this._defensePoint = 2 * (Math.floor(Math.random() * 6) + 1);
    this._damagePoint = 5 + (Math.floor(Math.random() * 6) + 1);
  }

  public killedBoss(): void {
    this._isDefetedBoss ? this._isDefetedBoss = false : this._isDefetedBoss = true;
  }

  public get isDefetedBoss(): boolean {
    return this._isDefetedBoss;
  }
  
  public resetPosition(): void {
    this._xPosition = 0;
    this._yPosition = 0;
  }
}