'use strict';

import { Character } from "./character";

export class Boss extends Character {
  constructor() {
    super();
    this._img = 'boss';
    this._isBoss = true;
    this._yPosition = Math.floor(Math.random() * 9 + 1) * 72;
    this._xPosition = Math.floor(Math.random() * 9 + 1) * 72;
    this._level = 1;
    this._healthPoint = 2 * this._level * (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    this._defensePoint = this._level / 2 * (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) / 2;
    this._damagePoint = this._level * (Math.floor(Math.random() * 6) + 1) + this._level;
  }
}