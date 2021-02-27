/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/char/boss.ts":
/*!**************************!*\
  !*** ./src/char/boss.ts ***!
  \**************************/
/*! exports provided: Boss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boss", function() { return Boss; });
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ "./src/char/character.ts");


class Boss extends _character__WEBPACK_IMPORTED_MODULE_0__["Character"] {
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


/***/ }),

/***/ "./src/char/character.ts":
/*!*******************************!*\
  !*** ./src/char/character.ts ***!
  \*******************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });

class Character {
    constructor() {
        this._xPosition = 0;
        this._yPosition = 0;
        this._hasKey = false;
    }
    ;
    get healthPoint() {
        return this._healthPoint;
    }
    get damagePoint() {
        return this._damagePoint;
    }
    get defensePoint() {
        return this._defensePoint;
    }
    healthPointChange(count) {
        this._healthPoint += count;
    }
    set damagePoint(count) {
        this._damagePoint = count;
    }
    set defensePoint(count) {
        this._defensePoint = this.defensePoint;
    }
    xPositionChange(xCoordinate) {
        this._xPosition += xCoordinate;
    }
    get xPosition() {
        return this._xPosition;
    }
    yPositionChange(yCoordinate) {
        this._yPosition += yCoordinate;
    }
    get yPosition() {
        return this._yPosition;
    }
    giveKey() {
        this._hasKey ? this._hasKey = false : this._hasKey = true;
    }
    strike(enemy) {
        let strikeDamage = this._damagePoint + (Math.floor(Math.random() * 5) + 1) * 2;
        if (strikeDamage > enemy._defensePoint) {
            enemy.healthPointChange(-strikeDamage + enemy.defensePoint);
        }
    }
    get hasKey() {
        return this._hasKey;
    }
    get isBoss() {
        return this._isBoss;
    }
    levelUp() {
        this._level++;
    }
    get img() {
        return this._img;
    }
}


/***/ }),

/***/ "./src/char/hero.ts":
/*!**************************!*\
  !*** ./src/char/hero.ts ***!
  \**************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ "./src/char/character.ts");


class Hero extends _character__WEBPACK_IMPORTED_MODULE_0__["Character"] {
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
    killedBoss() {
        this._isDefetedBoss ? this._isDefetedBoss = false : this._isDefetedBoss = true;
    }
    get isDefetedBoss() {
        return this._isDefetedBoss;
    }
    resetPosition() {
        this._xPosition = 0;
        this._yPosition = 0;
    }
}


/***/ }),

/***/ "./src/char/skeleton.ts":
/*!******************************!*\
  !*** ./src/char/skeleton.ts ***!
  \******************************/
/*! exports provided: Skeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return Skeleton; });
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ "./src/char/character.ts");


class Skeleton extends _character__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    constructor() {
        super();
        this._img = 'skeleton';
        this._isBoss = false;
        this._yPosition = Math.floor(Math.random() * 9 + 1) * 72;
        this._xPosition = Math.floor(Math.random() * 9 + 1) * 72;
        this._hasKey = false;
        this._level = 1;
        this._healthPoint = 2 * this._level * (Math.floor(Math.random() * 6) + 1);
        this._defensePoint = this._level / 2 * (Math.floor(Math.random() * 6) + 1);
        this._damagePoint = this._level * (Math.floor(Math.random() * 6) + 1);
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _char_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./char/hero */ "./src/char/hero.ts");
/* harmony import */ var _char_boss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./char/boss */ "./src/char/boss.ts");
/* harmony import */ var _char_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./char/skeleton */ "./src/char/skeleton.ts");
/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map */ "./src/map/map.ts");
/* harmony import */ var _map_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/maps */ "./src/map/maps.ts");






