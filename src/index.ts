"use strict";

import { Character } from "./char/character";
import { Hero } from "./char/hero";
import { Boss } from "./char/boss";
import { Skeleton } from "./char/skeleton";
import { GameMap } from "./map/map";
import { selectMap } from "./map/maps";
import { Field } from "./map/field";

const canvas: any = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
let checkingField: Field;
let hero = new Hero();

let map = new GameMap();
map.generateMap(selectMap());

function addSkeleton(): void {
  let skeleton = new Skeleton();
  if (
    map.mapElements[skeleton.yPosition / 72][skeleton.xPosition / 72].isWalkable
  ) {
    map.addEnemyToList(skeleton);
    ctx.drawImage(
      document.getElementById("skeleton"),
      skeleton.xPosition,
      skeleton.yPosition
    );
    map.mapElements[skeleton.yPosition / 72][
      skeleton.xPosition / 72
    ].walkableChanger();
  } else {
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
    } else {
      map.mapElements[0][0].walkableChanger();
      alert(`\n✔️ Level ${map.mapLevel} completed!\n\n🌍 Let's explore a new one!`);
      generateGame();
    }
  }
}

function generateBoss(): void {
  let boss = new Boss();
  if (map.mapElements[boss.yPosition / 72][boss.xPosition / 72].isWalkable) {
    map.addEnemyToList(boss);
    ctx.drawImage(
      document.getElementById("boss"),
      boss.xPosition,
      boss.yPosition
    );
    map.mapElements[boss.yPosition / 72][boss.xPosition / 72].walkableChanger();
  } else {
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
    medals += '🎖️'
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

function moveChar(
  char: Character,
  img: string,
  horizontal: number,
  vertical: number
): void {
  drawInfo();
  char.yPositionChange(72 * vertical);
  char.xPositionChange(72 * horizontal);
  if (
    char.yPosition < 0 ||
    char.yPosition > 680 ||
    char.xPosition < 0 ||
    char.xPosition > 680
  ) {
    char.yPositionChange(-72 * vertical);
    char.xPositionChange(-72 * horizontal);
    ctx.drawImage(
      document.getElementById("floor"),
      char.xPosition,
      char.yPosition
    );
    ctx.drawImage(document.getElementById(img), char.xPosition, char.yPosition);
  } else {
    checkingField = map.mapElements[char.yPosition / 72][char.xPosition / 72];
    if (checkingField.isWalkable) {
      ctx.drawImage(
        document.getElementById("floor"),
        char.xPosition + 72 * -1 * horizontal,
        char.yPosition + 72 * -1 * vertical
      );
      ctx.drawImage(
        document.getElementById(img),
        char.xPosition,
        char.yPosition
      );
      map.mapElements[char.yPosition / 72][
        char.xPosition / 72
      ].walkableChanger();
      map.mapElements[char.yPosition / 72 - vertical][
        char.xPosition / 72 - horizontal
      ].walkableChanger();
    } else {
      char.yPositionChange(-72 * vertical);
      char.xPositionChange(-72 * horizontal);
      ctx.drawImage(
        document.getElementById("floor"),
        char.xPosition,
        char.yPosition
      );
      ctx.drawImage(
        document.getElementById(img),
        char.xPosition,
        char.yPosition
      );
      for (let i: number = 0; i < map.generatedEnemyList.length; i++) {
        if (
          map.generatedEnemyList[i].xPosition == checkingField.xCoordinate &&
          map.generatedEnemyList[i].yPosition == checkingField.yCoordinate
        ) {
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
  map.generateMap(selectMap());
  hero.resetPosition();
  hero.killedBoss();
  hero.giveKey();

  //generate map
  for (let i: number = 0; i < 10; i++) {
    for (let j: number = 0; j < 10; j++) {
      map.mapElements[i][j].xCoordinateChange(72 * j);
      map.mapElements[i][j].yCoordinateChange(72 * i);
      if (map.mapElements[i][j].isWalkable) {
        ctx.drawImage(document.getElementById("floor"), 72 * j, 72 * i);
      } else {
        ctx.drawImage(document.getElementById("wall"), 72 * j, 72 * i);
      }
    }
  }

  //generate characters
  ctx.drawImage(
    document.getElementById("hero-down"),
    hero.xPosition,
    hero.yPosition
  );

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
  for (let i: number = 0; i < 10; i++) {
    for (let j: number = 0; j < 10; j++) {
      map.mapElements[i][j].xCoordinateChange(72 * j);
      map.mapElements[i][j].yCoordinateChange(72 * i);
      if (map.mapElements[i][j].isWalkable) {
        ctx.drawImage(document.getElementById("floor"), 72 * j, 72 * i);
      } else {
        ctx.drawImage(document.getElementById("wall"), 72 * j, 72 * i);
      }
    }
  }
  //generate characters
  ctx.drawImage(
    document.getElementById("hero-down"),
    hero.xPosition,
    hero.yPosition
  );
  map.mapElements[0][0].walkableChanger();

  for (let i = 0; i < map.numberOfSkeletons; i++) {
    addSkeleton();
  }
  map.generatedEnemyList[0].giveKey();

  generateBoss();

  //info window
  drawInfo();
};

function onKeyPress(event: { keyCode: any }) {
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

      for (let i: number = 0; i < map.generatedEnemyList.length; i++) {
        if (
          map.generatedEnemyList[i].xPosition == checkingField.xCoordinate &&
          map.generatedEnemyList[i].yPosition == checkingField.yCoordinate
        ) {
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
            } else {
              if (map.generatedEnemyList[i].hasKey) {
                hero.giveKey();
              }
              if (map.generatedEnemyList[i].isBoss) {
                hero.killedBoss();
              }
              ctx.drawImage(
                document.getElementById("floor"),
                map.generatedEnemyList[i].xPosition,
                map.generatedEnemyList[i].yPosition
              );
              map.mapElements[checkingField.yCoordinate / 72][
                checkingField.xCoordinate / 72
              ].walkableChanger();
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
