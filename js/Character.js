// noinspection JSUnresolvedVariable
// noinspection JSFileReferences

import {getDiceRollArray} from "./utils.js";

function Character(data) {
  Object.assign(this, data)

  this.getDiceRollHtml = (diceCount) => getDiceRollArray(diceCount).map(roll => `<div class="dice"> ${roll} </div>`).join("")

  this.getCharacterHtml = () => `<div class="character-card">
        <h4 class="name"> ${this.name} </h4>
        <img class="avatar" src="${this.avatar}" alt="${this.name} character"/>
        <p class="health">health: <b> ${this.health} </b></p>
        <div class="dice-container">
          ${this.getDiceRollHtml(this.diceCount)}
        </div>
    </div>`
}

export default Character