const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");
let checkingField;
let hero = new _char_hero__WEBPACK_IMPORTED_MODULE_0__["Hero"]();
let map = new _map_map__WEBPACK_IMPORTED_MODULE_3__["GameMap"]();
map.generateMap(Object(_map_maps__WEBPACK_IMPORTED_MODULE_4__["selectMap"])());
function addSkeleton() {
    let skeleton = new _char_skeleton__WEBPACK_IMPORTED_MODULE_2__["Skeleton"]();
    if (map.mapElements[skeleton.yPosition / 72][skeleton.xPosition / 72].isWalkable) {
        map.addEnemyToList(skeleton);
        ctx.drawImage(document.getElementById("skeleton"), skeleton.xPosition, skeleton.yPosition);
        map.mapElements[skeleton.yPosition / 72][skeleton.xPosition / 72].walkableChanger();
    }
    else {
        addSkeleton();
    }
}
function levelChecker() {
    if (hero.hasKey && hero.isDefetedBoss) {
        if (map.mapLevel == 10) {
            ctx.shadowColor = 'rgba(0, 0, 0, .9)';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 5;
            ctx.shadowOffsetY = 5;
            ctx.drawImage(document.getElementById("princess2"), 950, 20);
            ctx.drawImage(document.getElementById("princess"), 1200, 60);
            ctx.fillStyle = "#ff4d00";
            ctx.font = "30px Impact";
            ctx.shadowColor = 'rgba(0, 0, 0, .9)';
            ctx.shadowBlur = 8;
            ctx.shadowOffsetX = 5;
            ctx.shadowOffsetY = 5;
            ctx.fillText(`🥳 You have saved the princesses! 🥳`, 1000, 550);
            ctx.fillText(`👉 Press [ F5 ] to replay. 👈`, 1050, 600);
        }
        else {
            map.mapElements[0][0].walkableChanger();
            alert(`\n✔️ Level ${map.mapLevel} completed!\n\n🌍 Let's explore a new one!`);
            generateGame();
        }
    }
}
function generateBoss() {
    let boss = new _char_boss__WEBPACK_IMPORTED_MODULE_1__["Boss"]();
    if (map.mapElements[boss.yPosition / 72][boss.xPosition / 72].isWalkable) {
        map.addEnemyToList(boss);
        ctx.drawImage(document.getElementById("boss"), boss.xPosition, boss.yPosition);
        map.mapElements[boss.yPosition / 72][boss.xPosition / 72].walkableChanger();
    }
    else {
        generateBoss();
    }
}
function drawInfo() {
    ctx.fillStyle = "#ffc85c";
    ctx.fillRect(740, 10, 240, 690);
    ctx.fillStyle = "black";
    ctx.font = "bold 20px serif";
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.fillText(`Level:  ${map.mapLevel}`, 760, 50);
    let medals = '';
    for (let i = 0; i < map.mapLevel - 1; i++) {
        medals += '🎖️';
    }
    ctx.fillText(`${medals}`, 750, 80);
    ctx.fillText(`❤️ Health Point:   ${hero.healthPoint}`, 750, 120);
    ctx.fillText(`⚔️ Strike Point:    ${hero.damagePoint}`, 750, 155);
    ctx.fillText(`🛡️ Defense Point: ${hero.defensePoint}`, 750, 190);
    ctx.fillText(`Get the key:`, 760, 250);
    if (hero.hasKey) {
        ctx.drawImage(document.getElementById("key"), 920, 230, 20, 30);
    }
    ctx.fillText(`Defeat the Boss:`, 760, 280);
    if (hero.isDefetedBoss) {
        ctx.drawImage(document.getElementById("skull"), 920, 260, 30, 30);
    }
    ctx.drawImage(document.getElementById("wasd"), 780, 600, 150, 90);
}
function moveChar(char, img, horizontal, vertical) {
    drawInfo();
    char.yPositionChange(72 * vertical);
    char.xPositionChange(72 * horizontal);
    if (char.yPosition < 0 ||
        char.yPosition > 680 ||
        char.xPosition < 0 ||
        char.xPosition > 680) {
        char.yPositionChange(-72 * vertical);
        char.xPositionChange(-72 * horizontal);
        ctx.drawImage(document.getElementById("floor"), char.xPosition, char.yPosition);
        ctx.drawImage(document.getElementById(img), char.xPosition, char.yPosition);
    }
    else {
        checkingField = map.mapElements[char.yPosition / 72][char.xPosition / 72];
        if (checkingField.isWalkable) {
            ctx.drawImage(document.getElementById("floor"), char.xPosition + 72 * -1 * horizontal, char.yPosition + 72 * -1 * vertical);
            ctx.drawImage(document.getElementById(img), char.xPosition, char.yPosition);
            map.mapElements[char.yPosition / 72][char.xPosition / 72].walkableChanger();
            map.mapElements[char.yPosition / 72 - vertical][char.xPosition / 72 - horizontal].walkableChanger();
        }
        else {
            char.yPositionChange(-72 * vertical);
            char.xPositionChange(-72 * horizontal);
            ctx.drawImage(document.getElementById("floor"), char.xPosition, char.yPosition);
            ctx.drawImage(document.getElementById(img), char.xPosition, char.yPosition);
            for (let i = 0; i < map.generatedEnemyList.length; i++) {
                if (map.generatedEnemyList[i].xPosition == checkingField.xCoordinate &&
                    map.generatedEnemyList[i].yPosition == checkingField.yCoordinate) {
                    ctx.drawImage(document.getElementById("swords"), 800, 400, 100, 100);
                    ctx.fillStyle = "black";
                    ctx.font = "bold 16px serif";
                    ctx.fillText(`Press [Space] to attack.`, 780, 530);
                }
            }
        }
    }
}
function generateGame() {
    map.resetMap();
    map.generateMap(Object(_map_maps__WEBPACK_IMPORTED_MODULE_4__["selectMap"])());
    hero.resetPosition();
    hero.killedBoss();
    hero.giveKey();
    //generate map
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            map.mapElements[i][j].xCoordinateChange(72 * j);
            map.mapElements[i][j].yCoordinateChange(72 * i);
            if (map.mapElements[i][j].isWalkable) {
                ctx.drawImage(document.getElementById("floor"), 72 * j, 72 * i);
            }
            else {
                ctx.drawImage(document.getElementById("wall"), 72 * j, 72 * i);
            }
        }
    }
    //generate characters
    ctx.drawImage(document.getElementById("hero-down"), hero.xPosition, hero.yPosition);
    map.randomSkeletonNumber();
    map.enemyListReplace();
    for (let i = 0; i < map.numberOfSkeletons; i++) {
        addSkeleton();
    }
    map.generatedEnemyList[0].giveKey();
    generateBoss();
    map.incraseMapLevel();
    //info window
    drawInfo();
}
window.onload = function () {
    //generate map
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            map.mapElements[i][j].xCoordinateChange(72 * j);
            map.mapElements[i][j].yCoordinateChange(72 * i);
            if (map.mapElements[i][j].isWalkable) {
                ctx.drawImage(document.getElementById("floor"), 72 * j, 72 * i);
            }
            else {
                ctx.drawImage(document.getElementById("wall"), 72 * j, 72 * i);
            }
        }
    }
    //generate characters
    ctx.drawImage(document.getElementById("hero-down"), hero.xPosition, hero.yPosition);
    map.mapElements[0][0].walkableChanger();
    for (let i = 0; i < map.numberOfSkeletons; i++) {
        addSkeleton();
    }
    map.generatedEnemyList[0].giveKey();
    generateBoss();
    //info window
    drawInfo();
};
function onKeyPress(event) {
    switch (event.keyCode) {
        //move up - Arrow Up
        case 38: {
            moveChar(hero, "hero-up", 0, -1);
            break;
        }
        //move down - Arrow Down
        case 40: {
            moveChar(hero, "hero-down", 0, 1);
            break;
        }
        //move left - Arrow Left
        case 37: {
            moveChar(hero, "hero-left", -1, 0);
            break;
        }
        //move right - Arrow Right
        case 39: {
            moveChar(hero, "hero-right", 1, 0);
            break;
        }
        //move up - W
        case 87: {
            moveChar(hero, "hero-up", 0, -1);
            break;
        }
        //move down - S
        case 83: {
            moveChar(hero, "hero-down", 0, 1);
            break;
        }
        //move left - A
        case 65: {
            moveChar(hero, "hero-left", -1, 0);
            break;
        }
        //move right - D
        case 68: {
            moveChar(hero, "hero-right", 1, 0);
            break;
        }
        case 32: {
            console.log(map.generatedEnemyList);
            console.log(checkingField);
            for (let i = 0; i < map.generatedEnemyList.length; i++) {
                if (map.generatedEnemyList[i].xPosition == checkingField.xCoordinate &&
                    map.generatedEnemyList[i].yPosition == checkingField.yCoordinate) {
                    while (map.generatedEnemyList[i].healthPoint > 0) {
                        if (hero.healthPoint <= 0) {
                            ctx.font = "bold 40px serif";
                            ctx.fillStyle = "darkred";
                            ctx.shadowColor = 'rgba(0, 0, 0, .9)';
                            ctx.shadowBlur = 8;
                            ctx.shadowOffsetX = 2;
                            ctx.shadowOffsetY = 2;
                            ctx.fillText(`💀 Game Over! 💀`, 200, 400);
                            ctx.fillText(`Press [ F5 ] to replay.`, 180, 450);
                            break;
                        }
                        hero.strike(map.generatedEnemyList[i]);
                        if (map.generatedEnemyList[i].healthPoint > 0) {
                            map.generatedEnemyList[i].strike(hero);
                        }
                        else {
                            if (map.generatedEnemyList[i].hasKey) {
                                hero.giveKey();
                            }
                            if (map.generatedEnemyList[i].isBoss) {
                                hero.killedBoss();
                            }
                            ctx.drawImage(document.getElementById("floor"), map.generatedEnemyList[i].xPosition, map.generatedEnemyList[i].yPosition);
                            map.mapElements[checkingField.yCoordinate / 72][checkingField.xCoordinate / 72].walkableChanger();
                            map.generatedEnemyList.splice(i, 1);
                            drawInfo();
                            levelChecker();
                            break;
                        }
                    }
                }
            }
        }
    }
}
document.body.addEventListener("keydown", onKeyPress);


/***/ }),

/***/ "./src/map/field.ts":
/*!**************************!*\
  !*** ./src/map/field.ts ***!
  \**************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });

class Field {
    constructor() {
        this._xCoordinate = 0;
        this._yCoordinate = 0;
    }
    get imageUrl() {
        return this._imageUrl;
    }
    get xCoordinate() {
        return this._xCoordinate;
    }
    get yCoordinate() {
        return this._yCoordinate;
    }
    xCoordinateChange(x) {
        this._xCoordinate = x;
    }
    yCoordinateChange(y) {
        this._yCoordinate = y;
    }
    get isWalkable() {
        return this._isWalkable;
    }
    get isThisPlaceEmpty() {
        return this._isThisPlaceEmpty;
    }
    walkableChanger() {
        this._isWalkable ? this._isWalkable = false : this._isWalkable = true;
    }
}


/***/ }),

