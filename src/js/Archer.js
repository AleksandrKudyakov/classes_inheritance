import Character from './Character';

export default class Archer extends Character {
  constructor(name, type = 'Archer', attack = 25, defence = 25) {
    super(name, type, attack, defence);
  }
}
