import Character from './Character';

export default class Magic extends Character {
  constructor(name, type = 'Magic', attack = 10, defence = 40) {
    super(name, type, attack, defence);
  }
}