/***/ "./src/map/ground.ts":
/*!***************************!*\
  !*** ./src/map/ground.ts ***!
  \***************************/
/*! exports provided: Ground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ground", function() { return Ground; });
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field */ "./src/map/field.ts");


class Ground extends _field__WEBPACK_IMPORTED_MODULE_0__["Field"] {
    constructor() {
        super();
        this._imageUrl = document.getElementById('floor');
        this._isWalkable = true;
        this._isThisPlaceEmpty = true;
    }
}


/***/ }),

/***/ "./src/map/map.ts":
/*!************************!*\
  !*** ./src/map/map.ts ***!
  \************************/
/*! exports provided: GameMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMap", function() { return GameMap; });
/* harmony import */ var _ground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ground */ "./src/map/ground.ts");
/* harmony import */ var _wall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wall */ "./src/map/wall.ts");



class GameMap {
    constructor() {
        this._numberOfSkeletons = Math.floor(Math.random() * 3) + 3;
        this._mapLevel = 1;
        this._generatedMap = [];
        this._enemyList = [];
    }
    resetMap() {
        this._generatedMap = [];
    }
    randomSkeletonNumber() {
        this._numberOfSkeletons = Math.floor(Math.random() * 3) + 3;
    }
    enemyListReplace() {
        this._enemyList = [];
    }
    generateMap(mapPlan) {
        for (let i = 0; i < 10; i++) {
            this._generatedMap.push([]);
            for (let j = 0; j < 10; j++) {
                if (mapPlan[i][j] == 1) {
                    this._generatedMap[i].push(new _wall__WEBPACK_IMPORTED_MODULE_1__["Wall"]);
                }
                else {
                    this._generatedMap[i].push(new _ground__WEBPACK_IMPORTED_MODULE_0__["Ground"]);
                }
            }
        }
    }
    addEnemyToList(enemy) {
        this._enemyList.push(enemy);
    }
    get mapElements() {
        return this._generatedMap;
    }
    get numberOfSkeletons() {
        return this._numberOfSkeletons;
    }
    get generatedEnemyList() {
        return this._enemyList;
    }
    incraseMapLevel() {
        this._mapLevel++;
        for (let i = 0; i < this.generatedEnemyList.length; i++) {
            this.generatedEnemyList[i].levelUp();
        }
    }
    get mapLevel() {
        return this._mapLevel;
    }
}


/***/ }),

/***/ "./src/map/maps.ts":
/*!*************************!*\
  !*** ./src/map/maps.ts ***!
  \*************************/
/*! exports provided: selectMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMap", function() { return selectMap; });

let one = [
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0]
];
let two = [
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 1, 1],
    [0, 1, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 0, 0, 1, 0]
];
let three = [
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let four = [
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0]
];
let five = [
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1]
];
let six = [
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0]
];
let seven = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let eight = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let nine = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let ten = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
];
let maps = [one, two, three, four, five, six, seven, eight, nine, ten];
let level = -1;
function selectMap() {
    level++;
    return maps[level];
}


/***/ }),

/***/ "./src/map/wall.ts":
/*!*************************!*\
  !*** ./src/map/wall.ts ***!
  \*************************/
/*! exports provided: Wall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wall", function() { return Wall; });
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field */ "./src/map/field.ts");


