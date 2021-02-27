'use strict';

import { Field } from "./field";

export class Ground extends Field{

  constructor(){
    super();
    this._imageUrl = document.getElementById('floor');
    this._isWalkable = true;
    this._isThisPlaceEmpty = true;
  }
}