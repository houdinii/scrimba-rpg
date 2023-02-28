import Character from "./Character.js";
import characterData from './data.js'

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

const render = () => {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
  document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}
render()