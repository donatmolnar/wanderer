'use strict';

export abstract class Field {
  protected _imageUrl: any;
  protected _isWalkable: boolean;
  protected _isThisPlaceEmpty: boolean;
  protected _xCoordinate: number;
  protected _yCoordinate: number;

  constructor() {
    this._xCoordinate = 0;
    this._yCoordinate = 0;
  }

  public get imageUrl(): any {
    return this._imageUrl
  }

  public get xCoordinate(): number {
    return this._xCoordinate;
  }

  public get yCoordinate(): number {
    return this._yCoordinate;
  }

  public xCoordinateChange(x: number): void {
    this._xCoordinate = x;
  }

  public yCoordinateChange(y: number): void {
    this._yCoordinate = y;
  }

  public get isWalkable(): boolean {
    return this._isWalkable;
  }

  public get isThisPlaceEmpty(): boolean{
    return this._isThisPlaceEmpty;
  }

  public walkableChanger(): void {
     this._isWalkable ? this._isWalkable = false : this._isWalkable = true;
  }
}