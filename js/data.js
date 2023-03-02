const characterData = {
  hero: {
    name: 'Wizard',
    avatar: 'images/wizard.png',
    health: 60,
    maxHealth: 60,
    diceCount: 3,
    diceRoll: [3, 1, 4],
    currentDiceScore: [],
  },
  orc: {
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceCount: 1,
    currentDiceScore: []
  },
  demon: {
    name: "Demon",
    avatar: "images/demon.png",
    health: 25,
    diceCount: 2,
    currentDiceScore: []
  },
  goblin: {
    name: "Goblin",
    avatar: "images/goblin.png",
    health: 20,
    diceCount: 3,
    currentDiceScore: []
  }
}

export default characterData