'use strict';

import { Character } from "../char/character";
import { Field } from "./field";
import { Ground } from "./ground";
import { Wall } from "./wall";


export class GameMap {
  protected _generatedMap: Field[][];
  protected _mapLevel: number;
  protected _numberOfSkeletons: number;
  protected _enemyList: Character[];

  constructor() {
    this._numberOfSkeletons = Math.floor(Math.random() * 3) + 3;
    this._mapLevel = 1;
    this._generatedMap = [];
    this._enemyList = [];
  }
  public resetMap(): void {
    this._generatedMap = [];
  }
  
  public randomSkeletonNumber(): void {
    this._numberOfSkeletons = Math.floor(Math.random() * 3) + 3;
  }

  public enemyListReplace(): void {
    this._enemyList = [];
  }

  public generateMap(mapPlan: number[][]): void {
    for (let i: number = 0; i < 10; i++) {
      this._generatedMap.push([]);
      for (let j: number = 0; j < 10; j++) {
        if (mapPlan[i][j] == 1) {
          this._generatedMap[i].push(new Wall);
        } else {
          this._generatedMap[i].push(new Ground);
        }
      }
    }
  }

  public addEnemyToList(enemy: Character): void {
    this._enemyList.push(enemy);
  }

  public get mapElements(): Field[][] {
    return this._generatedMap;
  }

  public get numberOfSkeletons(): number {
    return this._numberOfSkeletons;
  }

  public get generatedEnemyList(): Character[] {
    return this._enemyList;
  }

  public incraseMapLevel(): void {
    this._mapLevel++;
    for (let i = 0; i < this.generatedEnemyList.length; i++) {
      this.generatedEnemyList[i].levelUp();
    }
  }

  public get mapLevel(): number {
    return this._mapLevel;
  }
}