class Wall extends _field__WEBPACK_IMPORTED_MODULE_0__["Field"] {
    constructor() {
        super();
        this._imageUrl = document.getElementById('wall');
        this._isWalkable = false;
        this._isThisPlaceEmpty = false;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXIvYm9zcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhci9jaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXIvaGVyby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhci9za2VsZXRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC9maWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL2dyb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL21hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL21hcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC93YWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFB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QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FBQyxDQUFDO0FBRWxDLElBQUksR0FBRyxHQUFlO0lBQ3BCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQUMsQ0FBQztBQUVsQyxJQUFJLEtBQUssR0FBZTtJQUN0QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUFDLENBQUM7QUFFbEMsSUFBSSxJQUFJLEdBQWU7SUFDckIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FBQyxDQUFDO0FBRWxDLElBQUksSUFBSSxHQUFlO0lBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQUMsQ0FBQztBQUVsQyxJQUFJLEdBQUcsR0FBZTtJQUNwQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUFDLENBQUM7QUFFbEMsSUFBSSxLQUFLLEdBQWU7SUFDdEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FBQyxDQUFDO0FBRWxDLElBQUksS0FBSyxHQUFlO0lBQ3RCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQUMsQ0FBQztBQUVsQyxJQUFJLElBQUksR0FBZTtJQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUFDLENBQUM7QUFFbEMsSUFBSSxHQUFHLEdBQWU7SUFDcEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FBQyxDQUFDO0FBRWxDLElBQUksSUFBSSxHQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRXJGLElBQUksS0FBSyxHQUFXLENBQUUsQ0FBQyxDQUFDO0FBRWpCO0lBQ0wsS0FBSyxFQUFFLENBQUM7SUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDaklEO0FBQUE7QUFBQTtBQUFhO0FBRW1CO0FBRXpCLFVBQVcsU0FBUSw0Q0FBSztJQUM3QjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztDQUNGIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSBcIi4vY2hhcmFjdGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9zcyBleHRlbmRzIENoYXJhY3RlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5faW1nID0gJ2Jvc3MnO1xyXG4gICAgdGhpcy5faXNCb3NzID0gdHJ1ZTtcclxuICAgIHRoaXMuX3lQb3NpdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkgKyAxKSAqIDcyO1xyXG4gICAgdGhpcy5feFBvc2l0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSArIDEpICogNzI7XHJcbiAgICB0aGlzLl9sZXZlbCA9IDE7XHJcbiAgICB0aGlzLl9oZWFsdGhQb2ludCA9IDIgKiB0aGlzLl9sZXZlbCAqIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDEpICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMSk7XHJcbiAgICB0aGlzLl9kZWZlbnNlUG9pbnQgPSB0aGlzLl9sZXZlbCAvIDIgKiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxKSArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDEpIC8gMjtcclxuICAgIHRoaXMuX2RhbWFnZVBvaW50ID0gdGhpcy5fbGV2ZWwgKiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxKSArIHRoaXMuX2xldmVsO1xyXG4gIH1cclxufSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDaGFyYWN0ZXIge1xyXG4gIHByb3RlY3RlZCBfaGVhbHRoUG9pbnQ6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX2RhbWFnZVBvaW50OiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF9kZWZlbnNlUG9pbnQ6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX3hQb3NpdGlvbjogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfeVBvc2l0aW9uOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF9sZXZlbDogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfaGFzS2V5OiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBfaXNCb3NzOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBfaW1nOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5feFBvc2l0aW9uID0gMDtcclxuICAgIHRoaXMuX3lQb3NpdGlvbiA9IDA7XHJcbiAgICB0aGlzLl9oYXNLZXkgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgZ2V0IGhlYWx0aFBvaW50KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhbHRoUG9pbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGRhbWFnZVBvaW50KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGFtYWdlUG9pbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGRlZmVuc2VQb2ludCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlZmVuc2VQb2ludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyAgaGVhbHRoUG9pbnRDaGFuZ2UoY291bnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5faGVhbHRoUG9pbnQgKz0gY291bnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGRhbWFnZVBvaW50KGNvdW50OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2RhbWFnZVBvaW50ID0gY291bnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGRlZmVuc2VQb2ludChjb3VudDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9kZWZlbnNlUG9pbnQgPSB0aGlzLmRlZmVuc2VQb2ludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB4UG9zaXRpb25DaGFuZ2UoeENvb3JkaW5hdGU6IG51bWJlcikge1xyXG4gICAgdGhpcy5feFBvc2l0aW9uICs9IHhDb29yZGluYXRlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4UG9zaXRpb24oKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl94UG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgeVBvc2l0aW9uQ2hhbmdlKHlDb29yZGluYXRlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3lQb3NpdGlvbiArPSB5Q29vcmRpbmF0ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeVBvc2l0aW9uKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5feVBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdpdmVLZXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9oYXNLZXkgPyB0aGlzLl9oYXNLZXkgPSBmYWxzZSA6IHRoaXMuX2hhc0tleSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RyaWtlKGVuZW15OiBDaGFyYWN0ZXIpOiB2b2lkIHtcclxuICAgIGxldCBzdHJpa2VEYW1hZ2U6IG51bWJlciA9IHRoaXMuX2RhbWFnZVBvaW50ICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpICsgMSkgKiAyO1xyXG4gICAgaWYgKHN0cmlrZURhbWFnZSA+IGVuZW15Ll9kZWZlbnNlUG9pbnQpIHtcclxuICAgICAgZW5lbXkuaGVhbHRoUG9pbnRDaGFuZ2UoLXN0cmlrZURhbWFnZSArIGVuZW15LmRlZmVuc2VQb2ludCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGhhc0tleSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oYXNLZXk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzQm9zcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0Jvc3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbGV2ZWxVcCgpIDogdm9pZCB7XHJcbiAgICB0aGlzLl9sZXZlbCsrO1xyXG4gIH1cclxuIFxyXG4gIHB1YmxpYyBnZXQgaW1nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5faW1nO1xyXG4gIH1cclxufSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL2NoYXJhY3RlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm8gZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG4gIHByb3RlY3RlZCBfaXNEZWZldGVkQm9zczogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5faXNEZWZldGVkQm9zcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5feVBvc2l0aW9uID0gMDtcclxuICAgIHRoaXMuX3hQb3NpdGlvbiA9IDA7XHJcbiAgICB0aGlzLl9sZXZlbCA9IDE7XHJcbiAgICB0aGlzLl9oZWFsdGhQb2ludCA9IDIwICsgMyAqIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDEpO1xyXG4gICAgdGhpcy5fZGVmZW5zZVBvaW50ID0gMiAqIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDEpO1xyXG4gICAgdGhpcy5fZGFtYWdlUG9pbnQgPSA1ICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMga2lsbGVkQm9zcygpOiB2b2lkIHtcclxuICAgIHRoaXMuX2lzRGVmZXRlZEJvc3MgPyB0aGlzLl9pc0RlZmV0ZWRCb3NzID0gZmFsc2UgOiB0aGlzLl9pc0RlZmV0ZWRCb3NzID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNEZWZldGVkQm9zcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0RlZmV0ZWRCb3NzO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgcmVzZXRQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMuX3hQb3NpdGlvbiA9IDA7XHJcbiAgICB0aGlzLl95UG9zaXRpb24gPSAwO1xyXG4gIH1cclxufSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL2NoYXJhY3RlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNrZWxldG9uIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuX2ltZyA9ICdza2VsZXRvbic7XHJcbiAgICB0aGlzLl9pc0Jvc3MgPSBmYWxzZTtcclxuICAgIHRoaXMuX3lQb3NpdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkgKyAxKSAqIDcyO1xyXG4gICAgdGhpcy5feFBvc2l0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSArIDEpICogNzI7XHJcbiAgICB0aGlzLl9oYXNLZXkgPSBmYWxzZTtcclxuICAgIHRoaXMuX2xldmVsID0gMTtcclxuICAgIHRoaXMuX2hlYWx0aFBvaW50ID0gMiAqIHRoaXMuX2xldmVsICogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMSk7XHJcbiAgICB0aGlzLl9kZWZlbnNlUG9pbnQgPSB0aGlzLl9sZXZlbCAvIDIgKiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxKTtcclxuICAgIHRoaXMuX2RhbWFnZVBvaW50ID0gdGhpcy5fbGV2ZWwgKiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxKTtcclxuICB9XHJcblxyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tIFwiLi9jaGFyL2NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSBcIi4vY2hhci9oZXJvXCI7XHJcbmltcG9ydCB7IEJvc3MgfSBmcm9tIFwiLi9jaGFyL2Jvc3NcIjtcclxuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiLi9jaGFyL3NrZWxldG9uXCI7XHJcbmltcG9ydCB7IEdhbWVNYXAgfSBmcm9tIFwiLi9tYXAvbWFwXCI7XHJcbmltcG9ydCB7IHNlbGVjdE1hcCB9IGZyb20gXCIuL21hcC9tYXBzXCI7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4vbWFwL2ZpZWxkXCI7XHJcblxyXG5jb25zdCBjYW52YXM6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbmxldCBjaGVja2luZ0ZpZWxkOiBGaWVsZDtcclxubGV0IGhlcm8gPSBuZXcgSGVybygpO1xyXG5cclxubGV0IG1hcCA9IG5ldyBHYW1lTWFwKCk7XHJcbm1hcC5nZW5lcmF0ZU1hcChzZWxlY3RNYXAoKSk7XHJcblxyXG5mdW5jdGlvbiBhZGRTa2VsZXRvbigpOiB2b2lkIHtcclxuICBsZXQgc2tlbGV0b24gPSBuZXcgU2tlbGV0b24oKTtcclxuICBpZiAoXHJcbiAgICBtYXAubWFwRWxlbWVudHNbc2tlbGV0b24ueVBvc2l0aW9uIC8gNzJdW3NrZWxldG9uLnhQb3NpdGlvbiAvIDcyXS5pc1dhbGthYmxlXHJcbiAgKSB7XHJcbiAgICBtYXAuYWRkRW5lbXlUb0xpc3Qoc2tlbGV0b24pO1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJza2VsZXRvblwiKSxcclxuICAgICAgc2tlbGV0b24ueFBvc2l0aW9uLFxyXG4gICAgICBza2VsZXRvbi55UG9zaXRpb25cclxuICAgICk7XHJcbiAgICBtYXAubWFwRWxlbWVudHNbc2tlbGV0b24ueVBvc2l0aW9uIC8gNzJdW1xyXG4gICAgICBza2VsZXRvbi54UG9zaXRpb24gLyA3MlxyXG4gICAgXS53YWxrYWJsZUNoYW5nZXIoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYWRkU2tlbGV0b24oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxldmVsQ2hlY2tlcigpIHtcclxuICBpZiAoaGVyby5oYXNLZXkgJiYgaGVyby5pc0RlZmV0ZWRCb3NzKSB7XHJcbiAgICBpZiAobWFwLm1hcExldmVsID09IDEwKSB7XHJcbiAgICAgIGN0eC5zaGFkb3dDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIC45KSc7XHJcbiAgICAgIGN0eC5zaGFkb3dCbHVyID0gMTA7XHJcbiAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gNTtcclxuICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSA1O1xyXG4gICAgICBjdHguZHJhd0ltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpbmNlc3MyXCIpLCA5NTAsIDIwKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW5jZXNzXCIpLCAxMjAwLCA2MCk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZjRkMDBcIjtcclxuICAgICAgY3R4LmZvbnQgPSBcIjMwcHggSW1wYWN0XCI7XHJcbiAgICAgIGN0eC5zaGFkb3dDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIC45KSc7XHJcbiAgICAgIGN0eC5zaGFkb3dCbHVyID0gODtcclxuICAgICAgY3R4LnNoYWRvd09mZnNldFggPSA1O1xyXG4gICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IDU7XHJcbiAgICAgIGN0eC5maWxsVGV4dChg8J+lsyBZb3UgaGF2ZSBzYXZlZCB0aGUgcHJpbmNlc3NlcyEg8J+ls2AsIDEwMDAsIDU1MCk7XHJcbiAgICAgIGN0eC5maWxsVGV4dChg8J+RiSBQcmVzcyBbIEY1IF0gdG8gcmVwbGF5LiDwn5GIYCwgMTA1MCwgNjAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hcC5tYXBFbGVtZW50c1swXVswXS53YWxrYWJsZUNoYW5nZXIoKTtcclxuICAgICAgYWxlcnQoYFxcbuKclO+4jyBMZXZlbCAke21hcC5tYXBMZXZlbH0gY29tcGxldGVkIVxcblxcbvCfjI0gTGV0J3MgZXhwbG9yZSBhIG5ldyBvbmUhYCk7XHJcbiAgICAgIGdlbmVyYXRlR2FtZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCb3NzKCk6IHZvaWQge1xyXG4gIGxldCBib3NzID0gbmV3IEJvc3MoKTtcclxuICBpZiAobWFwLm1hcEVsZW1lbnRzW2Jvc3MueVBvc2l0aW9uIC8gNzJdW2Jvc3MueFBvc2l0aW9uIC8gNzJdLmlzV2Fsa2FibGUpIHtcclxuICAgIG1hcC5hZGRFbmVteVRvTGlzdChib3NzKTtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9zc1wiKSxcclxuICAgICAgYm9zcy54UG9zaXRpb24sXHJcbiAgICAgIGJvc3MueVBvc2l0aW9uXHJcbiAgICApO1xyXG4gICAgbWFwLm1hcEVsZW1lbnRzW2Jvc3MueVBvc2l0aW9uIC8gNzJdW2Jvc3MueFBvc2l0aW9uIC8gNzJdLndhbGthYmxlQ2hhbmdlcigpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBnZW5lcmF0ZUJvc3MoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdJbmZvKCkge1xyXG4gIGN0eC5maWxsU3R5bGUgPSBcIiNmZmM4NWNcIjtcclxuICBjdHguZmlsbFJlY3QoNzQwLCAxMCwgMjQwLCA2OTApO1xyXG4gIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgY3R4LmZvbnQgPSBcImJvbGQgMjBweCBzZXJpZlwiO1xyXG4gIGN0eC5zaGFkb3dDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDAuOCknO1xyXG4gIGN0eC5zaGFkb3dCbHVyID0gMDtcclxuICBjdHguc2hhZG93T2Zmc2V0WCA9IDA7XHJcbiAgY3R4LnNoYWRvd09mZnNldFkgPSAwO1xyXG4gIGN0eC5maWxsVGV4dChgTGV2ZWw6ICAke21hcC5tYXBMZXZlbH1gLCA3NjAsIDUwKTtcclxuICBcclxuICBsZXQgbWVkYWxzID0gJyc7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXAubWFwTGV2ZWwgLSAxOyBpKyspIHtcclxuICAgIG1lZGFscyArPSAn8J+Olu+4jydcclxuICB9XHJcbiAgY3R4LmZpbGxUZXh0KGAke21lZGFsc31gLCA3NTAsIDgwKTtcclxuXHJcbiAgY3R4LmZpbGxUZXh0KGDinaTvuI8gSGVhbHRoIFBvaW50OiAgICR7aGVyby5oZWFsdGhQb2ludH1gLCA3NTAsIDEyMCk7XHJcbiAgY3R4LmZpbGxUZXh0KGDimpTvuI8gU3RyaWtlIFBvaW50OiAgICAke2hlcm8uZGFtYWdlUG9pbnR9YCwgNzUwLCAxNTUpO1xyXG4gIGN0eC5maWxsVGV4dChg8J+boe+4jyBEZWZlbnNlIFBvaW50OiAke2hlcm8uZGVmZW5zZVBvaW50fWAsIDc1MCwgMTkwKTtcclxuICBcclxuICBjdHguZmlsbFRleHQoYEdldCB0aGUga2V5OmAsIDc2MCwgMjUwKTtcclxuICBpZiAoaGVyby5oYXNLZXkpIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrZXlcIiksIDkyMCwgMjMwLCAyMCwgMzApO1xyXG4gIH1cclxuICBcclxuICBjdHguZmlsbFRleHQoYERlZmVhdCB0aGUgQm9zczpgLCA3NjAsIDI4MCk7XHJcbiAgaWYgKGhlcm8uaXNEZWZldGVkQm9zcykge1xyXG4gICAgY3R4LmRyYXdJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNrdWxsXCIpLCA5MjAsIDI2MCwgMzAsIDMwKTtcclxuICB9XHJcblxyXG4gIGN0eC5kcmF3SW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YXNkXCIpLCA3ODAsIDYwMCwgMTUwLCA5MCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVDaGFyKFxyXG4gIGNoYXI6IENoYXJhY3RlcixcclxuICBpbWc6IHN0cmluZyxcclxuICBob3Jpem9udGFsOiBudW1iZXIsXHJcbiAgdmVydGljYWw6IG51bWJlclxyXG4pOiB2b2lkIHtcclxuICBkcmF3SW5mbygpO1xyXG4gIGNoYXIueVBvc2l0aW9uQ2hhbmdlKDcyICogdmVydGljYWwpO1xyXG4gIGNoYXIueFBvc2l0aW9uQ2hhbmdlKDcyICogaG9yaXpvbnRhbCk7XHJcbiAgaWYgKFxyXG4gICAgY2hhci55UG9zaXRpb24gPCAwIHx8XHJcbiAgICBjaGFyLnlQb3NpdGlvbiA+IDY4MCB8fFxyXG4gICAgY2hhci54UG9zaXRpb24gPCAwIHx8XHJcbiAgICBjaGFyLnhQb3NpdGlvbiA+IDY4MFxyXG4gICkge1xyXG4gICAgY2hhci55UG9zaXRpb25DaGFuZ2UoLTcyICogdmVydGljYWwpO1xyXG4gICAgY2hhci54UG9zaXRpb25DaGFuZ2UoLTcyICogaG9yaXpvbnRhbCk7XHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsb29yXCIpLFxyXG4gICAgICBjaGFyLnhQb3NpdGlvbixcclxuICAgICAgY2hhci55UG9zaXRpb25cclxuICAgICk7XHJcbiAgICBjdHguZHJhd0ltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGltZyksIGNoYXIueFBvc2l0aW9uLCBjaGFyLnlQb3NpdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNoZWNraW5nRmllbGQgPSBtYXAubWFwRWxlbWVudHNbY2hhci55UG9zaXRpb24gLyA3Ml1bY2hhci54UG9zaXRpb24gLyA3Ml07XHJcbiAgICBpZiAoY2hlY2tpbmdGaWVsZC5pc1dhbGthYmxlKSB7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbG9vclwiKSxcclxuICAgICAgICBjaGFyLnhQb3NpdGlvbiArIDcyICogLTEgKiBob3Jpem9udGFsLFxyXG4gICAgICAgIGNoYXIueVBvc2l0aW9uICsgNzIgKiAtMSAqIHZlcnRpY2FsXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW1nKSxcclxuICAgICAgICBjaGFyLnhQb3NpdGlvbixcclxuICAgICAgICBjaGFyLnlQb3NpdGlvblxyXG4gICAgICApO1xyXG4gICAgICBtYXAubWFwRWxlbWVudHNbY2hhci55UG9zaXRpb24gLyA3Ml1bXHJcbiAgICAgICAgY2hhci54UG9zaXRpb24gLyA3MlxyXG4gICAgICBdLndhbGthYmxlQ2hhbmdlcigpO1xyXG4gICAgICBtYXAubWFwRWxlbWVudHNbY2hhci55UG9zaXRpb24gLyA3MiAtIHZlcnRpY2FsXVtcclxuICAgICAgICBjaGFyLnhQb3NpdGlvbiAvIDcyIC0gaG9yaXpvbnRhbFxyXG4gICAgICBdLndhbGthYmxlQ2hhbmdlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2hhci55UG9zaXRpb25DaGFuZ2UoLTcyICogdmVydGljYWwpO1xyXG4gICAgICBjaGFyLnhQb3NpdGlvbkNoYW5nZSgtNzIgKiBob3Jpem9udGFsKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsb29yXCIpLFxyXG4gICAgICAgIGNoYXIueFBvc2l0aW9uLFxyXG4gICAgICAgIGNoYXIueVBvc2l0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW1nKSxcclxuICAgICAgICBjaGFyLnhQb3NpdGlvbixcclxuICAgICAgICBjaGFyLnlQb3NpdGlvblxyXG4gICAgICApO1xyXG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWFwLmdlbmVyYXRlZEVuZW15TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIG1hcC5nZW5lcmF0ZWRFbmVteUxpc3RbaV0ueFBvc2l0aW9uID09IGNoZWNraW5nRmllbGQueENvb3JkaW5hdGUgJiZcclxuICAgICAgICAgIG1hcC5nZW5lcmF0ZWRFbmVteUxpc3RbaV0ueVBvc2l0aW9uID09IGNoZWNraW5nRmllbGQueUNvb3JkaW5hdGVcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd29yZHNcIiksIDgwMCwgNDAwLCAxMDAsIDEwMCk7XHJcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgMTZweCBzZXJpZlwiO1xyXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KGBQcmVzcyBbU3BhY2VdIHRvIGF0dGFjay5gLCA3ODAsIDUzMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUdhbWUoKSB7XHJcbiAgbWFwLnJlc2V0TWFwKCk7XHJcbiAgbWFwLmdlbmVyYXRlTWFwKHNlbGVjdE1hcCgpKTtcclxuICBoZXJvLnJlc2V0UG9zaXRpb24oKTtcclxuICBoZXJvLmtpbGxlZEJvc3MoKTtcclxuICBoZXJvLmdpdmVLZXkoKTtcclxuXHJcbiAgLy9nZW5lcmF0ZSBtYXBcclxuICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgbWFwLm1hcEVsZW1lbnRzW2ldW2pdLnhDb29yZGluYXRlQ2hhbmdlKDcyICogaik7XHJcbiAgICAgIG1hcC5tYXBFbGVtZW50c1tpXVtqXS55Q29vcmRpbmF0ZUNoYW5nZSg3MiAqIGkpO1xyXG4gICAgICBpZiAobWFwLm1hcEVsZW1lbnRzW2ldW2pdLmlzV2Fsa2FibGUpIHtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxvb3JcIiksIDcyICogaiwgNzIgKiBpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2FsbFwiKSwgNzIgKiBqLCA3MiAqIGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL2dlbmVyYXRlIGNoYXJhY3RlcnNcclxuICBjdHguZHJhd0ltYWdlKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZXJvLWRvd25cIiksXHJcbiAgICBoZXJvLnhQb3NpdGlvbixcclxuICAgIGhlcm8ueVBvc2l0aW9uXHJcbiAgKTtcclxuXHJcbiAgbWFwLnJhbmRvbVNrZWxldG9uTnVtYmVyKCk7XHJcbiAgbWFwLmVuZW15TGlzdFJlcGxhY2UoKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXAubnVtYmVyT2ZTa2VsZXRvbnM7IGkrKykge1xyXG4gICAgYWRkU2tlbGV0b24oKTtcclxuICB9XHJcbiAgbWFwLmdlbmVyYXRlZEVuZW15TGlzdFswXS5naXZlS2V5KCk7XHJcbiAgZ2VuZXJhdGVCb3NzKCk7XHJcbiAgbWFwLmluY3Jhc2VNYXBMZXZlbCgpO1xyXG4gIC8vaW5mbyB3aW5kb3dcclxuICBkcmF3SW5mbygpO1xyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIC8vZ2VuZXJhdGUgbWFwXHJcbiAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgIG1hcC5tYXBFbGVtZW50c1tpXVtqXS54Q29vcmRpbmF0ZUNoYW5nZSg3MiAqIGopO1xyXG4gICAgICBtYXAubWFwRWxlbWVudHNbaV1bal0ueUNvb3JkaW5hdGVDaGFuZ2UoNzIgKiBpKTtcclxuICAgICAgaWYgKG1hcC5tYXBFbGVtZW50c1tpXVtqXS5pc1dhbGthYmxlKSB7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsb29yXCIpLCA3MiAqIGosIDcyICogaSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhbGxcIiksIDcyICogaiwgNzIgKiBpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvL2dlbmVyYXRlIGNoYXJhY3RlcnNcclxuICBjdHguZHJhd0ltYWdlKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZXJvLWRvd25cIiksXHJcbiAgICBoZXJvLnhQb3NpdGlvbixcclxuICAgIGhlcm8ueVBvc2l0aW9uXHJcbiAgKTtcclxuICBtYXAubWFwRWxlbWVudHNbMF1bMF0ud2Fsa2FibGVDaGFuZ2VyKCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwLm51bWJlck9mU2tlbGV0b25zOyBpKyspIHtcclxuICAgIGFkZFNrZWxldG9uKCk7XHJcbiAgfVxyXG4gIG1hcC5nZW5lcmF0ZWRFbmVteUxpc3RbMF0uZ2l2ZUtleSgpO1xyXG5cclxuICBnZW5lcmF0ZUJvc3MoKTtcclxuXHJcbiAgLy9pbmZvIHdpbmRvd1xyXG4gIGRyYXdJbmZvKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbktleVByZXNzKGV2ZW50OiB7IGtleUNvZGU6IGFueSB9KSB7XHJcbiAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAvL21vdmUgdXAgLSBBcnJvdyBVcFxyXG4gICAgY2FzZSAzODoge1xyXG4gICAgICBtb3ZlQ2hhcihoZXJvLCBcImhlcm8tdXBcIiwgMCwgLTEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIC8vbW92ZSBkb3duIC0gQXJyb3cgRG93blxyXG4gICAgY2FzZSA0MDoge1xyXG4gICAgICBtb3ZlQ2hhcihoZXJvLCBcImhlcm8tZG93blwiLCAwLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvL21vdmUgbGVmdCAtIEFycm93IExlZnRcclxuICAgIGNhc2UgMzc6IHtcclxuICAgICAgbW92ZUNoYXIoaGVybywgXCJoZXJvLWxlZnRcIiwgLTEsIDApO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIC8vbW92ZSByaWdodCAtIEFycm93IFJpZ2h0XHJcbiAgICBjYXNlIDM5OiB7XHJcbiAgICAgIG1vdmVDaGFyKGhlcm8sIFwiaGVyby1yaWdodFwiLCAxLCAwKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvL21vdmUgdXAgLSBXXHJcbiAgICBjYXNlIDg3OiB7XHJcbiAgICAgIG1vdmVDaGFyKGhlcm8sIFwiaGVyby11cFwiLCAwLCAtMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgLy9tb3ZlIGRvd24gLSBTXHJcbiAgICBjYXNlIDgzOiB7XHJcbiAgICAgIG1vdmVDaGFyKGhlcm8sIFwiaGVyby1kb3duXCIsIDAsIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIC8vbW92ZSBsZWZ0IC0gQVxyXG4gICAgY2FzZSA2NToge1xyXG4gICAgICBtb3ZlQ2hhcihoZXJvLCBcImhlcm8tbGVmdFwiLCAtMSwgMCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgLy9tb3ZlIHJpZ2h0IC0gRFxyXG4gICAgY2FzZSA2ODoge1xyXG4gICAgICBtb3ZlQ2hhcihoZXJvLCBcImhlcm8tcmlnaHRcIiwgMSwgMCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSAzMjoge1xyXG4gICAgICBjb25zb2xlLmxvZyhtYXAuZ2VuZXJhdGVkRW5lbXlMaXN0KTtcclxuICAgICAgY29uc29sZS5sb2coY2hlY2tpbmdGaWVsZCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWFwLmdlbmVyYXRlZEVuZW15TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIG1hcC5nZW5lcmF0ZWRFbmVteUxpc3RbaV0ueFBvc2l0aW9uID09IGNoZWNraW5nRmllbGQueENvb3JkaW5hdGUgJiZcclxuICAgICAgICAgIG1hcC5nZW5lcmF0ZWRFbmVteUxpc3RbaV0ueVBvc2l0aW9uID09IGNoZWNraW5nRmllbGQueUNvb3JkaW5hdGVcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHdoaWxlIChtYXAuZ2VuZXJhdGVkRW5lbXlMaXN0W2ldLmhlYWx0aFBvaW50ID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoaGVyby5oZWFsdGhQb2ludCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBweCBzZXJpZlwiO1xyXG4gICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImRhcmtyZWRcIjtcclxuICAgICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSAncmdiYSgwLCAwLCAwLCAuOSknO1xyXG4gICAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gODtcclxuICAgICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDI7XHJcbiAgICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSAyO1xyXG4gICAgICAgICAgICAgIGN0eC5maWxsVGV4dChg8J+SgCBHYW1lIE92ZXIhIPCfkoBgLCAyMDAsIDQwMCk7XHJcbiAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGBQcmVzcyBbIEY1IF0gdG8gcmVwbGF5LmAsIDE4MCwgNDUwKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoZXJvLnN0cmlrZShtYXAuZ2VuZXJhdGVkRW5lbXlMaXN0W2ldKTtcclxuICAgICAgICAgICAgaWYgKG1hcC5nZW5lcmF0ZWRFbmVteUxpc3RbaV0uaGVhbHRoUG9pbnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgbWFwLmdlbmVyYXRlZEVuZW15TGlzdFtpXS5zdHJpa2UoaGVybyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKG1hcC5nZW5lcmF0ZWRFbmVteUxpc3RbaV0uaGFzS2V5KSB7XHJcbiAgICAgICAgICAgICAgICBoZXJvLmdpdmVLZXkoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKG1hcC5nZW5lcmF0ZWRFbmVteUxpc3RbaV0uaXNCb3NzKSB7XHJcbiAgICAgICAgICAgICAgICBoZXJvLmtpbGxlZEJvc3MoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxvb3JcIiksXHJcbiAgICAgICAgICAgICAgICBtYXAuZ2VuZXJhdGVkRW5lbXlMaXN0W2ldLnhQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgIG1hcC5nZW5lcmF0ZWRFbmVteUxpc3RbaV0ueVBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBtYXAubWFwRWxlbWVudHNbY2hlY2tpbmdGaWVsZC55Q29vcmRpbmF0ZSAvIDcyXVtcclxuICAgICAgICAgICAgICAgIGNoZWNraW5nRmllbGQueENvb3JkaW5hdGUgLyA3MlxyXG4gICAgICAgICAgICAgIF0ud2Fsa2FibGVDaGFuZ2VyKCk7XHJcbiAgICAgICAgICAgICAgbWFwLmdlbmVyYXRlZEVuZW15TGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgZHJhd0luZm8oKTtcclxuICAgICAgICAgICAgICBsZXZlbENoZWNrZXIoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleVByZXNzKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpZWxkIHtcclxuICBwcm90ZWN0ZWQgX2ltYWdlVXJsOiBhbnk7XHJcbiAgcHJvdGVjdGVkIF9pc1dhbGthYmxlOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBfaXNUaGlzUGxhY2VFbXB0eTogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX3hDb29yZGluYXRlOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF95Q29vcmRpbmF0ZTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3hDb29yZGluYXRlID0gMDtcclxuICAgIHRoaXMuX3lDb29yZGluYXRlID0gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaW1hZ2VVcmwoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl9pbWFnZVVybFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4Q29vcmRpbmF0ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3hDb29yZGluYXRlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB5Q29vcmRpbmF0ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3lDb29yZGluYXRlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHhDb29yZGluYXRlQ2hhbmdlKHg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5feENvb3JkaW5hdGUgPSB4O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHlDb29yZGluYXRlQ2hhbmdlKHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5feUNvb3JkaW5hdGUgPSB5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc1dhbGthYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzV2Fsa2FibGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzVGhpc1BsYWNlRW1wdHkoKTogYm9vbGVhbntcclxuICAgIHJldHVybiB0aGlzLl9pc1RoaXNQbGFjZUVtcHR5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHdhbGthYmxlQ2hhbmdlcigpOiB2b2lkIHtcclxuICAgICB0aGlzLl9pc1dhbGthYmxlID8gdGhpcy5faXNXYWxrYWJsZSA9IGZhbHNlIDogdGhpcy5faXNXYWxrYWJsZSA9IHRydWU7XHJcbiAgfVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi9maWVsZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyb3VuZCBleHRlbmRzIEZpZWxke1xyXG5cclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX2ltYWdlVXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb29yJyk7XHJcbiAgICB0aGlzLl9pc1dhbGthYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuX2lzVGhpc1BsYWNlRW1wdHkgPSB0cnVlO1xyXG4gIH1cclxufSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuLi9jaGFyL2NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuL2ZpZWxkXCI7XHJcbmltcG9ydCB7IEdyb3VuZCB9IGZyb20gXCIuL2dyb3VuZFwiO1xyXG5pbXBvcnQgeyBXYWxsIH0gZnJvbSBcIi4vd2FsbFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lTWFwIHtcclxuICBwcm90ZWN0ZWQgX2dlbmVyYXRlZE1hcDogRmllbGRbXVtdO1xyXG4gIHByb3RlY3RlZCBfbWFwTGV2ZWw6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX251bWJlck9mU2tlbGV0b25zOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF9lbmVteUxpc3Q6IENoYXJhY3RlcltdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX251bWJlck9mU2tlbGV0b25zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAzO1xyXG4gICAgdGhpcy5fbWFwTGV2ZWwgPSAxO1xyXG4gICAgdGhpcy5fZ2VuZXJhdGVkTWFwID0gW107XHJcbiAgICB0aGlzLl9lbmVteUxpc3QgPSBbXTtcclxuICB9XHJcbiAgcHVibGljIHJlc2V0TWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZ2VuZXJhdGVkTWFwID0gW107XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyByYW5kb21Ta2VsZXRvbk51bWJlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuX251bWJlck9mU2tlbGV0b25zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVuZW15TGlzdFJlcGxhY2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9lbmVteUxpc3QgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZU1hcChtYXBQbGFuOiBudW1iZXJbXVtdKTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICB0aGlzLl9nZW5lcmF0ZWRNYXAucHVzaChbXSk7XHJcbiAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgaWYgKG1hcFBsYW5baV1bal0gPT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5fZ2VuZXJhdGVkTWFwW2ldLnB1c2gobmV3IFdhbGwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9nZW5lcmF0ZWRNYXBbaV0ucHVzaChuZXcgR3JvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRFbmVteVRvTGlzdChlbmVteTogQ2hhcmFjdGVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9lbmVteUxpc3QucHVzaChlbmVteSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG1hcEVsZW1lbnRzKCk6IEZpZWxkW11bXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGVkTWFwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBudW1iZXJPZlNrZWxldG9ucygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX251bWJlck9mU2tlbGV0b25zO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBnZW5lcmF0ZWRFbmVteUxpc3QoKTogQ2hhcmFjdGVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VuZW15TGlzdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbmNyYXNlTWFwTGV2ZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9tYXBMZXZlbCsrO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdlbmVyYXRlZEVuZW15TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmdlbmVyYXRlZEVuZW15TGlzdFtpXS5sZXZlbFVwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG1hcExldmVsKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFwTGV2ZWw7XHJcbiAgfVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG9uZTogbnVtYmVyW11bXSA9IFtcclxuICBbMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgWzEsIDEsIDAsIDEsIDEsIDAsIDAsIDEsIDAsIDBdLFxyXG4gIFswLCAxLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAwXSxcclxuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgWzAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gIFswLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAwLCAwXSxcclxuICBbMSwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMSwgMF0sXHJcbiAgWzAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDEsIDFdLFxyXG4gIFsxLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAwXSxcclxuICBbMCwgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMCwgMF1dO1xyXG5cclxubGV0IHR3bzogbnVtYmVyW11bXSA9IFtcclxuICBbMCwgMSwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMF0sXHJcbiAgWzAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDEsIDFdLFxyXG4gIFswLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAwXSxcclxuICBbMCwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMF0sXHJcbiAgWzAsIDEsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDFdLFxyXG4gIFswLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwXSxcclxuICBbMSwgMCwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMF0sXHJcbiAgWzAsIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDEsIDBdLFxyXG4gIFswLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwXSxcclxuICBbMCwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMSwgMF1dO1xyXG5cclxubGV0IHRocmVlOiBudW1iZXJbXVtdID0gW1xyXG4gIFswLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwXSxcclxuICBbMSwgMCwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDBdLFxyXG4gIFswLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAwXSxcclxuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgWzAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDFdLFxyXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXV07XHJcblxyXG5sZXQgZm91cjogbnVtYmVyW11bXSA9IFtcclxuICBbMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMF0sXHJcbiAgWzAsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDBdLFxyXG4gIFswLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxLCAwXSxcclxuICBbMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMF0sXHJcbiAgWzAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDEsIDBdLFxyXG4gIFswLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAwXSxcclxuICBbMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMF0sXHJcbiAgWzAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDBdLFxyXG4gIFswLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAwXSxcclxuICBbMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMF1dO1xyXG5cclxubGV0IGZpdmU6IG51bWJlcltdW10gPSBbXHJcbiAgWzAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gIFswLCAxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxXSxcclxuICBbMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgWzEsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDFdLFxyXG4gIFswLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICBbMSwgMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMV0sXHJcbiAgWzAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gIFsxLCAxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxXSxcclxuICBbMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgWzAsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDFdXTtcclxuXHJcbmxldCBzaXg6IG51bWJlcltdW10gPSBbXHJcbiAgWzAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gIFswLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAxXSxcclxuICBbMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMF0sXHJcbiAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDEsIDBdLFxyXG4gIFswLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICBbMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMF0sXHJcbiAgWzAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gIFswLCAxLCAwLCAwLCAwLCAxLCAwLCAxLCAxLCAwXSxcclxuICBbMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgWzAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDBdXTtcclxuXHJcbmxldCBzZXZlbjogbnVtYmVyW11bXSA9IFtcclxuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwXSxcclxuICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMF0sXHJcbiAgWzAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDBdLFxyXG4gIFswLCAxLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAwXSxcclxuICBbMCwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMF0sXHJcbiAgWzAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDBdLFxyXG4gIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF1dO1xyXG5cclxubGV0IGVpZ2h0OiBudW1iZXJbXVtdID0gW1xyXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMV0sXHJcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gIFsxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDFdLFxyXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICBbMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgWzEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDBdLFxyXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXV07XHJcblxyXG5sZXQgbmluZTogbnVtYmVyW11bXSA9IFtcclxuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gIFswLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAwXSxcclxuICBbMCwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMF0sXHJcbiAgWzAsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDBdLFxyXG4gIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgWzAsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDBdLFxyXG4gIFswLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwXSxcclxuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF1dO1xyXG5cclxubGV0IHRlbjogbnVtYmVyW11bXSA9IFtcclxuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDBdLFxyXG4gIFswLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwXSxcclxuICBbMCwgMSwgMCwgMSwgMCwgMSwgMSwgMCwgMSwgMF0sXHJcbiAgWzAsIDEsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDBdLFxyXG4gIFswLCAxLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAwXSxcclxuICBbMCwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMF0sXHJcbiAgWzAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDBdLFxyXG4gIFswLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwXSxcclxuICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV1dO1xyXG5cclxubGV0IG1hcHM6IG51bWJlcltdW11bXSA9IFtvbmUsIHR3bywgdGhyZWUsIGZvdXIsIGZpdmUsIHNpeCwgc2V2ZW4sIGVpZ2h0LCBuaW5lLCB0ZW5dO1xyXG5cclxubGV0IGxldmVsOiBudW1iZXIgPSAtIDE7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0TWFwKCk6IG51bWJlcltdW10ge1xyXG4gIGxldmVsKys7XHJcbiAgcmV0dXJuIG1hcHNbbGV2ZWxdO1xyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi9maWVsZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdhbGwgZXh0ZW5kcyBGaWVsZHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9pbWFnZVVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWxsJyk7XHJcbiAgICB0aGlzLl9pc1dhbGthYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLl9pc1RoaXNQbGFjZUVtcHR5ID0gZmFsc2U7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==