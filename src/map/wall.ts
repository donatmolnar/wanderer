'use strict';

import { Field } from "./field";

export class Wall extends Field{
  constructor() {
    super();
    this._imageUrl = document.getElementById('wall');
    this._isWalkable = false;
    this._isThisPlaceEmpty = false;
  }
}