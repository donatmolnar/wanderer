'use strict';

export abstract class Character {
  protected _healthPoint: number;
  protected _damagePoint: number;
  protected _defensePoint: number;
  protected _xPosition: number;
  protected _yPosition: number;
  protected _level: number;
  protected _hasKey: boolean;
  protected _isBoss: boolean;
  protected _img: string;

  constructor() {
    this._xPosition = 0;
    this._yPosition = 0;
    this._hasKey = false;
  };

  public get healthPoint(): number {
    return this._healthPoint;
  }

  public get damagePoint(): number {
    return this._damagePoint;
  }

  public get defensePoint(): number {
    return this._defensePoint;
  }

  public  healthPointChange(count: number) {
    this._healthPoint += count;
  }

  public set damagePoint(count: number) {
    this._damagePoint = count;
  }

  public set defensePoint(count: number) {
    this._defensePoint = this.defensePoint;
  }

  public xPositionChange(xCoordinate: number) {
    this._xPosition += xCoordinate;
  }

  public get xPosition(): number {
    return this._xPosition;
  }

  public yPositionChange(yCoordinate: number) {
    this._yPosition += yCoordinate;
  }

  public get yPosition(): number {
    return this._yPosition;
  }

  public giveKey(): void {
    this._hasKey ? this._hasKey = false : this._hasKey = true;
  }

  public strike(enemy: Character): void {
    let strikeDamage: number = this._damagePoint + (Math.floor(Math.random() * 5) + 1) * 2;
    if (strikeDamage > enemy._defensePoint) {
      enemy.healthPointChange(-strikeDamage + enemy.defensePoint);
    }
  }

  public get hasKey(): boolean {
    return this._hasKey;
  }

  public get isBoss(): boolean {
    return this._isBoss;
  }

  public levelUp() : void {
    this._level++;
  }
 
  public get img(): string {
    return this._img;
  }
}