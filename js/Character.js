// noinspection JSUnresolvedVariable

import {getDicePlaceholderHtml, getDiceRollArray, getPercentage} from "./utils.js";

class Character{
  constructor(data){
    Object.assign(this, data)
    this.diceHtml = getDicePlaceholderHtml(this.diceCount)
    this.dead = false
  }
  setDiceHtml = () => {
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    this.diceHtml = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join("")
  }
  getCharacterHtml = () => {
    const healthBar = this.getHealthBarHtml()

    return `
    <div class="character-card">
        <h4 class="name"> ${this.name} </h4>
        <img class="avatar" src="${this.avatar}" alt="${this.name} character"/>
        <p class="health">health: <b> ${this.health}<br/> ${healthBar} </b></p>
        <div class="dice-container">
          ${this.diceHtml}
        </div>
    </div>`
  }
  takeDamage = (attackScoreArray) => {
    const totalAttackScore = attackScoreArray.reduce((acc, num) => acc + num)
    this.health -= totalAttackScore
    if (this.health <= 0){
      this.health = 0
      this.dead = true
    }

  }
  getHealthBarHtml = () => {
    const percent = getPercentage(this.health, this.maxHealth)
    return`
      <div class="health-bar-outer">
          <div class="health-bar-inner ${percent <= 25 ? "danger" : ""} " 
              style="width: ${percent}%;">
          </div>
      </div>`
  }
}

export default Character