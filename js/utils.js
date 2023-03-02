export const getDiceRollArray = (diceCount) => new Array(diceCount).fill(0).map(()=>Math.floor((Math.random()*6)+1))
export const getDicePlaceholderHtml = (diceCount) => new Array(diceCount).fill('<div class="placeholder-dice"></div>').join("")
export const getPercentage = (remainingHealth, maximumHealth) => (remainingHealth / maximumHealth) * 100