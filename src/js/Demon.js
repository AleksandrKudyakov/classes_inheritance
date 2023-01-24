import Character from './Character';

export default class Demon extends Character {
  constructor(name, type = 'Demon', attack = 10, defence = 40) {
    super(name, type, attack, defence);
  }
}
